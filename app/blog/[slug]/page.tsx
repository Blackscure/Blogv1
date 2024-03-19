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
      <div>
        <h1>{post.title}</h1>
        <p>Date: {post.date}</p>
        <p>{post.content}</p>
      </div>
      <Footer />
    </div>
  );
}
