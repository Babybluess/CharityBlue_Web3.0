import Img from 'next/image';

function Volunteers() {
	return (
		<div
			id="volunteers"
			className=" w-[95vw] bg-[#faf5f6] justify-center items-center flex gap-16">
			<div className=" w-[30%] flex flex-col gap-8 justify-center">
				<span className=" font-bold text-[#F2B065]">VOLUNTEER</span>
				<p className=" text-5xl font-bold">Participate In Charity Around The Whole World</p>
				<p className=" text-gray-500">
					Join our community volunteer and help people in need around the world.
				</p>
				<button className=" w-[40%] h-10 rounded-xl bg-[#0A7558] text-white font-semibold">
					<a href="/volunteer-member">Become Voluneer</a>
				</button>
			</div>
			<div className=" w-[50%] h-[100%] justify-center items-center flex relative">
				<div className=" w-[450px] h-[450px] bg-[#EEEEEE] rounded-lg rounded-br-[60%]"></div>
				<Img
					src="/images/vlun.png"
					alt=""
					width={1000}
					height={1000}
					objectFit="contain"
					className=" absolute"
				/>
				<div className=" absolute w-[150px] h-[150px] rounded-xl top-[5%] left-[15%]">
					<Img
						src="/images/volunteerSlogna.jpg"
						alt=""
						layout="fill"
						objectFit="cover"
						className=" rounded-2xl"
					/>
				</div>
				<div className=" absolute w-[150px] h-[150px] rounded-xl top-[30%] right-[25%]">
					<Img
						src="/images/volunteerSlogna1.jpg"
						alt=""
						layout="fill"
						objectFit="cover"
						className=" rounded-2xl"
					/>
				</div>
				<div className=" absolute w-[100px] h-[100px] rounded-xl bottom-[10%] left-[35%]">
					<Img
						src="/images/volunteerSlogna2.jpg"
						alt=""
						layout="fill"
						objectFit="cover"
						className=" rounded-2xl"
					/>
				</div>
			</div>
		</div>
	);
}

export default Volunteers;
