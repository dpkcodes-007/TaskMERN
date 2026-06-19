
import React from 'react'
import { Outlet } from 'react-router-dom'
import NavbarFive from '../components/NavbarFive'

const LayoutFive = () => {
  return (
   <>
   <NavbarFive/>
   <main>
    <Outlet/>
   </main>
   
   </>
  )
}

export default LayoutFive