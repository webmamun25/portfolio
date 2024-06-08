import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../Providers/AuthProviders'
import { BsBellFill } from "react-icons/bs";
import { TiMessages } from "react-icons/ti";
import { FaUser } from 'react-icons/fa';
const Sidebar = () => {
  const {user}=useContext(AuthContext)
  const [mails,setMails]=useState([])
  const [testimonial,setTestimonial]=useState([])
  useEffect(()=>{
    fetch('https://portfolio-server-theta-eosin.vercel.app/mail')
    .then(res => res.json())
    .then(data => setMails(data))
  },[])
  useEffect(()=>{
    fetch('https://portfolio-server-theta-eosin.vercel.app/testimonial')
    .then(res => res.json())
    .then(data => setTestimonial(data))
  },[])

  return (
    <div className="flex flex-col justify-between  border-e h-screen bg-white">
  <div className="px-4 py-6">
    <span className="flex justify-center items-center">
    <FaUser className='mr-3'></FaUser>
    <p>{user?.email}</p>
    </span>

    <ul className="mt-6 space-y-1">
      <li>
        <Link
          to="/"
          className="block rounded-lg  px-4 py-2 text-sm font-medium text-gray-700"
        >
          Home
        </Link>
      </li>
      <li>
        <Link
          to="/dashboard"
          className="block rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700"
        >
          Add Blogs
        </Link>
      </li>

      <li>
      <Link
          to="/dashboard/allblogs"
          className="block rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700"
        >
           Blogs
        </Link>
      </li>

      <li>
      <Link
          to="/dashboard/addskills"
          className="block rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700"
        >
          Add Skills
        </Link>
      </li>
      <li>
      <Link
          to="/dashboard/addworks"
          className="block rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700"
        >
          Add Works
        </Link>
      </li>
      <li className='flex justify-center gap-4 '>
      
      <div>

        <Link to='/dashboard/mail'>
      <button type="button" className="relative inline-flex items-center p-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
      <TiMessages className='w-5 h-5'/>
<span className="sr-only">Notifications</span>
  <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 -end-2 dark:border-gray-900">{mails?.length}</div>
</button>
</Link>
      </div>
      
      <div>
        <Link to='/dashboard/testimonial'>
        <button type="button" className="relative inline-flex items-center p-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
<BsBellFill className='w-5 h-5'/>
<span className="sr-only">Notifications</span>
  <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 -end-2 dark:border-gray-900">{testimonial?.length}</div>
</button>
        </Link>
     
      </div>
      </li>

      
    
    </ul>
  </div>

  
</div>
  )
}

export default Sidebar