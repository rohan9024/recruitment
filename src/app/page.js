"use client"

import Image from 'next/image'
import { Inter } from 'next/font/google';
import { Manrope } from 'next/font/google';
import { Raleway } from 'next/font/google';
import netflix from "../../assets/netflix.png";
import spotify from "../../assets/spotify.png";
import firebase from "../../assets/firebase.png";
import react from "../../assets/react.png";
import postman from "../../assets/postman.png";
import ganache from "../../assets/ganache.png";
import newsfetcher from "../../assets/newsfetcher2.png";
// import ettara from "../../assets/ettara.png";
import mockup from "../../assets/mockup.png";
import nextjs from "../../assets/nextjs.png";
import aws from "../../assets/aws.png";
import spotifyAPI from "../../assets/spotifyAPI.png";
import fastapi from "../../assets/fastapi.png";
import smm from "../../assets/smm.png";
import ig from "../../assets/ig.png";
import fb from "../../assets/fb.png";
import smm2 from "../../assets/smm2.jpg";
import d3 from "../../assets/d3.jpg";
import bustrackingMockup from "../../assets/bustrackingMockup.png";
import moviesdbapi from "../../assets/moviesdbapi.svg";
// import react from "../../assets/react.png";
import { easeOut, motion } from "framer-motion"
import { useState } from 'react';

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

export default function Home() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className='w-screen h-screen'>
      {/* <div className='w-full flex justify-between items-center md:p-10 md:ml-20 md:mr-20'>
        <div className={`${raleway.className} text-3xl`} >
          <h1>ROHAN WANDRE</h1>
        </div>
        <div className={`${manrope.className} flex justify-evenly items-center font-medium w-64`}>
          <h1>Resume</h1>
          <h1>About me</h1>
        </div>
      </div> */}
      <div className=' flex justify-center items-center mt-10 md:p-10 md:ml-20 md:mr-20'>
        <div className={`${raleway.className} text-2xl md:text-3xl cursor-pointer transition ease-in-out delay-150 hover:-translate-y-2 hover:scale-105 duration-300`} >
          <h1 className='text-center'>ROHAN WANDRE</h1>
        </div>
        <div className={`${manrope.className} hidden md:flex justify-evenly items-center font-medium md:w-64`}>
          <h1 className='transition ease-in delay-150 hover:text-gray-300 text-gray-500 duration-300 cursor-pointer '>Resume</h1>
          <h1 className=' transition ease-in delay-150  hover:text-gray-300  text-gray-500 duration-300 cursor-pointer'>About me</h1>
        </div>
      </div>
      <div className={`${manrope.className} flex flex-col space-y-8 md:ml-44 md:mr-44 md:mt-52 mt-36 ml-4 mr-4`}>
        <h1 className='font-medium md:text-2xl text-2xl text-gray-500'>Hi, I'm Rohan,</h1>
        <h1 className='font-bold md:text-4xl text-3xl m-auto'> A Software Engineer
          based in Mumbai.
          I develop applications that
          help us get more out of
          life and work.</h1>
        <h1 className='font-medium md:text-2xl text-blue-500 text-xl w-64 md:w-full '>Currently studying at SIES Graduate School of Technology</h1>
      </div>
      <div className={`${manrope.className} flex flex-col justify-center items-center space-y-12 md:ml-44 md:mr-44 md:mt-64 mt-20 `}>
        <h1 className='font-bold text-4xl'>Latest Work</h1>


        {/* Netflix clone */}
        <div className='md:flex md:flex-row flex flex-col border border-gray-100 rounded-lg shadow-2xl md:w-[1140px] md:h-[489px] w-[300px] h-[550px] hover:border-2 hover:border-blue-500 hover:ease-in-out '>
          <Image
            src={netflix}
            // width={667}
            // height={457}
            alt="Netflix Clone"
            // cover="true"
            // className='object-cover w-[400px] h-[300px] md:min-h-[457px] md:min-w-[667px] md:w-3/4 '
            className='object-cover w-[400px] h-[300px] md:min-h-[488px]  md:w-3/4 '
          />
          <div className={`${raleway.className} flex flex-col ml-10 mr-10 md:w-1/4 justify-center space-y-7 mt-5`}>

            <h1 className='font-medium md:text-lg text-blue-500'>API | WEB DEVELOPMENT</h1>
            <h1 className='font-medium text-2xl md:text-4xl'>Netflix Clone</h1>
            <div className='flex justify-start space-x-4'>
              <Image
                src={firebase}
                width={30}
                height={30}
                alt="firebase icon"
                className='object-contain rounded-full'
              />
              <Image
                src={react}
                width={30}
                height={30}
                alt="react icon"
                className='object-contain rounded-full'
              />
              <Image
                src={moviesdbapi}
                width={30}
                height={30}
                alt="movies db api icon"
                className='object-contain rounded-full'
              />
              <Image
                src={postman}
                width={30}
                height={30}
                alt="postman icon"
                className='object-contain rounded-full'
              />
            </div>

            <div className='flex cursor-pointer '>
              <h1 className='font-medium md:text-xl '>View Repository</h1>
            </div>
            {/* {
              isExpanded && (
                <motion.div
                  initial={{ x: 0 }}
                  animate={{ ease: easeOut, x: [0, 0.3, 0.5, 0.7, 1] }}
                  transition={{ duration: 6 }}
                  className='bg-blue-500 h-[4px] w-[200px]' />
              )
            } */}


          </div>
        </div>


        {/* News Fetcher */}
        <div className='md:flex md:flex-row flex flex-col border border-gray-100 rounded-lg shadow-2xl md:w-[1140px] md:h-[489px] w-[300px] h-[550px] hover:border-2 hover:border-blue-500 hover:ease-in-out '>
          <Image
            src={newsfetcher}
            // width={667}
            // height={457}
            alt="Newsfetcher"
            // cover="true"
            // className='object-cover w-[400px] h-[300px] md:min-h-[457px] md:min-w-[667px] md:w-3/4 '
            className='object-cover w-[400px] h-[300px] md:min-h-[488px]  md:w-3/4 '
          />
          <div className={`${raleway.className} flex flex-col ml-10 mr-10 md:w-1/4 justify-center space-y-7 mt-5`}>

            <h1 className='font-medium md:text-lg text-blue-500'> WEB DEVELOPMENT</h1>
            <h1 className='font-medium text-2xl md:text-4xl'>News Fetcher</h1>
            <div className='flex justify-start space-x-4'>
              <Image
                src={fastapi}
                width={90}
                height={100}
                alt="fastapi icon"
                className='object-contain rounded-full'
              />
              <Image
                src={react}
                width={30}
                height={30}
                alt="react icon"
                className='object-contain rounded-full'
              />
              <Image
                src={aws}
                width={30}
                height={30}
                alt="AWS icon"
                className='object-contain rounded-full'
              />
              <Image
                src={postman}
                width={30}
                height={30}
                alt="postman icon"
                className='object-contain rounded-full'
              />
            </div>

            <div className='flex cursor-pointer '>
              <h1 className='font-medium md:text-xl '>View Repository</h1>
            </div>
            {/* {
              isExpanded && (
                <motion.div
                  initial={{ x: 0 }}
                  animate={{ ease: easeOut, x: [0, 0.3, 0.5, 0.7, 1] }}
                  transition={{ duration: 6 }}
                  className='bg-blue-500 h-[4px] w-[200px]' />
              )
            } */}


          </div>
        </div>

        {/* Social Media Manager */}
        <div className='md:flex md:flex-row flex flex-col border border-gray-100 rounded-lg shadow-2xl md:w-[1140px] md:h-[489px] w-[300px] h-[580px] hover:border-2 hover:border-blue-500 hover:ease-in-out '>
          <Image
            src={smm2}
            // width={667}
            // height={457}
            alt="Social Media Manager"
            // cover="true"
            // className='object-cover w-[400px] h-[300px] md:min-h-[457px] md:min-w-[667px] md:w-3/4 '
            className='object-cover w-[400px] h-[300px] md:min-h-[488px]  md:w-3/4 '
          />
          <div className={`${raleway.className} flex flex-col ml-10 mr-10 md:w-1/4 justify-center space-y-7 mt-5`}>

            <h1 className='font-medium md:text-lg text-blue-500'> WEB DEVELOPMENT</h1>
            <h1 className='font-medium text-2xl md:text-4xl'>Social Media Manager</h1>
            <div className='flex justify-start space-x-4'>
              <Image
                src={firebase}
                width={30}
                height={30}
                alt="firebase icon"
                className='object-contain rounded-full'
              />
              <Image
                src={react}
                width={30}
                height={30}
                alt="react icon"
                className='object-contain rounded-full'
              />
              <Image
                src={fb}
                width={30}
                height={30}
                alt="Facebook API"
                className='object-contain rounded-full'
              />
              <Image
                src={ig}
                width={30}
                height={30}
                alt="Graph API"
                className='object-contain rounded-full'
              />
            </div>

            <div className='flex cursor-pointer '>
              <h1 className='font-medium md:text-xl '>View Repository</h1>
            </div>
            {/* {
              isExpanded && (
                <motion.div
                  initial={{ x: 0 }}
                  animate={{ ease: easeOut, x: [0, 0.3, 0.5, 0.7, 1] }}
                  transition={{ duration: 6 }}
                  className='bg-blue-500 h-[4px] w-[200px]' />
              )
            } */}


          </div>
        </div>

        {/* Social Media Manager App*/}
        <div className='md:flex md:flex-row flex flex-col border border-gray-100 rounded-lg shadow-2xl md:w-[1140px] md:h-[489px] w-[300px] h-[580px] hover:border-2 hover:border-blue-500 hover:ease-in-out '>
          <Image
            src={smm}
            // width={667}
            // height={457}
            alt="Social Media Manager App"
            // cover="true"
            // className='object-cover w-[400px] h-[300px] md:min-h-[457px] md:min-w-[667px] md:w-3/4 '
            className='object-cover w-[400px] h-[300px] md:min-h-[488px]  md:w-3/4 '
          />
          <div className={`${raleway.className} flex flex-col ml-10 mr-10 md:w-1/4 justify-center space-y-7 mt-5`}>

            <h1 className='font-medium md:text-lg text-blue-500'> APP DEVELOPMENT</h1>
            <h1 className='font-medium text-2xl md:text-4xl'>Social Media Manager App</h1>
            <div className='flex justify-start space-x-4'>
              <Image
                src={firebase}
                width={30}
                height={30}
                alt="firebase icon"
                className='object-contain rounded-full'
              />
              <Image
                src={react}
                width={30}
                height={30}
                alt="react icon"
                className='object-contain rounded-full'
              />
              <Image
                src={fb}
                width={30}
                height={30}
                alt="Facebook API"
                className='object-contain rounded-full'
              />
              <Image
                src={ig}
                width={30}
                height={30}
                alt="Graph API"
                className='object-contain rounded-full'
              />
            </div>

            <div className='flex cursor-pointer '>
              <h1 className='font-medium md:text-xl '>View Repository</h1>
            </div>
            {/* {
              isExpanded && (
                <motion.div
                  initial={{ x: 0 }}
                  animate={{ ease: easeOut, x: [0, 0.3, 0.5, 0.7, 1] }}
                  transition={{ duration: 6 }}
                  className='bg-blue-500 h-[4px] w-[200px]' />
              )
            } */}


          </div>
        </div>

        {/* Donation Box*/}
        <div className='md:flex md:flex-row flex flex-col border border-gray-100 rounded-lg shadow-2xl md:w-[1140px] md:h-[489px] w-[300px] h-[580px] hover:border-2 hover:border-blue-500 hover:ease-in-out '>
          <Image
            src={d3}
            // width={667}
            // height={457}
            alt="Donation Box"
            // cover="true"
            // className='object-cover w-[400px] h-[300px] md:min-h-[457px] md:min-w-[667px] md:w-3/4 '
            className='object-cover w-[400px] h-[300px] md:min-h-[488px]  md:w-3/4 '
          />
          <div className={`${raleway.className} flex flex-col ml-10 mr-10 md:w-1/4 justify-center space-y-7 mt-5`}>

            <h1 className='font-medium md:text-lg text-blue-500'> WEB DEVELOPMENT</h1>
            <h1 className='font-medium text-2xl md:text-4xl'>Donation Box</h1>
            <div className='flex justify-start space-x-4'>
              <Image
                src={firebase}
                width={30}
                height={30}
                alt="firebase icon"
                className='object-contain rounded-full'
              />
              <Image
                src={nextjs}
                width={60}
                height={60}
                alt="next js icon"
                className='object-contain rounded-full'
              />
              <Image
                src={fb}
                width={30}
                height={30}
                alt="Facebook API"
                className='object-contain rounded-full'
              />
              <Image
                src={ig}
                width={30}
                height={30}
                alt="Graph API"
                className='object-contain rounded-full'
              />
            </div>

            <div className='flex cursor-pointer '>
              <h1 className='font-medium md:text-xl '>View Repository</h1>
            </div>
            {/* {
              isExpanded && (
                <motion.div
                  initial={{ x: 0 }}
                  animate={{ ease: easeOut, x: [0, 0.3, 0.5, 0.7, 1] }}
                  transition={{ duration: 6 }}
                  className='bg-blue-500 h-[4px] w-[200px]' />
              )
            } */}


          </div>
        </div>




        {/* Spotify Clone*/}
        <div className='md:flex md:flex-row flex flex-col border border-gray-100 rounded-lg shadow-2xl md:w-[1140px] md:h-[489px] w-[300px] h-[580px] hover:border-2 hover:border-blue-500 hover:ease-in-out '>
          <Image
            src={spotify}
            // width={667}
            // height={457}
            alt="Spotify Clone"
            // cover="true"
            // className='object-cover w-[400px] h-[300px] md:min-h-[457px] md:min-w-[667px] md:w-3/4 '
            className='object-cover w-[400px] h-[300px] md:min-h-[488px]  md:w-3/4 '
          />
          <div className={`${raleway.className} flex flex-col ml-10 mr-10 md:w-1/4 justify-center space-y-7 mt-5`}>

            <h1 className='font-medium md:text-lg text-blue-500'>API | WEB DEVELOPMENT</h1>
            <h1 className='font-medium text-2xl md:text-4xl'>Spotify Clone</h1>
            <div className='flex justify-start space-x-4'>
              <Image
                src={firebase}
                width={30}
                height={30}
                alt="firebase icon"
                className='object-contain rounded-full'
              />
              <Image
                src={react}
                width={30}
                height={30}
                alt="react icon"
                className='object-contain rounded-full'
              />
              <Image
                src={spotifyAPI}
                width={30}
                height={30}
                alt="spotify API"
                className='object-contain rounded-full'
              />
              <Image
                src={postman}
                width={30}
                height={30}
                alt="postman icon"
                className='object-contain rounded-full'
              />
            </div>

            <div className='flex cursor-pointer '>
              <h1 className='font-medium md:text-xl '>View Repository</h1>
            </div>
            {/* {
              isExpanded && (
                <motion.div
                  initial={{ x: 0 }}
                  animate={{ ease: easeOut, x: [0, 0.3, 0.5, 0.7, 1] }}
                  transition={{ duration: 6 }}
                  className='bg-blue-500 h-[4px] w-[200px]' />
              )
            } */}


          </div>
        </div>


        {/* Ettara */}
        <div className='md:flex md:flex-row flex flex-col border border-gray-100 rounded-lg shadow-2xl md:w-[1140px] md:h-[489px] w-[300px] h-[580px] hover:border-2 hover:border-blue-500 hover:ease-in-out '>
          <Image
            src={mockup}
            // width={667}
            // height={457}
            alt="Ettarra Cafe"
            // cover="true"
            // className='object-cover w-[400px] h-[300px] md:min-h-[457px] md:min-w-[667px] md:w-3/4 '
            className='object-cover w-[400px] h-[300px] md:min-h-[488px]  md:w-3/4 '
          />
          <div className={`${raleway.className} flex flex-col ml-10 mr-10 md:w-1/4 justify-center space-y-7 mt-5`}>

            <h1 className='font-medium md:text-lg text-blue-500'>APP DEVELOPMENT</h1>
            <h1 className='font-medium text-2xl md:text-4xl'>Ettarra Cafe</h1>
            <div className='flex justify-start space-x-2'>
              <Image
                src={firebase}
                width={30}
                height={30}
                alt="firebase icon"
                className='object-contain rounded-full'
              />
              <Image
                src={nextjs}
                width={100}
                height={100}
                alt="next js icon"
                className='object-cover rounded-full'
              />
              <Image
                src={ganache}
                width={100}
                height={100}
                alt="ganache icon"
                className='object-contain rounded-full'
              />
            </div>

            <div className='flex cursor-pointer '>
              <h1 className='font-medium md:text-xl '>View Repository</h1>
            </div>
            {/* {
              isExpanded && (
                <motion.div
                  initial={{ x: 0 }}
                  animate={{ ease: easeOut, x: [0, 0.3, 0.5, 0.7, 1] }}
                  transition={{ duration: 6 }}
                  className='bg-blue-500 h-[4px] w-[200px]' />
              )
            } */}
          </div>
        </div>

    {/* Bus Tracking Application */}
    <div className='md:flex md:flex-row flex flex-col border border-gray-100 rounded-lg shadow-2xl md:w-[1140px] md:h-[489px] w-[300px] h-[580px] hover:border-2 hover:border-blue-500 hover:ease-in-out '>
          <Image
            src={bustrackingMockup}
            // width={667}
            // height={457}
            alt="Bus Tracking Application "
            // cover="true"
            // className='object-cover w-[400px] h-[300px] md:min-h-[457px] md:min-w-[667px] md:w-3/4 '
            className='object-cover w-[400px] h-[300px] md:min-h-[488px]  md:w-3/4 '
          />
          <div className={`${raleway.className} flex flex-col ml-10 mr-10 md:w-1/4 justify-center space-y-7 mt-5`}>

            <h1 className='font-medium md:text-lg text-blue-500'>APP DEVELOPMENT</h1>
            <h1 className='font-medium text-2xl md:text-4xl'>Bus Tracking Application </h1>
            <div className='flex justify-start space-x-2'>
            <Image
                src={firebase}
                width={30}
                height={30}
                alt="firebase icon"
                className='object-contain rounded-full'
              />
              <Image
                src={react}
                width={30}
                height={30}
                alt="react icon"
                className='object-contain rounded-full'
              />
            </div>

            <div className='flex cursor-pointer '>
              <h1 className='font-medium md:text-xl '>View Repository</h1>
            </div>
            {/* {
              isExpanded && (
                <motion.div
                  initial={{ x: 0 }}
                  animate={{ ease: easeOut, x: [0, 0.3, 0.5, 0.7, 1] }}
                  transition={{ duration: 6 }}
                  className='bg-blue-500 h-[4px] w-[200px]' />
              )
            } */}
          </div>
        </div>




      </div>


    </div>
  )
}
