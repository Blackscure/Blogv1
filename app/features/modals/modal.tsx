import React from 'react'

export default function modal() {
  return (
      <div className="w-full max-w-screen-lg mx-auto mt-8 p-6 bg-white rounded-xl shadow-md ">
            <h4 className="block font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
              Create Blog Post
            </h4>
            <p className="block mt-1 font-sans text-base antialiased font-normal leading-relaxed text-gray-700">
              Enter your blog details here. Click save when you're done.
            </p>
            <form className="mt-2">
            <div className="flex flex-col gap-4">
                <h6 className="block -mb-3 font-sans text-blue-gray-900">
                <label htmlFor="name" className="block font-medium">Blog Title</label>
                </h6>
                <div className="">
                <input 
                    id="name" 
                    placeholder="Title"
                    className="w-full h-8 text-sm text-blue-gray-700 outline-none placeholder-blue-gray-300 border border-blue-gray-200 rounded-md px-3" 
                />
                </div>

                                <h6 className="block -mb-3 font-sans text-blue-gray-900">
                <label htmlFor="name" className="block font-medium">Blog Date</label>
                </h6>
                <div className="">
                <input 
                    id="name" 
                    placeholder="Blog date"
                    className="w-full h-8 text-sm text-blue-gray-700 outline-none placeholder-blue-gray-300 border border-blue-gray-200 rounded-md px-3" 
                />
                </div>

                                <h6 className="block -mb-3 font-sans text-blue-gray-900">
                <label htmlFor="name" className="block font-medium">Slug</label>
                </h6>
                <div className="">
                <input 
                    id="name" 
                    placeholder="Slug"
                    className="w-full h-8 text-sm text-blue-gray-700 outline-none placeholder-blue-gray-300 border border-blue-gray-200 rounded-md px-3" 
                />
                </div>
            </div>
            
            </form>

          </div>

  )
}
