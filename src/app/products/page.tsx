"use client";

import React from "react";
import ProductCard from "@/components/productcard/ProductCard";
import Navbar from "@/components/navbar/Navbar";
import Faq from "@/components/faq/Faq";
import Footer from "@/components/footer/Footer";

const Product = () => {
  return (
    <div className="bg-gray">
      <Navbar />

      <div className="flex flex-col justify-center items-center">
        <div className="overflow-hidden w-80 flex justify-center items-center">
          <p className="whitespace-nowrap animate-scroll-text align-middle text-small">
            YOUR GATEWAY TO THE STARS{" "}
            <span className="text-2xl mx-1.5 text-primary">&bull;</span> YOUR
            GATEWAY TO THE STARS{" "}
            <span className="text-2xl mx-1.5 text-primary">&bull;</span> YOUR
            GATEWAY TO THE STARS{" "}
            <span className="text-2xl mx-1.5 text-primary">&bull;</span>{" "}
          </p>
        </div>
        <h6 className="text-h6 text-center max-w-4xl leading-snug mt-4 md:text-h5">
          Explore the space kits designed to inspire curiosity and wonder.
        </h6>
        <ProductCard />
      </div>
      <Faq />

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
      <Footer/>
    </div>
  );
};

export default Product;
