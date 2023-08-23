import React, {useState, useEffect} from 'react'
import Layout from '@/components/Layout'
import Img from 'next/image'
import { useRouter } from 'next/router';
import configs from '../../../../configs';
import Web3 from 'web3';


function Vote() {

  const [isApprove, setApprove] = useState(false);
	const [isReject, setReject] = useState(false);
  const [name, setName] = useState('-');
  const router = useRouter();
	const { id } = router.query;


	useEffect(() => {
		getInfoCampaign(id);
	}, []);

	 const getInfoCampaign = async (id: string | string[] | undefined) => {
		const web3 = new Web3(configs.linkRPC);
		const { crowdfunding } = configs.contracts;

		const crowdfundingContract = new web3.eth.Contract(crowdfunding.abi, crowdfunding.address);

		try {
			let data = await crowdfundingContract.methods.getCampaignDetails(id).call();

			console.log({ data });
			const { name } = data;

			setName(name);
		} catch (error) {
			console.log(error);
		}
	};


	const clickApprove = () => {
		setApprove(true)
		setReject(false)
	}
	const clickReject = () => {
		setApprove(false)
		setReject(true)

	}

  const confirm = (): void => {
    alert('Your vote is successful!')
		window.location.href = `/campaign/${id}`;
	};


  return (
    <Layout >
      <div className=' w-full h-[100vh] bg-[#FDF9F0] justify-center items-center relative flex flex-col'>
          <div className=' w-[30%] h-[50%] rounded-xl flex flex-col gap-8 bg-gradient-to-tr from-[#4655C8] to-[#FCC574] items-center justify-center z-50 border-2 border-gray-500'>
             <div className=' flex flex-col justify-center items-center'>
              <p className=' font-base'>You trust </p>
              <p className=' text-xl font-semibold text-center'>{name} and allow Creator to get fund?</p>
             </div>
             <div className='w-[100%] justify-center items-center flex'>
							<div className=' justify-between flex items-center w-[70%] mt-10  mb-3' >
								<label onClick={() => clickApprove()} className={` ${isApprove == true ? 'bg-[#414181]' : 'bg-white'} cursor-pointer flex gap-1 rounded-[15px] border-2 border-gray-400 px-3 items-center justify-center `}>
									<input type="radio" name="radio" />
                   <span className=' text-lg text-green-400'>Approve</span>
								</label>
								<label onClick={() => clickReject()} className={` ${isReject == true ? 'bg-[#414181]' : 'bg-white'} cursor-pointer flex gap-1 rounded-[15px] px-4 items-center justify-center `}>
									<input type="radio" name="radio" />
									<span className='text-lg text-pink-400'>Reject</span>
								</label>
							</div>
						</div>
            <div className=' flex gap-2 bg-green-700 rounded-xl w-[180px] h-[50px] justify-center items-center'>
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
              </span>
              <button onClick={() => confirm()} type='submit' className=' font-medium'>Confirm your Vote</button>
            </div>
          </div>
          <div className=' absolute bottom-0 left-0'>
            <Img 
              src={"/images/cetsery_com.gif"}
              alt=''
              width={500}
              height={200}
            />
          </div>
      </div>
    </Layout>
  )
}

export default Vote