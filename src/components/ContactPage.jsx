import React from 'react'
import { FaUser } from "react-icons/fa6";
import { FaHouseUser, FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { BiSolidMessageRoundedEdit } from "react-icons/bi";

import "./ContactPage.css"
const ContactPage = () => {
  return (
    <div id="contact" className='ContactPage flex md:flex-row flex-col w-[100%] justify-center md:justify-around'>
      <div className='flex flex-col w-full gap-10 mt-10 justify-center items-center'>
        <h1 className='text-xl md:'>Take the Road to</h1>
        <p className='digitize md:text-3xl text-2xl'>Digitizing your Business Growth</p>
      </div>
      <div className='w-full flex flex-col py-5 items-center md:items-start justify-center text-2xl md:text-3xl 2xl:text-4xl'>
        <h1 className='underline underline-offset-4 mb-4 md:mb-0'>Start a conversation with us:</h1>
        <form action="" method="post" className='flex flex-col gap-4 md:gap-2 py-4 text-xl'>
          <div className='flex items-center gap-4 md:gap-2'>
            <label htmlFor="name"><FaUser /></label>
            <input type="text" className='bg-transparent px-2 py-1' placeholder='Name*' />
          </div>
          <div className='flex items-center gap-4 md:gap-2'>
            <label htmlFor="companyName"><FaHouseUser /></label>
            <input type="text" className='bg-transparent px-2 py-1' placeholder='Company Name*' />
          </div>
          <div className='flex items-center gap-4 md:gap-2'>
            <label htmlFor="email"><MdEmail /></label>
            <input type="text" className='bg-transparent px-2 py-1' placeholder='Email*' />
          </div>
          <div className='flex items-center gap-4 md:gap-2'>
            <label htmlFor="name"><FaPhoneAlt /></label>
            <input type="PhoneNumber" className='bg-transparent px-2 py-1' placeholder='Phone Number*' />
          </div>
          <div className='flex items-center gap-4 md:gap-2'>
            <label htmlFor="Message"><BiSolidMessageRoundedEdit /></label>
            <textarea type="Message" id='message' className='bg-transparent px-2 py-1' placeholder='We would love to hear from you' />
          </div>
          <div className="flex gap-4 md:gap-2 justify-end items-end">
            <button id='submitnow' className='px-4 py-2 rounded-md bg-blue-900 hover:bg-blue-700 duration-200'>Submit</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ContactPage
