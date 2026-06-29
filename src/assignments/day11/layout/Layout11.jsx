import React from 'react'
import NavBar from '../components/NavBar'
import { Outlet } from 'react-router-dom'

const Layout11 = () => {
  return (
   <>
   <NavBar/>
   <Outlet/>
   </>
  )
}

export default Layout11