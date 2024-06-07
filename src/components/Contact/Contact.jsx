import React from 'react'

const Contact = () => {
const sendMessage=(e)=>{
  e.preventDefault()
  const form=e.target 
  const name=form.name.value 
  const email=form.email.value
  const subject=form.subject.value 
  const message=form.message.value 

  const mail={name,email,subject,message}
  fetch('http://localhost:8000/mail',{
    method:'POST',
    headers:{
      "Content-Type": "application/json",
    },
    body: JSON.stringify(mail)
}
  )

}
  return (
    <div className='grid grid-cols-2 gap-4 mb-4 h-[700px]'>
        <div className='h-full  object-contain'>
            <h1 className='font-semibold text-gray-600 mb-3'>Leave us your info</h1>
            <form onSubmit={sendMessage} className="space-y-4">
          <div>
            <label className="sr-only" htmlFor="name">Your Full Name</label>
            <input
              className="w-full rounded-lg border-gray-200 p-3 text-sm"
              placeholder="Name"
              name="name"
              type="text"
              id="name"
            />
          </div>
          <div>
            <label className="sr-only" htmlFor="Email">Your Email</label>
            <input
              className="w-full rounded-lg border-gray-200 p-3 text-sm"
              placeholder="Email"
              name="email"
              type="email"
              id="Email"
            />
          </div>
          <div>
            <label className="sr-only" htmlFor="Subject">Subject</label>
            <input
              className="w-full rounded-lg border-gray-200 p-3 text-sm"
              placeholder="Subject"
              name="subject"
              type="text"
              id="Subject"
            />
          </div>
        

         

          

          <div>
            <label className="sr-only" htmlFor="message">Your Message</label>

            <textarea
              className="w-full rounded-lg border-gray-200 p-3 text-sm"
              placeholder="Message"
              rows="18"
              name="message"
              id="message"
            ></textarea>
          </div>

          <div className="mt-4">
            <button
              type="submit"
              className="inline-block w-full rounded-lg btn btn-accent px-5 py-3 font-medium text-black sm:w-auto"
            >
              Send Message
            </button>
          </div>
        </form>
        </div>
        <div className='h-full object-contain overflow-hidden'>
            <h3 className='font-semibold text-gray-700 text-center mb-4'>Contact information</h3>
            <section className='mx-auto w-52 space-y-5'>
                <div className="address bg-[#F9F9F9] size-[350px] py-2 px-2 flex flex-col justify-evenly ">
                    <div>
                <img className='w-50 mx-auto' src="https://i.ibb.co/RhCyVHx/location.png" alt="" />
                    </div>
                    <div>
                    <div className='flex justify-evenly'>
                        <div>Country:</div>
                        <div>Bangladesh</div>
                    </div>
                    <div className='flex justify-evenly'>
                        <div>City:</div>
                        <div>Chattogram</div>
                    </div>
                    <div className='flex justify-evenly'>
                        <div>Street:</div>
                        <div>Kaptai Rd,hathazari</div>
                    </div>
                    </div>
                
                </div>
                <div className="address bg-[#F9F9F9] size-[350px] py-2 px-2 flex flex-col justify-evenly ">
                    <div>
                <img className='w-50 mx-auto' src="https://i.ibb.co/SmrHQFK/Group-243-1.png" alt="" />
                    </div>
                    <div>
                    <div className='flex justify-evenly'>
                        <div>Email:</div>
                        <div>mdmamun113901@gmail.com</div>
                    </div>
                    <div className='flex justify-evenly'>
                        <div>Linkedin:</div>
                        <div>https://www.linkedin.com/in/md-rashedul-islam-mamun/</div>
                    </div>
                    <div className='flex justify-evenly'>
                        <div>Github:</div>
                        <div>https://github.com/webmamun25</div>
                    </div>
                    </div>
                
                </div>
             
            </section>
        </div>

    </div>
  )
}

export default Contact