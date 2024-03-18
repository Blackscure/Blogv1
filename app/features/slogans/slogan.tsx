// Slogan.js

import React from 'react';

const Slogan: React.FC = () => {
  return (
    <div className="container mx-auto flex flex-col items-start justify-between px-4 py-8">
      <div>
        <h1 className="font-montserrat text-4xl font-bold leading-tight tracking-normal text-left">
          The Accessibility Blog
        </h1>
      </div>
      <div>
        <p className="font-poppins text-base font-normal leading-relaxed tracking-normal text-left">
          The voice of the excluded
        </p>
      </div>
    </div>
  );
};

export default Slogan;
