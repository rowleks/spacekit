"use client";
import React from "react";
import Bag from "../bag/Bag";
import Slide from "../slide/Slide";

const Site = () => {
  return (
    <div className="pt-8 md:pt-30 bg-gray-200">
      <div className="text-center">
        <div className="grid justify-center items-center">
          <div className="overflow-hidden w-80 flex justify-center items-center">
            <p className="whitespace-nowrap animate-scroll-text align-middle text-small">
              DESIGNED FOR YOUR EVERYDAY ADVENTURE{" "}
              <span className="text-2xl mx-1.5 text-primary">&bull;</span>{" "}
              DESIGNED FOR YOUR EVERYDAY ADVENTURE{" "}
              <span className="text-2xl mx-1.5 text-primary">&bull;</span>{" "}
              DESIGNED FOR YOUR EVERYDAY ADVENTURE{" "}
              <span className="text-2xl mx-1.5 text-primary">&bull;</span>{" "}
            </p>
          </div>
        </div>
        <h6 className="text-wrap text-4xl leading-snug my-6 md:text-6xl">
          Explore our curated collection <br></br>
          of high-quality products
        </h6>
        <p>
          Whether you&#39;re looking for a stylish new bag, a captivating book,
          or a<br></br>
          perfect mug for your morning brew, we&#39;ve got you covered.
        </p>
      </div>
      <style jsx>{`
        @keyframes scrollText {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll-text {
          animation: scrollText 15s linear infinite;
          min-width: 200%;
        }
      `}</style>
      <Bag />
      <Slide />
    </div>
  );
};

export default Site;
