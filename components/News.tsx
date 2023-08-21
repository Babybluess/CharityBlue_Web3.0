import React from 'react';
import Img from 'next/image';

function News() {
	return (
		<div
			id="news"
			className=" w-[95vw] h-[100%] bg-[#FFFFFF] justify-center items-center flex flex-col gap-20">
			<div className=" w-[90%] flex justify-between px-3">
				<p className=" w-[20%] text-5xl font-semibold">News and Updates</p>
				<div className="w-[45%] flex flex-col gap-5">
					<p className=" text-gray-500">
						Stay informed with the latest developments on charity campaigns to keep you
						engaged.
					</p>
					<div className="flex gap-2 border-2 border-[#0A7558] w-[30%] h-12 justify-center items-center rounded-2xl">
						<p className=" text-lg text-[#0A7558] font-semibold">
							<a href="">See All News</a>
						</p>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth="3.0"
							stroke="currentColor"
							className="w-4 h-4 text-[#0A7558] items-center">
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
							/>
						</svg>
					</div>
				</div>
			</div>
			<div className=" w-[90%] grid grid-cols-4 justify-items-center">
				<div className=" w-[300px] h-[400px] rounded-xl flex flex-col gap-3">
					<Img
						src="/images/covid19.avif"
						alt=""
						width={400}
						height={240}
						style={{ borderRadius: '10px', objectFit: 'contain' }}
					/>
					<div className=" w-[100%] flex flex-col gap-4">
						<div className=" w-[50%] h-8 rounded-3xl bg-[#f2f2f4] justify-center items-center flex">
							<p className=" text-xs font-semibold">JANUARY 09, 2023</p>
						</div>
						<div className=" flex flex-col gap-4">
							<p className=" text-xl font-bold">
								Facts About COVID Kraken, The Latest Omicron Variant
							</p>
							<p className=" text-sm text-gray-500">
								The latest Omicron variant has been detected in Indonesia.
								Preciously, this variant was known to have first appeared...
							</p>
						</div>
						<div className="flex gap-2">
							<p className=" text-[#0A7558] font-semibold">
								<a href="https://health.ucdavis.edu/news/headlines/xbb15-what-you-need-to-know-about-covid-19s-kraken-variant-/2023/01#:~:text=2%20omicron%20variants.,Organization%20(WHO)%20thus%20far.">
									Read More
								</a>
							</p>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth="3.0"
								stroke="currentColor"
								className="w-4 h-4 text-[#0A7558] translate-y-[30%]">
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
								/>
							</svg>
						</div>
					</div>
				</div>
				<div className=" w-[300px] h-[400px] rounded-xl flex flex-col gap-3">
					<Img
						src="/images/cianjur.avif"
						alt=""
						width={400}
						height={240}
						style={{ borderRadius: '10px', objectFit: 'contain' }}
					/>
					<div className=" w-[100%] flex flex-col gap-4">
						<div className=" w-[50%] h-8 rounded-3xl bg-[#f2f2f4] justify-center items-center flex">
							<p className=" text-xs font-semibold">JANUARY 19, 2023</p>
						</div>
						<div className=" flex flex-col gap-4">
							<p className=" text-xl font-bold">
								The Shop Makes Donations For Cianjur Earthquake
							</p>
							<p className=" text-sm text-gray-500">
								The Cianjur earthquake that occurred a few months ago has moved all
								Indonesian people to help the people affected by th...
							</p>
						</div>
						<div className="flex gap-2">
							<p className=" text-[#0A7558] font-semibold">
								<a href="https://reliefweb.int/report/indonesia/situation-report-2-earthquake-cianjur-27-november-2022?gclid=Cj0KCQjw84anBhCtARIsAISI-xfhL_b5x86MUISfJdymopOT9nyzisyfN3jEYSAPiAfPPm9y21Bqrx4aAtbcEALw_wcB">
									Read More
								</a>
							</p>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth="3.0"
								stroke="currentColor"
								className="w-4 h-4 text-[#0A7558] translate-y-[30%]">
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
								/>
							</svg>
						</div>
					</div>
				</div>
				<div className=" w-[300px] h-[400px] rounded-xl flex flex-col gap-3">
					<Img
						src="/images/tetanus.avif"
						alt=""
						width={400}
						height={240}
						style={{ borderRadius: '10px', objectFit: 'contain' }}
					/>
					<div className=" w-[100%] flex flex-col gap-4">
						<div className=" w-[50%] h-8 rounded-3xl bg-[#f2f2f4] justify-center items-center flex">
							<p className=" text-xs font-semibold">JANUARY 09, 2023</p>
						</div>
						<div className=" flex flex-col gap-4">
							<p className=" text-xl font-bold">
								Should Women Get Tetanus Shots Before Marriage?
							</p>
							<p className=" text-sm text-gray-500">
								One of the requirements for women who are getting married is a
								tetanus shot or tetanus toxoid. TT injections are also kno...
							</p>
						</div>
						<div className="flex gap-2">
							<p className=" text-[#0A7558] font-semibold">
								<a href="https://www.voicesforvaccines.org/vaccine-information/dtap/?gclid=Cj0KCQjw84anBhCtARIsAISI-xdCYUguCTBY2nLl72kZ_n8q8bKz9y6XXTAE8DbsyysT9mY6dPE19WkaAordEALw_wcB">
									Read More
								</a>
							</p>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth="3.0"
								stroke="currentColor"
								className="w-4 h-4 text-[#0A7558] translate-y-[30%]">
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
								/>
							</svg>
						</div>
					</div>
				</div>
				<div className=" w-[300px] h-[400px] rounded-xl flex flex-col gap-3">
					<Img
						src="/images/diabetes.avif"
						alt=""
						width={400}
						height={240}
						style={{ borderRadius: '10px', objectFit: 'contain' }}
					/>
					<div className=" w-[100%] flex flex-col gap-4">
						<div className=" w-[50%] h-8 rounded-3xl bg-[#f2f2f4] justify-center items-center flex">
							<p className=" text-xs font-semibold">JANUARY 19, 2023</p>
						</div>
						<div className=" flex flex-col gap-4">
							<p className=" text-xl font-bold">
								Cases of Diabetes Mellitus in Children Soared Sharply!
							</p>
							<p className=" text-sm text-gray-500">
								According to WHO, the frequency of diabetes mellitus worldwide is
								increasing. Based on research results, children are at...
							</p>
						</div>
						<div className="flex gap-2">
							<p className=" text-[#0A7558] font-semibold">
								<a href="https://www.usatoday.com/story/news/health/2022/12/30/youth-diabetes-surge-cdc-study/10966164002/">
									Read More
								</a>
							</p>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth="3.0"
								stroke="currentColor"
								className="w-4 h-4 text-[#0A7558] translate-y-[30%]">
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
								/>
							</svg>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default News;
