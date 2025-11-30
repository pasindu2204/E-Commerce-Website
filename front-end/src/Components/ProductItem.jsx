import React, { useContext } from 'react';
import { ShopContext } from '../Context/ShopContext';
import { Link } from 'react-router-dom';

const ProductItem = ({ id, image, images, name, price }) => {

  const { currency } = useContext(ShopContext);

  // Determine correct image
  const imgSrc =
    Array.isArray(image) && image.length > 0
      ? image[0]
      : Array.isArray(images) && images.length > 0
      ? images[0]
      : typeof image === "string"
      ? image
      : "";

  return (
    <Link className='text-gray-700 bg-purple-400 border-2 rounded-t-[60px] border-gray-100 cursor-pointer' to={`/product/${id}`}>
      <div className='overflow-hidden rounded-t-[60px] border-gray-800'>
        {
        imgSrc && (
          <img
            className='w-full h-64 object-cover hover:scale-110 transition ease-in-out'
            src={imgSrc}
            alt=''
          />
        )}
      </div>
      <p className='pt-3 pb-1 text-sm text-center'>{name}</p>
      <p className='text-sm font-medium text-center'>
        {currency}{price}
      </p>
    </Link>
  );
};

export default ProductItem