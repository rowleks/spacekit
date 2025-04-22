"use client";
import React from 'react';

const Site = () => {
  return (
    <div className='mx-auto max-w-7xl px-4 py-4'>
      <div className='flex flex-col md:flex-row justify-center items-center gap-4'>
        <div className='w-full md:w-1/2'>
          <img
            src='./space-kit-bag-2.jpg'
            className='w-full h-auto border border-gray-400 rounded-md'
            alt="space kit bag"
          />
        </div>
        <div className='w-full md:w-1/2 relative'> {/* Make the container relative */}
          <img
            src='./space-kit-cup.jpg'
            className='w-full border border-gray-400 rounded-md'
            alt="space kit cup"
          />
          <p className="absolute top-0 left-0 p-5 text-sm md:text-base">
            Light Weight, durable, and perfect for <br className='hidden md:block' /> any Journey with our premium kits.
          </p>
        </div>
      </div>
      <div className='flex flex-col md:flex-row justify-center items-center gap-4 pt-12'>
        <div className='w-full md:w-1/2 relative'> {/* Make the container relative */}
          <img
            src='./space-kit-book.jpg'
            className='w-full border border-gray-400 rounded-md'
            alt="space kit cup"
          />
          <p className="absolute top-0 left-0 p-5 text-sm md:text-base">
            Tools to stay Organized<br className='hidden md:block' /> and ontop of your goals<br className='hidden md:block' /> every day.
          </p>
        </div>

        <div className='w-full md:w-1/2 relative'>
          <img
            src='./space-kit-bag-1.jpg'
            className='w-full h-auto border border-gray-400 rounded-md brightness-25' // Increased dimness
            alt="space kit bag"
          />
          <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-sm md:text-base">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Site;