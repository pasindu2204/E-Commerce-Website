import React, {useEffect, useContext, useState} from 'react'
import { ShopContext } from '../Context/ShopContext.jsx';
import { assets } from '../assets/assets.js';
import { useLocation } from 'react-router-dom';

const Searchbar = () => {

    const { search, setSearch, showSearch, setShowSearch } = useContext(ShopContext); 
    const [visible, setVisible] = useState(false);
    const location = useLocation();

useEffect(() => {
    if (location.pathname.includes('collection')) {
        setVisible(true);
    } else {
        setVisible(false);
    }
}, [location]);

  return showSearch && visible ? (
    <div className='bg-purple-300 text-center'>
        <div className='inline-flex items-center justify-center border border-gray-800 px-5 py-2 my-5 mx-3 rounded-full w-3/4 sm:w-1/2'>
            <input 
                type='text' 
                className='flex-1 bg-inherit text-sm outline-none' 
                placeholder='Search..' 
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
            <img src={assets.search_icon} alt='search' className='h-5 ml-3'/>
        </div>
        <img 
            src={assets.cross_icon} 
            alt='close'
            className='inline w-3 cursor-pointer'
            onClick={() => setShowSearch(false)}
        />
    </div>
  ) : null;
}

export default Searchbar
