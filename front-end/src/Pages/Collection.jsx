import React, { useContext, useState, useEffect } from 'react';
import {ShopContext} from '../Context/ShopContext.jsx';
import { assets } from '../assets/assets.js';
import Title from '../Components/Title.jsx';
import ProductItem from '../Components/ProductItem.jsx';

const Collection = () => {

  const {products, ShowFilter, setShowFilter} = useContext(ShopContext);
  const [filterProducts, setFilterProducts] = useState([]);
  



  useEffect(() => {
    setFilterProducts(products);
  }, []);
  


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
                      <input className='w-3' type="checkbox" value={'Men'} onChange={toggleCategory}/> Men
                    </p>
                    <p className='flex gap-2'>
                      <input className='w-3' type="checkbox" value={'Women'} onChange={toggleCategory}/> Women
                    </p>
                    <p className='flex gap-2'>
                      <input className='w-3' type="checkbox" value={'Kids'} onChange={toggleCategory}/> Kids
                    </p>
                  </div>
            </div>

            {/* sub Category filter here */}

             <div className={`border border-gray-300 pl-5 py-3 my-5 ${ShowFilter ? "" : "hidden"} sm:block` }>
              <p className='mb-3 text-sm font-medium'>Types</p>
            
                  <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
                    <p className='flex gap-2'>
                      <input className='w-3' type="checkbox" value={'topwear'} onChange={toggleSubCategory} /> Topwear
                    </p>
                    <p className='flex gap-2'>
                      <input className='w-3' type="checkbox" value={'bottomwear'} onChange={toggleSubCategory} /> Bottomwear
                    </p>
                    <p className='flex gap-2'>
                      <input className='w-3' type="checkbox" value={'winterwear'} onChange={toggleSubCategory} /> Winterwear
                    </p>
                  </div>
            </div>

      </div>

                            {/* right side */}
      
            <div className='flex-1'>
                    <div className='flex justify-between text-base sm:text-2xl mb-4'>
                      <Title text1={'All'} text2={'Collection'}/>

                      {/* product sort */}

                      <select className='border-2 border-gray-300 text-sm px-2'>
                        <option value='relavent'> Sort by: Relavent</option>
                        <option value='low-high'> Sort by: Low to High</option>
                        <option value='high-low'> Sort by: High to Low</option>
                      </select>
                    </div>

                        {/* map products here */}
                  <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6'>
                            {
                    filterProducts.map((item, index) => (
                      <ProductItem
                        key={index}
                        id={item._id}
                        name={item.name}
                        price={item.price}
                        image={item.image}
                              />))
                           }

                  </div>
          </div>
    </div>
  )
}

export default Collection
