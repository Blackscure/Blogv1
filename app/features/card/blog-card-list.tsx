import React from 'react';
import blogData from '../../data/blogData';
import Link from 'next/link'; // Import Link from next.js for client-side navigation



const BlogList = () => {
  return (
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {blogData.map((post, index) => (
        <Link key={index} href={`/blog/${post.slug}`}> {/* Wrap each card in Link */}
          <a>
            <div className="bg-white rounded-xl shadow-md p-6 cursor-pointer"> {/* Add cursor-pointer class for better UX */}
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
          </a>
        </Link>
      ))}
    </div>
  );
};

export default BlogList;
