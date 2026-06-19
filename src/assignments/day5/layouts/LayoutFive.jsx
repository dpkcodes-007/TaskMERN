
import React from 'react'
import { Outlet } from 'react-router-dom'
import NavbarFive from '../components/NavbarFive'

const LayoutFour = () => {
  return (
   <>
   <NavbarFive/>
   <main>
    <Outlet/>
   </main>
   
   </>
  )
}

export default LayoutFour