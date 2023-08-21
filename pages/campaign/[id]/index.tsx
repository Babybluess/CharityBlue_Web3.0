'use client';
import { ListCampaign, MESSAGE, gasPrice } from '@/constants';
import { ethers } from 'ethers';
import Img from 'next/image';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { isMobile } from 'react-device-detect';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import Web3 from 'web3';
import Layout from '../../../components/Layout';
import configs from '../../../configs';
import { RootState } from '../../../redux/reducers/index';
import * as types from '../../../redux/types';
import { numberToGweiHex } from '../../../utils/web3js';

function DetailCampaign() {
	const dispatch = useDispatch();
	const { address } = useSelector((state: RootState) => state.userReducers);
	const { isLoading } = useSelector((state: RootState) => state.orderReducers);
	const userReducers = useSelector((state: RootState) => state.userReducers);
	const router = useRouter();
	const { id } = router.query;

	useEffect(() => {
		console.log({ id });
	}, []);

	const campaignID = () => {
		return ListCampaign.find((u) => u.id == 1);
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

	const handleDonate = () => {
		const { crowdfunding } = configs.contracts;

		const ABI = ['function contribute(uint256,uint256)'];

		const iface = new ethers.utils.Interface(ABI);
		const data = iface.encodeFunctionData('contribute', [1, 1]);

		if (isLoading) {
			return;
		}

		dispatch({ type: types.orderTypes.UPDATE_DATA_ORDER, data: { isLoading: true } });

		userReducers.binanceChain
			.request({
				method: 'eth_sendTransaction',
				params: [
					{
						from: address,
						to: crowdfunding.address,
						data,
						gasPrice: numberToGweiHex(gasPrice)
					}
				]
			})
			.then((transactionHash: string) => {
				const web3 = new Web3(configs.linkRPC);
				let status: any = null;

				let timerId = setInterval(async () => {
					await web3.eth.getTransactionReceipt(transactionHash).then((e) => {
						if (e) {
							console.log(e);
							status = e.status;
						}
					});

					if (status !== null) {
						clearInterval(timerId);
						if (status === false) {
							toast.error(MESSAGE.networkError);
							dispatch({
								type: types.orderTypes.UPDATE_DATA_ORDER,
								data: { isLoading: false }
							});
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
					className=" w-[50%] h-[15%] rounded-xl bg-[#157534] text-white"
					onClick={handleDonate}>
					Donate
				</button>
			);
		}

		return (
			<button
				className=" w-[50%] h-[15%] rounded-xl bg-[#6A55EA] text-white"
				onClick={handleConnectWallet}>
				Connect your Wallet
			</button>
		);
	};

	return (
		<Layout>
			<div className="w-full h-[100vh] bg-[#e8edee] justify-center items-center flex">
				<div
					id="payment"
					className=" bg-white rounded-lg w-[550px] h-[600px] flex flex-col gap-5 justify-center items-center">
					<p className=" text-center font-semibold">You're donating to</p>
					<Img src="/images/Logo_Image.png" alt="" width={100} height={100} />
					<p className="text-5xl font-bold text-[#9CC5A0]">Charity Blue</p>
					<div className=" justify-start flex flex-col gap-3">
						<div>
							<label className="font-semibold text-xl">Name</label>
							<p className="">{campaignID()?.name}</p>
						</div>
						<div className="flex justify-between">
							<div className="flex gap-1 items-center">
								<label className="font-semibold text-xl">Goal:</label>
								<p className="">{campaignID()?.goal}</p>
							</div>
							<div className="flex gap-1 items-center">
								<label className="font-semibold text-xl">Deadline:</label>
								<p className="">{campaignID()?.deadline}</p>
							</div>
						</div>
						<div className="flex justify-between">
							<div className="flex gap-1 items-center">
								<label className="font-semibold text-xl">Vote:</label>
								<p>50%</p>
							</div>
							<div className="flex gap-1 items-center">
								<label className="font-semibold text-xl">Your Balance:</label>
								<p>100 ETH</p>
							</div>
						</div>
					</div>
					<div className=" h-[10%] w-[70%] flex border-2 rounded-lg">
						<input
							className=" rounded-lg required font-bold px-5 w-full"
							type="number"
							placeholder="Donate"
							min="0"
						/>
					</div>
					{renderButton()}
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
