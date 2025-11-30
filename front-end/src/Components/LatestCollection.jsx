import React, { useState, useEffect, useContext } from 'react';
import { ShopContext } from '../Context/ShopContext';
import ProductItem from './ProductItem';
import Title from './Title';

const LatestCollection = () => {
  const { products } = useContext(ShopContext);

  const [latestProducts, setLatestProducts] = useState([]);

  useEffect(() => {
    setLatestProducts(products.slice(0,10));
  }, []);

  return (
    <div className='my-10 bg-purple-300'>
      <div className='text-center text-3xl py-8'>
        <Title text1={'LATEST'} text2={'COLLECTION'} />
        <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-800'>
          Check out our newest arrivals made for modern men and Fresh styles just dropped — grab the latest trends now.
        </p>
      </div>

      {/* rendering products */}
      <div>
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
          {
          latestProducts.map((item, index) => (
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
    </div>
  );
}

export default LatestCollection;
