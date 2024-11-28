import React from 'react'
import { assets } from '../assets/assets'

function Contact() {
  return (
    <div className='text-center text-2xl pt-10 text-gray-500'>
      <p><span className='text-gray-700 font-semibold'>CONTACT</span>US</p>

      
      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28 text-sm'>
         <img className='w-full md:max-w-[360px]' src={assets.contact_image} />

         <div className='flex flex-col justify-center items-start gap-6'>
          <p className='font-semibold text-lg text-gray-600'>OUR OFFICE</p>
          <p className='text-gray-500 '>54709 Willms Station <br /> Suite 000, Washington, USA</p>
          <p className='text-gray-500 '>Tel: (000) 000-0000 <br/> Email: greatstackdev@gmail.com</p>
          <p className='font-semibold text-lg text-gray-600'>CAREERS AT PRESCRIPTO</p>
          <p className='text-gray-500 '>Learn more about our teams and job openings.</p>
          <button className='border border-black px-8 py-4 text-sm  hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>Explore Jobs</button>

        </div>
      </div>
    </div>
  )
}

export default Contact