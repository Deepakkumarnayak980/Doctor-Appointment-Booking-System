import React from 'react'
import { assets } from '../assets/assets'

function Footer() {
  return (
    <div className='md:mx-10'>
    <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm '  >
      <div>
        <img className='mb-5 w-40 font-bold' src={assets.logo}/>
        <p className='text-gray-600 w-full md:w-2/3 leading-6'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
      </div>
      <div>
        <p className='text-xl font-bold mb-5'>COMPANY</p>
        <ul className='flex flex-col gap-2 text-gray-600'>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
        </ul>
      </div>
      <div>
        <p className='text-xl font-bold mb-5'>GET IN TOUCH</p>
        <ul className='flex flex-col gap-2 text-gray-600'>
            <li>+0-000-000-000</li>
            <li>deepak@gmail.com</li>
        </ul>
      </div>
    </div>

    <div>
        <hr/>
        <p className='py-5 text-sm text-center font-bold'>Copyright 2024 @ Deepak - All Right Reserved.</p>
    </div>
    </div>
  )
}

export default Footer
