import React, { useContext, useEffect, useState } from 'react'
import { FaFacebook } from 'react-icons/fa'
import { AuthContext } from '../Providers/AuthProviders'

const Skills = () => {
    const [skills,setSkills]=useState([])
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
          setTimeout(()=>{
            fetch('https://portfolio-server-theta-eosin.vercel.app/skills')
            .then(res => res.json())
            .then(data =>{ 
              setSkills(data)
              setIsLoading(false);
            })
          },2000)
      }, [])
   
   
   
    return (
        <div className='h-[30%] mt-4'>
            <span className="flex items-center">
                <span className="h-px flex-1 bg-black"></span>
                <span className="shrink-0 px-6 font-semibold text-4xl">My Skills</span>
                <span className="h-px flex-1 bg-black"></span>
            </span>

            <div className="grid grid-cols-4">

            {isLoading ? <p>Loading...</p> : <>  {
                skills?.map((skill,i)=><div key={i}
                 className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                <div className="grid grid-cols-2 row-gap-8 md:grid-cols-1">
                    <div className="text-center">
                        <img className='w-20 mx-auto' src={skill?.logo} alt="" />
                        <p className="text-sm mt-4 text-center font-medium tracking-widest text-gray-800 uppercase lg:text-base">
                            <div className='w-[50%] mx-auto'>
                                <span id="ProgressLabel" className="sr-only">Loading</span>

                                <span
                                    role="progressbar"
                                    aria-labelledby="ProgressLabel"
                                    aria-valuenow="75"
                                    className="relative block rounded-full bg-gray-200"
                                >
                                    <span className="absolute inset-0 flex items-center justify-center text-[10px]/4">
                                        <span className="font-bold text-white"> {skill.percentage}% </span>
                                    </span>

                                    <span className="block h-4 rounded-full bg-red-300 text-center" style={{ width: `${skill.percentage}%` }}> </span>
                                </span>
                            </div>
                        </p>
                    </div>
                    
                </div>
            </div>
                )
            }</>}
      
           
          
            
            
            </div>

            
        </div>
    )
}

export default Skills