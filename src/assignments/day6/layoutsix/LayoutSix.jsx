
import React from 'react'
import { Outlet } from 'react-router-dom'
import NavbarSix from '../components/NavbarSix'

const LayoutSix = () => {
  return (
   <>
   < NavbarSix/>
   <main>
    <Outlet/>
   </main>
   
   </>
  )
}

export default LayoutSix