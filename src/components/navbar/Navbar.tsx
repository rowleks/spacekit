import Link from "next/link";
import Button from "../button/Button";

export default function Navbar() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-4">
      {" "}
      {/* Added margin and max-width */}
      <div className="bg-nav backdrop-filter backdrop-blur-lg rounded-[1.375rem] py-4 px-9">
        {" "}
        {/* Glass effect, rounded, padding */}
        <div className="flex justify-between items-center">
          <a href="#">
            <img src="./spacekit-logo.png" alt="logo"></img>
          </a>{" "}
          {/* Replace with your logo */}
          <div className="flex space-x-4 justify-center items-center">
            {" "}
            {/* Added space between nav items */}
            <Link href="#">Home</Link>
            <Link href="/products">Products</Link>
            <Link href="#">FAQ</Link>
            <Button />
          </div>
        </div>
      </div>
    </div>
  );
}
