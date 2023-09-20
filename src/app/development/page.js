"use client"

import React from 'react'
import { motion } from "framer-motion"
import { Raleway } from 'next/font/google';
import Image from 'next/image';


const raleway = Raleway({
    weight: ['400', '700'],
    subsets: ['latin'],
});

function page() {
    return (
        <>
            {/* Hidden on large screens */}
            <div className='md:hidden flex flex-col mx-10 mt-20'>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.7 }}
                    className='flex flex-col items-center space-y-5'>
                    <div className=''>
                        <Image
                            src="/third.gif"
                            width={1700}
                            height={1700}
                            alt="sideimage"
                            className='object-contain'
                        />
                    </div>
                    <div className={`${raleway.className}  space-y-5 my-6`}>
                        <h1 className='text-2xl font-bold'>Learn by Doing<br /></h1>
                        <h1 className='text-md font-normal'>Turn Learning into Action with Internships and Certifications</h1>
                    </div>
                </motion.div>
            </div>

            {/* Hidden on mobile screens */}
            <div className='hidden md:flex flex-col mt-20 mx-32'>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.7 }}
                    className='flex items-center space-x-12 md:space-x-28 space-y-12 '>
                    <div className='w-1/2'>
                        <Image
                            src="/third.gif"
                            width={1700}
                            height={1700}
                            alt="sideimage"
                            className='object-contain'
                        />
                    </div>
                    <div className={`${raleway.className} w-1/2 space-y-12`}>
                        <h1 className=' text-6xl font-bold'>Learn by Doing<br /></h1>
                        <h1 className='text-2xl font-normal'>Turn Learning into Action with Internships and Certifications</h1>
                    </div>
                </motion.div>
            </div>
        </>

    )
}

export default page