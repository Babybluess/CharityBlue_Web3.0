import React from 'react';
import Img from 'next/image';

function Categories() {
	return (
		<div
			id="categories"
			className=" w-[95vw] h-[100%] justify-center items-center bg-[#ffff] flex flex-col gap-20">
			<div className=" w-[50%] justify-center text-center flex flex-col gap-5">
				<p className="text-lg text-[#F2B065] font-bold max-lg:text-base">CATEGORIES</p>
				<p className=" text-5xl font-bold max-lg:text-4xl">Program to Empower Others</p>
			</div>
			<div className=" w-[90%] h-auto grid grid-cols-4 gap-5 px-20">
				<div className=" h-[350px] justify-center items-center flex flex-col gap-2 hover:shadow-2xl rounded-lg">
					<div className=" w-20 h-20 bg-[#FEF3D7] rounded-full">
						<Img
							src="/images/healthyFood.png"
							alt=""
							width={40}
							height={40}
							className=" translate-x-[50%] translate-y-[50%]"
						/>
					</div>
					<div className=" w-[80%] flex flex-col gap-5">
						<p className=" text-center text-lg font-bold">Healthy Food</p>
						<p className=" text-center text-gray-500">
							Donate to charity for those who need healthy and nutritious food.
						</p>
					</div>
				</div>
				<div className=" h-[350px] justify-center items-center flex flex-col gap-2 hover:shadow-2xl rounded-lg max-lg:translate-y-10">
					<div className=" w-20 h-20 bg-[#E0ECFE] rounded-full">
						<Img
							src="/images/medicalHelp.png"
							alt=""
							width={40}
							height={40}
							className=" translate-x-[50%] translate-y-[50%]"
						/>
					</div>
					<div className=" w-[80%] flex flex-col gap-5">
						<p className=" text-center text-lg font-bold">Medical Help</p>
						<p className=" text-center text-gray-500">
							Donate to charity for those who need better medical care.
						</p>
					</div>
				</div>
				<div className=" h-[350px] justify-center items-center flex flex-col gap-2 hover:shadow-2xl rounded-lg">
					<div className=" w-20 h-20 bg-[#F0F0F0] rounded-full">
						<Img
							src="/images/socialService.png"
							alt=""
							width={40}
							height={40}
							className=" translate-x-[50%] translate-y-[50%]"
						/>
					</div>
					<div className=" w-[80%] flex flex-col gap-5">
						<p className=" text-center text-lg font-bold">Social Service</p>
						<p className=" text-center text-gray-500">
							Support charitable causes to help people in need around the world.
						</p>
					</div>
				</div>
				<div className=" h-[350px] justify-center items-center flex flex-col gap-2 hover:shadow-2xl rounded-lg max-lg:translate-y-6">
					<div className=" w-20 h-20 bg-[#FEE0EA] rounded-full">
						<Img
							src="/images/education2.png"
							alt=""
							width={40}
							height={40}
							className=" translate-x-[50%] translate-y-[50%]"
						/>
					</div>
					<div className=" w-[80%] flex flex-col gap-5">
						<p className=" text-center text-lg font-bold">Education</p>
						<p className=" text-center text-gray-500">
							Donate to charity for children who need quality education.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Categories;
