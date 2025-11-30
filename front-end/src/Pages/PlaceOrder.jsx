import React, {useContext, useState} from 'react'
import Title from '../Components/Title'
import CartTotal from '../Components/CartTotal'
import { assets } from '../assets/assets'
import { ShopContext } from '../Context/ShopContext'

const PlaceOrder = () => {

const [method, setMethod] = useState('cod');

const {navigate} = useContext(ShopContext);

  return (
    <div className='flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t'>

             {/*...................left side................... */}
      <div className=' flex flex-col gap-4 w-full sm:max-w-[480px]'>
        <div className='text-xl sm:text-2xl my-3'>
          <Title text1={'Delivery'} text2={'Information'} />
        </div>

        <div className='flex gap-3'>
          <input type='text' placeholder='First Name' className='w-full border border-gray-700 px-3.5 py-1.5'/> 
          <input type='text' placeholder='Last Name' className='w-full border border-gray-700 px-3.5 py-1.5'/> 
        </div>
         <input type='text' placeholder='e-mail address' className='w-full border border-gray-700 px-3.5 py-1.5'/> 
         <input type='text' placeholder='address' className='w-full border border-gray-700 px-3.5 py-1.5'/>
          <div className='flex gap-3'>
          <input type='text' placeholder='City' className='w-full border border-gray-700 px-3.5 py-1.5'/> 
          <input type='text' placeholder='Province' className='w-full border border-gray-700 px-3.5 py-1.5'/> 
        </div> 
         <div className='flex gap-3'>
          <input type='number' placeholder='Postal Code' className='w-full border border-gray-700 px-3.5 py-1.5'/> 
          <input type='text' placeholder='Country' className='w-full border border-gray-700 px-3.5 py-1.5'/> 
        </div>
        <input type='number' placeholder='phone' className='w-full border border-gray-700 px-3.5 py-1.5'/>
      </div>


      {/*...................right side................... */}
      <div className='mt-8 w-full sm:max-w-[400px]'>
        <div className='mt-8 '>
          <CartTotal />
        </div>
        <div className='mt-8'>
          <Title text1={'Payment'} text2={'Method'} />

          {/* ............payment method section............ */}
          <div className='flex flex-col gap-3 lg-flex-row'>
            <div onClick={() => setMethod('stripe')} className='flex items-center gap-3 border p-2 px-3 w-50 cursor-pointer'>
              <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'stripe' ? 'bg-green-400' : ''}`}></p>
              <img src={assets.stripe_logo} alt='' className='h-5 mx-4'/> 
            </div>
             <div onClick={() => setMethod('razorpay')} className='flex items-center gap-3 border p-2 px-3 w-50 cursor-pointer'>
              <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'razorpay' ? 'bg-green-400' : ''}`}></p>
              <img src={assets.razorpay_logo} alt='' className='h-5 mx-4'/>
            </div>
             <div onClick={() => setMethod('cod')} className='flex items-center gap-3 border p-2 px-3 w-50 cursor-pointer'>
              <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'cod' ? 'bg-green-400' : ''}`}></p>
              <p className='text-gray-500 text-sm font-medium mx-4'>Cash on Delivery</p>
            </div>
        </div>

        <div className='w-full text-end mt-8'>
          <button onClick={() => navigate('/order')} className='bg-black text-white py-3 px-16 text-sm'>Place Order</button>
        </div>
        </div>
      </div>
    </div>
  )
}

export default PlaceOrder
