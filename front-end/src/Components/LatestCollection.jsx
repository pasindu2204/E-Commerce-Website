import React, { useState, useEffect, } from 'react'
import { ShopContext } from '../Context/ShopContext';
import { useContext } from 'react';
import Title from './Title';
import ProductItem from './ProductItem';

const LatestCollection = () => {

  const { products } = useContext(ShopContext);
  const [LatestProducts, setLatestProducts] = useState([]);

  useEffect(() => {
<<<<<<< HEAD
    setLatestProducts(products.slice(0, 10));
  }, [products]);

  return (
    <div className='my-10'>
      <div className='text-center py-8 text-3xl'>
        <Title text1={"Latest"} text2={"Collection"}/>
        <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
=======
    setLatestProducts(products.slice(0,10));
  }, []);

  return (
    <div className='my-10 bg-purple-300'>
      <div className='text-center text-3xl py-8'>
        <Title text1={'LATEST'} text2={'COLLECTION'} />
        <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-800'>
          Check out our newest arrivals made for modern men and Fresh styles just dropped — grab the latest trends now.
>>>>>>> dev
        </p>
      </div>
      
     {/* Rendering Latest Products */}

     <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
      {
        LatestProducts.map((item,index) => (
          <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price} />
        ))
      }
     </div>
    </div>
  );
};

export default LatestCollection;
