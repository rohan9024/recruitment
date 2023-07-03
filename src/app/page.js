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

            <section className='w-screen h-screen'>

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
                    <div className={`${raleway.className} hidden md:flex md:justify-evenly md:items-center md:font-bold md:w-92 space-x-12`}>
                        <a className='transition ease-in  hover:font-bold hover:scale-125 hover:text-black text-gray-700  cursor-pointer  p-2 '>Platform</a>
                        <Link href="/" className=' transition ease-in  hover:font-bold hover:scale-125 hover:text-black  text-gray-700  p-2  cursor-pointer'>Features</Link>
                        <Link href="/" className=' transition ease-in  hover:font-bold hover:scale-125 hover:text-black  text-gray-700  p-2  cursor-pointer'>Company</Link>
                        <Link href="/" className=' transition ease-in  hover:font-bold hover:scale-125 hover:text-black  text-gray-700  p-2  cursor-pointer'>Blogs</Link>
                        <a className=' transition ease-in  hover:font-bold hover:scale-125 hover:text-black  text-gray-700  cursor-pointer p-2 '>Contact Us</a>
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
                        <motion.a variants={itemVariants} className='text-xl '>Platform</motion.a>
                        <Link href='/'>
                            <motion.li variants={itemVariants} className='text-xl p-2'>Features</motion.li>
                        </Link>
                        <Link href='/'>
                            <motion.li variants={itemVariants} className='text-xl p-2'>Company</motion.li>
                        </Link>
                        <Link href='/'>
                            <motion.li variants={itemVariants} className='text-xl p-2'>Blogs</motion.li>
                        </Link>
                        <motion.a variants={itemVariants} className='text-xl p-2'>Contact Us</motion.a>
                        <motion.a variants={itemVariants} className='text-xl p-2'>Sign In</motion.a>

                    </motion.ul>
                </motion.nav>


                {/* First Section */}
                <First />

            </section>

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
            <div className='flex justify-center items-center mt-20 '>
            <div className='flex flex-col md:justify-center md:items-center'>
                <div className={`${raleway.className} space-y-6  `}>
                    <h1 className='text-2xl md:text-6xl font-bold  text-center'>Choose your plan</h1>
                    <h1 className='hidden md:flex text-lg md:text-2xl font-medium text-center'>14 days unlimited free plan. No contract or credit card required.</h1>
                    <h1 className='md:hidden text-lg md:text-2xl font-medium text-center'>14 days unlimited free plan. <br /> No contract or credit card required.</h1>
                </div>

                <div className='flex md:flex-row flex-col justify-center items-center my-20 md:mx-32 md:space-x-12 space-y-12 md:space-y-0'>

                    {/* Free Plan */}
                    <div>
                        {/* Overlay on the image */}
                        <div className={`${manrope.className} z-10 absolute flex flex-col text-white  ml-8 mt-5`}>
                            <h1 className='text-4xl font-thin'>#1</h1>
                            <h1 className='text-5xl font-semibold '>Entry</h1>
                        </div>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.7 }}
                            className='flex flex-col items-center w-[350px] h-[560px]  md:max-w-[400px] md:min-w-[400px] md:h-[710px] border border-gray-300 bg-gray-200  shadow-lg rounded-lg'>
                            <div className=' mx-2 my-2'>
                                <Image
                                    src="/cards-1.webp"
                                    width={390}
                                    height={100}
                                    alt="cards"
                                    className='h-44 object-cover rounded-lg'
                                />
                            </div>
                            <div className={`${raleway.className} space-y-10`}>
                                <h1 className='text-5xl md:text-6xl font-bold text-center md:my-10 my-5'>FREE <br /></h1>
                                <section className='flex flex-col space-y-5 mx-10 text-md md:text-lg font-normal '>
                                    <section className='flex space-x-4'>
                                        <Image
                                            src="/green-tick.png"
                                            width={30}
                                            height={30}
                                            alt="tick"
                                            className=' object-contain rounded-lg'
                                        />
                                        <h1>Limited job postings per month</h1>
                                    </section>
                                    <section className='flex space-x-4'>
                                        <Image
                                            src="/green-tick.png"
                                            width={30}
                                            height={30}
                                            alt="tick"
                                            className='object-contain rounded-lg '
                                        />
                                        <h1>Access to a restricted resume database</h1>
                                    </section>
                                    <section className='flex space-x-4'>
                                        <Image
                                            src="/green-tick.png"
                                            width={30}
                                            height={30}
                                            alt="tick"
                                            className='object-contain rounded-lg '
                                        />
                                        <h1>Basic applicant tracking system functionality</h1>
                                    </section>
                                    <section className='flex space-x-4'>
                                        <Image
                                            src="/green-tick.png"
                                            width={30}
                                            height={30}
                                            alt="tick"
                                            className='object-contain rounded-lg '
                                        />
                                        <h1>Standard customer support</h1>
                                    </section>
                                </section>
                            </div>
                        </motion.div>
                    </div>

                    {/* Standard Plan */}
                    <div>
                        {/* Overlay on the image */}
                        <div className={`${manrope.className} z-10 absolute flex flex-col text-white  ml-10 mt-20`}>
                            <h1 className=' text-4xl font-thin'>#2</h1>
                            <h1 className='text-5xl font-semibold '>Standard</h1>
                        </div>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.7 }}
                            className='flex flex-col items-center  md:max-w-[400px] md:min-w-[400px] md:h-[710px] border border-gray-300 bg-gray-200  shadow-lgtext-black rounded-lg'>
                            <div className=' mx-2 my-2'>
                                <Image
                                    src="/cards-2.webp"
                                    width={390}
                                    height={100}
                                    alt="cards"
                                    className='h-44 object-cover rounded-lg'
                                />
                            </div>
                            <div className={`${raleway.className}  `}>
                                <div className='flex justify-center items-center md:my-10 my-5 space-x-4'>
                                    <h1 className={`${manrope.className} text-5xl md:text-6xl font-bold `}>$29<br /></h1>
                                    <h1 className='font-normal text-gray-200'>/mo<br /></h1>
                                </div>
                                <section className='flex flex-col space-y-5 mx-10'>
                                    <section className='flex text-lg font-normal space-x-4'>
                                        <Image
                                            src="/green-tick.png"
                                            width={30}
                                            height={30}
                                            alt="tick"
                                            className='object-contain rounded-lg'
                                        />
                                        <h1>Priority customer support</h1>
                                    </section>
                                    <section className='flex text-lg font-normal space-x-4'>
                                        <Image
                                            src="/green-tick.png"
                                            width={30}
                                            height={30}
                                            alt="tick"
                                            className='object-contain rounded-lg '
                                        />
                                        <h1>Enhanced candidate screening options</h1>
                                    </section>
                                    <section className='flex text-lg font-normal space-x-4'>
                                        <Image
                                            src="/green-tick.png"
                                            width={30}
                                            height={30}
                                            alt="tick"
                                            className='object-contain rounded-lg '
                                        />
                                        <h1>Advanced applicant tracking system capabilities</h1>
                                    </section>
                                    <section className='flex text-lg font-normal space-x-4'>
                                        <Image
                                            src="/green-tick.png"
                                            width={30}
                                            height={30}
                                            alt="tick"
                                            className='object-contain rounded-lg '
                                        />
                                        <h1>Access to a larger resume database</h1>
                                    </section>
                                    <section className='flex text-lg font-normal space-x-4'>
                                        <Image
                                            src="/green-tick.png"
                                            width={30}
                                            height={30}
                                            alt="tick"
                                            className='object-contain rounded-lg '
                                        />
                                        <h1>Increased job posting limits</h1>
                                    </section>
                                </section>
                            </div>
                        </motion.div>
                    </div>

                    {/* Premium Plan */}
                    <div>
                        {/* Overlay on the image */}
                        <div className={`${manrope.className} z-10 absolute flex flex-col text-white  ml-10 mt-5`}>
                            <h1 className=' text-4xl font-thin'>#3</h1>
                            <h1 className='text-5xl font-semibold '>Premium</h1>
                        </div>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.7 }}
                            className='flex flex-col items-center  md:max-w-[400px] md:min-w-[400px] md:h-[710px] border border-gray-300 bg-gray-200  shadow-lgtext-black rounded-lg'>
                            <div className=' mx-2 my-2'>
                                <Image
                                    src="/cards-3.webp"
                                    width={390}
                                    height={100}
                                    alt="cards"
                                    className='h-44 object-cover rounded-lg'
                                />
                            </div>
                            <div className={`${raleway.className}`}>
                                <div className='flex justify-center items-center md:my-10 my-5 space-x-4'>
                                    <h1 className={`${manrope.className} text-5xl md:text-6xl font-bold `}>$59<br /></h1>
                                    <h1 className='font-normal text-gray-200'>/mo<br /></h1>
                                </div>

                                <section className='flex flex-col space-y-5 mx-10'>
                                    <section className='flex text-lg font-normal space-x-4'>
                                        <Image
                                            src="/green-tick.png"
                                            width={30}
                                            height={30}
                                            alt="tick"
                                            className='object-contain rounded-lg '
                                        />
                                        <h1>Dedicated customer support</h1>
                                    </section>
                                    <section className='flex text-lg font-normal space-x-4'>
                                        <Image
                                            src="/green-tick.png"
                                            width={30}
                                            height={30}
                                            alt="tick"
                                            className='object-contain rounded-lg '
                                        />
                                        <h1>Custom branding options</h1>
                                    </section>
                                    <section className='flex text-lg font-normal space-x-4'>
                                        <Image
                                            src="/green-tick.png"
                                            width={30}
                                            height={30}
                                            alt="tick"
                                            className='object-contain rounded-lg '
                                        />
                                        <h1>Integration with third-party HR tools</h1>
                                    </section>
                                    <section className='flex text-lg font-normal space-x-4'>
                                        <Image
                                            src="/green-tick.png"
                                            width={30}
                                            height={30}
                                            alt="tick"
                                            className='object-contain rounded-lg '
                                        />
                                        <h1>Advanced analytics and reporting</h1>
                                    </section>
                                    <section className='flex text-lg font-normal space-x-4'>
                                        <Image
                                            src="/green-tick.png"
                                            width={30}
                                            height={30}
                                            alt="tick"
                                            className='object-contain rounded-lg '
                                        />
                                        <h1>Access to a comprehensive resume database</h1>
                                    </section>
                                    <section className='flex text-lg font-normal space-x-4'>
                                        <Image
                                            src="/green-tick.png"
                                            width={30}
                                            height={30}
                                            alt="tick"
                                            className='object-contain rounded-lg '
                                        />
                                        <h1>Unlimited job postings</h1>
                                    </section>
                                </section>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>


            {/* <Footer /> */}
            <Footer />



        </div >
    )
}


