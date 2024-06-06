import { BarChart } from '@tremor/react';
import { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProviders';





import React from 'react'
import Sidebar from '../../pages/shared/Sidebar';
import Blogs from '../../Blogs/Blogs';

export const Dashboard = () => {
    const user=useContext(AuthContext)
  return (
    <div>
        
        <Blogs></Blogs>
    </div>
  )
}


