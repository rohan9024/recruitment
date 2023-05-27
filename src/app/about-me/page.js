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

        <h1 className={`${raleway.className} text-3xl tracking-wide font-semibold md:text-3xl  text-center p-10 `} >About Me</h1>
      </div>

      <div className='flex justify-evenly items-center space-x-10 my-10'>
        <motion.div
          initial={{ x: -300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ ease: "easeOut", duration: 1 }}
          className='w-1/2 space-y-4'
        >
       <h1 className={`${raleway.className} text-5xl tracking-wide font-bold md:text-3xl   `} >Hey everyone👋 I'm Rohan Wandre</h1>
       <h1 className={`${raleway.className} text-3xl tracking-wide font-semibold md:text-xl     `} >Technical Head at IEEE SIES GST | React Native Developer | Full Stack Developer | Open Source</h1>
        </motion.div>

        <motion.div
          initial={{ x: -300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ ease: "easeOut", duration: 1 }}
          className='w-1/2 flex justify-center items-center'

        >
          <Image
            src='/me.jpg'
            width={500}
            height={500}
            alt="back icon"
            className='w-[500px] h-[500px] object-cover '
          />
        </motion.div>
      </div>
    </div>
  )
}

export default page