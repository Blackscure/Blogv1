import React from 'react';
import SearchBar from "../search/search-bar";


const NavBar: React.FC = () => {
  return (
    <nav style={{ backgroundColor: '#D9D9D9' }}>
      <div className="flex items-center justify-between">
        {/* Logo or brand */}
        <div className="flex items-center">
          <img src="/assets/logo.png" alt="Logo" className="h-12 w-auto mr-4" /> 
        </div>
        {/* Navigation links */}
        <ul className="flex items-center">
          <li className="mr-6">Blogs</li>
           <SearchBar/>
        </ul>
      </div>
    </nav>
  );
};


export default NavBar;
