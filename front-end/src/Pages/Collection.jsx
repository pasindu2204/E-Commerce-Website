import React, { useContext, useState } from 'react';
import {ShopContext} from '../Context/ShopContext.jsx';
import { assets } from '../assets/assets.js';

const Collection = () => {

  const {products, ShowFilter, setShowFilter} = useContext(ShopContext);
  

  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 '>

      {/* filter products  */}
      <div className='min-w-60'>
        <p onClick={() => setShowFilter(!ShowFilter)}  className='my-2 text-xl flex items-center cursor-pointer gap-2'>FilTERS
          <img src={assets.dropdown_icon} alt='' className={`h-3 sm:hidden ${ShowFilter ? "rotate-90" : ""}`}/>
        </p>

                            {/* Category filter here */}

            <div className={`border border-gray-300 pl-5 py-3 mt-6 ${ShowFilter ? "" : "hidden"} sm:block` }>
              <p className='mb-3 text-sm font-medium'>CATEGORIES</p>
            
                  <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
                    <p className='flex gap-2'>
                      <input className='w-3' type="checkbox" value={'Men'}/> Men
                    </p>
                    <p className='flex gap-2'>
                      <input className='w-3' type="checkbox" value={'Women'}/> Women
                    </p>
                    <p className='flex gap-2'>
                      <input className='w-3' type="checkbox" value={'Kids'}/> Kids
                    </p>
                  </div>
            </div>

            {/* sub Category filter here */}

             <div className={`border border-gray-300 pl-5 py-3 my-5 ${ShowFilter ? "" : "hidden"} sm:block` }>
              <p className='mb-3 text-sm font-medium'>Types</p>
            
                  <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
                    <p className='flex gap-2'>
                      <input className='w-3' type="checkbox" value={'topwear'}/> Topwear
                    </p>
                    <p className='flex gap-2'>
                      <input className='w-3' type="checkbox" value={'bottomwear'}/> Bottomwear
                    </p>
                    <p className='flex gap-2'>
                      <input className='w-3' type="checkbox" value={'winterwear'}/> Winterwear
                    </p>
                  </div>
            </div>

      </div>
      
    </div>
  )
}

export default Collection
