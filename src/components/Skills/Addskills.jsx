import React from 'react'

const Addskills = () => {

  const handleSkills=(e)=>{
    e.preventDefault()
    const form=e.target
    const logo=form.logo.value 
    const percentage=form.percentage.value 
    const data={logo,percentage}
    console.log(data)
    fetch('http://localhost:8000/skills',{
      method: "POST", 
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
  }

  return (
    <div className='w-full flex flex-col justify-center items-center'>
      <div className=" ">
  <form onSubmit={handleSkills} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
        Logo
      </label>
      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="title" name="logo" type="text" placeholder="url"/>
    </div>
    <div className="mb-6">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="percent">
        How many percentage do you learn?
      </label>
      <input className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" name="percentage" id="percent" type="text" placeholder="Give percentage value"/>
      
    </div>
    <div className="flex items-center justify-between">
      <button type="submit" className="btn btn-accent text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
        Add skillset
      </button>
    
    </div>
  </form>

</div>
    </div>
  )
}

export default Addskills