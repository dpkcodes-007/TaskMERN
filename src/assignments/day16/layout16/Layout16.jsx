
import React from 'react'
import NavBar16 from '../components16/NavBar16'
import { Outlet } from 'react-router-dom'

const Layout16 = () => {
  return (
    <>
      <NavBar16 />
      <Outlet />
    </>
  )
}

export default Layout16