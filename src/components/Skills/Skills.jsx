import React from 'react'
import { FaFacebook } from 'react-icons/fa'

const Skills = () => {
    return (
        <div className='h-[30%] mt-4'>
            <span className="flex items-center">
                <span className="h-px flex-1 bg-black"></span>
                <span className="shrink-0 px-6 font-semibold text-4xl">My Skills</span>
                <span className="h-px flex-1 bg-black"></span>
            </span>

            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                <div className="grid grid-cols-2 row-gap-8 md:grid-cols-4">
                    <div className="text-center md:border-r">
                        <img className='w-20 mx-auto' src="https://i.ibb.co/tbXMsV5/png-transparent-react-javascript-angularjs-ionic-github-text-logo-symmetry-thumbnail.png" alt="" />
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
      <span className="font-bold text-white"> 75% </span>
    </span>

    <span className="block h-4 rounded-full bg-red-300 text-center" style={{width:"75%"}}> </span>
  </span>
</div>
                        </p>
                    </div>
                    <div className="text-center md:border-r">
                        <img className='w-20 mx-auto' src="https://i.ibb.co/8bs8jyr/kisspng-python-computer-icons-programming-language-executa-5d0f0aa79779a6-6143656815612668556205.jpg" alt="" />
                        <p className="text-sm mt-4 font-medium tracking-widest text-gray-800 uppercase lg:text-base">
                            <div className='w-[50%] mx-auto'>
                                <span id="ProgressLabel" className="sr-only">Loading</span>

                                <span
                                    role="progressbar"
                                    aria-labelledby="ProgressLabel"
                                    aria-valuenow="50"
                                    className="block rounded-full bg-gray-200"
                                >
                                    <span className="block h-4 rounded-full bg-slate-800 text-center text-[10px]/4" style={{ width: "50%" }}>
                                        <span className="font-bold text-white"> 50% </span>
                                    </span>
                                </span>
                            </div>
                        </p>
                    </div>
                    <div className="text-center md:border-r">
                        <img className='w-20 mx-auto' src="https://i.ibb.co/2ggdfsk/Java-Script-logo.png" alt="" />
                        <p className="text-sm mt-4 font-medium tracking-widest text-gray-800 uppercase lg:text-base">
                            <div className='w-[50%] mx-auto'>
                                <span id="ProgressLabel" className="sr-only">Loading</span>

                                <span
                                    role="progressbar"
                                    aria-labelledby="ProgressLabel"
                                    aria-valuenow="50"
                                    className="block rounded-full bg-gray-200"
                                >
                                    <span className="block h-4 rounded-full bg-[#66116d78] text-center text-[10px]/4" style={{ width: "80%" }}>
                                        <span className="font-bold text-white"> 80% </span>
                                    </span>
                                </span>
                            </div>
                        </p>
                    </div>
                    <div className="text-center">
                        <img className='w-20 mx-auto' src="https://i.ibb.co/bRq4VhK/360-F-398181949-Bud-Ymm-Ae-TPJw-Dz6-HMxwf1-PL3-ZNIblohm.jpg" alt="" />
                        <p className="text-sm mt-4 font-medium tracking-widest text-gray-800 uppercase lg:text-base">
                            <div className='w-[50%] mx-auto'>
                                <span id="ProgressLabel" className="sr-only">Loading</span>

                                <span
                                    role="progressbar"
                                    aria-labelledby="ProgressLabel"
                                    aria-valuenow="50"
                                    className="block rounded-full bg-gray-200"
                                >
                                    <span className="block h-4 rounded-full bg-[#6868b3] text-center text-[10px]/4" style={{ width: "50%" }}>
                                        <span className="font-bold text-white"> 50% </span>
                                    </span>
                                </span>
                            </div>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills