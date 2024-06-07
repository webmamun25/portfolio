import React from 'react'

const AddFeedback = () => {
    const Addtestmonial=(e)=>{
        e.preventDefault()
        const form=e.target 
        const name=form.name.value 
        const image=form.image.value 
        const speech=form.speech.value 
        const data={name,image,speech}
        fetch('http://localhost:8000/testimonial',{
            method: "POST", 
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
          })
        
    }
  return (
    <div>
     

<section className="bg-gray-100">
  <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
      <div className="lg:col-span-2 lg:py-12">
        <p className="max-w-xl text-lg">
        If you have enough time feel free to give me a feedback.How can i improve my portfolio.It doesn't matter how silly improvement it is.
        </p>

        <div className="mt-8">
          <a href="#" className="text-2xl font-bold text-pink-600"> 0153 741 224 </a>

          <address className="mt-2 not-italic">west quaish,hathazari,chattgoram,Bangladesh</address>
        </div>
      </div>

      <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
        <form onSubmit={Addtestmonial} className="space-y-4">
          <div>
            <label className="sr-only" htmlFor="name">Name</label>
            <input
              className="w-full rounded-lg border-gray-200 p-3 text-sm"
              placeholder="Name"
              name="name"
              type="text"
              id="name"
            />
          </div>
          <div>
            <label className="sr-only" htmlFor="image">Image</label>
            <input
              className="w-full rounded-lg border-gray-200 p-3 text-sm"
              placeholder="image url"
              type="text"
              name='image'
              id="image"
            />
          </div>

         

          

          <div>
            <label className="sr-only" htmlFor="message">Message</label>

            <textarea
              className="w-full rounded-lg border-gray-200 p-3 text-sm"
              placeholder="Message"
              rows="8"
              name="speech"
              id="message"
            ></textarea>
          </div>

          <div className="mt-4">
            <button
              type="submit"
              className="inline-block w-full rounded-lg bg-black px-5 py-3 font-medium text-white sm:w-auto"
            >
              Send Feedback
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</section>
    </div>
  )
}

export default AddFeedback