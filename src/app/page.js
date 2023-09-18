"use client"
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { Inter } from 'next/font/google';
import { Manrope } from 'next/font/google';
import { Raleway } from 'next/font/google';
import { easeOut, motion, useScroll } from "framer-motion"
import { useState } from 'react';
import Link from 'next/link';
import First from '../../components/First';
import Second from '../../components/Second';
import Third from '../../components/Third';
import Fourth from '../../components/Fourth';
import Testimonials from '../../components/Testimonials';
import Services from '../../components/Services';
import Payment from '../../components/Payment';
import Footer from '../../components/Footer';


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

const itemVariants = {
    open: {
        opacity: 1,
        y: 0,
        transition: { type: "spring", stiffness: 300, damping: 24 }
    },
    closed: { opacity: 0, y: 20, transition: { duration: 0.2 } }
};
export default function Home() {
    const [isExpanded, setIsExpanded] = useState(false);
    const router = useRouter()
    const [scrollProgress, setScrollProgress] = useState(true)
    const [menu, setMenu] = useState(false)

    const [displayReview1, setDisplayReview1] = useState(false);
    const [displayReview2, setDisplayReview2] = useState(false);
    const [displayReview3, setDisplayReview3] = useState(false);


    return (
        <div className='w-screen '>

            <section className='md:w-screen  '>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.7 }}
                    className=' flex justify-between items-center  mt-10 mx-9 md:mx-0 md:ml-20 md:mr-20'>
                    {/* Hidden on mobile screens */}
                    <div className={`${raleway.className}  hidden md:flex cursor-pointer transition ease-in-out delay-150 hover:-translate-y-2 hover:scale-105 duration-300`} >
                        <Image
                            src="/logo-3.png"
                            width={200}
                            height={200}
                            alt="logo"
                            className='object-contain'
                        />
                    </div>
                    {/* Hidden on large screens  */}

                    <div className={`${raleway.className} md:hidden flex  cursor-pointer `} >
                        <Image
                            src="/logo-3.png"
                            width={50}
                            height={50}
                            alt="logo"
                            className='h-32 w-32 object-cover'
                        />
                    </div>
                    {
                        menu ?
                            (
                                <motion.div
                                    whileTap={{ scale: 0.97 }}
                                    className='md:hidden object-contain rounded-full p-4 ' onClick={() => setMenu(false)}>
                                    <Image
                                        src="/close.png"
                                        width={20}
                                        height={20}
                                        alt="close icon"
                                        className='object-contain'
                                    />
                                </motion.div>
                            )
                            :
                            (
                                <motion.div
                                    initial={{ opacity: 0.6 }}
                                    whileHover={{
                                        scale: 2,
                                        transition: { duration: 1 },
                                    }}
                                    whileTap={{ scale: 0.9 }}
                                    whileInView={{ opacity: 1 }}
                                    className='md:hidden object-contain rounded-full p-4 ' onClick={() => setMenu(true)}>
                                    <Image
                                        src="/menu.png"
                                        width={20}
                                        height={20}
                                        alt="menu icon"
                                        className='object-contain'
                                    />
                                </motion.div>
                            )
                    }
                    <div className={`${raleway.className} hidden md:flex md:justify-evenly md:items-center  md:w-92 space-x-12`}>
                        <Link href="/development" className=' transition ease-in  hover:font-bold hover:scale-125 hover:text-black  text-gray-700  p-2  cursor-pointer'>Certifications</Link>
                        <Link href="/development" className=' transition ease-in  hover:font-bold hover:scale-125 hover:text-black  text-gray-700  p-2  cursor-pointer'>Live Projects</Link>
                        <Link href="/development" className=' transition ease-in  hover:font-bold hover:scale-125 hover:text-black  text-gray-700  p-2  cursor-pointer'>Guidance</Link>
                        <Link href="/development" className=' transition ease-in  hover:font-bold hover:scale-125 hover:text-black  text-gray-700  p-2  cursor-pointer'>Find Teammates</Link>
                        <a className='transition ease-in  hover:font-bold hover:scale-125 hover:text-black  text-gray-700  cursor-pointer p-2 '>Contact Us</a>
                    </div>

                    <div className={`${raleway.className} hidden md:flex cursor-pointer transition bg-black text-white font-bold rounded-lg px-5 py-2 ease-in-out delay-150 hover:-translate-y-2 hover:scale-105 duration-300`} >
                        <h1>Sign In</h1>
                    </div>
                </motion.div>
                <motion.nav
                    initial={false}
                    animate={menu ? "open" : "closed"}
                    className={menu ? "flex justify-center items-center" : "hidden"}
                >
                    <motion.ul
                        variants={{
                            open: {
                                clipPath: "inset(0% 0% 0% 0% round 10px)",
                                transition: {
                                    type: "spring",
                                    bounce: 0,
                                    duration: 0.7,
                                    delayChildren: 0.3,
                                    staggerChildren: 0.05
                                }
                            },
                            closed: {
                                clipPath: "inset(10% 50% 90% 50% round 10px)",
                                transition: {
                                    type: "spring",
                                    bounce: 0,
                                    duration: 0.3
                                }
                            }
                        }}
                        style={{ pointerEvents: menu ? "auto" : "none" }}
                        className='flex flex-col justify-center items-center my-10 space-y-12'
                    >
                        <motion.a variants={itemVariants} className='text-xl '>Certifications</motion.a>
                        <motion.a variants={itemVariants} className='text-xl '>Live Projects</motion.a>
                        <motion.a variants={itemVariants} className='text-xl '>Guidance</motion.a>
                        <motion.a variants={itemVariants} className='text-xl '>Platform</motion.a>

                        <motion.a variants={itemVariants} className='text-xl p-2'>Sign In</motion.a>

                    </motion.ul>
                </motion.nav>


            </section>
            {/* First Section */}
            <First />


            {/* Second Section */}
            <Second />


            {/* Third Section */}

            <Third />
            {/* Fourth Section */}

            <Fourth />


            {/* Testimonials Section */}

            <Testimonials />
            {/* Services */}

            {/* <Services /> */}
            {/* Payments */}
            <Payment />

            {/* <Footer /> */}
            <Footer />



        </div >
    )
}


