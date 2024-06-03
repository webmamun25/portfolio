import React from 'react'

const Educations = () => {
    return (
        <div>
            <h1 className='text-4xl font-semibold text-center'>Education</h1>
            <p className='text-center mt-4'>Education is more than just textbooks.</p>
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                <div className="mb-10 border-t border-b divide-y">
                    <div className="grid py-8  sm:grid-cols-3">
                        <div className="mb-4 sm:mb-0">
                            <div className="space-y-1 text-xs font-semibold tracking-wide uppercase">
                                <a href="/" className="transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800" aria-label="Category">PORT CITY INTERNATIONAL UNIVERSITY</a>
                                <p className="text-gray-600">  Student <span className='text-red-300 ml-10'>5 Jan 2020-23 Jan 2023</span> </p>
                            </div>
                        </div>
                        <div className="sm:col-span-3 lg:col-span-2">
                            <div className="mb-3">
                                <a href="/" aria-label="Article" className="inline-block text-black transition-colors duration-200 hover:text-deep-purple-accent-700">
                                    <p className="text-3xl font-extrabold leading-none sm:text-4xl xl:text-4xl">
                                        Bachelor Science In Computer Science and Engineering
                                    </p>
                                </a>
                            </div>
                            <p className="text-gray-700">
                                Learn a lot of technolgies practically and theoretically
                            </p>
                        </div>
                    </div>
                    <div className="grid py-8 sm:grid-cols-3">
                        <div className="mb-4 sm:mb-0">
                        <div className="space-y-1 text-xs font-semibold tracking-wide uppercase">
                                <a href="/" className="transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800" aria-label="Category">JUNIOR WEB DEVELOPMENT COURSE</a>
                                <p className="text-gray-600">  Student <span className='text-red-300 ml-10'>5 July 2021-31 DEC 2021</span> </p>
                            </div>
                        </div>
                        <div className="sm:col-span-3 lg:col-span-2">
                            <div className="mb-3">
                                <a href="/" aria-label="Article" className="inline-block text-black transition-colors duration-200 hover:text-deep-purple-accent-700">
                                    <p className="text-3xl font-extrabold leading-none sm:text-4xl xl:text-4xl">
                                        MERN STACK WEB DEVELOPMENT
                                    </p>
                                </a>
                            </div>
                            <p className="text-gray-700">
                            learn core knowledge about javascript, the most popular programming language on the web. it's everywhere!



                            </p>
                        </div>
                    </div>
                    <div className="grid py-8 sm:grid-cols-3">
                        <div className="mb-4 sm:mb-0">
                        <div className="space-y-1 text-xs font-semibold tracking-wide uppercase">
                                <a href="/" className="transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800" aria-label="Category">OSTAD-DATA SCIENCE</a>
                                <p className="text-gray-600">  Student <span className='text-red-300 ml-10'>5 May 2023-23 Aug 2023</span> </p>
                            </div>
                        </div>
                        <div className="sm:col-span-3 lg:col-span-2">
                            <div className="mb-3">
                                <a href="/" aria-label="Article" className="inline-block text-black transition-colors duration-200 hover:text-deep-purple-accent-700">
                                    <p className="text-3xl font-extrabold leading-none sm:text-4xl xl:text-4xl">
                                        DATA SCIENCE TRAINING COURSE
                                    </p>
                                </a>
                            </div>
                            <p className="text-gray-700">
                                Learn a hot cake on this era,which is artificial intelligence.
                            </p>
                        </div>
                    </div>
                </div>
          
            </div>
        </div>
    )
}

export default Educations