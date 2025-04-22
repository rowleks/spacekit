import React from 'react';

import ProductCard from '../productcard/ProductCard';

const Headline = () => {
  return (
    <div> {/* Outer div, not flexed */}
      <div className='flex justify-between items-center mx-auto max-w-7xl px-4 py-4'>
        <div>
          <div className='flex justify-around items-center gap-3'>
            <img src='./cross.svg' alt="Cross" />
            <p>OUR SERVICES</p>
          </div>
          <p>All Collection</p>
        </div>

        <div className="p-2 bg-black rounded-md text-white border-b-red-200">
          <button className="">
            <a href='#'>SHOP NOW</a>
          </button>
        </div>
      </div>
      <ProductCard /> {/* Moved ProductCard outside the flex div */}
    </div>
  );
};

export default Headline;