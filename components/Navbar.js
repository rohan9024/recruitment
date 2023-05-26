import { Inter, Manrope, Raleway } from 'next/font/google';
import React from 'react'
import { motion } from "framer-motion"


const raleway = Raleway({
  weight: ['400', '700'],
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
function Navbar() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className=' flex justify-center  items-center space-x-4 mt-10 md:p-10 md:ml-20 md:mr-20'>
      <div className={`${raleway.className} text-xl md:text-3xl cursor-pointer transition ease-in-out delay-150 hover:-translate-y-2 hover:scale-105 duration-300`} >
        <h1 className='text-center'>ROHAN WANDRE</h1>
      </div>
      <div className={`${manrope.className} hidden md:flex md:justify-evenly md:items-center md:font-medium md:w-64 `}>
        <a href="https://drive.google.com/file/d/1OWOfKZ8IqDJxffsywv-cxXMT_2uPmtxB/view?usp=sharing" className='transition ease-in delay-150 hover:text-gray-300 text-gray-500 duration-300 cursor-pointer '>Resume</a>
        <h1 className=' transition ease-in delay-150 hover:text-gray-300  text-gray-500 duration-300 cursor-pointer'>About me</h1>
      </div>
    </motion.div>
  )
}

export default Navbar