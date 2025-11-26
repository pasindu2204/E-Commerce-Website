import React, {useState} from 'react'
import { assets } from '../assets/assets.js'
import axios from 'axios'
import {backendUrl} from '../App.jsx'

const Add = () => {

const [image1, setImage1] = useState(false);
const [image2, setImage2] = useState(false);
const [image3, setImage3] = useState(false);
const [image4, setImage4] = useState(false);

const [Name, setName] = useState('');
const [Description, setDescription] = useState('');
const [Category, setCategory] = useState('Men');
const [Subcategory, setSubcategory] = useState('Topwear');
const [Price, setPrice] = useState('');
const [Size, setSize] = useState([]);
const [BestSeller, setBestSeller] = useState(false);

const onSubmitHandler = async (e) => {
  e.preventDefault(); 
  try {
    const formData = new FormData();
    image1 && formData.append('image1', image1);
    image2 && formData.append('image2', image2);
    image3 && formData.append('image3', image3);
    image4 && formData.append('image4', image4);
    formData.append('name', Name);
    formData.append('description', Description);
    formData.append('category', Category);
    formData.append('subcategory', Subcategory);
    formData.append('price', Price);
    formData.append('size', JSON.stringify(Size));
    formData.append('bestseller', BestSeller);

    const response = await axios.post(
  `${backendUrl}/api/product/add`,
  formData,
   {
    headers: {
      token: localStorage.getItem("token"),
      "Content-Type": "multipart/form-data"
    }}
);
    console.log(response.data);
    
  } catch (error) {
    
  }

}

  return (
    <form onSubmit={onSubmitHandler} className='flex flex-col w-full items-start gap-5'>
      <div>
        <p className='mb-2'>Upload Image</p>

        <div className='flex gap-3'>
          <label htmlFor="image1">
            <img className='w-20' src={!image1 ? assets.upload_area : URL.createObjectURL(image1)} alt="upload" />
            <input onChange={(e) => setImage1(e.target.files[0])} type="file" id='image1'hidden />
          </label>
           <label htmlFor="image2">
            <img className='w-20' src={!image2 ? assets.upload_area : URL.createObjectURL(image2)} alt="upload" />
            <input onChange={(e) => setImage2(e.target.files[0])} type="file" id='image2'hidden />
          </label>
           <label htmlFor="image3">
            <img className='w-20' src={!image3 ? assets.upload_area : URL.createObjectURL(image3)} alt="upload" />
            <input onChange={(e) => setImage3(e.target.files[0])} type="file" id='image3'hidden />
          </label>
           <label htmlFor="image4">
            <img className='w-20' src={!image4 ? assets.upload_area : URL.createObjectURL(image4)} alt="upload" />
            <input onChange={(e) => setImage4(e.target.files[0])} type="file" id='image4'hidden />
          </label>
        </div>
      </div>
      <div className='w-full'>
        <p>Product Name</p>
        <input onChange={(e) => setName(e.target.value)} value={Name} type="text" placeholder='type here' className='border border-gray-300 px-3 py-2 w-96' required />
      </div>
       <div className='w-full'>
        <p>Product description</p>
        <textarea onChange={(e) => setDescription(e.target.value)} value={Description}   placeholder='write content here' className='max-w-[500px] px-3 py-2 w-full' required />
      </div>

      <div className='flex flex-col sm:flex-row gap-2 w-full sm:gap-8'>
      <div>
        <p className='mb-2'>Product Category</p>
        <select onChange={(e) => setCategory(e.target.value)} className='w-full px-3 py-2'>
          <option value="Men">Men</option>
          <option value="Women">Women</option>
          <option value="Kids">Kids</option>
        </select>
      </div>
      <div>
        <p className='mb-2'>Product Subcategory</p>
        <select onChange={(e) => setSubcategory(e.target.value)} className='w-full px-3 py-2'>
          <option value="Topwear">Topwear</option>
          <option value="Bottomwear">Bottomwear</option>
          <option value="Winterwear">Winterwear</option>
        </select>
      </div>
      <div>
        <p className='gap-2 mb-2'>Product Price</p>
        <input onChange={(e)=> setPrice(e.target.value)} value={Price} type="number" placeholder='25' className='border border-gray-300 px-3 py-2 w-50' required />
      </div>
      </div>

      <div>
        <p className='mb-2'>Product Size</p>
        <div className='flex gap-3'>
        <div onClick={() =>setSize(prev => prev.includes("S") ? prev.filter(item => item !== "S") : [...prev, "S"])} >
           <p className={`${Size.includes("S") ? "bg-pink-300" : "bg-slate-200"} py-1 px-3 cursor-pointer`}>S</p>
        </div>
        <div onClick={() =>setSize(prev => prev.includes("M") ? prev.filter(item => item !== "M") : [...prev, "M"])} >
           <p className={`${Size.includes("M") ? "bg-pink-300" : "bg-slate-200"} py-1 px-3 cursor-pointer`}>M</p>
        </div>
        <div onClick={() =>setSize(prev => prev.includes("L") ? prev.filter(item => item !== "L") : [...prev, "L"])} >
           <p className={`${Size.includes("L") ? "bg-pink-300" : "bg-slate-200"} py-1 px-3 cursor-pointer`}>L</p>
        </div>
        <div onClick={() =>setSize(prev => prev.includes("XL") ? prev.filter(item => item !== "XL") : [...prev, "XL"])} >
           <p className={`${Size.includes("XL") ? "bg-pink-300" : "bg-slate-200"} py-1 px-3 cursor-pointer`}>XL</p>
        </div>
        <div onClick={() =>setSize(prev => prev.includes("XXL") ? prev.filter(item => item !== "XXL") : [...prev, "XXL"])} >
           <p className={`${Size.includes("XXL") ? "bg-pink-300" : "bg-slate-200"} py-1 px-3 cursor-pointer`}>XXL</p>
        </div>
        </div>
      </div>

      <div>
        <input onChange={() => setBestSeller(prev => !prev)} checked={BestSeller} type="checkbox" id='bestseller' />
        <label className='ml-2 cursor-pointer' htmlFor="bestseller">Add to Best Seller</label>
      </div>

       <button type="submit" className='bg-gray-700 text-white px-4 py-2 rounded-md mt-4'>Add Product</button>
    </form>
  )
}

export default Add
