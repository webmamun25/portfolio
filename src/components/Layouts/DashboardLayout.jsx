import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../pages/shared/Sidebar'

const DashboardLayout = () => {
  return (
    <div className='grid grid-cols-4 gap-3'>
      <div ><Sidebar></Sidebar>   </div>
      <div className='col-span-3'><Outlet></Outlet></div>
        
        
    </div>
  )
}

export default DashboardLayout