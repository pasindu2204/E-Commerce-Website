import React from 'react'
import Navbar from './Component/Navbar.jsx';
import Sidebar from './Component/Sidebar.jsx';

const App = () => {
  return (
    <div className='bg-gray-50 min-h-screen'>
      <>
    <Navbar />
    <hr />
    <div className="flex w-full">
      <Sidebar />
    </div>
    </>
    </div>
  )
}

export default App
