import React from 'react'
import './Banner.css'
const Banner = () => {
  return (
    <div className='Banner'>
      <section className=" text-white">
        <div className="max-w-screen-xl px-4 py-32 lg:flex lg:h-screen items-center justify-evenly">
          <div>
            <div className="mx-auto max-w-3xl text-center">
              <h1
                className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl"
              >
                I’m Rashedul Islam Mamun


                <span className="sm:block">Front-end Developer </span>
              </h1>

              <p className="mx-auto mt-4 max-w-xl sm:text-xl/relaxed">
                Building beautiful and functional web interfaces | ML Enthusiast
              </p>

              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <a href="https://drive.google.com/file/d/1uQiXhfqA7UfGuH32GneDYIjJ9DMlxvMI/view?usp=drive_link" download="MyExampleDoc" target='_blank'>
                  <button className='btn btn-accent px-3 py-3 w-48'>Download CV</button>
                </a>


              </div>
            </div>
          </div>
          <div>
            <img className='w-80 h-80' src="https://i.ibb.co/QC63Ldw/Ellipse-3.png" alt="" />
          </div>
        </div>
      </section>

    </div>
  )
}

export default Banner