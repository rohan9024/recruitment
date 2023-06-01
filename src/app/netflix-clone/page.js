"use client"

import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { Inter, Manrope, Raleway } from 'next/font/google';
import { motion } from "framer-motion"
import NI from "../../../assets/netflix.png"

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
        <div className='w-screen h-screen flex flex-col '>
            <div className='hidden bg-white w-full  md:flex fixed top-0 justify-center items-center'>

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

                <h1 className={`${raleway.className} text-2xl tracking-wide font-semibold md:text-3xl text-center p-10 `} >Project Details</h1>
            </div>

            <div className='md:hidden bg-white fixed top-0 w-full flex justify-center items-center p-5 space-x-3'>

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

                <h1 className={`${raleway.className} text-2xl tracking-wide font-semibold md:text-3xl text-center  `} >Project Details</h1>
            </div>


            <div className='mt-20 md:mt-10 flex md:flex-row flex-col justify-center items-center space-y-6 md:space-y-0 shadow-lg border border-gray-300 bg-gray-100 md:bg-transparent md:border-none md:shadow-none px-4 mx-4 py-12   rounded-lg'>

                <motion.div
                    initial={{ x: -100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ ease: "easeOut", duration: 1 }}
                    className='md:w-[360px] flex justify-center items-center w-full '
                >

                    <Image
                        src='/netflix.png'
                        width={1200}
                        height={1200}
                        alt="netflix logo"
                        className='w-[150px] md:w-[300px] md:h-[500px] h-[150px] object-cover md:object-contain'
                    />

                </motion.div>

                <div className='flex flex-col justify-center md:justify-normal md:items-start items-center space-y-2 md:space-y-5'>
                    <h1 className={`${manrope.className} text-3xl font-bold md:text-5xl text-center md:text-left`}>Netflix Clone</h1>
                    <h1 className={`${manrope.className} hidden md:flex font-semibold md:text-4xl text-center md:text-left`}>Unleash Your Binge-Watching Passion</h1>
                    <h1 className={`${manrope.className} text-sm  font-normal md:text-xl text-center text-gray-600 md:text-left `}>Your Personalized Streaming Experience</h1>
                </div>
            </div>

            {/* Features */}
            <div className='flex flex-col ml-5 mr-5 mt-10 space-y-3 md:space-y-5  lg:mx-10 xl:mx-96'>
                {/* title */}
                <h1 className={`${manrope.className} text-xl font-bold md:text-3xl `}>Features</h1>

                {/* Description */}
                <div className='space-y-3'>
                    <h1 className={`${manrope.className} text-sm md:tracking-wide font-normal md:text-lg text-gray-600 `}>
                        • Implemented Youtube API for playing trailers realtime on the web application and firebase for deployment. <br />
                        • Used Postman for sending requests to Movies DB API and fetched movie banners. <br />
                        • Utilized: React JS, Postman, Youtube API, Firebase <br />
                    </h1>
                </div>
            </div>


            {/* project objectives */}
            <div className='flex flex-col ml-5 mr-5 mt-10 space-y-3 md:mr-5 lg:mx-10 xl:mx-96'>
                {/* title */}
                <h1 className={`${manrope.className} text-xl font-bold md:text-3xl `}>Project Objectives</h1>

                {/* Description */}
                <div className='space-y-3'>
                    <h1 className={`${manrope.className} text-sm  font-normal md:text-lg text-gray-600 `}>
                        •	Develop a functional Netflix clone web application that closely replicates the user experience of the original Netflix platform. <br />
                        •	Implement the YouTube API to enable real-time playing of movie trailers within the web application. <br />
                        •	Utilize Firebase for seamless deployment and hosting of the Netflix clone. <br />
                        •	Integrate the Movies DB API to fetch movie banners and display them accurately within the application. <br />
                        •	Utilize React JS as the primary framework for building the user interface and managing the application's state. <br />
                        •	Implement efficient and responsive web design practices to ensure optimal performance across different devices and screen sizes. <br />
                    </h1>
                </div>
            </div>

            {/* Role */}
            <div className='flex flex-col ml-5 mr-5 mt-10 space-y-3 md:mr-5 lg:mx-10 xl:mx-96'>
                {/* title */}
                <h1 className={`${manrope.className} text-xl font-bold md:text-3xl `}>Role</h1>

                {/* Description */}
                <div className='space-y-5'>
                    <h1 className={`${manrope.className} text-sm  font-normal md:text-lg text-gray-600 `}>
                        Full Stack Developer
                    </h1>
                </div>
            </div>


            {/* Project Challenges */}
            <div className='flex flex-col ml-5  mr-5 mt-10 space-y-3 md:mr-5 lg:mx-10 xl:mx-96'>
                {/* title */}
                <h1 className={`${manrope.className} text-xl font-bold md:text-3xl `}>Project Challenges</h1>

                {/* Description */}
                <div className='space-y-5'>
                    <h1 className={`${manrope.className} text-sm  font-normal md:text-lg text-gray-600 `}>
                        •	API Integration: Integrating the YouTube API and Movies DB API seamlessly into the application, handling authentication, and effectively retrieving and displaying movie data can pose technical challenges. <br />
                        •	Real-Time Trailer Playback: Implementing real-time playing of movie trailers using the YouTube API may require handling video buffering, playback controls, and ensuring smooth streaming across different devices and network conditions. <br />
                        •	Design Consistency: Replicating the visual design and user interface of Netflix while maintaining responsiveness and consistency across various screen sizes and browsers can be challenging. <br />
                    </h1>
                </div>
            </div>

            {/* Implementation */}
            <div className='flex flex-col ml-5 mr-5 mt-10 space-y-3 md:mr-5 lg:mx-10 xl:mx-96'>
                {/* title */}
                <h1 className={`${manrope.className} text-xl font-bold md:text-3xl `}>Implementation</h1>

                {/* Description */}
                <div className='space-y-5'>
                    <Image
                        src={NI}
                        width={800}
                        height={457}
                        alt="Netflix Clone Image"
                        className='object-contain  '
                    />
                </div>
            </div>

            {/* Tech Stack */}
            <div className='flex flex-col ml-5 mr-5 mt-10 space-y-3 md:mr-5 lg:mx-10 xl:mx-96 md:mt-32'>
                {/* title */}
                <h1 className={`${manrope.className} text-xl font-bold md:text-3xl `}>Tech Stack</h1>

                {/* Description */}
                <div className='space-y-3'>
                    <h1 className={`${manrope.className} text-sm  font-normal md:text-lg text-gray-600 `}>React, Movies DB API, Firebase</h1>
                </div>
            </div>



            {/* Github Repository */}
            <div className='flex flex-col ml-5 mr-5 mt-10 space-y-3 md:mr-5 lg:mx-10 xl:mx-96 md:mt-10'>
                {/* title */}
                <h1 className={`${manrope.className} text-xl font-bold md:text-3xl `}>Github Repository</h1>

                {/* Description */}
                <div className='space-y-3 '>
                    <a href="https://github.com/rohan9024/netflix-clone" className={`${manrope.className} text-sm  font-normal md:text-lg text-blue-600 underline`}>https://github.com/rohan9024/netflix-clone</a>
                </div>
            </div>


            {/* Deployment */}
            <div className='flex flex-col ml-5 mr-5 mt-10 space-y-3 md:mr-5 lg:mx-10 xl:mx-96 md:mt-10'>
                {/* title */}
                <h1 className={`${manrope.className} text-xl font-bold md:text-3xl `}>Deployment</h1>

                {/* Description */}
                <div className='space-y-3'>
                    <a href="https://netflix-clone-27ecb.firebaseapp.com/" className={`${manrope.className} text-sm  font-normal md:text-lg text-blue-600 underline`}>https://netflix-clone-27ecb.firebaseapp.com/</a>
                </div>
            </div>


            {/* Browse other projects */}
            <div className='flex justify-between items-center mx-5 mt-10 md:mr-5 lg:mx-10 xl:mx-96 md:mt-16'>

                <Link
                    href="/spotify-clone"
                    className='flex flex-col md:flex-row justify-center items-center p-2'>
                    <div
                        className='object-contain rounded-full cursor-pointer p-4 transition hover:bg-gray-300 hover:duration-150'>
                        <Image
                            src='/left.png'
                            width={25}
                            height={25}
                            alt="left icon"
                        />
                    </div>

                    <h1 className={`${raleway.className} text-md font-bold md:text-3xl`} >Spotify Clone</h1>
                </Link>

                <Link
                    href="/social-media-manager"
                    className='hidden md:flex flex-col md:flex-row justify-center items-center p-2'>
                    <h1 className={`${raleway.className} text-md font-bold md:text-3xl  `} >Social Media Manager</h1>

                    <div
                        className='object-contain rounded-full cursor-pointer p-4 transition hover:bg-gray-300 hover:duration-150'>
                        <Image
                            src='/right.png'
                            width={25}
                            height={25}
                            alt="right icon"
                        />
                    </div>

                </Link>
                <Link
                    href="/social-media-manager"
                    className='md:hidden flex flex-col md:flex-row justify-center items-center p-2'>
                    <div
                        className='object-contain rounded-full cursor-pointer p-4 transition hover:bg-gray-300 hover:duration-150'>
                        <Image
                            src='/right.png'
                            width={25}
                            height={25}
                            alt="right icon"
                        />
                    </div>

                    <h1 className={`${raleway.className} text-md font-bold md:text-3xl  `} >Social Media Manager</h1>
                </Link>
            </div>



        </div >
    )
}

export default page