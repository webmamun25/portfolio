import React, { useEffect } from 'react'
import Banner from './Banner'
import Skills from '../../../Skills/Skills'
import Educations from '../../../Educations/Educations'
import Works from '../../../Works/Works'
import Blogs from '../../../Blogs/Blogs'
import Testimonial from '../../../Testimonial/Testimonial'
import BlogsCard from '../../../BlogsCard/BlogsCard'
import Contact from '../../../Contact/Contact'
import Location from '../../../Location/Location'


const Home = () => {
 
  return (
    <div>
  
            <Banner></Banner>
            <Skills></Skills>
            <Educations></Educations>
            <Works></Works>
            <BlogsCard></BlogsCard>
            <Testimonial></Testimonial>
            <Contact></Contact>
            <Location></Location>
           

    </div>
  )
}

export default Home