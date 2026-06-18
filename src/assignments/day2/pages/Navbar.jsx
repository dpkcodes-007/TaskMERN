import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

const Navbar = () => {

  const navigate = useNavigate()

  return (
    <nav className="bg-blue-600 text-white p-4 flex justify-between items-center">

      <h1 className="text-2xl font-bold">
        React Process
      </h1>

      <div className="flex gap-5">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </div>

      <div className="flex gap-3">
        <button
          onClick={() => navigate('/login')}
          className="bg-white text-blue-600 px-3 py-1 rounded"
        >
          Login
        </button>

        <button
          onClick={() => navigate('/register')}
          className="bg-green-500 px-3 py-1 rounded"
        >
          Register
        </button>
      </div>

    </nav>
  )
}

export default Navbar