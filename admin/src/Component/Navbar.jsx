import React from 'react';
import { assets } from '../assets/assets.js'

const Navbar = ({setToken}) => {
  return (
    <div className="flex justify-between items-center px-[4%] py-2">
      <img src={assets.logo} alt="Admin Profile" className="w-[max(10%,8px)]"/>
      <button onClick={()=>setToken('')} className="cursor-pointer sm:px-7 sm:py-2 px-5 py-2 bg-gray-500 text-white rounded-full text-xs sm:text-sm">Logout</button>
    </div>
  )
}

export default Navbar
