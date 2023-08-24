'use client';
import { MESSAGE, gasPrice } from '@/constants';
import { ethers } from 'ethers';
import Img from 'next/image';
import Router, { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import Web3 from 'web3';
import Layout from '../../../components/Layout';
import configs from '../../../configs';
import { RootState } from '../../../redux/reducers/index';
import * as types from '../../../redux/types';
import { convertWeiBigNumberToNumber, numberToGweiHex } from '../../../utils/web3js';

function Vote() {
	const dispatch = useDispatch();
	const { isLoading } = useSelector((state: RootState) => state.orderReducers);
	const { address } = useSelector((state: RootState) => state.userReducers);
	const userReducers = useSelector((state: RootState) => state.userReducers);
	const [isApproved, setApproved] = useState(false);
	const [name, setName] = useState('-');
	const router = useRouter();
	const { id } = router.query;

	useEffect(() => {
		getInfoCampaign(id);
	}, []);

	const getInfoCampaign = async (id: string | string[] | undefined) => {
		const web3 = new Web3(configs.linkRPC);
		const { crowdfunding } = configs.contracts;

		const crowdfundingContract = new web3.eth.Contract(crowdfunding.abi, crowdfunding.address);

		try {
			let data = await crowdfundingContract.methods.getCampaignDetails(id).call();

			const { name } = data;

			setName(name);
		} catch (error) {
			console.log(error);
		}
	};

	const handleCheckContribution = async () => {
		const web3 = new Web3(configs.linkRPC);
		const { crowdfunding } = configs.contracts;

		const crowdfundingContract = new web3.eth.Contract(crowdfunding.abi, crowdfunding.address);

		try {
			let data = await crowdfundingContract.methods.userContributions(address, id).call();

			data = convertWeiBigNumberToNumber(data);
			return data;
		} catch (error) {
			console.log(error);
		}
	};

	const checkUserVote = async () => {
		const web3 = new Web3(configs.linkRPC);
		const { crowdfunding } = configs.contracts;

		const crowdfundingContract = new web3.eth.Contract(crowdfunding.abi, crowdfunding.address);

		try {
			let data = await crowdfundingContract.methods.isUserVoted(address, id).call();

			return data;
		} catch (error) {
			console.log(error);
		}
	};

	const handleVote = async () => {
		if (address === '' || address === null) {
			toast.error(MESSAGE.pleaseConnectWallet);
			return;
		}

		const amount = await handleCheckContribution();

		if (amount === 0) {
			toast.error(MESSAGE.pleaseContribution);
			return;
		}

		const isVote = await checkUserVote();

		if (isVote) {
			toast.error(MESSAGE.voted);
			return;
		}

		const { crowdfunding } = configs.contracts;

		if (isLoading) {
			return;
		}

		const ABI = ['function vote(uint256,bool)'];

		const iface = new ethers.utils.Interface(ABI);
		const data = iface.encodeFunctionData('vote', [id, isApproved]);

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
							toast.success(MESSAGE.voteSuccess);
							setTimeout(() => {
								Router.push(`/campaign/${id}`);
							}, 3000);
						}
					}
				}, 3000);
			})
			.catch((error: Error) => {
				dispatch({ type: types.orderTypes.UPDATE_DATA_ORDER, data: { isLoading: false } });
				console.log('error contribute', error);
			});
	};

	const handleClick = () =>{
			if(isApproved == true){
				setApproved(false);
			} else {
				setApproved(true);
			}
	}
	
	const backClick = () =>{
		window.location.href =`/campaign/${id}`
	}

	return (
		<Layout>
			<div className=" w-full h-[100vh] bg-[#FDF9F0] justify-center items-center relative flex flex-col">
				<div className=' absolute left-10 top-10 cursor-pointer hover:transition-transform hover:-translate-x-2' onClick={()=>backClick()}>
					<Img
						src={"/images/arrow-back.svg"}
						alt=''
						width={30}
						height={30}
					/>
				</div>
				<div className=" w-[30%] h-[50%] rounded-xl flex flex-col gap-8 bg-gradient-to-tr from-[#4655C8] to-[#FCC574] items-center justify-center z-50 border-2 border-gray-500">
					<div className=" flex flex-col justify-center items-center">
						<p className=" font-base">You trust </p>
						<p className=" text-xl font-semibold text-center">
							{name} and allow Creator to get fund?
						</p>
					</div>
					<div className="w-[100%] justify-center items-center flex">
						<div className=" justify-between flex items-center mt-10 mb-3">
							<label
								onClick={() => handleClick()}
								className={` ${
									isApproved ? 'bg-[#414181]' : 'bg-white'
								} cursor-pointer flex gap-1 rounded-[15px] border-2 border-gray-400 px-3 items-center justify-center `}>
								<span className={'radio ' + (isApproved ? 'checked' : '')}></span>
								<span className=" text-lg text-green-400">Approve</span>
							</label>
							{/* <label
								onClick={() => setApproved(false)}
								className={` ${
									!isApproved ? 'bg-[#414181]' : 'bg-white'
								} cursor-pointer flex gap-1 rounded-[15px] px-4 items-center justify-center `}>
								<span className={'radio ' + (!isApproved ? 'checked' : '')}></span>
								<span className="text-lg text-pink-400">Reject</span>
							</label> */}
						</div>
					</div>
					<div className=" flex gap-2 bg-green-700 rounded-xl w-[180px] h-[50px] justify-center items-center">
						<span className="relative flex h-3 w-3">
							<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
							<span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
						</span>
						<button onClick={() => handleVote()} type="submit" className=" font-medium">
							Confirm your Vote
						</button>
					</div>
				</div>
				<div className=" absolute bottom-0 left-0">
					<Img src={'/images/cetsery_com.gif'} alt="" width={500} height={200} />
				</div>
			</div>
		</Layout>
	);
}

Vote.getInitialProps = async ({ query }: any) => {
	const { id } = query;

	return { id };
};

export default Vote;
