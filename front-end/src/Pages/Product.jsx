import React, {useContext, useEffect, useState} from 'react'
import { useParams } from 'react-router-dom';
import {ShopContext} from '../Context/ShopContext.jsx';
import { assets } from '../assets/assets.js';


const Product = () => {

  const {productId} = useParams();
  const {products, currency} = useContext(ShopContext);
  const [productData, setProductData] = useState(false);
  const [image, setImage] = useState('');
  const [size, setSize] = useState('');



  const fetchProductData = async () => {

    products.map((item) => {
      if (item._id === productId) {
        setProductData(item);
        setImage(item.image[0]);
        return null;
      }
        
    });
  }



  useEffect(() => {
    fetchProductData();
  }, [ productId, products]);



  return productData ? (
//     <div className='border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100'>

//       {/* product data */}
//       <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row'>

//         {/* ...............images..................... */}
//         <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row'>
//           <div className='flex flex-col overflow-x-auto sm:overflow-y-scroll justify-between justify-normal 
//           sm:w-[18.7%] w-full gap-4'>
//             {
//               productData.image.map((item, index) => (
//                 <img onClick={() => setImage(item)} key={index} src={item} alt='' className='w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer' />
//               ))
//             }
//             </div>

//             <div className='w-full sm:w-[80%]'>
//               <img src={image} alt='' className='w-full h-auto'/>

//             </div>
//             </div>

//             {/* ................product details..................... */}

//             <div className='flex-1'>
//               <h1 className='font-medium text-2xl mt-2'>{productData.name}</h1>
//                <div className='flex items-center gap-1 mt-2'>
//                 <img src={assets.star_icon} alt='' className='w-3 h-3'/>
//                 <img src={assets.star_icon} alt='' className='w-3 h-3'/>
//                 <img src={assets.star_icon} alt='' className='w-3 h-3'/>
//                 <img src={assets.star_icon} alt='' className='w-3 h-3'/>
//                 <img src={assets.star_dull_icon} alt='' className='w-3 h-3'/>
//                 <p className='pl-2'>(122)</p>

//                </div>
//                 <p className='font-semibold text-xl mt-4'>{currency}{productData.price}</p>
//                 <p className='mt-5 text-gray-500 md:w-4/5'>{productData.description}</p>
//                 <div className='flex flex-col gap-4 my-8'>
//                   <p>Select Size</p>
//                   <div className='flex gap-2'>
//                     {
//                       productData.sizes.map((item, index) => (
//                         <button onClick={() => setSize(item)} key={index} className={`border bg-gray-100 
//                         px-4 py-2 hover:border-black 
//                         ${size === item ? 'border-orange-500 font-medium' : 'border-gray-300 font-light'}`}>
//                           {item}
//                         </button>
//                       ))
//                     }
//                   </div>
//                   <button className='bg-black w-1/4 text-white px-6 py-3 text-sm active:bg-gray-700'>Add to Cart</button>
//                   <hr className='mt-8 sm:w-4/5'/>
//                   <div className='text-sm text-gray-500 mt-5 flex flex-col gap-1'>
//                     <p>100% Original Products.</p>
//                     <p>Cash on delivery is available on this Product.</p>
//                     <p>Easy 7 days returns and exchanges.</p>
//                   </div>
//                 </div>
//               </div>
            
//       </div>
      
//     </div>
//   ) : <div className='opacity-0'>Loading...</div>
// }

export default Product
