function WhatWeDo() {
  return (
    <div className="flex flex-col md:flex-row w-4/5 my-24 mx-auto">
      {/* Text Column */}
      <div className="md:w-1/2 p-4 flex items-center justify-center">
        <div>
          <h1 className="font-roboto text-4xl font-semibold mb-4 text-green">
            What we do
          </h1>
          <h2 className="font-robotoCondensed text-2xl text-green mb-4">
            Your Partner in Growth and Success
          </h2>
          <p className="text-gray-700">
            RCFH started as a leading provider of Virtual Assistants (VA)
            services. Founded in 2022, we’ve made it our mission to help
            businesses achieve their goals by offering top-tier administrative,
            technical and social assistance. Our team is comprised of dedicated
            professionals who are committed to delivering exceptional service to
            our diverse clientele.
          </p>
          <div className="flex flex-col mb-8 lg:mb-16 space-y-2 sm:flex-row my-4 sm:space-y-0 sm:space-x-4 ">
            <a
              href="#"
              className=" bg-red inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-green focus:ring-4 focus:ring-gray-100 :text-white :border-gray-700 :hover:bg-gray-700 :focus:ring-gray-800 text-white"
            >
              About Us
            </a>
          </div>
        </div>
      </div>
      {/* Picture Column */}
      <div className="md:w-1/2 flex items-center justify-center p-4 relative">
        <div
          className=" absolute rounded-full z-0 bg-green opacity-75"
          style={{ top: "-10%", left: "20%", width: "100%", height: "120%" }}
        ></div>
        {/* Image */}

        <img
          src="https://static.wixstatic.com/media/11062b_e486025c40ed4c20af4aa2916a449b48f000.jpg/v1/fill/w_453,h_346,al_c,q_80,usm_0.33_1.00_0.00,enc_auto/11062b_e486025c40ed4c20af4aa2916a449b48f000.jpg"
          alt="Sample"
          className=" w-full h-auto object-cover rounded-lg z-10"
        />
      </div>
    </div>
  );
}

export default WhatWeDo;
