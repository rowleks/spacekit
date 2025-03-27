import Button from "../button/Button";

export default function Navbar() {
    return (
      <div className="mx-auto max-w-7xl px-4 py-4"> {/* Added margin and max-width */}
        <div className="bg-gray-200 bg-opacity-30 backdrop-filter backdrop-blur-lg rounded-xl p-4"> {/* Glass effect, rounded, padding */}
          <div className="flex justify-between items-center">
            <div><img src="./spacekit-logo.png" alt="logo"></img></div> {/* Replace with your logo */}
            <div className="flex space-x-4 justify-center items-center"> {/* Added space between nav items */}
              <a href="#">Home</a>
              <a href="#">About</a>
              <a href="#">Services</a>
              <a href="#">Contact</a>
              <Button/>
            </div>
         
          </div>
        </div>
      </div>
    );
  }