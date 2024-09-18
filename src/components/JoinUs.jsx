import React from "react";

function JoinUs() {
  return (
    <div className="join-us border border-1 border-red bg-join_us_bg bg-fixed bg-cover p-20 relative ">
      <div className="w-full h-full absolute inset-0 bg-black bg-opacity-50 z-5 "></div>
      <div className="w-full flex flex-col justify-center items-center gap-2">
        <h1 className="font-robotoSlab text-8xl text-white z-10 font-semibold">
          Join Us
        </h1>
        <h2 className="w-2/5 font-robotoCondensed text-lg text-center z-10 text-white">
          We are always on the lookout for motivated and talented individuals to
          join our team. Click the button and let's get started in knowing you
          better.
        </h2>
        <a href="https://form.jotform.com/240193622260044">
          <button
            data-aos="fade-up"
            className="bg-red inline-flex justify-center py-3 px-5 text-base font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 hover:bg-green :text-white :border-gray-700 :hover:bg-gray-700 :focus:ring-gray-800 text-white"
          >
            Join Us
          </button>
        </a>
      </div>
    </div>
  );
}

export default JoinUs;
