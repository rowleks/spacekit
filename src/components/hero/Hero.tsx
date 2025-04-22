import Navbar from "../navbar/Navbar";

export default function Hero() {
  return (
    <div className="bg-gray-200">
      <div className="min-h-dvh max-w-screen-3xl mx-auto">
        <div
          className="bg-[url('/hero.jpg')] bg-cover bg-center min-h-[calc(100vh-5rem)] md:min-h-dvh flex flex-col justify-between w-full py-8 md:pb-6 px-6 md:px-16"
        >
          <header className="mb-8 md:mb-0">
            <Navbar />
          </header>
          <div className="flex flex-col md:flex-row justify-between items-end py-4">
            <div className="flex flex-col gap-5 mb-8 md:mb-0">
              <div className="flex items-center gap-2.5 text-sm divide-x-1 bg-gray py-2 px-3 w-fit rounded-[2.25rem] cursor-pointer">
                <span className="pr-2.5 font-bold">More Products</span>
                <div className="flex items-center cursor-pointer group">
                  <span className="font-bold text-gray-500 hover:text-black">
                    See more
                  </span>
                  <img
                    src="/arrow.svg"
                    alt="Arrow Right"
                    width={13}
                    className="inline-block ml-2 group-hover:ml-3 transition-all duration-300"
                  />
                </div>
              </div>
              <h3 className="leading-20 md:leading-20 max-w-md md:max-w-[20ch] font-extralight text-2xl md:text-5xl">
                Your Next Adventure Starts With Us
              </h3>
            </div>
            <div className="relative inline-block rounded-full p-2 bg-nav backdrop-filter backdrop-blur-lg ">
            <img
  src="./Circular-text.svg"
  alt="Circular Text"
  className="inline-block transform animate-spin object-cover w-[70px] md:w-[99px]"
/>
<img
  src="./down-arrow.svg"
  alt="Down Arrow"
  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[20px] md:w-[25px]"
/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}