import React, {useState} from 'react'
import Navbar from './Component/Navbar.jsx';
import Sidebar from './Component/Sidebar.jsx';
import { Route, Routes } from 'react-router-dom';
import Add from './Pages/Add.jsx';
// import List from './Pages/List.jsx';
// import Orders from './Pages/Orders.jsx';
import Login from './Component/Login.jsx';


const App = () => {

  const [token, setToken] = useState('');



  return (
    <div className='bg-gray-50 min-h-screen'>

      {token === '' ? <Login /> : 
      <>
    <Navbar />
    <hr />
    <div className="flex w-full">
      <Sidebar />
      <div className='w-[70%] mx-auto ml-[max(5vw,25px)] my-8 text-gray-600 text-base'>
        <Routes>
          <Route path="/add" element={ <Add /> } />
          <Route path="/list" element={ <List /> } />
          <Route path="/orders" element={ <Orders /> } />
        </Routes>
      </div>
    </div>
    </>
    }
    </div>
  )
}

export default App
