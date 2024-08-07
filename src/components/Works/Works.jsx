import React, { useContext, useEffect, useState } from 'react'
import { FaLink } from 'react-icons/fa'
import { AuthContext } from '../Providers/AuthProviders'



const Works = () => {
  const [works, setWorks] = useState([])
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
      setTimeout(()=>{
        fetch('https://portfolio-server-theta-eosin.vercel.app/addwork')
        .then(res => res.json())
        .then(data =>{ 
          setWorks(data)
          setIsLoading(false);
        })
      },300)
  }, [])

  

  return (
    <div className='px-4 py-8'>
      <div className='text-center mt-3'>
        <span className='text-sm'>Recent Projects</span>
        <h3 className='font-bold text-4xl'>My Portfolio</h3>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4" >

        {
          isLoading ? <span className="loading loading-ball loading-lg text-center"></span>:<>
          {
          works.slice(0,3)?.map((work,i)=><div
          key={i}
          className="card ;g:w-96 bg-base-100 shadow-xl image-full">
          <figure><img src={work?.image} alt="Shoes" /></figure>
          <div className="card-body flex justify-center items-center">

            <div className="card-actions justify-end">
              <a href={work?.link}>  <FaLink className='text-4xl'>   </FaLink> </a>
            </div>
          </div>
        </div>)
        }
          </>
        }
        
        
        
        
        

      

     

      </div>
    </div>
  )
}

export default Works