// 'use client';

// import Img from 'next/image';
// import { Link } from 'react-scroll';

// const Navbar = () => {
// 	return (
// 		<div className=" w-[95vw] h-[50px] bg-gradient-to-r from-[#FBE7D0] to-[#D4E4DC] rounded-t-lg flex justify-between px-4">
// 			<div className="flex gap-2 items-center">
// 				<Img
// 					src="/images/Logo_Image.png"
// 					alt="logo"
// 					width={30}
// 					height={30}
// 					className=" object-contain"
// 				/>
// 				<span className=" font-bold text-lg text-[#9CC5A0]">CharityBlue</span>
// 			</div>
// 			<div className="flex gap-10 text-base items-center">
// 				<Link
// 					to="home"
// 					spy={true}
// 					className=" font-semibold text-gray-500 hover:underline hover:underline-offset-8 hover:decoration-[#0A7558] hover:text-[#0A7558]">
// 					Home
// 				</Link>
// 				<Link
// 					to="about"
// 					className=" font-semibold text-gray-500 hover:underline hover:underline-offset-8 hover:decoration-[#0A7558] hover:text-[#0A7558]">
// 					About Us
// 				</Link>
// 				<Link
// 					to="categories"
// 					className=" font-semibold text-gray-500 hover:underline hover:underline-offset-8 hover:decoration-[#0A7558] hover:text-[#0A7558]">
// 					Categories
// 				</Link>
// 				<Link
// 					to="campaign"
// 					className=" font-semibold text-gray-500 hover:underline hover:underline-offset-8 hover:decoration-[#0A7558] hover:text-[#0A7558]">
// 					Campaign
// 				</Link>
// 				<Link
// 					to="news"
// 					className=" font-semibold text-gray-500 hover:underline hover:underline-offset-8 hover:decoration-[#0A7558] hover:text-[#0A7558]">
// 					News
// 				</Link>
// 				<Link
// 					to="volunteers"
// 					className=" font-semibold text-gray-500 hover:underline hover:underline-offset-8 hover:decoration-[#0A7558] hover:text-[#0A7558]">
// 					Volunteers
// 				</Link>
// 				<div className=" flex w-[90px] items-center bg-[#0A7558] rounded-full justify-center">
// 					<Link to="campaign" className="text-sm p-1 font-medium text-white">
// 						Donate
// 					</Link>
// 					<svg
// 						xmlns="http://www.w3.org/2000/svg"
// 						fill="none"
// 						viewBox="0 0 24 24"
// 						strokeWidth="4.0"
// 						stroke="currentColor"
// 						className="w-3 h-3 text-white">
// 						<path
// 							strokeLinecap="round"
// 							strokeLinejoin="round"
// 							d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
// 						/>
// 					</svg>
// 				</div>
// 			</div>
// 		</div>
// 	);
// };

// export default Navbar;


import Img from 'next/image';
import React, { useState } from 'react';
import { Link } from 'react-scroll';

const Navbar = () => {
	const [checked, setChecked] = useState(false)
	const open = () => {
		setChecked(true)
		console.log(checked)
	}
	const close = () => {
		setChecked(false)
		console.log(checked)
	}
	return (
		<div className=" w-[95vw] h-[50px] bg-gradient-to-r from-[#FBE7D0] to-[#D4E4DC] rounded-t-lg flex justify-between px-4">
			<div className="flex gap-2 items-center">
				<Img
					src="/images/Logo_Image.png"
					alt="logo"
					width={30}
					height={30}
					className=" object-contain"
				/>
				<span className=" font-bold text-lg text-[#9CC5A0]">CharityBlue</span>
			</div>
			<div className={`${checked == false ? 'max-lg:flex' : 'max-lg:hidden'} hidden justify-end px-5 w-[100%]`}>
					<Img
						src={"/images/menu.svg"}
						alt=''
						width={20}
						height={20}
						className='cursor-pointer translate-x-5'
						onClick={()=>open()}
					/>
			</div>
			<div className={` ${checked ==true ? 'max-lg:translate-x-[0%] max-lg:flex-col max-lg:h-[100vh] max-lg:z-30 ' : 'max-lg:translate-x-[100%] max-lg:hidden'} flex gap-10 text-base items-center max-lg:bg-neutral-900 max-lg:w-[200px] max-lg:justify-start max-lg:absolute max-lg:right-0`}>
				<div className=' w-[100%] max-lg:py-10 hidden max-lg:flex'>
					<Img
						src={"/images/x-close-delete.svg"}
						alt=''
						width={20}
						height={20}
						className='cursor-pointer translate-x-5 bg-white rounded-sm'
						onClick={()=>close()}
					/>
				</div>
				<Link
					to="home"
					spy={true}
					className=" font-semibold text-gray-500 hover:underline hover:underline-offset-8 hover:decoration-[#0A7558] hover:text-[#0A7558]"
					onClick={()=>close()}>
					Home
				</Link>
				<Link
					to="about"
					className=" font-semibold text-gray-500 hover:underline hover:underline-offset-8 hover:decoration-[#0A7558] hover:text-[#0A7558]"
					onClick={()=>close()}>
					About Us
				</Link>
				<Link
					to="categories"
					className=" font-semibold text-gray-500 hover:underline hover:underline-offset-8 hover:decoration-[#0A7558] hover:text-[#0A7558]"
					onClick={()=>close()}>
					Categories
				</Link>
				<Link
					to="campaign"
					className=" font-semibold text-gray-500 hover:underline hover:underline-offset-8 hover:decoration-[#0A7558] hover:text-[#0A7558]">
					Campaign
				</Link>
				<Link
					to="news"
					className=" font-semibold text-gray-500 hover:underline hover:underline-offset-8 hover:decoration-[#0A7558] hover:text-[#0A7558]"
					onClick={()=>close()}>
					News
				</Link>
				<Link
					to="volunteers"
					className=" font-semibold text-gray-500 hover:underline hover:underline-offset-8 hover:decoration-[#0A7558] hover:text-[#0A7558]"
					onClick={()=>close()}>
					Volunteers
				</Link>
				<div className=" flex w-[90px] items-center bg-[#0A7558] rounded-full justify-center hover:scale-110">
					<Link to="campaign" className="text-sm p-1 text-white"
						onClick={()=>close()}>
						Donate
					</Link>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth="3.0"
						stroke="currentColor"
						className="w-3 h-3 text-white">
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
						/>
					</svg>
				</div>
			</div>
		</div>
	);
};

export default Navbar;

