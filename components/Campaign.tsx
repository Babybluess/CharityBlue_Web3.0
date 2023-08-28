'use client';
import { listCampaign } from '@/constants';
import { customNumber } from '@/utils/common';
import moment from 'moment';
import Img from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import Web3 from 'web3';
import configs from '../configs';
import { convertWeiBigNumberToNumber } from '../utils/web3js';

function Campaign() {
	const [dataCampaign, setDataCampaign] = useState<any[]>([]);

	useEffect(() => {
		getDataCampaign();
	}, []);

	const getDataCampaign = async () => {
		const data: Array<any> = [];

		for (let index = 0; index < listCampaign.length; index++) {
			const result = await getInfoCampaign(listCampaign[index].id);

			data.push({
				...listCampaign[index],
				...result
			});
		}

		setDataCampaign(data);
	};

	const getInfoCampaign = async (id: string | string[] | number) => {
		const web3 = new Web3(configs.linkRPC);
		const { crowdfunding } = configs.contracts;

		const crowdfundingContract = new web3.eth.Contract(crowdfunding.abi, crowdfunding.address);

		try {
			let data = await crowdfundingContract.methods.getCampaignDetails(id).call();

			const { name, deadline } = data;
			const totalVotesApprove = convertWeiBigNumberToNumber(data.totalVotesApprove);
			const goal = convertWeiBigNumberToNumber(data.goal);
			const total = convertWeiBigNumberToNumber(data.totalContributions);
			const vote = totalVotesApprove === 0 ? 0 : (totalVotesApprove / total) * 100;
			console.log(totalVotesApprove, total, vote)

			return {
				name,
				vote,
				goal,
				total,
				deadline
			};
		} catch (error) {
			console.log(error);
		}
	};

	const renderItem = () => {
		return dataCampaign.map((item) => (
			<div
				className=" w-[350px] h-[550px] bg-[#F9FAFA] rounded-xl flex flex-col gap-3 "
				key={item.id}>
				<Img
					src={item.avatar}
					alt=""
					width={400}
					height={240}
					style={{ borderRadius: '10px', objectFit: 'contain' }}
				/>
				<div className="w-[95%] flex flex-col mx-[2.5%] gap-4">
					<div className=" flex gap-2">
						<div
							className={` w-[35%] h-8 rounded-3xl justify-center items-center flex`}  style={{ background: `${ item.bg }` }}>
							<p className={`text-xs font-semibold`}  style={{ color: `${ item.text }` }}>
								{item.type}
							</p>
						</div>
						<div className="cursor-pointer w-[15%] h-8 rounded-3xl bg-[#DFDCFA] justify-center items-center flex">
							<p className="text-xs text-[#36bc98] font-semibold">VOTE</p>
						</div>
					</div>
					<div className=" flex flex-col gap-4">
						<p className=" text-2xl font-bold min-h-64">{item.name}</p>
						<p className=" text-sm text-gray-500">{item.description}</p>
					</div>
					<div className=" flex gap-2">
						<div className=" w-[90%] h-[14px] rounded-r-full rounded-l-full bg-[#EDEDED] flex flex-row">
							<div
								className={` bg-[#EE9B3C] rounded-r-full rounded-l-full`}  style={{ width: `${
									customNumber(item.vote)
								}%` }}></div>
						</div>
						<span className=" text-xs">{customNumber(item.vote)}%</span>
					</div>
					<div className=" w-[100%] flex justify-between text-sm">
						<p className=" text-gray-500">
							Location: <span className=" text-[#EE9B3C]">{item.location}</span>
						</p>
						<p className=" text-gray-500">
							Goal: <span className="text-[#0A7558]">{item.goal} ETH</span>
						</p>
					</div>
					<div className=" w-[100%] flex justify-between text-sm">
						<p className=" text-gray-500">
							Raised: <span className=" text-[#EE9B3C]">{item.total} ETH</span>
						</p>
						<p className=" text-gray-500">
							Deadline:{' '}
							<span className="text-[#0A7558]">
								{item.deadline === 0
									? '-'
									: moment(item.deadline * 1000).format('DD/MM/YYYY')}
							</span>
						</p>
					</div>
					<Link
						href={`/campaign/${item.id}`}
						className=" text-white w-[100%] h-12 bg-[#0A7558] rounded-2xl mt-3 justify-center items-center flex">
						Detail
					</Link>
				</div>
			</div>
		));
	};

	return (
		<div className=" w-[95vw] h-[100%] relative" id="campaign">
			<div className=" bg-[#FEFAF6] w-[100%] h-[100%] opacity-90"></div>
			<div className=" w-[84%] justify-center items-center flex flex-col gap-4 absolute top-[5%] left-[8%]">
				<p className=" text-5xl font-bold justify-items-start w-[100%] max-md:text-4xl">
					Introduce Our Campaign
				</p>
				<div className=" justify-between flex w-[100%]">
					<p className="text-base text-gray-500">How do something great to help others</p>
					{/* <div className="flex gap-2">
						<p className=" text-lg text-[#0A7558] font-semibold">
							<a href="/campaign/create">Create Campaign</a>
						</p>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth="3.0"
							stroke="currentColor"
							className="w-[18px] h-[18px] text-[#0A7558] translate-y-[30%]">
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
							/>
						</svg>
					</div> */}
				</div>
			</div>
			<div className=" w-[90%] grid grid-cols-3 max-lg:flex max-lg:flex-col max-md:justify-center max-md: items-center max-lg:gap-20 max-lg:-translate-y-[15%] max-md:-translate-y-[18%] absolute top-[25%] left-[5%] justify-items-center">
				{renderItem()}
			</div>
		</div>
	);
}

export default Campaign;
