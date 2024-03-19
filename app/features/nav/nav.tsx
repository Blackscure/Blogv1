import React from 'react';
import SearchBar from "../search/search-bar";
import Button from '../buttons/button';
import Link from 'next/link';


const NavBar: React.FC = () => {
  return (
    <nav style={{ backgroundColor: '#D9D9D9' }}>
      <div className="container mx-auto flex items-center justify-between px-4 py-2">
        {/* Logo or brand */}
       <Link href="/">
      <div className="flex items-center cursor-pointer">
        <img src="/assets/logo.png" alt="Logo" className="h-12 w-auto mr-4" />
      </div>
    </Link>
        {/* Navigation links */}
        <ul className="flex items-center">
          <li className="mr-6">Blogs</li>
          <li className="mr-6"><SearchBar/></li>
          <li className="mr-6"> <Button/></li>
        </ul>
      </div>
    </nav>
  );
};


export default NavBar;
