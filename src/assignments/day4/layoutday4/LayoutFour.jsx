
import React from 'react'
import { Outlet } from 'react-router-dom'
import NavbarFour from '../components/NavbarFour'

const LayoutFour = () => {
  return (
   <>
   <NavbarFour/>
   <main>
    <Outlet/>
   </main>
   
   </>
  )
}

export default LayoutFour