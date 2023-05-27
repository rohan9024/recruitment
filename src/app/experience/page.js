"use client"

import Link from 'next/link'
import React from 'react'
import { Inter, Manrope, Raleway } from 'next/font/google';
import Image from 'next/image';
import { motion } from 'framer-motion';


const raleway = Raleway({
    weight: ['400', '500', '600', '700', '800'],
    subsets: ['latin'],
});
const inter = Inter({
    weight: ['400', '700'],
    subsets: ['latin'],
});
const manrope = Manrope({
    weight: ['400', '500', '600', '700', '800'],
    subsets: ['latin'],
});

function page() {
    return (
        <div className='flex flex-col justify-center items-center'>
            <div className='flex justify-center items-center'>

                <Link
                    href="/"
                    className='object-contain rounded-full cursor-pointer p-4 transition hover:bg-gray-300 hover:duration-150'>
                    <Image
                        src='/back.png'
                        width={25}
                        height={25}
                        alt="back icon"
                    />
                </Link>

                <h1 className={`${raleway.className} text-2xl tracking-wide font-semibold md:text-3xl text-center p-10 `} >Experience</h1>
            </div>


            {/* TCE */}
            <div className='flex flex-col justify-center items-center md:flex-row md:justify-evenly md:items-center md:space-x-10 md:my-10'>

                <motion.div
                    initial={{ x: -100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ ease: "easeOut", duration: 1 }}
                    className='md:w-1/2 flex justify-center items-center w-full'

                >
                    <Image
                        src='/tce.png'
                        width={1200}
                        height={1200}
                        alt="tce logo"
                        className='w-[500px] md:h-[500px] h-[350px] object-cover rounded-full'
                    />
                </motion.div>

                <motion.div
                    initial={{ y: -100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ ease: "easeOut", duration: 1 }}
                    className='md:w-3/5 space-y-10 w-full my-10 '
                >
                    <h1 className={`${raleway.className} text-xl tracking-wide font-bold md:text-3xl text-center    `} >Chrome Extension Developer</h1>

                    <div className={`${raleway.className} text-sm tracking-wide font-normal md:text-xl text-center w-[900px] space-y-4 `}>
                        <h1>• Built chrome extension for renowned instagram influencers, celebrities.</h1>
                        <h1>• Worked on DOM manipulation and built logic, responsiveness, mobile view.</h1>
                        <h1>• Modified HTML source code & injecting custom JavaScript</h1>
                        <h1>• Accessed local storage and cookies, web traffic</h1>
                        <h1>• Leveraged Knowledge in logic building, responsiveness, working of web browsers.</h1>
                    </div>
                    <a href="" className={`${manrope.className} flex justify-center items-center font-bold`} >
                        <h1 className='text-center text-2xl bg-blue-600 px-3 py-3 w-72 text-white rounded-lg shadow-2xl cursor-pointer'>View Certification</h1>
                    </a>
                </motion.div>
                

            </div>

            {/* Greyfeathers */}
            <div className='flex flex-col justify-center items-center md:flex-row md:justify-evenly md:items-center md:space-x-10 md:my-10'>

                <motion.div
                    initial={{ x: -100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ ease: "easeOut", duration: 1 }}
                    className='md:w-1/2 flex justify-center items-center w-full'

                >
                    <Image
                        src='/greyfeathers.jpeg'
                        width={1200}
                        height={1200}
                        alt="Greyfeathers logo"
                        className='w-[500px] md:h-[500px] h-[350px] object-cover rounded-full'
                    />
                </motion.div>

                <motion.div
                    initial={{ y: -100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ ease: "easeOut", duration: 1 }}
                    className='md:w-3/5 space-y-10 w-full my-10 '
                >
                    <h1 className={`${raleway.className} text-xl tracking-wide font-bold md:text-3xl text-center    `} >Chrome Extension Developer</h1>

                    <div className={`${raleway.className} text-sm tracking-wide font-normal md:text-xl text-center w-[900px] space-y-4 `}>
                        <h1>• Worked on development of Resource Management System.</h1>
                        <h1>• Developed frontend Modules and integrated backend.</h1>
                        <h1>• Managed the whole team and translated client requirements.</h1>
                        <h1>• Leveraged Knowledge in FastAPI (Python), React.js, MongoDB, Design, UI/UX</h1>
                    </div>
                    <a href="" className={`${manrope.className} flex justify-center items-center font-bold`} >
                        <h1 className='text-center text-2xl bg-blue-600 px-3 py-3 w-72 text-white rounded-lg shadow-2xl cursor-pointer'>View Certification</h1>
                    </a>
                </motion.div>
            </div>


        </div>
    )
}

export default page