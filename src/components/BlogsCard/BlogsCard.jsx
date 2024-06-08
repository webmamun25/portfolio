import React, { useContext, useEffect, useState } from 'react'
import Dangeroushtml from './Dangeroushtml'
import { Link } from 'react-router-dom'
import { AuthContext } from '../Providers/AuthProviders'

const BlogsCard = () => {
    const[blogscard,setBlogscard]=useState([])
    const [isLoading, setIsLoading] = useState(false);

    useEffect(()=>{
      setIsLoading(true);
        fetch('https://portfolio-server-theta-eosin.vercel.app/blogs')
        .then(res=>res.json())
        .then(data=>{
          setBlogscard(data)
          setIsLoading(false);
        })
    },[])
 
  return (
   <div>
       <div className='text-center mt-3 mb-4'>
            <span className='text-sm'>Recent Blogs</span>
            <h3 className='font-bold text-4xl'>My Blogs</h3>
        </div>
   <div className='grid grid-cols-3 px-4 py-4 mb-4 mt-4 gap-4'>
        
    {
      isLoading ? <p>Loading...</p>:<>
       {blogscard?.map((blogs,i)=><div 
        key={i}
        className="flex flex-col bg-white border shadow-sm rounded-xl p-4 md:p-5 dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70">
  <h3 className="text-lg font-bold text-gray-800 dark:text-white">
    {blogs.title}
  </h3>
     <p className='text-red-300'>{blogs.date}</p>       
    
    <p className='mt-3'>
    <Dangeroushtml  content={blogs.content} />
    </p>
    
  

    

  <Link to={`/dashboard/blogs/${blogs._id}`} className="mt-3 inline-flex items-center gap-x-1 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-400" href="#">
    Details
    <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="m9 18 6-6-6-6"></path>
    </svg>
  </Link>
</div>)}
      </>
    }

       

    </div>
   </div>

  )
}

export default BlogsCard