
import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from '../components/NavBar'

const LayoutSeven = () => {
  return (
   <>
   <NavBar />
   <main>
    <Outlet/>
   </main>
   
   </>
  )
}

export default LayoutSeven