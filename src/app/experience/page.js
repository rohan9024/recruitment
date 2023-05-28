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
            <div className='hidden md:flex justify-center items-center'>

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

            <div className='md:hidden flex justify-center items-center'>

                <Link
                    href="/"
                    className='object-contain rounded-full cursor-pointer p-2 transition hover:bg-gray-300 hover:duration-150'>
                    <Image
                        src='/back.png'
                        width={20}
                        height={20}
                        alt="back icon"
                    />
                </Link>

                <h1 className={`${raleway.className} text-2xl tracking-wide font-semibold md:text-3xl text-center p-10 `} >Experience</h1>
            </div>
            {/* TCE */}
            <div className='flex flex-col justify-center items-center md:flex-row md:justify-evenly md:items-center md:space-x-10 md:my-10 my-4 '>

                <motion.div
                    initial={{ x: -100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ ease: "easeOut", duration: 1 }}
                    className='md:w-1/3 flex justify-center items-center w-full'
                >
                    {/* <Image
                        src='/tce.png'
                        width={1200}
                        height={1200}
                        alt="tce logo"
                        className='w-[150px] md:w-[500px] md:h-[500px] h-[150px] object-cover '
                    /> */}
                    <Image
                        src='/tce.png'
                        width={1200}
                        height={1200}
                        alt="tce logo"
                        className='w-[150px] md:w-[300px] md:h-[500px] h-[150px] object-cover md:object-contain'
                    />

                </motion.div>

                <motion.div
                    initial={{ y: -100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ ease: "easeOut", duration: 1 }}
                    className='md:w-2/3 md:space-y-10 space-y-7 w-full my-10 '
                >
                    <h1 className={`${manrope.className} text-xl tracking-wide font-bold md:text-3xl text-center`} >Chrome Extension Developer</h1>

                    <div className={`${manrope.className} text-sm tracking-wide  font-normal md:text-xl text-left md:w-[900px] w-[350px] md:ml-28 space-y-4 `}>
                        <h1>• Built chrome extension for renowned instagram influencers, celebrities.</h1>
                        <h1>• Worked on DOM manipulation and built logic, responsiveness, mobile view.</h1>
                        <h1>• Modified HTML source code & injecting custom JavaScript</h1>
                        <h1>• Accessed local storage and cookies, web traffic</h1>
                        <h1>• Leveraged Knowledge in logic building, responsiveness, working of web browsers.</h1>
                    </div>
                    <div className='flex justify-evenly items-center'>
                        <a href="https://drive.google.com/file/d/1J1uzk0AXaJcjDKkAmMMNYH6lyQQYiv1y/view?usp=sharing" className={`${manrope.className} flex justify-center items-center font-bold `} >
                            <h1 className='text-center md:text-2xl text-sm bg-blue-600 px-3 py-3 md:w-72 text-white rounded-lg shadow-lg cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-blue-700 duration-300'>View Certification</h1>
                        </a>
                        <a href="https://drive.google.com/file/d/1iVeRuvKFFJPYrAWXBzWr7glqHekVFP_E/view?usp=sharing" className={`${manrope.className} flex justify-center items-center font-normal`} >
                            <h1 className='text-center md:text-2xl text-sm border border-gray-400 px-3 py-3 md:w-72 text-black rounded-lg shadow-lg cursor-pointer  transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-gray-300 duration-300'>Implementation</h1>
                        </a>
                    </div>

                </motion.div>

            </div>
            <div className='flex flex-col justify-center items-center md:flex-row md:justify-evenly md:items-center md:space-x-10 md:my-10 my-4 '>

                <motion.div
                    initial={{ x: -100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ ease: "easeOut", duration: 1 }}
                    className='md:w-1/3 flex justify-center items-center w-full'
                >
                    <Image
                        src='/tce.png'
                        width={1200}
                        height={1200}
                        alt="tce logo"
                        className='w-[150px] md:w-[300px] md:h-[500px] h-[150px] object-cover md:object-contain'
                    />

                </motion.div>

                <motion.div
                    initial={{ y: -100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ ease: "easeOut", duration: 1 }}
                    className='md:w-2/3 md:space-y-10 space-y-7 w-full my-10 '
                >
                    <h1 className={`${manrope.className} text-xl tracking-wide font-bold md:text-3xl text-center`} >Full Stack Developer</h1>

                    <div className={`${manrope.className} text-sm tracking-wide  font-normal md:text-xl text-left md:w-[900px] w-[350px] md:ml-28 space-y-4 `}>
                        <h1>• Made a web/mobile app for celebrities managing their social media <br /> accounts and stored data on Firebase Firestore.</h1>
                        <h1>• Used Facebook's Graph API for fetching and authentication of Instagram users.</h1>
                        <h1>• Implemented Comments Monitoring System.</h1>
                        <h1>• Added Auto Posting functionality on scheduled time.</h1>
                        <h1>• Utilized: React JS, Firebase, Graph API, Expo Go, React Native, Redux.</h1>
                    </div>
                    <div className='flex justify-evenly items-center'>
                        <a href="https://drive.google.com/file/d/1NeSqOoGyy0505lPxIu8R9PpjmB_8FMNn/view?usp=sharing" className={`${manrope.className} flex justify-center items-center font-bold `} >
                            <h1 className='text-center md:text-2xl text-sm bg-blue-600 px-3 py-3 md:w-72 text-white rounded-lg shadow-lg cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-blue-700 duration-300'>View Certification</h1>
                        </a>
                        <Link href="/social-media-manager" className={`${manrope.className} flex justify-center items-center font-normal`} >
                            <h1 className='text-center md:text-2xl text-sm border border-gray-400 px-3 py-3 md:w-72 text-black rounded-lg shadow-lg cursor-pointer  transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-gray-300 duration-300'>Implementation</h1>
                        </Link>
                    </div>

                </motion.div>

            </div>
            {/* Greyfeathers */}
            <div className='flex flex-col justify-center items-center md:flex-row md:justify-evenly md:items-center md:space-x-10 md:my-10 my-4'>

                <motion.div
                    initial={{ x: -100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ ease: "easeOut", duration: 1 }}
                    className='md:w-1/3 flex justify-center items-center w-full'
                >
                    <Image
                        src='/greyfeathers.jpeg'
                        width={1200}
                        height={1200}
                        alt="Greyfeathers logo"
                        className='w-[300px] md:w-[300px] md:h-[500px] h-[150px] object-cover  md:object-contain'

                    />
                </motion.div>

                <motion.div
                    initial={{ y: -100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ ease: "easeOut", duration: 1 }}
                    className='md:w-2/3 space-y-10 w-full my-10 '
                >
                    <h1 className={`${manrope.className} text-xl tracking-wide font-bold md:text-3xl text-center`} >Frontend Developer</h1>

                    <div className={`${manrope.className} text-sm tracking-wide font-normal md:text-xl text-left md:w-[900px] md:ml-28 w-[350px] space-y-4 `}>
                        <h1>• Worked on development of Resource Management System.</h1>
                        <h1>• Developed frontend Modules and integrated backend.</h1>
                        <h1>• Managed the whole team and translated client requirements.</h1>
                        <h1>• Leveraged Knowledge in FastAPI (Python), React.js, MongoDB, Design, UI/UX</h1>
                    </div>

                    <div className='flex justify-evenly items-center '>
                        <a href="https://drive.google.com/file/d/15NwaqkpFaybgmZaC3qMO_gW09-C5CW9P/view?usp=sharing" className={`${manrope.className} flex justify-center items-center font-bold`} >
                            <h1 className='text-center md:text-2xl text-sm  bg-blue-600 px-3 py-3 md:w-72 text-white rounded-lg shadow-lg cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-blue-700 duration-300'>View Certification</h1>
                        </a>
                        <a href="https://drive.google.com/file/d/1J1uzk0AXaJcjDKkAmMMNYH6lyQQYiv1y/view?usp=sharing" className={`${manrope.className} flex justify-center items-center font-normal`} >
                            <h1 className='text-center md:text-2xl text-sm  border border-gray-400 px-3 py-3 md:w-72 text-black rounded-lg shadow-lg cursor-pointer  transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-gray-300 duration-300'>Implementation</h1>
                        </a>
                    </div>
                </motion.div>
            </div>

        </div>
    )
}

export default page