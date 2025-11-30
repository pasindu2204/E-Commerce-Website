import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
        <div>
            <p> <span className='cookie-regular'>STYLISH</span>
         <span className='gap-2 space-4'>young</span>
         <span className='flex gap-1 text-3xl' >MAN</span></p>
            <p className='w-full md:w-2/3 text-gray-800'>STYLISH young MAN 
            offers high-quality men’s clothing designed for modern style, comfort,
             and confidence. Shop our latest arrivals, best sellers, and 
             premium collections all in one place.</p>
        </div>
        <div>
            <p className='text-xl font-medium mb-5'>COMPANY</p>
            <ul className='flex flex-col gap-1 text-gray-800'>
                <li>Home</li>
                <li>About Us</li>
                <li>Delivery</li>
                <li>Privacy Policy</li>
            </ul>
        </div>
         <div>
            <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
            <ul className='flex flex-col gap-1 text-gray-800'>
                <li>011-8484959</li>
                <li>contact@gmail.com</li>
            </ul>
        </div>


      </div>
       <hr />
      <p className='text-center text-gray-800 py-5'>&copy; 2024 STYLISH young MAN Shop. All rights reserved.</p>
    </div>
  )
}

export default Footer
