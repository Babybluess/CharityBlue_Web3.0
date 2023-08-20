'use client'

import React from 'react'
import Img from 'next/image' 
import Link from 'next/link'


const Navbar = () => {
     return (
    <div className=' w-[95vw] h-[50px] bg-gradient-to-r from-[#FBE7D0] to-[#D4E4DC] rounded-t-lg flex justify-between px-4'>
        <div className='flex gap-2 items-center'>
            <Img 
            src="/Logo_Image.png"
            alt='logo'
            width={30}
            height={30}
            className=' object-contain'
            />
            <span className=' font-bold text-lg text-[#9CC5A0]'>CharityBlue</span>
        </div>
        <div className='flex gap-10 text-base items-center'>
            <Link href="/#home" className=' font-semibold text-gray-500 hover:underline hover:underline-offset-8 hover:decoration-[#0A7558] hover:text-[#0A7558]'>Home</Link>
            <Link href="/#about" className=' font-semibold text-gray-500 hover:underline hover:underline-offset-8 hover:decoration-[#0A7558] hover:text-[#0A7558]'>About Us</Link>
            <Link href="/#categories" className=' font-semibold text-gray-500 hover:underline hover:underline-offset-8 hover:decoration-[#0A7558] hover:text-[#0A7558]'>Categories</Link>
            <Link href="/#campaign" className=' font-semibold text-gray-500 hover:underline hover:underline-offset-8 hover:decoration-[#0A7558] hover:text-[#0A7558]'>Campaign</Link>
            <Link href="/#news" className=' font-semibold text-gray-500 hover:underline hover:underline-offset-8 hover:decoration-[#0A7558] hover:text-[#0A7558]'>News</Link>
            <Link href="/#volunteers" className=' font-semibold text-gray-500 hover:underline hover:underline-offset-8 hover:decoration-[#0A7558] hover:text-[#0A7558]'>Volunteers</Link>
            <div className=' flex w-[90px] items-center bg-[#0A7558] rounded-full justify-center'>
                <Link href="/#campaign" className='text-sm p-1 text-white'>Donate</Link>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3.0" stroke="currentColor" className="w-3 h-3 text-white">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                </svg>
            </div>
        </div>

    </div>
  )
}

export default Navbar