import Footer from '@/app/features/footer/footer';
import NavBar from '@/app/features/nav/nav';
import React from 'react';
import blogData from '../../data/blogData';

export default function BlogPost({ params }: { params: { slug: string } }) {
  // Find the blog post with the matching slug
  const post = blogData.find(post => post.slug === params.slug);

  // If post is not found, display a message
  if (!post) {
    return (
      <div>
        <NavBar />
        <div>Post not found!</div>
        <Footer />
      </div>
    );
  }

  // Render the details of the matching post
  return (
    <div>
      <NavBar />
    <div className="flex justify-center">
      <div className="w-full max-w-screen-lg mx-auto mt-8 p-6 bg-white rounded-xl shadow-md h--screen">
        <div className="text-center"> {/* Center content */}
          <h1 className="text-2xl font-bold mb-4">{post.title}</h1>
          <p className="text-sm text-gray-600 mb-2">Date: {post.date}</p>
        </div>

        <p className="text-gray-800">{post.content}</p>
      </div>
    </div>
      <Footer />
    </div>
  );
}
