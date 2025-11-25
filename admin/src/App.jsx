import React, {useEffect, useState} from 'react'
import Navbar from './Component/Navbar.jsx';
import Sidebar from './Component/Sidebar.jsx';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import List from './Pages/List.jsx';
import Orders from './Pages/Order.jsx';
import Add from './Pages/Add.jsx';
import Login from './Component/Login.jsx';


export const backendUrl = import.meta.env.VITE_BACKEND_URL;

const App = () => {


  const [token, setToken] = useState(() => {
    try {
      return localStorage.getItem('token') || '';
    } catch (e) {
      return '';
    }
  });


  useEffect(() => {
    try {
      if (token) {
        localStorage.setItem('token', token);
      } else {
        localStorage.removeItem('token');
      }
    } catch (e) {
      // ignore (e.g., running in non-browser environment)
    }
  }, [token]);



  return (
    <div className='bg-gray-50 min-h-screen'>
      <ToastContainer />
      {token === '' ? <Login setToken={setToken} /> : 
      <>
    <Navbar setToken={setToken} />
    <hr />
    <div className="flex w-full">
      <Sidebar />
      <div className='w-[70%] mx-auto ml-[max(5vw,25px)] my-8 text-gray-600 text-base'>
        <Routes>
          <Route path="/" element={ <List token={token} /> } />
          <Route path="/add" element={ <Add token={token} /> } />
          <Route path="/list" element={ <List token={token} /> } />
          <Route path="/orders" element={ <Orders token={token} /> } />
        </Routes>
      </div>
    </div>
    </>
    }
    </div>
  )
}

export default App
