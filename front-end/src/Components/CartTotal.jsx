import React, {useContext} from 'react'
import {ShopContext} from '../Context/ShopContext.jsx';
import Title from './Title';

const CartTotal = () => {

const {currency, getCartAmount, delivery_fees} = useContext(ShopContext);

  return (
    <div className='w-full'>
        <div className='text-2xl '>
            <Title text1={'Cart'} text2={'Total'} />
        </div>

        <div className='flex flex-col gap-2 mt-2 text-sm'>
            <div className='flex justify-between'>
                <p>Subtotal</p>
                <div>{currency}{getCartAmount()}.00</div>
            </div>

            <div className='flex justify-between'>
                <p>Delivery Fees</p>
                <div>{currency}{delivery_fees}.00</div>
            </div>
                <div className='border-t pt-2 flex justify-between font-semibold'>
                    <p>Total</p>
                    <div>{currency}{getCartAmount() + delivery_fees}.00</div>
                </div>

        </div>

    </div>

  )
}

export default CartTotal
