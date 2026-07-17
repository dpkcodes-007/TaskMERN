
import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar22 from '../components22/NavBar22'

const Layout22 = () => {
  return (
    <>
      <NavBar22 />
      <Outlet />
    </>
  )
}

export default Layout22