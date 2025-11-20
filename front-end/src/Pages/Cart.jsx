import React, { useState, useContext, useEffect } from 'react'
import {ShopContext} from '../Context/ShopContext.jsx';
import Title from '../Components/Title.jsx';

const Cart = () => {

const {products , currency , cardItems} = useContext(ShopContext);

const [cartData, setCartData] = useState([]);

useEffect(() => {
  const tenpData = [];
  for (const itemId in cardItems) {
    for (const size in cardItems[itemId]) {
      const qty = Number(cardItems[itemId][size]) || 0;
      if (qty > 0) {
        tenpData.push({
          _id: itemId,
          size,
          quantity: qty,
        });
      }
    }
  }
  setCartData(tenpData);
  },[cardItems]);


  return (
    <div className='border-t pt-14'>
      <div className='text-2xl mb-3'>
        <Title text1={'Your'} text2={'Cart'} />
      </div>

      <div>
           {
            cartData.map((item, index) => {
              const productData = products.find((product) => product._id === item._id);
              
              return (
                <div key={index} className='py-4 border-t border-b text-gray-700
                grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-4'>
                  <div className='flex items-start gap-6'>
                    <img className='w-16 sm:w-20' src={productData.image} alt=''></img>
                  <div>
                  <p className='text-xs sm:text-lg font-medium'>{productData.name}</p>
                  <div>
                    <p className='text-xs sm:text-base'> {currency}{productData.price}</p>
                    <p className='text-xs sm:text-base'> {item.size}</p>
                  </div>
                </div>
                </div>
                <input type='number' min={1} defaultValue={item.quantity} className='border max-w-10 sm:max-w-20 px-1 sm:px-2 py-1' />
                </div>
              )
           })
           }
      </div>
      </div>
      
  )
}

export default Cart
