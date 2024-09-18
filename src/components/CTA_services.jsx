import React from "react";

function CTA_services() {
  return (
    <section
      id="call-to-action"
      className="call-to-action bg-gradient-to-b from-white via-green_light to-white text-black flex align-center justify-center font-serif"
      style={{
        minHeight: "70vh",
        background:
          "linear-gradient(to bottom, rgba(255, 255, 255, 1) 0%, rgba(42, 150, 111, 0.3) 25%, rgba(42, 150, 111, 0.5) 50%, rgba(42, 150, 111, 0.3) 75%, rgba(255, 255, 255, 1) 100%)",
      }}
    >
      <div className="container flex flex-col md:flex-row">
        <div
          className="w-full flex flex-col items-center justify-center"
          data-aos="zoom-in"
          data-aos-delay="100"
        >
          <div className="md:w-3/4">
            <h3 className="font-playfair text-center text-green_dark font-extrabold text-5xl py-8">
              Start your Journey With Us
            </h3>
            <p className="font-playfair text-center text-lg md:text-2xl text-6xl py-2">
              With our help, you can streamline your processes, increase
              productivity, and achieve your goals faster.
            </p>
          </div>
          <div className="md:w-1/4 flex justify-center items-center p-4">
            <a
              className="font-roboto cta-btn hover:bg-red hover:text-white align-middle text-lg md:text-xl text-black "
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
