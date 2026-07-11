
import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar19 from '../components19/NavBar19'

const Layout19 = () => {
  return (
    <>
      <NavBar19 />
      <Outlet />
    </>
  )
}

export default Layout19