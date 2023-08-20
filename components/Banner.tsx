import React from 'react'
import Img from 'next/image'
import Link from 'next/link'

function Banner() {
  return (
    <div id='home' className='w-[95vw] bg-[#FAF8FA] h-[100%] flex-col relative'>
        <div className='w-[40%] h-[70%] justify-center items-center flex ml-5 '>
            <div className='h-[60%] w-[70%]'>
                <p className=' text-5xl font-bold'>Do Something Great To Help Others</p>
                <p className=' text-gray-400 text-sm mt-8'>CharityBlue is a digital platform for collecting donations to be distributed to people in need</p>
                <div className = 'flex gap-5 mt-16'>
                    <div className='bg-[#0A7558] rounded-xl px-7 py-2 flex'>
                        <Link href="/#campaign" className=' text-white'>Donate Now</Link>
                    </div>
                    <div className='flex rounded-xl bg-white border-[2px] border-[#0A7558] px-5 py-2 gap-1'>
                        <Img
                            src="/play.png"
                            alt='play'
                            height={10}
                            width={20}
                        />
                        <Link href="/#introduction" className='text-[#0A7558]'>Watch Video</Link>
                    </div>    
                </div>  
            </div>
        </div>
        <div className='w-[35%] h-[100px] flex justify-center items-center gap-10 ml-5'>
            <div className='w-[15%]'>
                <p className=' text-2xl font-bold text-center'>15K</p>
                <p className=' text-center text-gray-400'>Incredible Volunteers</p>
            </div>
            <div className='w-[15%]'>
                <p className=' text-2xl font-bold text-center'>100+</p>
                <p className=' text-center text-gray-400'>Successful Campaign</p>
            </div>
            <div className=' w-[15%]'>
                <p className=' text-2xl font-bold text-center'>600+</p>
                <p className=' text-center text-gray-400'>Montly Donors</p>
            </div>
        </div>
        <div className=' w-[60%] h-[100%] absolute right-0 top-0 '>
            <Img
                src="/dotx.gif"
                alt='dotMoving'
                height={400}
                width={860}
            />
            <Img
                src="/banner1.jpg"
                alt=''
                height={200}
                width={200}
                className='rounded-[20%] absolute top-40 right-24 shadow-2xl z-10'
            />
            <Img
                src="/banner2.jpg"
                alt=''
                height={200}
                width={200}
                className=' rounded-bl-[50%] absolute right-48 bottom-20 rounded-xl shadow-2xl z-10'
            />
            <Img
                src="/banner3.jpg"
                alt=''
                height={170}
                width={170}
                className='rounded-br-[60px] rounded-2xl  absolute top-20 left-[300px] shadow-xl z-10'
            />
            <Img
                src="/banner4.jpg"
                alt=''
                height={150}
                width={150}
                className='rounded-[50%] absolute left-52 bottom-32 shadow-xl z-10' 
            />
            <Img
                src="/bannerCenter.png"
                alt=''
                height={100}
                width={100}
                className='rounded-[50%] absolute left-[43%] bottom-[43%] z-10' 
            />
        </div>
    </div>
  )
}

export default Banner