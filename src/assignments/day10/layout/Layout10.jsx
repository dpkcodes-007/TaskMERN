import React from 'react'
import NavBar10 from '../components/NavBar10'
import { Outlet } from 'react-router-dom'

const Layout10 = () => {
  return (
    <>
    <NavBar10/>
    <Outlet/>
    </>
  )
}

export default Layout10