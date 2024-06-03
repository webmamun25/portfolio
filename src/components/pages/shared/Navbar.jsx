import React, { useContext } from 'react'
import './Navbar.css'
import { AuthContext } from '../../Providers/AuthProviders'
import { Link } from 'react-router-dom'
const Navbar = () => {
  const {logOut,user,loading}=useContext(AuthContext)



  const handleSignout=()=>{
    logOut()
    .then(err=>{
      console.log(err)
    })
  }
  return (
    <div className='glass'>
      <div className="navbar">
  <div className="navbar-start">
    <img className='w-10' src="https://i.ibb.co/8rLCSG0/green-pink-square-with-green-background-green-square-with-circle-middle-removebg-preview.png" alt="" />
  </div>
  <div className="navbar-center">
    <a className="btn btn-ghost text-xl">Mamun's Portfolio</a>
  </div>
  <div className="navbar-end">
  <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
      <li><Link to='/'>Home</Link></li>
        <li><Link to='/blogs'>Blogs</Link></li>
        <li><Link to='/dashboard'>Dashboard</Link></li>
        {user?.email ? <>
           
            <li><button onClick={handleSignout}>Logout</button></li>
           </>: <li><Link to='/login' >Login</Link></li>}
        <li><a href='/signup'>Signup</a></li>
      </ul>
    </div>
  </div>
</div>
    </div>
  )
}

export default Navbar