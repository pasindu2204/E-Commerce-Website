// ...existing code...
import React, { useState , useContext, useEffect } from 'react'
import {ShopContext} from '../Context/ShopContext.jsx';
import Title from './Title.jsx';
import ProductItem from './ProductItem.jsx';
// ...existing code...
const RelativeProducts = ({category, subCategory}) => {

 const { products } = useContext(ShopContext);
 const [related, setRelated] = useState([]);


 useEffect(() => {
    if (products.length > 0 && category && subCategory) {
        let productsCopy = products.slice();

         productsCopy = productsCopy.filter((item) => item.category === category);
         productsCopy = productsCopy.filter((item) => item.subCategory === subCategory);


        setRelated(productsCopy.slice(0, 5));

    } else {
        setRelated([]);
    }
 }, [products, category, subCategory]);


  return (
    <div className='my-24'>
        <div className='text-center text-3xl py-2 '>
      <Title text1={'Related'} text2={'Products'} />
      </div>
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 mt-10'>
            {
            related.map((item, index) => (
              <ProductItem key={index} id={item._id} name={item.name} price={item.price} image={item.image} />
            ))
            }
            </div>
    </div>
  )
}

export default RelativeProducts
// ...existing code...