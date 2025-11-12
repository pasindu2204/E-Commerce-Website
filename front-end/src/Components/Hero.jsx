import React from 'react'
import {assets} from '../assets/assets';

const Hero = () => {
  return (
    <div className='flex flex-col sm:flex-row border border-gray-500 '>
      {/* hero left */}
      <div className='w-full sm:w-1/2 flex justify-center items-center'>
            <div className='text-[#414141]'>
                    <div className='flex items-center gap-2'>
                        <p className='w-8 md:w-11 h-0.5 bg-[#414141]'></p>
                        <p className='font-medium text-sm ms:text-base'>OUR BEST SELLERS</p>
                    </div>
                <h1 className='prata-regular text-3xl sm:py-3 lg:text-5xl leading-relaxed'>Latest Arrival Collection</h1>
                    <div className='flex items-center gap-2'>
                        <p className='font-semibold text-sm md:text-base'>SHOP NOW</p>
                        <p className='w-8 md:w-11 h-0.5 bg-[#414141]'></p>
                    </div>
            </div>
      </div>
      {/* hero right */}
        <div className='w-full sm:w-1/2'>
            <img src={assets.hero_img} alt="Hero Image" className='w-full h-full object-cover' />
        </div>
    </div>
  )
}

export default Hero
