import { BarChart } from '@tremor/react';
import { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProviders';





import React from 'react'

export const Dashboard = () => {
    const user=useContext(AuthContext)
  return (
    <div>
        <BarChart
    data={user}
    index="name"
    categories={['Number of threatened species']}
    colors={['blue']}
 
    yAxisWidth={48}
    onValueChange={(v) => console.log(v)}
  />
    </div>
  )
}


