import React from 'react'
import { Outlet } from 'react-router-dom'
import NavbarThree from '../components/NavbarThree'

const LayoutThree = () => {
  return (
    <>
    <NavbarThree/>
      <Outlet/>
    </>
  )
}

export default LayoutThree