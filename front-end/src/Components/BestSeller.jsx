// ...existing code...
import React, { useEffect, useContext, useState } from 'react';
import { ShopContext } from '../Context/ShopContext';
import Title from './Title';
import ProductItem from './ProductItem';
// ...existing code...

const BestSeller = () => {

    const { products } = useContext(ShopContext);
    const [bestSeller, setBestSeller] = useState([]);

   useEffect(() => {
  if (!products) return;

  // Always work with an array
  const list = Array.isArray(products) ? products : Object.values(products);

  // Normalize best-seller flags
  const best = list.filter(item =>
    item?.bestSeller ||
    item?.bestseller ||
    item?.best_seller ||
    item?.isBestSeller ||
    item?.tags?.includes('best')
  );

  // Choose best sellers or fallback
  const finalList = best.length > 0 ? best : list;

  // Take the first 5
  setBestSeller(finalList.slice(0, 5));
}, [products]);

// ...existing code...



  return (

    <div className='my-10'>
        <div className='text-center text-3xl py-8'>
              <Title text1={'BEST'} text2={'SELLERS'}/>
              <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
        </div>

        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
            {
            bestSeller.map((item,index) => (
                <ProductItem
                  key={index}
                  id={item._id}
                  image={item.image}
                  name={item.name}
                  price={item.price}
                />
            ))
            }
        </div>

    </div>
  )
}

export default BestSeller
// ...existing code...