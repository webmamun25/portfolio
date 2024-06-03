
import  { useContext, useState } from 'react';




import {  useRef, useMemo } from 'react';
import JoditEditor from 'jodit-react';
import { AuthContext } from '../Providers/AuthProviders';
const Blogs = () => {
    
    const {user,loading}=useContext(AuthContext)
    const editor = useRef(null);
	const [content, setContent] = useState('');
    console.log(user?.email)
    if(loading){
        return <spin>Loading...</spin>
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        const form=e.target
        const title=form.title.value
        const email=user?.email
        const totalpost={title,content,email}
        console.log(totalpost)
        fetch('http://localhost:3000/blogs',{
            method:'POST',
            headers:{
              "Content-Type": "application/json",
            },
            body: JSON.stringify(totalpost)
        }
    )
    }
	

	return (
        <div>
            


<section className="bg-gray-100">
  <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-2">
      

      <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
        <form  onSubmit={handleSubmit} action="#" className="space-y-4">
          <div>
            <label className="sr-only" htmlFor="name">Title</label>
            <input
              className="w-full border border-slate-200 rounded-lg p-3 text-sm"
              placeholder="Title"
              type="text"
              name='title'
              id="name"
            />
          </div>
        


          <div>
            <label className="sr-only" htmlFor="message">Message</label>

            <JoditEditor
			ref={editor}
			value={content}
			
			tabIndex={1} // tabIndex of textarea
			onChange={newContent => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
			
		/>
          </div>

          <div className="mt-4">
            <button
              type="submit"
              className="inline-block w-full rounded-lg bg-black px-5 py-3 font-medium text-white sm:w-auto"
            >
              ADD
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</section>
        

		
        </div>
	);

}

export default Blogs