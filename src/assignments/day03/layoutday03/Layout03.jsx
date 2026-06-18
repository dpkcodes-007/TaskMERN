import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar03 from '../components/Navbar03'

const Layout03 = () => {
  return (
    <>
    <Navbar03/>
    <main>
      <Outlet/>
    </main>
    </>
  )
}

export default Layout03