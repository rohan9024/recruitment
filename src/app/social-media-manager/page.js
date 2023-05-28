import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Inter, Manrope, Raleway } from 'next/font/google';


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
        <div className='w-screen h-screen flex flex-col justify-center items-center'>
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

                <h1 className={`${raleway.className} text-2xl tracking-wide font-semibold md:text-3xl text-center p-10 `} >Social Media Manager</h1>
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

                <h1 className={`${raleway.className} text-2xl tracking-wide font-semibold md:text-3xl text-center p-10 `} >Social Media Manager</h1>
            </div>

            <h1 className='text-2xl '>Coming Soon....</h1>

            <Image
                src="/underdevelopment.avif"
                width={1200}
                height={1200}
                alt="underdevelopment image"
                className='object-contain w-[700px] h-[600px]'
            />
        </div>
    )
}

export default page