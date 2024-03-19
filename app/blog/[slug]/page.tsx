import Footer from '@/app/features/footer/footer';
import NavBar from '@/app/features/nav/nav';
import React from 'react';
import blogData from '../../data/blogData';
import Link from 'next/link';
import { FaArrowLeft } from 'react-icons/fa';

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
        <Link href="/">
          <div className="flex items-center text-gray-600 hover:text-gray-800 mb-4">
            <FaArrowLeft className="mr-2" />
            <span>Back to Posts</span>
          </div>
        </Link>
        <div className="w-full max-w-screen-lg mx-auto mt-8 p-6 bg-white rounded-xl shadow-md">
          <div className="text-center"> {/* Center content */}
            <h1 className="text-2xl font-bold mb-4">{post.title}</h1>
            <p className="text-sm text-gray-600 mb-2">Date: {post.date}</p>
          </div>
          <img src="/assets/blank.jpg" alt="Image" className="mx-auto mt-4 w-full h-2/4" />
          <p className="text-gray-800">{post.content}</p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
