
import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar21 from '../components21/NavBar21'

const Layout21 = () => {
  return (
    <>
      <NavBar21 />
      <Outlet />
    </>
  )
}

export default Layout21