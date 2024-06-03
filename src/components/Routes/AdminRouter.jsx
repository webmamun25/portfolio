import React, { useContext } from 'react'

import { Navigate, useLocation } from 'react-router-dom'
import { AuthContext } from '../Providers/AuthProviders'

const AdminRoutes = ({children}) => {
    const {user,loading}=useContext(AuthContext)
    console.log(user?.email)
    const location=useLocation()
    if(loading){
        return <div>Loading...</div>
    }
    if(user?.email=='mama@mami.com'){
        return  children
    }

  return (
    <Navigate state={location.pathname} to='/login'>AdminRoutes</Navigate>
  )
}

export default AdminRoutes