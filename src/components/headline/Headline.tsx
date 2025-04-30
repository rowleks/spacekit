import React from "react";

import ProductCard from "../productcard/ProductCard";

const Headline = () => {
  return (
    <div className="bg-gray">
      <div data-aos="fade-up" className="mx-auto max-w-7xl px-4 py-6 ">
        {" "}
        {/* Outer div, not flexed */}
        <div className="flex justify-between items-center mb-12">
          <div className="flex justify-between gap-3 mt-32 w-full">
            <div className="">
              <img src="./cross.svg" alt="Cross" />
              <p>OUR SERVICES</p>
              <p>All Collection</p>
            </div>
            <div className="p-2 bg-black rounded-md text-white border-b-red-200">
              <button className="py-4 px-8 text-base font-bold">
                <a href="#">SHOP NOW</a>
              </button>
            </div>
          </div>
        </div>
        <ProductCard /> {/* Moved ProductCard outside the flex div */}
      </div>
    </div>
  );
};

export default Headline;
