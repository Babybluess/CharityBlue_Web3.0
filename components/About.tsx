import Img from 'next/image';

function About() {
	return (
		<div
			id="about"
			className=" bg-[#FFFFFF] w-[95vw] h-[100%] relative justify-center items-center flex ">
			<div className="w-[50%] h-[90%] items-center flex max-lg:hidden">
				<Img
					src="/images/orangeCircle.png"
					alt=""
					height={600}
					width={600}
					style={{ objectFit: 'contain' }}
				/>
				<div className=" w-[35%] h-[75%] absolute top-[10%] left-[13%] ">
					<Img
						src="/images/about2.avif"
						alt=""
						width={200}
						height={300}
						className=" rounded-b-full items-start absolute top-0 left-0"
					/>
					<Img
						src="/images/about4.avif"
						alt=""
						width={200}
						height={300}
						className=" rounded-t-full items-end absolute bottom-0 right-0"
					/>
					<Img
						src="/images/about1.avif"
						alt=""
						width={280}
						height={250}
						className=" rounded-r-full absolute bottom-0 left-0"
					/>
					<Img
						src="/images/about3.avif"
						alt=""
						width={280}
						height={250}
						className=" rounded-tl-[80%] rounded-tr-[90%] rounded-bl-[90%] absolute top-0 right-0"
					/>
				</div>
			</div>
			<div className=' hidden max-lg:flex max-lg:-translate-x-10 '>
				<Img
						src="/images/about2.avif"
						alt=""
						objectFit='cover'
						width={300}
						height={500}
						className=" rounded-br-[50%] rounded-tr-xl shadow-2xl z-10"
					/>
			</div>
			<div className=" w-[30%] flex flex-col gap-10">
				<div className=" ml-[14px] flex flex-col gap-8">
					<p className=" text-lg text-[#F2B065] font-bold max-lg:text-base">ABOUT US</p>
					<p className=" text-5xl font-bold max-lg:text-3xl">Help People In Need Around The World</p>
					<p className="text-gray-500 text-sm">
						We help provide necessities to help people in need around the world.
					</p>
				</div>
				<div className="flex flex-col gap-4">
					<div className="flex">
						<div>
							<Img
								src="/images/donate1.png"
								alt=""
								width={50}
								height={30}
								className=" mx-[14px]"
								style={{ objectFit: 'contain' }}
							/>
						</div>
						<div className=" w-[80%] mt-1 flex flex-col gap-2">
							<p className=" text-lg font-bold">Donate</p>
							<p className=" text-gray-500 text-sm">
								Providing assistance in the form of money and clothing to help ohers
							</p>
						</div>
					</div>
					<div className="flex">
						<div>
							<Img
								src="/images/volunteeringWork.png"
								alt=""
								width={80}
								height={50}
								style={{ objectFit: 'contain' }}
							/>
						</div>
						<div className=" w-[80%] mt-1 flex flex-col gap-2">
							<p className=" text-lg font-bold">Volunteer</p>
							<p className=" text-gray-500 text-sm">
								Providing assistance in the form of money and clothing to help ohers
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default About;
