import React from 'react';
import logo from '../assets/logo.png'; // Import the logo image

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#D9D9D9' }}>
      <div className="container mx-auto flex items-center justify-between px-4">
        {/* Logo */}
       <img src="/assets/logo.png" alt="Logo" className="h-12 w-auto mr-4" /> 

        {/* Footer text */}
        <p className="text-gray-600">© 2024 Your Company. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
