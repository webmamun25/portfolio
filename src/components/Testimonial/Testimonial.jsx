import React, { useEffect, useState } from 'react'
import Test from './Test'

const Testimonial = () => {
    const [testimonial,setTestmonial]=useState([])
    useEffect(()=>{

        fetch('./testimonial.json')
        .then(res=>res.json())
        .then(data=>setTestmonial(data))
    },[setTestmonial])
   
  return (
    <section className="bg-white">
  <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
    <h2 className="text-center text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
      Read trusted reviews from our customers
    </h2>

    <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-8">
    

     {
      testimonial.map((testi,i)=><Test
      key={i}
      testimonial={testi}
      ></Test>)
     }

     
    </div>


  </div>
</section>
  )
}

export default Testimonial