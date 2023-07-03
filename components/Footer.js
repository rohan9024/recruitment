import React, { useState } from 'react'
import { motion } from "framer-motion"
import { Manrope, Raleway } from 'next/font/google';
import Image from 'next/image';


const raleway = Raleway({
    weight: ['400', '700'],
    subsets: ['latin'],
});
const manrope = Manrope({
    weight: ['400', '700'],
    subsets: ['latin'],
});
function Footer() {
    return (
        <div className='flex flex-col bg-black text-gray-300 font-dmsans shadow-t-lg'>
            <div className='flex justify-center items-center bg-gray-200 shadow-b-2xl'>
                <div className={`${raleway.className}  cursor-pointer transition ease-in-out delay-150 hover:-translate-y-2 hover:scale-105 duration-300`} >
                    <Image
                        src="/logo-3.png"
                        width={200}
                        height={200}
                        alt="logo"
                        className='object-contain'
                    />
                </div>
            </div>
            <div className='w-4/5 mx-auto grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 my-10 text-center'>
                <h1 className='my-2 hover:cursor-pointer transition ease-in hover:font-bold hover:text-2xl hover:scale-125 '>ENGLISH(INTL)</h1>
                <h1 className='my-2 hover:cursor-pointer transition ease-in hover:font-bold hover:text-2xl hover:scale-125 '>Privacy Policy</h1>
                <h1 className='my-2 hover:cursor-pointer transition ease-in hover:font-bold hover:text-2xl hover:scale-125 '>Terms & Conditions</h1>
                <h1 className='my-2 hover:cursor-pointer transition ease-in hover:font-bold hover:text-2xl hover:scale-125 '>Newsletter</h1>
                <h1 className='my-2 hover:cursor-pointer transition ease-in hover:font-bold hover:text-2xl hover:scale-125 '>Contact</h1>
                <h1 className='my-2 hover:cursor-pointer transition ease-in hover:font-bold hover:text-2xl hover:scale-125 '>Stores</h1>
                <h1 className='my-2 hover:cursor-pointer transition ease-in hover:font-bold hover:text-2xl hover:scale-125 '>Legal & Privacy</h1>
                <h1 className='my-2 hover:cursor-pointer transition ease-in hover:font-bold hover:text-2xl hover:scale-125 '>Jobs</h1>
                <h1 className='my-2 hover:cursor-pointer transition ease-in hover:font-bold hover:text-2xl hover:scale-125 '>Follow Us</h1>
                <h1 className='my-2 hover:cursor-pointer transition ease-in hover:font-bold hover:text-2xl hover:scale-125 '>Instagram</h1>
                <h1 className='my-2 hover:cursor-pointer transition ease-in hover:font-bold hover:text-2xl hover:scale-125 '>Twitter</h1>
                <h1 className='my-2 hover:cursor-pointer transition ease-in hover:font-bold hover:text-2xl hover:scale-125 '>Cookies</h1>
            </div>
        </div>
    )
}

export default Footer