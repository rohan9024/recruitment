"use client"

import { Inter, Manrope, Raleway } from 'next/font/google';
import Link from 'next/link';
import React, { useRef, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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


function WaitList() {
    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    const [email, setEmail] = useState()
    const [name, setName] = useState()
    const [city, setCity] = useState()
    const [collegeName, setCollegeName] = useState()


    const notifySuccess = () => toast.success('Logged in successfully', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
    });
    const notifyError = () => toast.error('Invalid email or password', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
    });

    const register = (e) => {
        e.preventDefault();
    }

    return (
        <>
            <ToastContainer
                position="top-right"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
            <div className=''>
                <div className='flex flex-col justify-center items-center w-screen h-[640px] space-y-5'>
                    <img
                        className='object-contain w-28 h-28 cursor-pointer'
                        src="/logo-3.png"
                        alt="logo" />
                    <h1 className={`${raleway.className} text-2xl font-bold`}>Register for Waitlist</h1>
                    <form className='flex flex-col justify-center items-center space-y-5'>
                        <input ref={email} type="email" placeholder="Email address" className='placeholder:text-gray-800 px-5 py-2  outline-none border border-gray-800 w-72' />
                        <input ref={name} type="text" placeholder="Full Name" className='placeholder:text-gray-800 px-5 py-2  outline-none border border-gray-800 w-72' />
                        <input ref={city} type="text" placeholder="City" className='placeholder:text-gray-800 px-5 py-2  outline-none border border-gray-800 w-72' />
                        <input ref={collegeName} type="text" placeholder="College Name" className='placeholder:text-gray-800 px-5 py-2  outline-none border border-gray-800 w-72' />
                        <div className='flex justify-center items-center w-72 bg-black text-white py-2'>
                            <button type='submit' onClick={register}>Register</button>
                        </div>
                    
                    </form>
                </div>
            </div>
        </>

    )
}

export default WaitList