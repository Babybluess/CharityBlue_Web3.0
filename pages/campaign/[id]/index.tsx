'use client';
import { MESSAGE, gasPrice } from '@/constants';
import { customNumber } from '@/utils/common';
import Cleave from 'cleave.js/react';
import { ethers } from 'ethers';
import moment from 'moment';
import Img from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { isMobile } from 'react-device-detect';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import Web3 from 'web3';
import Layout from '../../../components/Layout';
import configs from '../../../configs';
import { getBalanceETH } from '../../../hooks/index';
import { RootState } from '../../../redux/reducers/index';
import * as types from '../../../redux/types';
import {
	convertNumberToWei,
	convertWeiBigNumberToNumber,
	numberToGweiHex
} from '../../../utils/web3js';

interface ChangeEvent<T> extends React.ChangeEvent<T> {
	target: { rawValue: string } & EventTarget & T;
}

function DetailCampaign() {
	const dispatch = useDispatch();
	const { address } = useSelector((state: RootState) => state.userReducers);
	const { isLoading } = useSelector((state: RootState) => state.orderReducers);
	const userReducers = useSelector((state: RootState) => state.userReducers);
	const [amount, setAmount] = useState({ value: '', error: false });
	const [balance, setBalance] = useState(0);
	const [name, setName] = useState('-');
	const [vote, setVote] = useState(0);
	const [goal, setGoal] = useState(0);
	const [deadline, setDeadline] = useState(0);
	const [totalContributions, setTotalContributions] = useState(0);
	const [isCompleted, setIsCompleted] = useState(false);
	const router = useRouter();
	const { id } = router.query;

	useEffect(() => {
		if (address) {
			getBalanceUser(address);
		}
	}, [address]);

	useEffect(() => {
		getInfoCampaign(id);
	}, []);

	const getInfoCampaign = async (id: string | string[] | undefined) => {
		const web3 = new Web3(configs.linkRPC);
		const { crowdfunding } = configs.contracts;

		const crowdfundingContract = new web3.eth.Contract(crowdfunding.abi, crowdfunding.address);

		try {
			let data = await crowdfundingContract.methods.getCampaignDetails(id).call();

			const { name, deadline, isCompleted } = data;
			const totalVotesApprove = convertWeiBigNumberToNumber(data.totalVotesApprove);
			const goalTarget = convertWeiBigNumberToNumber(data.goal);
			const total = convertWeiBigNumberToNumber(data.totalContributions);
			const vote = totalVotesApprove === 0 ? 0 : (totalVotesApprove / total) * 100;

			setName(name);
			setVote(vote);
			setDeadline(deadline);
			setGoal(goalTarget);
			setIsCompleted(isCompleted);
			setTotalContributions(total);
		} catch (error) {
			console.log(error);
		}
	};

	const getBalanceUser = async (address: string) => {
		const balanceUser: number = await getBalanceETH(address);

		setBalance(balanceUser);
	};

	const handleConnectWallet = () => {
		const binanceChain = window && window.ethereum ? window.ethereum : undefined;

		dispatch({ type: types.orderTypes.UPDATE_DATA_ORDER, data: { isLoading: true } });

		if (binanceChain !== undefined) {
			binanceChain.autoRefreshOnNetworkChange = false;
			binanceChain.isConnected();

			try {
				binanceChain
					.request({ method: 'eth_requestAccounts', params: [] })
					.then(async (accounts: Array<string>) => {
						if (accounts.length === 0) {
							console.log('Please connect to Binance Smart Chain!');
						} else {
							const addressUser = accounts[0];

							binanceChain.on('accountsChanged', () => {
								localStorage.removeItem('address');
								window.location.reload();
							});

							let chainId = 1;

							if (isMobile) {
								chainId = binanceChain.chainId;
							} else {
								await binanceChain
									.request({ method: 'eth_chainId', params: [] })
									.then(async (response: number) => {
										chainId = response;
									})
									.catch((err: Error) => {
										console.error(err);
									});
							}

							const isBinanceChain = configs.chainId.includes(chainId);

							if (isBinanceChain) {
								localStorage.setItem('address', addressUser);
								toast.success(MESSAGE.connectWallet);

								dispatch({
									type: types.userTypes.UPDATE_DATA_USER,
									data: {
										address: addressUser
									}
								});

								dispatch({
									type: types.orderTypes.UPDATE_DATA_ORDER,
									data: { isLoading: false }
								});
							} else {
								try {
									binanceChain
										.request({
											method: 'wallet_switchEthereumChain',
											params: [{ chainId: configs.chainId[0] }]
										})
										.then(async () => {
											localStorage.setItem('address', addressUser);
											toast.success(MESSAGE.connectWallet);

											dispatch({
												type: types.userTypes.UPDATE_DATA_USER,
												data: {
													address: addressUser
												}
											});

											dispatch({
												type: types.orderTypes.UPDATE_DATA_ORDER,
												data: { isLoading: false }
											});
										})
										.catch((err: Error) => {
											handleAddNetwork(binanceChain, addressUser);
											console.error(err);
										});
								} catch (error) {
									console.log({ error });
									dispatch({
										type: types.orderTypes.UPDATE_DATA_ORDER,
										data: { isLoading: false }
									});
								}
							}

							dispatch({
								type: types.userTypes.UPDATE_DATA_USER,
								data: {
									chainId,
									binanceChain,
									isBinanceChain: isBinanceChain
								}
							});
						}
					})
					.catch((err: Error) => {
						console.error(err);
						dispatch({
							type: types.orderTypes.UPDATE_DATA_ORDER,
							data: { isLoading: false }
						});
					});
			} catch (error) {
				console.error('err ethereum', error);
				dispatch({
					type: types.userTypes.UPDATE_DATA_USER,
					data: {
						binanceChain: 1,
						isBinanceChain: false
					}
				});

				dispatch({
					type: types.modalTypes.UPDATE_DATA_MODAL,
					data: {
						isPopupDetect: true
					}
				});
				dispatch({ type: types.orderTypes.UPDATE_DATA_ORDER, data: { isLoading: false } });
			}
		} else {
			console.log('error');
			toast.error(MESSAGE.errorExtension);
			dispatch({
				type: types.userTypes.UPDATE_DATA_USER,
				data: {
					binanceChain: 1,
					isBinanceChain: false
				}
			});

			dispatch({
				type: types.modalTypes.UPDATE_DATA_MODAL,
				data: {
					isPopupDetect: true
				}
			});
			dispatch({ type: types.orderTypes.UPDATE_DATA_ORDER, data: { isLoading: false } });
		}
	};

	const handleAddNetwork = (binanceChain: any, addressUser: string) => {
		try {
			binanceChain
				.request({
					method: 'wallet_addEthereumChain',
					params: [
						{
							chainId: configs.chainId[0],
							chainName: configs.nameChain,
							rpcUrls: [configs.linkRPC],
							iconUrls: [],
							nativeCurrency: {
								name: configs.symbol,
								symbol: configs.symbol,
								decimals: 18
							},
							blockExplorerUrls: [configs.linkBscScan]
						}
					]
				})
				.then(async () => {
					dispatch({
						type: types.orderTypes.UPDATE_DATA_ORDER,
						data: { isLoading: false }
					});
					dispatch({
						type: types.userTypes.UPDATE_DATA_USER,
						data: {
							address: addressUser
						}
					});
					toast.success(MESSAGE.connectWallet);
				})
				.catch((err: Error) => {
					toast.error(err.message);
					console.error(err);
					dispatch({
						type: types.orderTypes.UPDATE_DATA_ORDER,
						data: { isLoading: false }
					});
				});
		} catch (error) {
			console.log({ error });
			dispatch({ type: types.orderTypes.UPDATE_DATA_ORDER, data: { isLoading: false } });
		}
	};

	const validSubmit = () => {
		let isValid = true;

		if (Number(amount.value) <= 0) {
			isValid = false;
			setAmount({
				...amount,
				error: true
			});
		} else {
			const max = balance - 0.05;
			if (Number(amount.value) > max) {
				isValid = false;
				setAmount({
					...amount,
					error: true
				});
				toast.error(`Maximum amount is ${customNumber(max, 4)} ETH!`);
			}
		}

		return isValid;
	};

	const handleDonate = () => {
		const { crowdfunding } = configs.contracts;

		if (isCompleted) {
			toast.error('Completed!');
			return;
		}

		if (!validSubmit()) {
			return;
		}

		if (isLoading) {
			return;
		}

		const web3 = new Web3(configs.linkRPC);
		const value = web3.utils.numberToHex(convertNumberToWei(Number(amount.value)));

		const ABI = ['function contribute(uint256)'];

		const iface = new ethers.utils.Interface(ABI);
		const data = iface.encodeFunctionData('contribute', [id]);

		dispatch({ type: types.orderTypes.UPDATE_DATA_ORDER, data: { isLoading: true } });

		userReducers.binanceChain
			.request({
				method: 'eth_sendTransaction',
				params: [
					{
						from: address,
						to: crowdfunding.address,
						data,
						gasPrice: numberToGweiHex(gasPrice),
						value
					}
				]
			})
			.then((transactionHash: string) => {
				const web3 = new Web3(configs.linkRPC);
				let status: any = null;

				let timerId = setInterval(async () => {
					await web3.eth.getTransactionReceipt(transactionHash).then((e) => {
						if (e) {
							status = e.status;
						}
					});

					if (status !== null) {
						clearInterval(timerId);
						dispatch({
							type: types.orderTypes.UPDATE_DATA_ORDER,
							data: { isLoading: false }
						});
						if (status === false) {
							toast.error(MESSAGE.networkError);
						} else {
							getInfoCampaign(id);
							toast.success(MESSAGE.contributionSuccess);
						}
					}
				}, 3000);
			})
			.catch((error: Error) => {
				dispatch({ type: types.orderTypes.UPDATE_DATA_ORDER, data: { isLoading: false } });
				console.log('error contribute', error);
			});
	};

	const renderButton = () => {
		if (address) {
			return (
				<button
					className=" w-[50%] h-[10%] rounded-xl bg-[#157534] text-white"
					onClick={handleDonate}>
					Donate
				</button>
			);
		}

		return (
			<button
				className=" w-[50%] h-[10%] rounded-xl bg-[#6A55EA] text-white"
				onClick={handleConnectWallet}>
				Connect your Wallet
			</button>
		);
	};

	const handleChangeAmount = (e: ChangeEvent<HTMLInputElement>) => {
		const value = e.target.rawValue;
		setAmount({ value: value, error: false });
	};

	const backClick = () =>{
		window.location.href ='/'
	}

	return (
		<Layout>
			<div className="w-full h-[100vh] bg-[#FFFBFF] relative justify-center items-center flex">
				<div className=' absolute left-10 top-10 cursor-pointer hover:transition-transform hover:-translate-x-2' onClick={()=>backClick()}>
					<Img
						src={"/images/arrow-back.svg"}
						alt=''
						width={30}
						height={30}
					/>
				</div>
				<div
					id="payment"
					className=" bg-white rounded-lg w-[550px] h-[600px] flex flex-col gap-3 relative justify-center border-2 border-gray-400 z-50 items-center">
					<p className=" text-center font-semibold ">You're donating to</p>
					<div className=" absolute top-5 right-5 w-[50px] h-[32px] rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 text-white flex justify-center items-center font-semibold">
						<Link href={`/vote/${id}`}>Vote</Link>
					</div>
					<Img src="/images/Logo_Image.png" alt="" width={100} height={100} />
					<p className="text-5xl font-bold text-[#9CC5A0] mb-5">Charity Blue</p>
					<div className=" w-[85%] justify-start items-start flex flex-col gap-3 pb-5">
						<div className="flex justify-between">
							<div className="flex gap-1 items-center">
								<label className="font-bold text-xl">Name:</label>
								<p className=" text-xl">{name}</p>
							</div>
						</div>
						<div className="flex justify-between">
							<div className="flex gap-1 items-center">
								<label className="font-bold text-xl">Total Contributions:</label>
								<p className=" text-xl">
									{customNumber(totalContributions, 4)} ETH
								</p>
							</div>
						</div>
						<div className="flex justify-between w-[100%]">
							<div className="flex justify-between">
								<div className="flex gap-1 items-center">
									<label className="font-bold text-xl">Deadline:</label>
									<p className=" text-xl">
										{deadline === 0
											? '-'
											: moment(deadline * 1005).format('DD/MM/YYYY')}
									</p>
								</div>
							</div>
							<div className="flex justify-between">
								<div className="flex gap-1 items-center">
									<label className="font-bold text-xl">Your Balance:</label>
									<p className=" text-xl">{customNumber(balance)} ETH</p>
								</div>
							</div>
						</div>
						<div className=" flex justify-between w-[100%]">
							<div className="flex justify-between">
								<div className="flex gap-1 items-center">
									<label className="font-bold text-xl">Goal:</label>
									<p className=" text-xl">{goal} ETH</p>
								</div>
							</div>
							<div className="flex justify-between">
								<div className="flex gap-2 items-center">
									<label className="font-bold text-xl">Vote:</label>
									<p className=" text-xl">{customNumber(vote)}%</p>
								</div>
							</div>
						</div>
					</div>
					<div className="h-[10%] w-[85%] flex border-2 rounded-lg mb-2">
						<Cleave
							options={{
								numeral: true,
								numeralPositiveOnly: true,
								numeralDecimalScale: 4
							}}
							type="tel"
							className={
								'rounded-lg required font-semibold px-5 w-full ' +
								(amount.error ? 'has-error' : '')
							}
							placeholder="Enter the amount"
							value={amount.value}
							onChange={handleChangeAmount}
						/>
					</div>
					{renderButton()}
				</div>
				<div className=" absolute bottom-0 left-0">
					<Img src={'/images/jiji cat gif.gif'} alt="" width={500} height={200} />
				</div>
			</div>
		</Layout>
	);
}

DetailCampaign.getInitialProps = async ({ query }: any) => {
	const { id } = query;

	return { id };
};

export default DetailCampaign;
