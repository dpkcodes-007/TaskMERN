
import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar8 from '../components/Navbar8'

const Layout8 = () => {
  return (
   <>
   <Navbar8/>
   <main>
    <Outlet/>
   </main>
   
   </>
  )
}

export default Layout8