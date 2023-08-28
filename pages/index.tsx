import {
	About,
	Banner,
	Campaign,
	Categories,
	Footer,
	Introduction,
	Navbar,
	News,
	Volunteer
} from '@/components';
import { useSelector } from 'react-redux';
import Layout from '../components/Layout';
import * as types from '../redux/types';

export default function Home() {
	const rootReducer = useSelector((state: types.userTypes.UserState) => state);

	return (
		<Layout>
			<div className=" w-full min-h-[5550px] overflow-hidden bg-gradient-to-br from-[#65BB9B] to-[#EDD3A6]">
				<div className=" h-[100px] rounded-t-lg justify-center items-end flex">
					<Navbar />
				</div>
				<div className=" h-[650px] justify-center flex">
					<Banner />
				</div>
				<div className=" h-[700px] justify-center flex">
					<About />
				</div>
				<div className=" h-[750px] flex justify-center">
					<Categories />
				</div>
				<div className=" h-[850px] flex justify-center max-lg:h-[2200px]">
					<Campaign />
				</div>
				<div className=" h-[800px] flex justify-center">
					<News />
				</div>
				<div className=" h-[700px] flex justify-center">
					<Volunteer />
				</div>
				<div className=" h-[450px] max-lg:h-[600px] flex justify-center">
					<Introduction />
				</div>
				<div className=" h-[500px] flex justify-center">
					<Footer />
				</div>
			</div>
		</Layout>
	);
}
