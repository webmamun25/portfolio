import React from 'react'
import { FaLink } from 'react-icons/fa'



const Works = () => {
  return (
    <div className='px-4 py-8'>
        <div className='text-center mt-3'>
            <span className='text-sm'>Recent Projects</span>
            <h3 className='font-bold text-4xl'>My Portfolio</h3>
        </div>
        <div className="grid grid-cols-3 px-4 py-16 gap-6 mb-4 mt-4" >
        <div className="card w-96 bg-base-100 shadow-xl image-full">
  <figure><img src="https://i.postimg.cc/sgjfMzbt/screencapture-aquamarine-klepon-d98778-netlify-app-2024-06-03-03-43-55.png" alt="Shoes" /></figure>
  <div className="card-body flex justify-center items-center">
  
    <div className="card-actions justify-end">
    <a href="https://aquamarine-klepon-d98778.netlify.app/">  <FaLink className='text-4xl'>   </FaLink> </a>
    </div>
  </div>
</div>

<div className="card w-96 bg-base-100 shadow-xl image-full">
  <figure><img src="https://i.postimg.cc/s21VJcjm/screencapture-donation25-netlify-app-2024-06-03-03-47-38.png" alt="Shoes" /></figure>
  <div className="card-body flex justify-center items-center">
  
    <div className="card-actions justify-end">
      <a href="https://donation25.netlify.app/">  <FaLink className='text-4xl'>  </FaLink> </a>
    </div>
  </div>
</div>

<div className="card w-96 bg-base-100 shadow-xl image-full">
  <figure><img src="https://i.postimg.cc/3xt8p6TW/screencapture-electronics-heldro-vercel-app-2024-06-03-03-45-59.png" alt="Shoes" /></figure>
  <div className="card-body flex justify-center items-center ">
   
    <div className="card-actions items-end flex-col">
    <a href="https://electronics-heldro.vercel.app/">  <FaLink className='text-4xl'>  </FaLink> </a>
    </div>
  </div>
</div>

        </div>
    </div>
  )
}

export default Works