import React from 'react';
import {assets} from '../assets/assets';
import { Link, NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { ShopContext } from '../Context/ShopContext.jsx';

const Navbar = () => {

    // const [visible, setVisible] = useState(false);
    const { showSearch, setShowSearch } = useContext(ShopContext);
    const { getCartCount } = useContext(ShopContext);

  return (

    <div className='flex items-center justify-between py-4 font-medium '>
       <Link to='/'> <img src={assets.logo} alt="Logo" className='w-36 h-10'/></Link>

        <ul className='hidden sm:flex items-center gap-5 text-sm text-gray-700'>
            <NavLink to='/' className='flex flex-col items-center gap-1'>
                <p>HOME</p>
                <hr className='w-2/4 h-[1.5px] bg-gray-700 hidden'/>
            </NavLink>

            <NavLink to='/collection' className='flex flex-col items-center gap-1'>
                <p>COLLECTION</p>
                <hr className='w-2/4 h-[1.5px] bg-gray-700 hidden'/>
            </NavLink>

            <NavLink to='/about' className='flex flex-col items-center gap-1'>
                <p>ABOUT</p>
                <hr className='w-2/4 h-[1.5px] bg-gray-700 hidden'/>
            </NavLink>

            <NavLink to='/content' className='flex flex-col items-center gap-1'>
                <p>CONTENT</p>
                <hr className='w-2/4 h-[1.5px] bg-gray-700 hidden'/>
            </NavLink>
        </ul>

            {/* Search Icon */}
        <div className="flex items-center gap-6">
            <img onClick={() => setShowSearch(true)} src={assets.search_icon} alt="Search" className='w-5 cursor-pointer'/>
            {/* Profile Icon */}

            <div className='group relative'>
                <img src={assets.profile_icon} alt="User" className='w-5 cursor-pointer'/>
                <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4'>
                    <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100
                     text-gray-500 rounded'>
                        <p className='cursor-pointer hover:text-black'>My Profile</p>
                        <p className='cursor-pointer hover:text-black'>Order</p>
                        <p className='cursor-pointer hover:text-black'>Log Out</p>
                    </div>
                </div>

            </div>
            {/* Cart Icon */}
            <Link to='/cart' className='relative'>
                <img src={assets.cart_icon} alt="Cart" className='w-5 cursor-pointer'/>
                <p className='absolute -top-3 -right-3 w-5 h-5 rounded-full bg-black
                 text-white aspect-square text-xs flex items-center justify-center'>{getCartCount()}</p>
            </Link>

            {/* Dropdown Menu */}
            <div className='group relative'>
            <img src={assets.menu_icon} alt="Menu" className='w-5 cursor-pointer sm:hidden relative'/>
              <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4'>
                    <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100
                     text-gray-500 rounded'>
                        <a href='/' className='cursor-pointer hover:text-black'>HOME</a>
                        <a href='/collection' className='cursor-pointer hover:text-black'>COLLECTION</a>
                        <a href='/about' className='cursor-pointer hover:text-black'>ABOUT</a>
                        <a href='/contact' className='cursor-pointer hover:text-black'>CONTACT</a>
                       
                    </div>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Navbar
