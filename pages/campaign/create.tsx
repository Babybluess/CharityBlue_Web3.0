'use client';
import { CustomButton, Loader } from '@/components';
import { useState } from 'react';
import Layout from '../../components/Layout';

function page() {
	const [isLoading, setIsLoading] = useState(false);
	const confirm = () => {
		alert('You have successfully created a new campaign');
		window.location.href = '/';
	};

	const typeAgain = () => {
		alert('Please type information completely');
	};

	const checkFullFill = () => {
		const campaignTittle = document.getElementById('campaignTittle') as HTMLInputElement | null;
		const Name = document.getElementById('name') as HTMLInputElement | null;
		const Story = document.getElementById('story') as HTMLInputElement | null;
		const Goal = document.getElementById('goal') as HTMLInputElement | null;
		const Deadline = document.getElementById('deadline') as HTMLInputElement | null;
		const Image = document.getElementById('image') as HTMLInputElement | null;

		const tittle = campaignTittle?.value;
		const name = Name?.value;
		const story = Story?.value;
		const goal = Goal?.value;
		const deadline = Deadline?.value;
		const image = Image?.value;

		if (
			tittle == '' ||
			name == '' ||
			story == '' ||
			goal == '' ||
			deadline == '' ||
			image == ''
		) {
			typeAgain();
		} else {
			confirm();
		}
	};

	return (
		<Layout>
			<div className="bg-[#1c1c24] flex justify-center items-center flex-col sm:p-10 p-4">
				{isLoading && <Loader />}
				<div className="flex justify-center items-center p-[16px] sm:min-w-[380px] bg-[#3a3a43] rounded-[10px]">
					<h1 className="font-epilogue font-bold sm:text-[25px] text-[18px] leading-[38px] text-white">
						Start a Campaign
					</h1>
				</div>

				<form className="w-full mt-[65px] flex flex-col gap-[30px]">
					<div className="flex flex-wrap gap-[40px]">
						<label className="flex-1 w-full flex flex-col">
							<span className="font-epilogue font-medium text-[14px] leading-[22px] text-[#808191] mb-[10px]">
								Your Name *
							</span>
							<input
								id="name"
								required
								type="text"
								placeholder="John Doe"
								className="py-[15px] sm:px-[25px] px-[15px] outline-none border-[1px] border-[#3a3a43] bg-transparent font-epilogue text-white text-[14px] placeholder:text-[#4b5264] rounded-[10px] sm:min-w-[300px]"
							/>
						</label>
						<label className="flex-1 w-full flex flex-col">
							<span className="font-epilogue font-medium text-[14px] leading-[22px] text-[#808191] mb-[10px]">
								Campaign Tittle *
							</span>
							<input
								id="tittle"
								required
								type="text"
								placeholder="Write a tittle"
								className="py-[15px] sm:px-[25px] px-[15px] outline-none border-[1px] border-[#3a3a43] bg-transparent font-epilogue text-white text-[14px] placeholder:text-[#4b5264] rounded-[10px] sm:min-w-[300px]"
							/>
						</label>
					</div>

					<label className="flex-1 w-full flex flex-col">
						<span className="font-epilogue font-medium text-[14px] leading-[22px] text-[#808191] mb-[10px]">
							Story *
						</span>
						<textarea
							id="story"
							required
							rows={10}
							placeholder="Write your story"
							className="py-[15px] sm:px-[25px] px-[15px] outline-none border-[1px] border-[#3a3a43] bg-transparent font-epilogue text-white text-[14px] placeholder:text-[#4b5264] rounded-[10px] sm:min-w-[300px]"
						/>
					</label>

					<div className="w-full flex justify-start items-center p-4 bg-[#8c6dfd] h-[120px] rounded-[10px]">
						<img
							src={'money.svg'}
							alt="money"
							className="w-[40px] h-[40px] object-contain"
						/>
						<h4 className="font-epilogue font-bold text-[25px] text-white ml-[20px]">
							You will get 100% of the raised amount
						</h4>
					</div>

					<div className="flex flex-wrap gap-[40px]">
						<label className="flex-1 w-full flex flex-col">
							<span className="font-epilogue font-medium text-[14px] leading-[22px] text-[#808191] mb-[10px]">
								Goal *
							</span>
							<input
								id="goal"
								required
								type="number"
								step="0.1"
								placeholder="ETH 0.50"
								min="0.5"
								className="py-[15px] sm:px-[25px] px-[15px] outline-none border-[1px] border-[#3a3a43] bg-transparent font-epilogue text-white text-[14px] placeholder:text-[#4b5264] rounded-[10px] sm:min-w-[300px]"
							/>
						</label>
						<label className="flex-1 w-full flex flex-col">
							<span className="font-epilogue font-medium text-[14px] leading-[22px] text-[#808191] mb-[10px]">
								End Date *
							</span>
							<input
								id="deadline"
								required
								type="date"
								className="py-[15px] sm:px-[25px] px-[15px] outline-none border-[1px] border-[#3a3a43] bg-transparent font-epilogue text-white text-[14px] placeholder:text-[#4b5264] rounded-[10px] sm:min-w-[300px]"
							/>
						</label>
					</div>

					<label className="flex-1 w-full flex flex-col">
						<span className="font-epilogue font-medium text-[14px] leading-[22px] text-[#808191] mb-[10px]">
							Campaign Image *
						</span>
						<input
							id="image"
							required
							type="url"
							placeholder="Place image URL of your campaign"
							className="py-[15px] sm:px-[25px] px-[15px] outline-none border-[1px] border-[#3a3a43] bg-transparent font-epilogue text-white text-[14px] placeholder:text-[#4b5264] rounded-[10px] sm:min-w-[300px]"
						/>
					</label>

					<div className="flex justify-center items-center mt-[40px]">
						<CustomButton
							title="Submit new campaign"
							styles="bg-[#1dc071]"
							handleClick={checkFullFill}
						/>
					</div>
				</form>
			</div>
		</Layout>
	);
}

export default page;
