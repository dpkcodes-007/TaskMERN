
import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar23 from '../components23/NavBar23'

const Layout23 = () => {
  return (
    <>
      <NavBar23 />
      <Outlet />
    </>
  )
}

export default Layout23