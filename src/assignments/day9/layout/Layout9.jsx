import React from 'react'
import NavBar9 from '../components/NavBar9'
import { Outlet } from 'react-router-dom'
import Navbar9 from '../components/NavBar9'

const Layout8 = () => {
  return (
    <>
        <NavBar9/>
        <Outlet/>
    </>
  )
}

export default Layout8