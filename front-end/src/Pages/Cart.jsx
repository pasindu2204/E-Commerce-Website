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
      
      </div>
      
  )
}

export default Cart
