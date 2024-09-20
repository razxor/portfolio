import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/shared/Navbar'
const MasterLayout = () => {
  return (
    <>
    {/* <Navbar /> */}
    <Outlet/>
    </>
  )
}
export default MasterLayout
