import React, { useContext, useEffect, useState } from 'react';
import Dangeroushtml from './Dangeroushtml';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProviders';

const BlogsCard = () => {
    const [blogscard, setBlogscard] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            fetch('https://portfolio-server-theta-eosin.vercel.app/blogs')
                .then(res => res.json())
                .then(data => { 
                    setBlogscard(data);
                    setIsLoading(false);
                });
        }, 500);
    }, []);
 
    return (
        <div>
            <div className='text-center mt-3 mb-4'>
                <span className='text-sm'>Recent Blogs</span>
                <h3 className='font-bold text-4xl'>My Blogs</h3>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4 px-4 py-4'>
                {
                    isLoading ? <span className="loading loading-ball loading-lg text-center"></span> :
                    blogscard.map((blogs, i) => (
                        <div key={i} className="bg-white border shadow-sm rounded-xl p-4 md:p-5 dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70">
                            <h3 className="text-lg font-bold text-gray-800 dark:text-white">
                                {blogs?.title}
                            </h3>
                            <p className='text-red-300'>{blogs?.date}</p>
                            <p className='mt-3 text-sm'>
                                <Dangeroushtml content={blogs?.content} />
                            </p>
                            <Link to={`/blogs/${blogs?._id}`} className="mt-3 px-14 inline-flex items-center gap-x-1 text-sm font-semibold rounded-lg border text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-400">
                                Details
                                
                            </Link>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default BlogsCard;