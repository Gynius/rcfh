import React from "react";

import { Link } from "react-router-dom";

function WhatWeDo() {
  return (
    <div className="flex flex-col md:flex-row w-4/5 2xl:w-3/5 my-24 mx-auto">
      {/* Picture Column */}
      <div className="md:w-1/2 flex items-center justify-center p-4 relative">
        <div
          className="absolute rounded-full z-0 bg-green"
          style={{ top: "-10%", right: "20%", width: "100%", height: "120%" }}
        ></div>
        {/* Image */}

        <img
          src="/images/team/logan.jpg"
          alt="Sample"
          className=" w-full h-auto object-cover rounded-lg z-10 h-96 aspect-square"
        />
      </div>
      {/* Text Column */}
      <div className="md:w-1/2 p-4 flex items-center justify-center text-right">
        <div>
          <h2 className="font-playfair mb-4  font-extrabold tracking-tight leading-none text-gray-900 text-6xl text-green py-5">
            Why Choose Us
          </h2>
          <h3 className="font-robotoCondensed text-2xl text-green mb-4">
            Your Partner in Growth and Success
          </h3>
          <p className="text-gray-500 font-roboto text-base">
            At RCFH, we are more than just a service provider — we are your
            partner in growth. With our team of highly skilled virtual
            assistants and industry experts, we offer tailored solutions
            designed to meet your specific needs. Whether you need
            administrative support, technical expertise, or social assistance,
            our flexible services allow you to focus on what matters most:
            growing your business. We pride ourselves on delivering exceptional
            quality, transparency, and innovation, ensuring that every project
            is handled with the utmost care and attention to detail. By choosing
            RCFH, you gain a trusted ally dedicated to helping your business
            succeed.
          </p>
        </div>
      </div>
    </div>
  );
}

export default WhatWeDo;
