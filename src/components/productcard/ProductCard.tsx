import React from "react";

const ProductCard = () => {
  return (
    <div className="mx-auto max-w-7xl px-4 py-6 flex justify-center items-center gap-4 mt-4 flex-wrap">
      <div className="bg-white rounded-lg shadow-md overflow-hidden max-w-sm w-full md:max-w-md">
        <img
          src="./space-kit-bag-2.jpg"
          alt="Product Image"
          className="w-full h-64 object-cover"
        />
        <div className="p-4">
          <div className="flex justify-between items-center mb-2">
            <div>
              <p className="text-lg font-semibold">EXPLORER BAG</p>
              <p className="text-sm text-gray-600">WHITE/BLACK</p>
            </div>
            <div>
              <p className="text-lg font-semibold">$26</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white rounded-lg shadow-md overflow-hidden max-w-sm w-full md:max-w-md">
        <img
          src="./space-kit-book.jpg"
          alt="Product Image"
          className="w-full h-64 object-cover"
        />
        <div className="p-4">
          <div className="flex justify-between items-center mb-2">
            <div>
              <p className="text-lg font-semibold">JOURNEY WITHIN BOOK</p>
              <p className="text-sm text-gray-600">WHITE/ORANGE</p>
            </div>
            <div>
              <p className="text-lg font-semibold">$12</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white rounded-lg shadow-md overflow-hidden max-w-sm w-full md:max-w-md">
        <img
          src="./two-cups.jpg"
          alt="Product Image"
          className="w-full h-64 object-cover"
        />
        <div className="p-4">
          <div className="flex justify-between items-center mb-2">
            <div>
              <p className="text-lg font-semibold">EXPLORER BAG</p>
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