import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Hero() {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with a duration of 1000ms
  }, []);

  return (
    <section className="hero bg-hero_bg bg-cover bg-bottom :bg-gray-900 arc-bottom relative ">
      <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
        <a
          href="#"
          className="inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm text-gray-700 bg-gray-100 rounded-full :bg-gray-800 :text-white hover:bg-gray-200 :hover:bg-gray-700"
          role="alert"
          data-aos="fade-down" // Add AOS attribute
        >
          <span className="text-xs bg-primary-600 rounded-full text-green-500 px-4 py-1.5 mr-3 text-red">
            Coming soon!
          </span>
          <span className="text-sm font-medium">Blog post</span>
          <svg
            className="ml-2 w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clipRule="evenodd"
            ></path>
          </svg>
        </a>
        <h1
          className="font-robotoSlab mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl :text-white"
          data-aos="fade-up" // Add AOS attribute
        >
          {
            <>
              <span className="text-green">
                {<span className="text-green-500">Discover. </span>}
              </span>
              <span className="text-green">
                {<span className="text--green-500">Delegate. </span>}
              </span>
              <span className="text-green">
                {<span className="text--green-500">Deploy. </span>}
              </span>
              <span className="text-red">
                {<span className="text--green-500">Deliver. </span>}
              </span>
            </>
          }
        </h1>
        <p
          className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 :text-gray-400 font-robotoCondensed"
          data-aos="fade-up" // Add AOS attribute
          data-aos-delay="200" // Add delay for staggered animation
        >
          As an Entrepreneur, you have chosen to work FOR yourself…With RCFH in
          your business, you’ll ensure you’re not working BY yourself!
        </p>
        <div
          className="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4"
          data-aos="fade-up" // Add AOS attribute
          data-aos-delay="400" // Add delay for staggered animation
        >
          <a
            href="https://calendly.com/kathy-rcfhagency/60min"
            className="text-red inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-green rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 :focus:ring-primary-900"
          >
            Book a call
            <svg
              className="ml-2 -mr-1 w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </a>
          <a
            href="https://calendly.com/kathy-rcfhagency/60min"
            className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 :text-white :border-gray-700 :hover:bg-gray-700 bg-red text-white hover:bg-green :focus:ring-gray-800"
          >
            NOW
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
