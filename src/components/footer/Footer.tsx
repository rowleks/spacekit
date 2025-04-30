import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-8 md:py-12 px-4 md:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto flex flex-col items-center justify-center space-y-8 md:space-y-12">
        <div className="mb-0">
          <img src="./logo.svg" alt="Logo" className="h-8" />
        </div>
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 md:gap-x-12 md:gap-y-6">
          <div>
            <h6 className="font-semibold text-gray-700 mb-2">Explore</h6>
            <div className="leading-6 text-sm text-gray-600">
              <p>Home</p>
              <p>About</p>
            </div>
          </div>
          <div>
            <h6 className="font-semibold text-gray-700 mb-2">Support</h6>
            <div className="leading-6 text-sm text-gray-600">
              <p>Service 1</p>
              <p>Service 2</p>
            </div>
          </div>
          <div>
            <h6 className="font-semibold text-gray-700 mb-2">Others</h6>
            <div className="leading-6 text-sm text-gray-600">
              <p>Email</p>
              <p>Phone</p>
            </div>
          </div>
          <div>
            <h6 className="font-semibold text-gray-700 mb-2">Utility</h6>
            <div className="leading-6 text-sm text-gray-600">
              <p>Privacy</p>
              <p>Terms</p>
            </div>
          </div>
        </div>
        <div className="flex justify-center gap-6 md:gap-8">
          <img
            src="./twitter.svg"
            alt="Twitter"
            className="w-6 h-6 text-gray-500 cursor-pointer"
          />
          <img
            src="./fb.svg"
            alt="Facebook"
            className="w-6 h-6 text-gray-500 cursor-pointer"
          />
          <img
            src="./instagram.svg"
            alt="Instagram"
            className="w-6 h-6 text-gray-500 cursor-pointer"
          />
          <img
            src="./github.svg"
            alt="LinkedIn"
            className="w-6 h-6 text-gray-500 cursor-pointer"
          />
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-4 text-sm text-gray-500">
          <p>License</p>
          <span>|</span>
          <p>Style Guide</p>
          <span>|</span>
          <p>Customize</p>
        </div>
        <p className="text-xs text-gray-500 text-center">
          Copyright © {new Date().getFullYear()} Developed by{" "}
          <Link
            href="https://my-portfolio-iota-gold-71.vercel.app/"
            className="text-primary"
          >
            PreshCode
          </Link>{" "}
          and{" "}
          <Link
            href="https://rowland-momoh.netlify.app/"
            className="text-primary"
          >
            Rolex
          </Link>
          . Powered by WebFlow
        </p>
      </div>
    </footer>
  );
};

export default Footer;