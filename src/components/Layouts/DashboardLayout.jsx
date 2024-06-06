import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../pages/shared/Sidebar'

const DashboardLayout = () => {
  return (
    <div className='flex gap-3'>
        <Sidebar></Sidebar>   
        <Outlet></Outlet>
    </div>
  )
}

export default DashboardLayout