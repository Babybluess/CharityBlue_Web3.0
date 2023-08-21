'use client';
import { CustomButton, Loader } from '@/components';
import { useState } from 'react';
import Layout from '../components/Layout';

function page() {
	const [isLoading, setIsLoading] = useState(false);
	const confirm = (): void => {
		alert('You have signed up successfully');
		window.location.href = '/';
	};

	const typeAgain = () => {
		alert('Please type information completely');
	};

	const checkFullFill = () => {
		const campaignTittle = document.getElementById('campaignTittle') as HTMLInputElement | null;
		const Name = document.getElementById('name') as HTMLInputElement | null;
		const Age = document.getElementById('age') as HTMLInputElement | null;
		const Email = document.getElementById('email') as HTMLInputElement | null;
		const phoneNumber = document.getElementById('phoneNumber') as HTMLInputElement | null;
		const Reason = document.getElementById('reason') as HTMLInputElement | null;

		const tittle = campaignTittle?.value;
		const name = Name?.value;
		const age = Age?.value;
		const email = Email?.value;
		const phonenumber = phoneNumber?.value;
		const reason = Reason?.value;

		if (
			tittle == '' ||
			name == '' ||
			age == '' ||
			email == '' ||
			phonenumber == '' ||
			reason == ''
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
						Become a volunteer
					</h1>
				</div>

				<form className="w-full mt-[65px] flex flex-col gap-[30px]">
					<label className="flex-1 w-full flex flex-col">
						<span className="font-epilogue font-medium text-[14px] leading-[22px] text-[#808191] mb-[10px]">
							Campaign Tittle *
						</span>
						<input
							id="campaignTittle"
							required
							type="text"
							placeholder="John Doe"
							className="py-[15px] sm:px-[25px] px-[15px] outline-none border-[1px] border-[#3a3a43] bg-transparent font-epilogue text-white text-[14px] placeholder:text-[#4b5264] rounded-[10px] sm:min-w-[300px]"
						/>
					</label>

					<div className=" flex flex-wrap gap-[40px]">
						<label className="flex-1 w-full flex flex-col">
							<span className="font-epilogue font-medium text-[14px] leading-[22px] text-[#808191] mb-[10px]">
								Your Name *
							</span>
							<input
								id="name"
								required
								type="text"
								placeholder="Write a tittle"
								className="py-[15px] sm:px-[25px] px-[15px] outline-none border-[1px] border-[#3a3a43] bg-transparent font-epilogue text-white text-[14px] placeholder:text-[#4b5264] rounded-[10px] sm:min-w-[300px]"
							/>
						</label>
						<label className="flex-1 w-full flex flex-col">
							<span className="font-epilogue font-medium text-[14px] leading-[22px] text-[#808191] mb-[10px]">
								Age *
							</span>
							<input
								id="age"
								required
								type="number"
								placeholder="Ex: 18"
								className="py-[15px] sm:px-[25px] px-[15px] outline-none border-[1px] border-[#3a3a43] bg-transparent font-epilogue text-white text-[14px] placeholder:text-[#4b5264] rounded-[10px] sm:min-w-[300px]"
							/>
						</label>
					</div>

					<div className="flex flex-wrap gap-[40px]">
						<label className="flex-1 w-full flex flex-col">
							<span className="font-epilogue font-medium text-[14px] leading-[22px] text-[#808191] mb-[10px]">
								Email *
							</span>
							<input
								id="email"
								required
								type="email"
								placeholder="abc@gmail.com"
								className="py-[15px] sm:px-[25px] px-[15px] outline-none border-[1px] border-[#3a3a43] bg-transparent font-epilogue text-white text-[14px] placeholder:text-[#4b5264] rounded-[10px] sm:min-w-[300px]"
							/>
						</label>
						<label className="flex-1 w-full flex flex-col">
							<span className="font-epilogue font-medium text-[14px] leading-[22px] text-[#808191] mb-[10px]">
								Phone number *
							</span>
							<input
								id="phoneNumber"
								required
								type="tel"
								placeholder="tel."
								className="py-[15px] sm:px-[25px] px-[15px] outline-none border-[1px] border-[#3a3a43] bg-transparent font-epilogue text-white text-[14px] placeholder:text-[#4b5264] rounded-[10px] sm:min-w-[300px]"
							/>
						</label>
					</div>

					<label className="flex-1 w-full flex flex-col">
						<span className="font-epilogue font-medium text-[14px] leading-[22px] text-[#808191] mb-[10px]">
							Why to become a volunteer *
						</span>
						<textarea
							id="reason"
							required
							rows={10}
							placeholder="Write your story"
							className="py-[15px] sm:px-[25px] px-[15px] outline-none border-[1px] border-[#3a3a43] bg-transparent font-epilogue text-white text-[14px] placeholder:text-[#4b5264] rounded-[10px] sm:min-w-[300px]"
						/>
					</label>

					<div className="flex justify-center items-center mt-[40px]">
						<CustomButton
							title="Submmit"
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
