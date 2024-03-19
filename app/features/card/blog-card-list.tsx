import React from 'react';
import blogData from '../../data/blogData';

const BlogList = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {blogData.map((post, index) => (
        <div key={index} className="bg-white rounded-xl shadow-md p-6">
          <h4 className="block font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
            {post.title}
          </h4>
          <p className="block mt-1 font-sans text-base antialiased font-normal leading-relaxed text-gray-700">
            Date: {post.date}
          </p>
          <p className="block mt-1 font-sans text-base antialiased font-normal leading-relaxed text-gray-700">
            Slug: {post.slug}
          </p>
          <p className="block mt-4 font-sans text-base antialiased font-normal leading-relaxed text-gray-700">
            {post.content}
          </p>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
