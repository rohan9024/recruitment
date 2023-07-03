import React from 'react'
import { motion } from "framer-motion"
import { Raleway } from 'next/font/google';
import Image from 'next/image';


const raleway = Raleway({
    weight: ['400', '700'],
    subsets: ['latin'],
});

function Fourth() {
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
                            src="/sideimage-3.jpg"
                            width={1700}
                            height={1700}
                            alt="sideimage"
                            className='object-contain'
                        />
                    </div>
                    <div className={`${raleway.className}  space-y-5 my-6`}>
                        <h1 className='text-2xl font-bold'>Save Time and Resources<br /></h1>
                        <h1 className='text-md font-normal'>Reduce manual tasks and paperwork, allowing your hiring team to focus on strategic decision-making and building relationships with candidates.</h1>
                    </div>
                </motion.div>
            </div>
        </>

    )
}

export default Fourth