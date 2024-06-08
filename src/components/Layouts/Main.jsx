import React, { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../pages/shared/Navbar'
import Footer from '../pages/shared/Footer'

const Main = () => {
  useEffect(()=>{
    setTimeout(()=>{
      <span className="loading loading-spinner text-primary"></span>
    },2000)
  },[])
  return (
    <div>
        <Navbar></Navbar>
        <Outlet></Outlet>
        <Footer></Footer>
    </div>
  )
}

export default Main