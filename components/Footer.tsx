import React from 'react';
import Img from 'next/image';
import { Link } from 'react-scroll';

function Footer() {
	return (
		<div className=" w-[95vw] justify-center flex flex-col bg-gradient-to-r from-[#F2E6D3] to-[#D5E4DC] rounded-b-lg">
			<div className=" h-[90%] w-[100%] px-[10%] flex justify-between items-center">
				<div className=" w-[30%] flex flex-col gap-8 items-start h-[60%]">
					<div className=" flex gap-5 max-md:gap-2 items-center">
						<Img src="/images/Logo_Image.png" alt="" width={60} height={60} />
						<p className="text-3xl font-bold  text-[#9CC5A0] max-md:text-2xl">CharityBlue</p>
					</div>
					<p className=" text-gray-500">
						CharityBlue is a digital platform for collecting donations to be distributed
						to people in need.
					</p>
					<div className=" flex gap-8">
						<svg
							height="30"
							viewBox="0 0 48 48"
							width="30"
							xmlns="http://www.w3.org/2000/svg"
							className=" fill-gray-400 cursor-pointer">
							<path d="m0 0h48v48h-48z" fill="none" />
							<path d="m0 0h48v48h-48z" fill="none" />
							<path d="m44 6.1v35.8a.3.3 0 0 1 -.1.2 1.9 1.9 0 0 1 -1.8 1.8h-10.5v-15.4h4.9c.3 0 .3 0 .4-.3l.3-2.5c.1-1 .2-2 .4-3s0-.3-.2-.3h-5.8v-3.9c0-.3.1-.7.1-1a1.8 1.8 0 0 1 1.6-1.6l1.3-.2h3c.2 0 .2 0 .2-.2v-5.1c0-.1 0-.2-.2-.2h-4.6a7.2 7.2 0 0 0 -3.3.7 6 6 0 0 0 -3.5 3.1 7.3 7.3 0 0 0 -.8 3.6c-.1 1.5 0 3.1 0 4.7h-5.1c-.2 0-.2.1-.2.2v5.7c0 .2 0 .2.2.2h5.1v15.4a.3.3 0 0 0 -.1.2h-19.4a1.9 1.9 0 0 1 -1.8-1.8c-.1 0-.1-.1-.1-.2v-35.9c0-.1 0-.2.1-.2a1.9 1.9 0 0 1 1.8-1.8h36.2a1.9 1.9 0 0 1 1.8 1.8z" />
						</svg>
						<svg
							height="32"
							viewBox="0 0 32 32"
							width="32"
							xmlns="http://www.w3.org/2000/svg"
							className=" fill-gray-400 cursor-pointer">
							<path d="m31.937 6.093c-1.177.516-2.437.871-3.765 1.032 1.355-.813 2.391-2.099 2.885-3.631-1.271.74-2.677 1.276-4.172 1.579-1.192-1.276-2.896-2.079-4.787-2.079-3.625 0-6.563 2.937-6.563 6.557 0 .521.063 1.021.172 1.495-5.453-.255-10.287-2.875-13.52-6.833-.568.964-.891 2.084-.891 3.303 0 2.281 1.161 4.281 2.916 5.457-1.073-.031-2.083-.328-2.968-.817v.079c0 3.181 2.26 5.833 5.26 6.437-.547.145-1.131.229-1.724.229-.421 0-.823-.041-1.224-.115.844 2.604 3.26 4.5 6.14 4.557-2.239 1.755-5.077 2.801-8.135 2.801-.521 0-1.041-.025-1.563-.088 2.917 1.86 6.36 2.948 10.079 2.948 12.067 0 18.661-9.995 18.661-18.651 0-.276 0-.557-.021-.839 1.287-.917 2.401-2.079 3.281-3.396z" />
						</svg>
						<svg
							height="32"
							viewBox="0 0 32 32"
							width="32"
							xmlns="http://www.w3.org/2000/svg"
							className=" fill-gray-400 cursor-pointer">
							<path d="m16 0c-4.349 0-4.891.021-6.593.093-1.709.084-2.865.349-3.885.745-1.052.412-1.948.959-2.833 1.849-.891.885-1.443 1.781-1.849 2.833-.396 1.02-.661 2.176-.745 3.885-.077 1.703-.093 2.244-.093 6.593s.021 4.891.093 6.593c.084 1.704.349 2.865.745 3.885.412 1.052.959 1.948 1.849 2.833.885.891 1.781 1.443 2.833 1.849 1.02.391 2.181.661 3.885.745 1.703.077 2.244.093 6.593.093s4.891-.021 6.593-.093c1.704-.084 2.865-.355 3.885-.745 1.052-.412 1.948-.959 2.833-1.849.891-.885 1.443-1.776 1.849-2.833.391-1.02.661-2.181.745-3.885.077-1.703.093-2.244.093-6.593s-.021-4.891-.093-6.593c-.084-1.704-.355-2.871-.745-3.885-.412-1.052-.959-1.948-1.849-2.833-.885-.891-1.776-1.443-2.833-1.849-1.02-.396-2.181-.661-3.885-.745-1.703-.077-2.244-.093-6.593-.093zm0 2.88c4.271 0 4.781.021 6.469.093 1.557.073 2.405.333 2.968.553.751.291 1.276.635 1.844 1.197.557.557.901 1.088 1.192 1.839.22.563.48 1.411.553 2.968.072 1.688.093 2.199.093 6.469s-.021 4.781-.099 6.469c-.084 1.557-.344 2.405-.563 2.968-.303.751-.641 1.276-1.199 1.844-.563.557-1.099.901-1.844 1.192-.556.22-1.416.48-2.979.553-1.697.072-2.197.093-6.479.093s-4.781-.021-6.48-.099c-1.557-.084-2.416-.344-2.979-.563-.76-.303-1.281-.641-1.839-1.199-.563-.563-.921-1.099-1.197-1.844-.224-.556-.48-1.416-.563-2.979-.057-1.677-.084-2.197-.084-6.459 0-4.26.027-4.781.084-6.479.083-1.563.339-2.421.563-2.979.276-.761.635-1.281 1.197-1.844.557-.557 1.079-.917 1.839-1.199.563-.219 1.401-.479 2.964-.557 1.697-.061 2.197-.083 6.473-.083zm0 4.907c-4.541 0-8.213 3.677-8.213 8.213 0 4.541 3.677 8.213 8.213 8.213 4.541 0 8.213-3.677 8.213-8.213 0-4.541-3.677-8.213-8.213-8.213zm0 13.546c-2.948 0-5.333-2.385-5.333-5.333s2.385-5.333 5.333-5.333 5.333 2.385 5.333 5.333-2.385 5.333-5.333 5.333zm10.464-13.874c0 1.063-.865 1.921-1.923 1.921-1.063 0-1.921-.859-1.921-1.921 0-1.057.864-1.917 1.921-1.917s1.923.86 1.923 1.917z" />
						</svg>
					</div>
				</div>
				<div className=" w-[50%] flex gap-36 max-lg:gap-10 justify-items-end">
					<div className=" flex flex-col gap-5">
						<p className="text-xl font-bold max-lg:text-lg">Menu</p>
						<ul className=" flex flex-col gap-4">
							<Link to='home' className="text-gray-500 max-lg:text-sm">Home</Link>
							<Link to='about' className=" text-gray-500 max-lg:text-sm">About Us</Link>
							<Link to='categories' className=" text-gray-500 max-lg:text-sm">Categories</Link>
							<Link to='campaign' className=" text-gray-500 max-lg:text-sm">Campaign</Link>
							<Link to='news' className=" text-gray-500 max-lg:text-sm">News</Link>
							<Link to='volunteers' className=" text-gray-500 max-lg:text-sm">Volunteers</Link>
						</ul>
					</div>
					<div className=" flex flex-col gap-5">
						<p className="text-xl font-bold max-lg:text-lg">Categories</p>
						<ul className=" flex flex-col gap-4">
							<li className="text-gray-500 max-lg:text-sm">Healthy Food</li>
							<li className=" text-gray-500 max-lg:text-sm">Medical Help</li>
							<li className=" text-gray-500 max-lg:text-sm">Clean Water</li>
							<li className=" text-gray-500 max-lg:text-sm">Education</li>
						</ul>
					</div>
					<div className=" flex flex-col gap-5">
						<p className="text-xl font-bold max-lg:text-lg">About Us</p>
						<ul className=" flex flex-col gap-4">
							<li className="text-gray-500 max-lg:text-sm">Contact Us</li>
							<li className=" text-gray-500 max-lg:text-sm">FAQ</li>
							<li className=" text-gray-500 max-lg:text-sm">Help</li>
						</ul>
					</div>
				</div>
			</div>
			<div className=" w-[100%] h-[10%] px-[10%] justify-between border-t-2 border-white flex items-center">
				<div className=" text-gray-500 text-sm">
					<p>Copyright © 2023. All Right Reserved.</p>
				</div>
				<div className="flex gap-4 text-gray-500 text-xs">
					<p>Terms of Service</p>
					<p>Privacy Policy</p>
				</div>
			</div>
		</div>
	);
}

export default Footer;
