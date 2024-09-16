import React from "react";

function CTA_services() {
  return (
    <section
      id="call-to-action"
      className="call-to-action section accent-green bg-green text-white flex align-center justify-center"
    >
      <div className="container flex flex-col md:flex-row">
        <div
          className="flex flex-col md:flex-row w-full"
          data-aos="zoom-in"
          data-aos-delay="100"
        >
          <div className="md:w-3/4 text-center md:text-left p-4">
            <h3>Start your Journey With Us</h3>
            <p>
              With our help, you can streamline your processes, increase
              productivity, and achieve your goals faster.
            </p>
          </div>
          <div className="md:w-1/4 flex justify-center items-center p-4">
            <a
              className="cta-btn align-middle text-black bg-white hover:bg-red hover:text-white"
              href="https://form.jotform.com/240193622260044"
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
