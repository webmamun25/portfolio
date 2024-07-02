import React from 'react'
// grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4
const AddWorks = () => {

    const Addwork=(e)=>{
        e.preventDefault()
        const form=e.target 
        
        const image=form.image.value 
        const link=form.link.value 
        const data={image,link}
        fetch('https://portfolio-server-theta-eosin.vercel.app/addwork',{
            method: "POST", 
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
          })
        
    }

  return (
    <div>
       

<div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
  <div className="mx-auto max-w-lg">
    <h1 className="text-center text-2xl font-bold text-indigo-600 sm:text-3xl">ADD PERSONAL WEBSITE</h1>


    <form onSubmit={Addwork} action="#" className="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8">
      

      <div>
        <label htmlFor="email" className="sr-only">Full Page Image</label>

        <div className="relative">
          <input
            name='image'
            type="text"
            className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
            placeholder="Enter your image"
          />

         
        </div>
      </div>

      <div>
        <label htmlFor="password" className="sr-only">Enter portfolio link</label>

        <div className="relative">
          <input
            type="password"
            name="link"
            className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
            placeholder="Enter Live link"
          />

          
        </div>
      </div>

      <button
        type="submit"
        className="block w-full rounded-lg btn btn-accent px-5 py-3 text-sm font-medium text-black"
      >
        Add Portfolio Website
      </button>

    
    </form>
  </div>
</div>
    </div>
  )
}

export default AddWorks