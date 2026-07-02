import React from 'react'
import NavBar13 from '../components13/NavBar13'
import { Outlet } from 'react-router-dom'

const Layout13 = () => {
  return (
    <>
      <NavBar13 />
      <Outlet />
    </>
  )
}

export default Layout13