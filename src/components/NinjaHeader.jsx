import React from "react";

function NinjaHeader() {
  return (
    <div
      className="page-title text-white flex items-center justify-center bg-white z-10 ninja-header relative"
      style={{
        backgroundImage: `url("./images/ninja2.jpg")`,
        backgroundSize: "cover",
      }}
    >
      <div className="container relative flex flex-row z-10 text-white w-4/5 gap-5">
        <div className="text-area m-0 flex flex-col align-left w-2/3 z-5">
          <h1 className="font-playfair mb-4 font-extrabold tracking-tight leading-none text-6xl text-white py-5 text-left">
            Become a VA Ninja
          </h1>
          <h2 className="w-4/5 text-gray-300 mb-5 text-left text-base w-full">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </h2>
          <button className="py-3 px-5 text-white shadow rounded-lg text-center bg-red w-1/4 hover:bg-green">
            Join Us
          </button>
        </div>
        {/* <div
          className="image-area w-72 h-72 text-black bg-cover bg-center bg-no-repeat rounded-full drop-shadow-2xl

"
          style={{
            backgroundImage: `url("./images/Ninja.png")`,
            backgroundSize: "120%",
          }}
        ></div> */}
      </div>
    </div>
  );
}

export default NinjaHeader;
