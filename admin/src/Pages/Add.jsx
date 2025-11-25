import React from 'react'
import { assets } from '../assets/assets.js'

const Add = () => {
  return (
    <form className='flex flex-col w-full items-start gap-5'>
      <div>
        <p className='mb-2'>Upload Image</p>

        <div className='flex gap-3'>
          <label htmlFor="image1">
            <img className='w-20' src={assets.upload_area} alt="upload" />
            <input type="file" id='image1'hidden />
          </label>
           <label htmlFor="image2">
            <img className='w-20' src={assets.upload_area} alt="upload" />
            <input type="file" id='image2'hidden />
          </label>
           <label htmlFor="image3">
            <img className='w-20' src={assets.upload_area} alt="upload" />
            <input type="file" id='image3'hidden />
          </label>
           <label htmlFor="image4">
            <img className='w-20' src={assets.upload_area} alt="upload" />
            <input type="file" id='image4'hidden />
          </label>
        </div>
      </div>
      <div className='w-full'>
        <p>Product Name</p>
        <input type="text" placeholder='type here' className='border border-gray-300 px-3 py-2 w-96' required />
      </div>
       <div className='w-full'>
        <p>Product description</p>
        <textarea placeholder='write content here' className='max-w-[500px] px-3 py-2 w-full' required />
      </div>

      <div className='flex flex-col sm:flex-row gap-2 w-full sm:gap-8'>
      <div>
        <p className='mb-2'>Product Category</p>
        <select className='w-full px-3 py-2'>
          <option value="Men">Men</option>
          <option value="Women">Women</option>
          <option value="Kids">Kids</option>
        </select>
      </div>
      <div>
        <p className='mb-2'>Product Subcategory</p>
        <select className='w-full px-3 py-2'>
          <option value="Topwear">Topwear</option>
          <option value="Bottomwear">Bottomwear</option>
          <option value="Winterwear">Winterwear</option>
        </select>
      </div>
      <div>
        <p className='gap-2 mb-2'>Product Price</p>
        <input type="number" placeholder='25' className='border border-gray-300 px-3 py-2 w-50' required />
      </div>
      </div>

      <div>
        <p className='mb-2'>Product Size</p>
        <div className='flex gap-3'>
        <div>
           <p className='bg-slate-200 py-1 px-3 cursor-pointer'>S</p>
        </div>
        <div>
           <p className='bg-slate-200 py-1 px-3 cursor-pointer'>M</p>
        </div>
        <div>
           <p className='bg-slate-200 py-1 px-3 cursor-pointer'>L</p>
        </div>
        <div>
           <p className='bg-slate-200 py-1 px-3 cursor-pointer'>XL</p>
        </div>
        <div>
           <p className='bg-slate-200 py-1 px-3 cursor-pointer'>XXL</p>
        </div>
        </div>
      </div>

      <div>
        <input type="checkbox" id='bestseller' />
        <label className='ml-2 cursor-pointer' htmlFor="bestseller">Add to Best Seller</label>
      </div>

       <button type="submit" className='bg-gray-700 text-white px-4 py-2 rounded-md mt-4'>Add Product</button>
    </form>
  )
}

export default Add
