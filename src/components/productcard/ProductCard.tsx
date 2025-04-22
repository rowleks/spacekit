import React from "react";

const ProductCard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-4 mt-4 w-full">
      <div className="bg-white rounded-lg shadow-md overflow-hidden w-full">
        <img
          src="./space-kit-bag-2.jpg"
          alt="Product Image"
          className="w-full h-[35rem] md:h-56 object-cover"
        />
        <div className="p-4">
          <div className="flex justify-between items-center mb-2">
            <div>
              <p className="text-base font-semibold">EXPLORER BAG</p>
              <p className="text-sm text-gray-600">WHITE/BLACK</p>
            </div>
            <div>
              <p className="text-lg font-semibold">$26</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white rounded-lg shadow-md overflow-hidden w-full">
        <img
          src="./space-kit-book.jpg"
          alt="Product Image"
          className="w-full h-[35rem] md:h-56 object-coverc aspect-square"
        />
        <div className="p-4">
          <div className="flex justify-between items-center mb-2">
            <div>
              <p className="text-base font-semibold">JOURNEY WITHIN BOOK</p>
              <p className="text-sm text-gray-600">WHITE/ORANGE</p>
            </div>
            <div>
              <p className="text-lg font-semibold">$12</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white rounded-lg shadow-md overflow-hidden w-full">
        <img
          src="./two-cups.jpg"
          alt="Product Image"
          className="w-full h-[35rem] md:h-56 object-cover"
        />
        <div className="p-4">
          <div className="flex justify-between items-center mb-2">
            <div>
              <p className="text-base font-semibold">MORNING BREW MUG</p>
              <p className="text-sm text-gray-600">WHITE/BLACK</p>
            </div>
            <div>
              <p className="text-lg font-semibold">$26</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
