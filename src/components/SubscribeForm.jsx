import React from "react";
import { FaFacebook, FaLinkedin, FaGoogle, FaSync } from "react-icons/fa";
import { FaArrowCircleRight } from "react-icons/fa";

function SubscribeForm() {
  return (
    <section className=" flex justify-center bg-gray-100 " id="subscribe-form">
      <div className="subscribe-form border flex border mb-20 bg-cover bg-bottom overflow-hidden  z-10 relative rounded-lg w-4/5">
        <div className="form-image w-1/3 h-full flex items-base justify-end p-10 z-20 hidden 2xl:flex">
          <FaSync size={200} className="text-green_dark" />
        </div>
        <div className="form-area w-full p-10 px-20 flex flex-col gap-2 z-20">
          <h2 className="font-roboto font-extrabold text-4xl text-white ">
            Subscribe Now
          </h2>
          <p className="text-gray-200 font-roboto text-sm 2xl:text-lg">
            Join our community today and stay ahead of the curve. Enter your
            email below to start receiving premium content and offers straight
            to your inbox. It’s quick, easy, and absolutely free!
          </p>
          <input
            className="bg-transparent border-2 border-white leading-relaxed px-5"
            type="text"
            placeholder="Enter your email"
            style={{ lineHeight: "2.5rem" }}
          />
          <button className="border mx-auto py-3 px-5 bg-green text-white rounded-lg hover:bg-green_dark">
            Subscribe
          </button>
          <div className="social-media flex gap-3 ml-auto mt-4">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook size={24} className="text-green_dark" />
            </a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin size={24} className="text-green_dark" />
            </a>
            <a
              href="https://www.google.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGoogle size={24} className="text-green_dark" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SubscribeForm;
