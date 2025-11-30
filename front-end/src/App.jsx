import React from 'react'
import {Routes, Route} from 'react-router-dom';
import Home from './Pages/Home.jsx'
import About from './Pages/About.jsx'
import Collection from './Pages/Collection.jsx'
<<<<<<< HEAD
import Content from './Pages/Content.jsx'
=======
import Contact from './Pages/Contact.jsx'
>>>>>>> dev
import Product from './Pages/Product.jsx';
import Cart from './Pages/Cart.jsx';
import Login from './Pages/Login.jsx';
import PlaceOrder from './Pages/PlaceOrder.jsx';
import Order from './Pages/Order.jsx';
import Navbar from './Components/Navbar.jsx';

const App = () => {
  return (
<<<<<<< HEAD
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
      
=======
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] bg-purple-300'>
      <ToastContainer />
>>>>>>> dev
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/collection' element={<Collection />} />
          <Route path='/about' element={<About />} />
          <Route path='/content' element={<Content />} />
          <Route path='/product/:productId' element={<Product />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/login' element={<Login />} />
          <Route path='/place-order' element={<PlaceOrder />} />
          <Route path='/order' element={<Order />} />

        </Routes>
      
    </div>
  )
}

export default App
