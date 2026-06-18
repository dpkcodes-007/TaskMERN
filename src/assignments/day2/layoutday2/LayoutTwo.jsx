import React from 'react'
import { Outlet } from 'react-router-dom'
import NavbarTwo from '../components/NavbarTwo'

const LayoutTwo = () => {
  return (
    <>
    <NavbarTwo/>
    <main>
      <Outlet/>
    </main>
    </>
  )
}

export default LayoutTwo