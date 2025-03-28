import Navbar from "../navbar/Navbar";

export default function Hero() {
  return (
    <div>
      <div>
        <div className="bg-[url('/hero.jpg')] bg-cover bg-center">
          <Navbar />
          <div className="flex justify-between items-center pt-50 mx-auto max-w-7xl px-4 py-4 ">
            <div>
              <h3 className="font-[200] leading-20 max-w-[20ch]">
                Your Next Adventure Starts With Us
              </h3>
            </div>
            <div className="relative inline-block rounded-full p-2 bg-nav backdrop-filter backdrop-blur-lg ">
              <img
                src="./Circular-text.svg"
                alt="Circular Text"
                className="inline-block transform animate-spin object-cover"
              ></img>
              <img
                src="./down-arrow.svg"
                alt="Down Arrow"
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              ></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
