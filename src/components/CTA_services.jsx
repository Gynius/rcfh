import React from "react";

function CTA_services() {
  return (
    <section
      id="call-to-action"
      className="call-to-action bg-gradient-to-b from-green to-white  text-black flex align-center justify-center font-serif"
    >
      <div className="container flex flex-col md:flex-row">
        <div
          className="w-full flex flex-col items-center justify-center"
          data-aos="zoom-in"
          data-aos-delay="100"
        >
          <div className="md:w-3/4">
            <h3 className="text-center text-white text-6xl py-8">
              Start your Journey With Us
            </h3>
            <p className="text-center text-lg md:text-2xl text-6xl py-2">
              With our help, you can streamline your processes, increase
              productivity, and achieve your goals faster.
            </p>
          </div>
          <div className="md:w-1/4 flex justify-center items-center p-4">
            <a
              className="font-robotoCondensed cta-btn align-middle text-lg md:text-xl text-black  hover:bg-red hover:text-white"
              href="https://calendly.com/kathy-rcfhagency/60min"
            >
              Book A Call
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CTA_services;
