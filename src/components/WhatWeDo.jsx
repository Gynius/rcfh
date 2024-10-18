import React from "react";

function WhatWeDo() {
  return (
    <div className="flex flex-col md:flex-row w-4/5 2xl:w-3/5 sm:my-0 lg:my-24 mx-auto">
      {/* Text Column */}
      <div className="md:w-1/2 p-4 flex items-center justify-center">
        <div>
          <h2 className="font-playfair mb-4  font-extrabold tracking-tight leading-none text-gray-900 text-4xl lg:text-6xl text-green py-5">
            What We Do
          </h2>
          <h3 className="font-robotoCondensed text-2xl text-green mb-4">
            Your Partner in Growth and Success
          </h3>
          <p className="text-gray-500 font-roboto text-base">
            RCFH started as a leading provider of Virtual Assistants (VA)
            services. Founded in 2022, we’ve made it our mission to help
            businesses achieve their goals by offering top-tier administrative,
            technical and social assistance. Our team is comprised of dedicated
            professionals who are committed to delivering exceptional service to
            our diverse clientele.
          </p>
          <div className="flex flex-col mb-8 lg:mb-16 space-y-2 sm:flex-row my-4 sm:space-y-0 sm:space-x-4 ">
            <a
              href="/teams"
              className="text-black inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center rounded-lg border border-2 border-green hover:bg-green hover:text-white focus:ring-4 focus:ring-gray-100 :text-white :border-gray-700 :hover:bg-gray-700 :focus:ring-gray-800 text-green"
            >
              About Us
            </a>
          </div>
        </div>
      </div>
      {/* Picture Column */}
      <div className="md:w-1/2 flex items-center justify-center p-4 relative">
        <div
          className=" absolute rounded-full z-0 bg-green"
          style={{ top: "-10%", left: "20%", width: "100%", height: "120%" }}
        ></div>
        {/* Image */}

        <img
          src="/images/team/jess-op.png"
          alt="Sample"
          className=" w-full h-auto object-cover rounded-lg z-10 h-96"
        />
      </div>
    </div>
  );
}

export default WhatWeDo;
