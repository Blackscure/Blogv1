import React from 'react'

export default function modal() {
  return (
      <div className="">
            <h4 className="block font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
              Create Blog Post
            </h4>
            <p className="block mt-1 font-sans text-base antialiased font-normal leading-relaxed text-gray-700">
              Enter your blog details here. Click save when you're done.
            </p>
            <form className="mt-2">
            <div className="flex flex-col gap-4">
                <h6 className="block -mb-3 font-sans text-blue-gray-900">
                <label htmlFor="name" className="block font-bold">Name</label>
                </h6>
                <div className="">
                <input 
                    id="name" 
                    placeholder=""
                    className="w-full text-blue-gray-700 outline-0 placeholder-shown:border" 
                />
                </div>
            </div>
            </form>

          </div>

  )
}
