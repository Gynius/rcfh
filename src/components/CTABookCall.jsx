import React from "react";

function CTABookCall() {
  return (
    <div className="join-us border p-20 relative">
      <div className="w-full h-full absolute inset-0 bg-black bg-opacity-50 z-5"></div>
      <div className="px-20 container flex justify-center items-center gap-20">
        <h1 className="font-robotoSlab text-6xl text-white z-10 font-semibold">
          BOOK A CALL WITH US
        </h1>
        <a href="https://form.jotform.com/240193622260044">
          <button
            data-aos="fade-left"
            className="bg-red inline-flex justify-center py-3 px-5 text-base font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 hover:bg-green :text-white :border-gray-700 :hover:bg-gray-700 :focus:ring-gray-800 text-white"
          >
            Join Us
          </button>
        </a>
      </div>
    </div>
  );
}

export default CTABookCall;
