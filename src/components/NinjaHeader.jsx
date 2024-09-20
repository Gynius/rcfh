import React from "react";

function NinjaHeader() {
  return (
    <div className="text-white flex items-center justify-center bg-white z-10 ninja-header arc-bottom relative va-ninja">
      <div className="container relative flex flex-row z-10 text-white w-4/5 gap-5">
        <div className="text-area m-0 flex flex-col align-left 2xl:w-2/3 z-5 w-full py-20">
          <h1 className="font-playfair mb-4 font-extrabold tracking-tight leading-none text-6xl text-white py-5 text-center 2xl:text-left">
            Become a VA Ninja
          </h1>
          {/* <h2 className="text-gray-300 mb-5 text-left text-base text-center w-full 2xl:text-left 2xl:w-2/3">
            At RCFH, we’re always on the lookout for talented, driven
            individuals to join our team. If you’re passionate about supporting
            businesses and helping them thrive, we have a role for you. Explore
            the opportunities below and find out how you can be part of our
            mission to deliver excellence and empower success.
          </h2>
          <div className="flex flex-col mb-8 lg:mb-16 space-y-2 sm:flex-row my-4 sm:space-y-0 sm:space-x-4 ">
            <a
              href="https://form.jotform.com/240193622260044"
              className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center rounded-lg hover:bg-green hover:text-white focus:ring-4 focus:ring-gray-100 :text-white :border-gray-700 :hover:bg-gray-700 :focus:ring-gray-800 text-white bg-red"
            >
              Join Us
            </a>
          </div> */}
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
