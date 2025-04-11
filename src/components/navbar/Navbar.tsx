import Link from "next/link";
import Button from "../button/Button";

export default function Navbar() {
  return (
    <div className="bg-nav backdrop-filter backdrop-blur-lg rounded-[1.375rem] py-4 px-9 mt-5">
      {" "}
      {/* Glass effect, rounded, padding */}
      <div className="flex justify-between items-center">
        <Link href="/">
          <img src="./spacekit-logo.png" alt="logo" width={128}></img>
        </Link>{" "}
        {/* Replace with your logo */}
        <div className="flex space-x-8 justify-center items-center text-base">
          {" "}
          {/* Added space between nav items */}
          <Link
            href="#"
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
            href="#"
            className="hover:opacity-60 transform hover:translate-y-[1px] transition-all duration-200"
          >
            FAQ
          </Link>
          <Button />
        </div>
      </div>
    </div>
  );
}
