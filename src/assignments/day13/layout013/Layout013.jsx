import React from 'react'
import NavBar013 from '../components013/NavBar013'
import { Outlet } from 'react-router-dom'

const Layout013 = () => {
  return (
    <>
      <NavBar013 />
      <Outlet />
    </>
  )
}

export default Layout013