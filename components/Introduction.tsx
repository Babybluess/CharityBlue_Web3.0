import React from 'react';

function Introduction() {
	return (
		<div
			id="introduction"
			className=" w-[95vw] bg-[#ffffff] h-[100%] justify-center items-center flex gap-12">
			<div className=' flex w-[95%] gap-5'>
				<div className=" w-[60%] h-[80%] justify-center items-center flex">
					<video width="600" controls className=" rounded-lg">
						<source
							src="../images/Aspire _ An Introduction to Charity & Not-For-Profit.mp4"
							type="video/mp4"
						/>
					</video>
				</div>
				<div className=" w-[70%] h-[75%] flex flex-col gap-3">
					<p className=" text-4xl font-bold">INTRODUCE</p>
					<p className=" text-gray-500 text-sm">
						We are a new charity organization, established in August 2, 2023
					</p>
					<div className=" w-[100%] flex gap-4 mt-5">
						<div className=" w-[50%] flex flex-col gap-4">
							<p className=" text-xl font-bold text-[#0A7558]">Our vision</p>
							<p>
								CharityBlue believes in a world where poverty no longer exists, where
								vulnerable communities are resilient, where barriers to well-being are
								removed and where everyone has equal rights and opportunities.
							</p>
						</div>
						<div className=" w-[50%] flex flex-col gap-4">
							<p className=" text-xl font-bold text-[#0A7558]">Our mission</p>
							<p className="">
								CharityBlue works with the most vulnerable communities to help them
								respond to and recover from humanitarian crises, and to assist them
								build transcendent solutions to mitigate poverty and vulnerability.
							</p>
						</div>
					</div>
				</div>
			</div>	
		</div>
	);
}

export default Introduction;
