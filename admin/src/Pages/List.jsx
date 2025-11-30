import axios from 'axios';
import React, {useState , useEffect} from 'react'
import { backendUrl } from '../App';
import { toast } from 'react-toastify';
import { currency } from '../App.jsx';

const List = ({ token }) => {

// get install data from api and display 

const [list, setList] = useState([]);

const fetchList = async () => {

try {
     const response = await axios.get(backendUrl + '/api/product/list');
     if (response.data.success) {
     setList(response.data.products); 
    } else {
      toast.error('Failed to fetch product list');
    }

} catch (error) {
  console.log(error);
  toast.error('An error occurred while fetching product list');
}
}

// remove product function

const removeProduct = async (id) => {

  try {

    const response = await axios.post(backendUrl + '/api/product/remove', {id}, {headers: {token}});

    if (response.data.success) {
      toast.success(response.data.message);
      await fetchList();

    } else {
      toast.error('Failed to remove product');
    }
    
  } catch (error) {
    console.log(error);
  toast.error('An error occurred while removing product');
  }
}

useEffect(() => {
  fetchList();
}, []);

  return (
    <>
    <p className='mb-2'>All Products List</p>
    <div className='flex flex-col gap-2'>

      {/* list table title */}

      <div className='hidden md:grid grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center py-1 px-2 border bg-gray-100 text-sm'>
        <b>Image</b>
        <b>Name</b>
        <b>Category</b>
        <b>Price</b>
        <b className='text-center'>Action</b>
      </div>

      {/* list table data */}

      {
        list.map((item, index) => (
          <div key={index} className='grid md:grid-col-[1fr_3fr_1fr] grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center py-1 px-2 border text-sm'>
            
              <img className='w-16' src={item.images[0]} alt={item.name} />
              <p>{item.name}</p>
              <p>{item.category}</p>
              <p>{item.price} {currency}</p>
              <p onClick={() => removeProduct(item._id)} className='text-right md:text-center cursor-pointer text-lg'> X</p>
              
              </div>
      ))
      }
    </div>
      
    </>
  )
}

export default List
