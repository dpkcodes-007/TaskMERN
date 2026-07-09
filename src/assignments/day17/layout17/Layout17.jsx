
import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar17 from '../components17/NavBar17'

const Layout17 = () => {
  return (
    <>
      <NavBar17 />
      <Outlet />
    </>
  )
}

export default Layout17