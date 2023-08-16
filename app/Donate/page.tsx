import React from 'react'
import Img from 'next/image'

function Donate() {
  return (
<div className='w-full h-[100vh] bg-[#e8edee] justify-center items-center flex'>
    <div id='payment' className=' bg-white rounded-lg w-[550px] h-[600px] flex flex-col gap-5 justify-center items-center'>
        <p className=' text-center font-semibold'>You're donating to</p>
        <Img
            src="/Logo_Image.png"
            alt=''
            width={100}
            height={100}
        />
        <p className='text-5xl font-bold text-[#9CC5A0]'>Charity Blue</p>
        <div className=' flex gap-5 w-[90%] items-center justify-center'>
            <div className=' w-[35%] border-2 border-white hover:border-black hover:rounded-lg hover:bg-[#fcfcfc] hover:shadow-md '>
                <p className=' text-gray-500 text-center hover:text-black font-semibold'>Donate with crypto</p>
            </div>
            <div className=' w-[40%] border-2 border-white hover:border-black hover:rounded-lg hover:bg-[#fcfcfc] hover:shadow-md'>
                <p className=' text-gray-500 text-center hover:text-black font-semibold'>Donate with credit card</p>
            </div>
        </div>
        <div className=' h-[10%] w-[70%] flex border-2 rounded-lg'>
            <input className=' rounded-lg required font-bold px-5 w-full' type="number" placeholder='Donate' min="0" />
        </div>
        <div className=' flex gap-10 w-full justify-center '>
                <div className=' flex gap-2 font-semibold hover:underline hover:underline-offset-8 hover:decoration-[#0A7558] cursor-pointer'>
                    <Img
                        src="/ethereum-cryptocurrency.svg"
                        alt=''
                        width={25}
                        height={10}
                    />
                    <p>ETH</p>
                </div>
                <div className=' flex gap-2 font-semibold hover:underline hover:underline-offset-8 hover:decoration-[#0A7558] cursor-pointer'>
                    <Img
                        src="/bitcoin-cryptocurrency.svg"
                        alt=''
                        width={25}
                        height={10}
                    />
                    <p>BTC</p>
                </div>
                <div className=' flex gap-2 font-semibold hover:underline hover:underline-offset-8 hover:decoration-[#0A7558] cursor-pointer'>
                    <Img
                        src="/tether-cryptocurrency.svg"
                        alt=''
                        width={25}
                        height={10}
                    />
                    <p>USDT</p>
                </div>
                <div className=' flex gap-2 font-semibold hover:underline hover:underline-offset-8 hover:decoration-[#0A7558] cursor-pointer'>
                    <Img
                        src="/binance-coin-cryptocurrency.svg"
                        alt=''
                        width={25}
                        height={10}
                    />
                    <p>BNB</p>
                </div>
            </div>
        <button className=' w-[50%] h-[15%] rounded-xl bg-[#6A55EA] text-white'>Connect your wallet</button>
    </div>
</div>
  )
}

export default Donate