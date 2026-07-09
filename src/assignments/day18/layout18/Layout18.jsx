
import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar18 from '../components18/NavBar18'

const Layout18 = () => {
  return (
    <>
      <NavBar18 />
      <Outlet />
    </>
  )
}

export default Layout18