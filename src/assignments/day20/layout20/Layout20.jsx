
import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar20 from '../components20/NavBar20'

const Layout20 = () => {
  return (
    <>
      <NavBar20 />
      <Outlet />
    </>
  )
}

export default Layout20