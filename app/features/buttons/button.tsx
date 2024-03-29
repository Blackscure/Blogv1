import React from 'react';
import Link from 'next/link';


const Button = () => {
  return (
    <Link href="/create-blog" passHref>
      <button
        type="button"
        className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm sm:px-6 sm:py-3 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
      >
        Create Blog Post
      </button>
    </Link>

  );
};

export default Button;