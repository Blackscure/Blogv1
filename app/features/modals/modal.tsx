import React from 'react';

export default function Modal() {
  return (
    <div className="w-full max-w-screen-lg mx-auto mt-8 p-6 bg-white rounded-xl shadow-md">
      <h4 className="block font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
        Create Blog Post
      </h4>
      <p className="block mt-1 font-sans text-base antialiased font-normal leading-relaxed text-gray-700">
        Enter your blog details here. Click save when you&apos;re done.
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

          <h6 className="block -mb-3 font-sans text-blue-gray-900">
            <label htmlFor="name" className="block font-medium">Image</label>
          </h6>
          <div className="flex items-center justify-center w-full">
            <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-48 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                <svg className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
                </svg>
                <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
              </div>
              <input id="dropzone-file" type="file" className="hidden" />
            </label>
          </div>

          <h6 className="block -mb-3 font-sans text-blue-gray-900">
            <label htmlFor="name" className="block font-medium">Content</label>
          </h6>
          <textarea id="message" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your thoughts here..."></textarea>
        </div>
      </form>
    </div>
  );
}
