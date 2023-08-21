'use client';
import React, { useState } from 'react';
import Img from 'next/image';
import { ListCampaign } from '@/constants';

function DetailCampaign() {
	const campaignID = () => {
		return ListCampaign.find((u) => u.id == 1);
	};
	return (
		<div className="w-full h-[100vh] bg-[#e8edee] justify-center items-center flex">
			<div
				id="payment"
				className=" bg-white rounded-lg w-[550px] h-[600px] flex flex-col gap-5 justify-center items-center">
				<p className=" text-center font-semibold">You're donating to</p>
				<Img src="/Logo_Image.png" alt="" width={100} height={100} />
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
				<button className=" w-[50%] h-[15%] rounded-xl bg-[#6A55EA] text-white">
					Connect your Wallet
				</button>
				<button className=" w-[50%] h-[15%] rounded-xl bg-[#6A55EA] text-white hidden">
					Donate
				</button>
			</div>
		</div>
	);
}

export default DetailCampaign;
