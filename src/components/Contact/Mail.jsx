import React, { useEffect, useState } from 'react'

const Mail = () => {
    const [mails,setMails]=useState([])
    useEffect(()=>{
        fetch('https://portfolio-server-theta-eosin.vercel.app/mail')
        .then(res=>res.json())
        .then(data=>setMails(data))
    },[setMails])

  return (
    <div>
        {mails?.map((mail,i)=><a key={i}
  href="#"
  className="relative block overflow-hidden rounded-lg border border-gray-100 p-4 sm:p-6 lg:p-8"
>
  <span
    className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"
  ></span>

  <div className="sm:flex sm:justify-between sm:gap-4">
    <div>
      <h3 className="text-lg font-bold text-gray-900 sm:text-xl">
        {mail.email}
      </h3>

      <p className="mt-1 text-xs font-medium text-gray-600">{mail.name}</p>
      <p className="mt-1 text-xs font-medium text-gray-600">{mail.subject}</p>
    </div>

   
  </div>

  <div className="mt-4">
    <p className="text-pretty text-sm text-gray-500">
      {mail.message}
    </p>
  </div>

  
</a>)}
        
    </div>
  )
}

export default Mail