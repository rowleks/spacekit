"use client";
import React from "react";

const Site = () => {
  return (
    <div className="mx-auto max-w-7xl px-4 py-4 mt-30">
      <div className="flex flex-col md:flex-row md:items-center gap-4 w-full">
        <div className="md:flex-[1.5]">
          <img
            src="./space-kit-bag-2.jpg"
            className="w-full h-[400px] border border-gray-400 rounded-md object-cover"
            alt="space kit bag"
          />
        </div>
        <div className="relative md:flex-3">
          {" "}
          {/* Make the container relative */}
          <img
            src="./space-kit-cup.jpg"
            className="w-full h-[400px] object-cover border border-gray-400 rounded-md"
            alt="space kit cup"
          />
          <div className="absolute top-0 left-0 p-5 text-lg md:text-huge  flex flex-col gap-3">
            <p>
              Light Weight, durable, and perfect for any Journey with our
              premium kits.
            </p>
            <div className="text-sm font-bold cursor-pointer">
              <span>See Details</span>
              <img
                src="/arrow.svg"
                alt="Arrow Right"
                width={13}
                className="inline-block ml-4 transition-all duration-300"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center gap-4 pt-4">
        <div className="w-full relative">
          {" "}
          {/* Make the container relative */}
          <img
            src="./space-kit-book.jpg"
            className="w-full h-[350px] border border-gray-400 rounded-md"
            alt="space kit cup"
          />
          <div className="absolute top-0 left-0 p-5 text-lg md:text-huge  flex flex-col gap-3">
            <p>Tools to stay Organized and ontop of your goals every day.</p>
            <div className="text-sm font-bold cursor-pointer">
              <span>Plan Ahead</span>
              <img
                src="/arrow.svg"
                alt="Arrow Right"
                width={13}
                className="inline-block ml-4 transition-all duration-300"
              />
            </div>
          </div>
          <p className="absolute top-0 left-0 p-5 text-sm md:text-base"></p>
        </div>

        <div className="w-full md:w-1/2 relative">
          <img
            src="./space-kit-bag-1.jpg"
            className="w-full h-[350px] border border-gray-400 rounded-md brightness-25" // Increased dimness
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
