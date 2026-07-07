import React from 'react'
import NavBar15 from '../components15/NavBar15'
import { Outlet } from 'react-router-dom'

const Layout15 = () => {
  return (
    <>
      <NavBar15 />
      <Outlet />
    </>
  )
}

export default Layout15