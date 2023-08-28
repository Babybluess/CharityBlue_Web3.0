import React from 'react';
import Img from 'next/image';
import { Link } from 'react-scroll';

function Banner() {
	return (
		<div id="home" className="w-[95vw] bg-[#FAF8FA] h-[100%] flex-col relative">
			<div className="w-[40%] h-[70%] justify-center items-center flex ml-5 ">
				<div className="h-[60%] w-[70%]">
					<p className=" text-5xl font-bold max-lg:text-4xl">Do Something Great To Help Others</p>
					<p className=" text-gray-400 text-sm mt-8 max-md:text-xs">
						CharityBlue is a digital platform for collecting donations to be distributed
						to people in need
					</p>
					<div className="flex gap-5 mt-16 max-md:mt-10">
						<div className="bg-[#0A7558] rounded-xl justify-center items-center lg:px-7 lg:py-2 max-md:p-0 flex">
							<Link to="campaign" className=" text-white text-center">
								Donate Now
							</Link>
						</div>
						<div className="flex rounded-xl bg-white border-[2px] border-[#0A7558] px-5 py-2 justify-center items-center max-md:p-0 gap-1">
							<Img src="/images/play.png" alt="play" height={10} width={20} className=' max-md:translate-x-4' />
							<Link to="introduction" className="text-[#0A7558] text-center">
								Watch Video
							</Link>
						</div>
					</div>
				</div>
			</div>
			<div className="w-[35%] h-[100px] flex justify-center items-center gap-10 translate-x-[3%] max-lg:translate-x-[13%]">
				<div className="w-[15%] flex flex-col justify-end items-center">
					<p className=" text-2xl font-bold text-center max-md:text-lg">15K</p>
					<p className=" text-center text-gray-400 max-md:text-sm">Incredible Volunteers</p>
				</div>
				<div className="w-[15%] flex flex-col justify-end items-center">
					<p className=" text-2xl font-bold text-center max-md:text-lg">100+</p>
					<p className=" text-center text-gray-400 max-md:text-sm">Successful Campaign</p>
				</div>
				<div className=" w-[15%] flex flex-col justify-end items-center">
					<p className=" text-2xl font-bold text-center max-md:text-lg">600+</p>
					<p className=" text-center text-gray-400 max-md:text-sm">Montly Donors</p>
				</div>
			</div>
			<div className=" w-[60%] h-[100%] absolute right-0 top-0 max-md:flex max-md:flex-col max-md:rounded-bl-xl ">
				<Img src="/images/dotx.gif" alt="dotMoving" height={400} width={860} className='max-md:hidden'/>
				<div className=' max-lg:hidden'>
					<Img
						src="/images/banner1.jpg"
						alt=""
						height={200}
						width={200}
						className="rounded-[20%] absolute top-40 right-24 shadow-2xl z-10"
					/>
				</div>
				<div className=' max-lg:hidden '>
					<Img
						src="/images/banner2.jpg"
						alt=""
						height={200}
						width={200}
						className=" rounded-bl-[50%] absolute right-48 bottom-20 rounded-xl shadow-2xl z-10"
					/>
				</div>
				<div className=' max-lg:hidden'>
					<Img
						src="/images/banner3.jpg"
						alt=""
						height={170}
						width={170}
						className="rounded-br-[60px] rounded-2xl  absolute top-20 left-[300px] shadow-xl z-10"
					/>
				</div>
				<div className=' max-lg:hidden'>
					<Img
						src="/images/banner4.jpg"
						alt=""
						height={150}
						width={150}
						className="rounded-[50%] absolute left-52 bottom-32 shadow-xl z-10"
					/>
				</div>
				<div className='max-lg:hidden'>
					<Img
						src="/images/bannerCenter.png"
						alt=""
						height={100}
						width={100}
						className="rounded-[50%] absolute left-[43%] bottom-[43%] z-10"
					/>
				</div>
				<div className=' max-lg:flex hidden '>
					<Img
						src="/images/banner2.jpg"
						alt=""
						fill
						objectFit='cover'
						sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
						className=" rounded-l-full shadow-2xl z-10"
					/>
				</div>
			</div>
		</div>
	);
}

export default Banner;
