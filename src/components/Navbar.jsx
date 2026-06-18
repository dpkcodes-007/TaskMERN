import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
    <div className='p-8 bg-blue-900 text-white flex justify-between '>
        <div className='text-4xl px-5'>Deepak R </div>
        <div className='flex gap-10 items-center'>
            <Link to={'/'}>Home</Link>
            <p className='cursor-not-allowed'>Task</p>
            <p className='cursor-not-allowed'>Profile</p>
        </div>
    </div>
    </>
  )
}

export default Navbar