import React from 'react'
import { motion } from "framer-motion"
import { Raleway } from 'next/font/google';
import Image from 'next/image';


const raleway = Raleway({
    weight: ['400', '700'],
    subsets: ['latin'],
});
function First() {
    return (
        <>
        <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
        className='lg:flex-row flex-col flex justify-center lg:justify-normal items-center space-y-4 md:space-y-12 lg:space-x-32 lg:space-y-12  lg:mx-28 mx-10 mt-10 lg:mt-20'>
        <div className='hidden lg:flex lg:w-1/2'>
            <Image
                src="/first.gif"
                width={700}
                height={800}
                alt="sideimage"
                className='object-contain'
            />
        </div>
        <div className='lg:hidden flex'>
            <Image
                src="/first.gif"
                width={700}
                height={800}
                alt="sideimage"
                className=' object-contain'
            />
        </div>
        <div className={`${raleway.className} lg:w-1/2 lg:space-y-12 space-y-3 `}>
            <h1 className=' text-2xl md:text-5xl lg:text-6xl font-bold tracking-wide'>Experience Matters</h1>
            <h1 className='text-lg md:text-2xl lg:text-2xl font-normal'>Internships, Certifications, and Real Projects to Launch Your Career</h1>
        </div>

    </motion.div>

    </>
    )
}

export default First