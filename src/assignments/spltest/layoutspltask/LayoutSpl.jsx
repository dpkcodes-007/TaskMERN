import React from 'react'
import NavBarspl from '../componentsspltask/NavBarSpl'
import { Outlet } from 'react-router-dom'

const LayoutSpl = () => {
  return (
    <>
    <NavBarspl/>
    <Outlet/>
    </>
  )
}

export default LayoutSpl