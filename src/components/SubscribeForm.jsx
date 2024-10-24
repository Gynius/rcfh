import React from "react";
import { FaFacebook, FaLinkedin, FaGoogle, FaSync } from "react-icons/fa";

function SubscribeForm() {
  return (
    <section className="flex justify-center py-10" id="subscribe-form">
      <div
        className="h-auto subscribe-form flex bg-va_bg bg-cover overflow-hidden z-10 relative rounded-lg w-4/5 "
        data-aos="fade-left"
      >
        <div className="form-image w-1/3 h-full flex items-center justify-end p-10 z-20 hidden 2xl:flex">
          <FaSync size={250} className="text-white" />
        </div>
        <div className="form-area w-full p-10 2xl:px-20 flex flex-col gap-2 z-20">
          <h2 className="font-playfair font-extrabold text-4xl text-white">
            Subscribe Now
          </h2>
          <p className="text-gray-200 font-roboto text-sm 2xl:text-lg">
            Join our community today and stay ahead of the curve. Enter your
            email below to start receiving premium content and offers straight
            to your inbox. It’s quick, easy, and absolutely free!
          </p>
          <div className="flex justify-between items-center gap-2 flex-col lg:flex-row">
            <input
              className="bg-white border-2 border-white leading-relaxed px-5 w-full lg:w-1/2"
              type="text"
              placeholder="First Name"
              style={{ lineHeight: "2.5rem" }}
            />
            <input
              className="bg-white border-2 border-white leading-relaxed px-5 w-full lg:w-1/2"
              type="text"
              placeholder="Last Name"
              style={{ lineHeight: "2.5rem" }}
            />
          </div>
          <input
            className="bg-white border-2 border-white leading-relaxed px-5 "
            type="text"
            placeholder="Enter your email"
            style={{ lineHeight: "2.5rem" }}
          />
          <button className="border-2 mx-auto py-3 px-5 bg-green text-white rounded-lg hover:bg-green_dark mt-5 2xl:w-1/3 font-bold">
            Subscribe
          </button>
          <div className="social-media flex gap-3 ml-auto mt-4">
            <a
              href="https://www.facebook.com/profile.php?id=61555467761591"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook size={24} className="text-white hover:text-red" />
              <span className="sr-only">Facebook</span>
            </a>
            <a
              href="https://ph.linkedin.com/company/reliable-consulting-for-hire"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin size={24} className="text-white hover:text-red" />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a
              href="mailto:support@rcfhagency.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGoogle size={24} className="text-white hover:text-red" />
              <span className="sr-only">Email</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SubscribeForm;
