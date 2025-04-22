"use client";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-nav backdrop-filter backdrop-blur-lg rounded-[1.375rem] py-4 px-9 mt-5">
      <div className="flex justify-between items-center">
        <Link href="/">
          <img src="./spacekit-logo.png" alt="logo" width={128} />
        </Link>
        <button onClick={toggleMenu} className="md:hidden">
          {/* Mobile menu button */}
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
        <div className={`hidden md:flex md:space-x-8 items-center`}>
          <Link
            href="/"
            className="hover:opacity-60 transform hover:translate-y-[1px] transition-all duration-200"
          >
            Home
          </Link>
          <Link
            href="/products"
            className="hover:opacity-60 transform hover:translate-y-[1px] transition-all duration-200"
          >
            Products
          </Link>
          <Link
            href="/faq"
            className="hover:opacity-60 transform hover:translate-y-[1px] transition-all duration-200"
          >
            FAQ
          </Link>

          <Link
            href="Contactus"
            className="text-base leading-6 py-2 px-6 bg-white rounded-md border-b-1 border-primary cursor-pointer hover:border-b-2 transition-all duration-1"
          >
            ContactUs
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden ${
          isOpen ? "flex flex-col mt-4 space-y-3" : "hidden"
        }`}
      >
        <Link
          href="/"
          className="hover:opacity-60 transform hover:translate-y-[1px] transition-all duration-200"
        >
          Home
        </Link>
        <Link
          href="/products"
          className="hover:opacity-60 transform hover:translate-y-[1px] transition-all duration-200"
        >
          Products
        </Link>
        <Link
          href="FaQ"
          className="hover:opacity-60 transform hover:translate-y-[1px] transition-all duration-200"
        >
          FAQ
        </Link>
        <Link
          href="Contactus"
          className="text-base leading-6 py-2 px-6 bg-white rounded-md border-b-1 border-primary cursor-pointer hover:border-b-2 transition-all duration-1"
        >
          ContactUs
        </Link>
      </div>
    </nav>
  );
}
