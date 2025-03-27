"use client";
import React from 'react';

const Site = () => {
  return (
    <div className='mx-auto max-w-7xl px-4 py-4'>
      <div className='flex justify-center items-center gap-4'>
        <div>
          <img
            src='./space-kit-bag-2.jpg'
            className='w-[500px] h-[400px] border border-gray-400 rounded-md'
            alt="space kit bag"
          />
        </div>
        <div>
  <div className="relative"> {/* Make the container relative */}
    <img
      src='./space-kit-cup.jpg'
      className='w-[1000px] border border-gray-400 rounded-md'
      alt="space kit cup"
    />
    <p className="absolute top-0 left-0 p-5">
      Light Weight, durable, and perfect for <br></br> any Journey with our premium kits.
    </p>
  </div>
</div>
      </div>
      <div className='flex justify-center items-center gap-4 pt-12'> 
        <div>
  <div className="relative"> {/* Make the container relative */}
    <img
      src='./space-kit-book.jpg'
      className='w-[1000px] border border-gray-400 rounded-md'
      alt="space kit cup"
    />
    <p className="absolute top-0 left-0 p-5">
      Tools to stay Organized<br></br> and ontop of your goals<br></br> every day.
    </p>
  </div>
</div>

<div>
  <div className="relative">
    <img
      src='./space-kit-bag-1.jpg'
      className='w-[500px] h-[400px] border border-gray-400 rounded-md brightness-25' // Increased dimness
      alt="space kit bag"
    />
    <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
      Learn More
    </button>
  </div>
</div>
      </div>
    </div>
  );
};

export default Site;