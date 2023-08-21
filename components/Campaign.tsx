'use client';
import React, { useState } from 'react';
import Img from 'next/image';
import Link from 'next/link';

function Campaign() {
	return (
		<div className=" w-[95vw] h-[100%] relative" id="campaign">
			<div className=" bg-[#FEFAF6] w-[100%] h-[100%] opacity-90"></div>
			<div className=" w-[84%] justify-center items-center flex flex-col gap-4 absolute top-[5%] left-[8%]">
				<p className=" text-5xl font-bold justify-items-start w-[100%]">
					Introduce Our Campaign
				</p>
				<div className=" justify-between flex w-[100%]">
					<p className="text-base text-gray-500">How do something great to help others</p>
					{/* <div className="flex gap-2">
						<p className=" text-lg text-[#0A7558] font-semibold">
							<a href="./CreateCampaign">Create Campaign</a>
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
			<div className=" w-[90%] grid grid-cols-3 absolute top-[25%] left-[5%] justify-items-center">
				<div className=" w-[350px] h-[550px] bg-[#F9FAFA] rounded-xl flex flex-col gap-3">
					<Img
						src="/emergency.avif"
						alt=""
						width={400}
						height={240}
						style={{ borderRadius: '10px', objectFit: 'contain' }}
					/>
					<div className=" w-[95%] flex flex-col mx-[2.5%] gap-4">
						<div className=" flex gap-2">
							<div className=" w-[35%] h-8 rounded-3xl bg-[#DFDCFA] justify-center items-center flex">
								<p className=" text-xs text-[#664df9] font-semibold">
									SOCIAL SERVICE
								</p>
							</div>
							<div className=" cursor-pointer w-[15%] h-8 rounded-3xl bg-[#DFDCFA] justify-center items-center flex">
								<p className=" text-xs text-[#36bc98] font-semibold">VOTE</p>
							</div>
						</div>
						<div className=" flex flex-col gap-4">
							<p className=" text-2xl font-bold">
								Help Donate For Cianjur Earthquake Victims
							</p>
							<p className=" text-sm text-gray-500">
								Help Donate for Cianjur Earthquake Victims by providing food,
								clothes, medicines, for their daily needs
							</p>
						</div>
						<div className=" flex gap-2">
							<div className=" w-[90%] h-[14px] rounded-r-full rounded-l-full bg-[#EDEDED] flex flex-row">
								<div className=" w-[50%] bg-[#EE9B3C] rounded-r-full rounded-l-full"></div>
							</div>
							<span className=" text-xs">50%</span>
						</div>
						<div className=" w-[100%] flex justify-between text-sm">
							<p className=" text-gray-500">
								Raised: <span className=" text-[#EE9B3C]">$1250</span>
							</p>
							<p className=" text-gray-500">
								Goal: <span className="text-[#0A7558]">$2500</span>
							</p>
						</div>
						<div className=" w-[100%] flex justify-between text-sm">
							<p className=" text-gray-500">
								Current Fund: <span className=" text-[#EE9B3C]">$1000</span>
							</p>
							<p className=" text-gray-500">
								Deadline: <span className="text-[#0A7558]">27/08/2023</span>
							</p>
						</div>
						<div className=" text-white w-[100%] h-12 bg-[#0A7558] rounded-2xl mt-3 justify-center items-center flex">
							<Link href="/campaign/1">Detail</Link>
						</div>
					</div>
				</div>
				<div className=" w-[350px] h-[550px] bg-[#F9FAFA] rounded-xl flex flex-col gap-3">
					<Img
						src="/educationCampaign.jpg"
						alt=""
						width={500}
						height={265}
						style={{ borderRadius: '10px', objectFit: 'contain' }}
					/>
					<div className=" w-[95%] flex flex-col mx-[2.5%] gap-4">
						<div className=" flex gap-2">
							<div className=" w-[35%] h-8 rounded-3xl bg-[#F9DCE6] justify-center items-center flex">
								<p className=" text-xs text-[#F96E9E] font-semibold">EDUCATION</p>
							</div>
							<div className=" cursor-pointer w-[15%] h-8 rounded-3xl bg-[#DFDCFA] justify-center items-center flex">
								<p className=" text-xs text-[#36bc98] font-semibold">VOTE</p>
							</div>
						</div>
						<div className=" flex flex-col gap-4">
							<p className=" text-2xl font-bold">
								Campaign To Provide Books For Children
							</p>
							<p className=" text-sm text-gray-500">
								Campaign to provide quality books for children who are in need of
								proper education for their development
							</p>
						</div>
						<div className=" flex gap-2">
							<div className=" w-[90%] h-[14px] rounded-r-full rounded-l-full bg-[#EDEDED] flex flex-row">
								<div className=" w-[70%] bg-[#EE9B3C] rounded-r-full rounded-l-full"></div>
							</div>
							<span className=" text-xs">70%</span>
						</div>
						<div className=" w-[100%] flex justify-between text-sm">
							<p className=" text-gray-500">
								Raised: <span className=" text-[#EE9B3C]">$2450</span>
							</p>
							<p className=" text-gray-500">
								Goal: <span className="text-[#0A7558]">$3500</span>
							</p>
						</div>
						<div className=" w-[100%] flex justify-between text-sm">
							<p className=" text-gray-500">
								Current Fund: <span className=" text-[#EE9B3C]">$1000</span>
							</p>
							<p className=" text-gray-500">
								Deadline: <span className="text-[#0A7558]">25/09/2023</span>
							</p>
						</div>
						<div className=" text-white w-[100%] h-12 bg-[#0A7558] rounded-2xl mt-3 justify-center items-center flex">
							<Link href="/campaign/2">Detail</Link>
						</div>
					</div>
				</div>
				<div className=" w-[350px] h-[550px] bg-[#F9FAFA] rounded-xl flex flex-col gap-3">
					<Img
						src="/cancer.avif"
						alt=""
						width={500}
						height={265}
						style={{ borderRadius: '10px', objectFit: 'contain' }}
					/>
					<div className=" w-[95%] flex flex-col mx-[2.5%] gap-4">
						<div className="flex gap-2">
							<div className=" w-[35%] h-8 rounded-3xl bg-[#CEE3DE] justify-center items-center flex">
								<p className=" text-xs text-[#228267] font-semibold">
									MEDICAL HELP
								</p>
							</div>
							<div className=" cursor-pointer w-[15%] h-8 rounded-3xl bg-[#DFDCFA] justify-center items-center flex">
								<p className=" text-xs text-[#36bc98] font-semibold">VOTE</p>
							</div>
						</div>
						<div className=" flex flex-col gap-4">
							<p className=" text-2xl font-bold">Help Children Cancer Fighters</p>
							<p className=" text-sm text-gray-500">
								Help the Children of Cancer Warriors to meet their needs for care
								and treatment as well as possible to achieve recovery
							</p>
						</div>
						<div className=" flex gap-2">
							<div className=" w-[90%] h-[14px] rounded-r-full rounded-l-full bg-[#EDEDED] flex flex-row">
								<div className=" w-[90%] bg-[#EE9B3C] rounded-r-full rounded-l-full"></div>
							</div>
							<span className=" text-xs">90%</span>
						</div>
						<div className=" w-[100%] flex justify-between text-sm">
							<p className=" text-gray-500">
								Raised: <span className=" text-[#EE9B3C]">$4050</span>
							</p>
							<p className=" text-gray-500">
								Goal: <span className="text-[#0A7558]">$4500</span>
							</p>
						</div>
						<div className=" w-[100%] flex justify-between text-sm">
							<p className=" text-gray-500">
								Current Fund: <span className=" text-[#EE9B3C]">$1000</span>
							</p>
							<p className=" text-gray-500">
								Deadline: <span className="text-[#0A7558]">09/12/2023</span>
							</p>
						</div>
						<div className=" text-white w-[100%] h-12 bg-[#0A7558] rounded-2xl mt-3 justify-center items-center flex">
							<Link href="/campaign/3">Detail</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Campaign;
