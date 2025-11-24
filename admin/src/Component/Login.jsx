import React from 'react'

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

const onSubmitHandler  = async (e) => {

    try {
        e.preventdefault();
        console.log

        
    } catch (error) {
        
    }
}

  return (
    <div className='min-h-screen flex items-center justify-center w-full'>
       <div className='bg-white shadow-md rounded-lg px-8 py-6 max-w-md'>
        <h1 className='text-2xl font-bold mb-4'>Admin Panel</h1>
        <form onSubmit={onSubmitHandler}>
            <div className='mb-3 min-w-72'>
                <p className='text:sm font-medium text-gray-700 mb-2'>Email Address</p>
                <input placeholder="Enter your email" type="email" className='rounded-md w-ful px-3 py-2 border border-gray-300 outline-none ' required />
            </div>
            <div className='mb-3 min-w-72'>
                <p className='text:sm font-medium text-gray-700 mb-2'>Password</p>
                <input type="password"className='rounded-md w-ful px-3 py-2 border border-gray-300 outline-none '/>
            </div>
            <button type="submit" className='bg-gray-700 text-white px-4 py-2 w-full rounded-md mt-4'>Login</button>
        </form>
       </div>
    </div>
  )
}

export default Login
