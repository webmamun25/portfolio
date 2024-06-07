import React, { useEffect, useState } from 'react'
import { FaLink } from 'react-icons/fa'



const Works = () => {
  const [works, setWorks] = useState([])

  useEffect(() => {
    fetch('http://localhost:8000/addwork')
      .then(res => res.json())
      .then(data => setWorks(data))
  }, [])
  return (
    <div className='px-4 py-8'>
      <div className='text-center mt-3'>
        <span className='text-sm'>Recent Projects</span>
        <h3 className='font-bold text-4xl'>My Portfolio</h3>
      </div>
      <div className="grid grid-cols-3 px-4 py-16 gap-6 mb-4 mt-4" >
        {
          works.map((work,i)=><div
          key={i}
          className="card w-96 bg-base-100 shadow-xl image-full">
          <figure><img src={work.image} alt="Shoes" /></figure>
          <div className="card-body flex justify-center items-center">

            <div className="card-actions justify-end">
              <a href={work.link}>  <FaLink className='text-4xl'>   </FaLink> </a>
            </div>
          </div>
        </div>)
        }
        
        
        
        

      

     

      </div>
    </div>
  )
}

export default Works