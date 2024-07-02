import React, { useContext } from 'react'

import { Navigate, useLocation } from 'react-router-dom'
import { AuthContext } from '../Providers/AuthProviders'

const PrivateRoutes = ({children}) => {
    const {user,loading}=useContext(AuthContext)
    const location=useLocation()
    if(loading){
        return <div>Loading...</div>
    }
    if(user?.email){
        return  children
    }

  return (
    <Navigate state={location.pathname} to='/login'>PrivateRoutes</Navigate>
  )
}

export default PrivateRoutes