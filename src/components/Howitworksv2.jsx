import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaSearch, FaTasks, FaRocket, FaCheckCircle } from "react-icons/fa";

function HowItWorks() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section
      id="how-it-works"
      className="how-it-works flex justify-center items-center border py-20"
    >
      <div className="w-4/5 2xl:w-3/5 container my-8 flex flex-col md:flex-row gap-10 md:gap-40 ">
        <h1 className="font-playfair font-bold text-green mb-4 font-extrabold tracking-tight leading-none text-6xl text-green py-5 text-center w-3/10">
          How it Works
        </h1>
        <div className="grid grid-cols-2 gap-4 justify-center items-stretch w-7/10">
          <div
            className="gradient-hover card p-4 flex flex-col group rounded-lg"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <span className="group-hover:text-white">01</span>
            <div className="flex gap-2  items-center">
              <FaSearch className="text-3xl mb-2 text-green group-hover:text-white" />
              <h4 className="font-playfair font-bold text-green text-3xl pb-4 group-hover:text-white">
                Discover
              </h4>
            </div>
            <p className="flex-grow text-gray-600 group-hover:text-white">
              We identify expectations and critical issues facing our clients,
              both large and small. Our unique approach is not only what
              differentiates us, but also what makes us successful.
            </p>
          </div>

          <div
            className="gradient-hover card  p-4 flex flex-col group rounded-lg"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <span className="group-hover:text-white">02</span>
            <div className="flex gap-2 items-center">
              <FaTasks className="text-3xl mb-2 text-green group-hover:text-white" />
              <h4 className="font-playfair font-bold text-green text-3xl pb-4 group-hover:text-white">
                Delegate
              </h4>
            </div>

            <p className="flex-grow text-gray-600 group-hover:text-white">
              We Assign the right people to the right task ensures that it is
              expertly handled and completely accomplished.
            </p>
          </div>
          <div
            className="gradient-hover card  p-4 flex flex-col group rounded-lg"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <span>03</span>
            <div className="flex gap-2 items-center">
              <FaRocket className="text-3xl mb-2 text-green group-hover:text-white" />
              <h4 className="font-playfair font-bold text-green text-3xl pb-4 group-hover:text-white">
                Deploy
              </h4>
            </div>

            <p className="flex-grow text-gray-600 group-hover:text-white">
              We Execute tasks. Each and everyone is knowledgeable and up to the
              task. Coordination at its finest in providing the best output.
            </p>
          </div>

          <div
            className="gradient-hover card  p-4 flex flex-col group rounded-lg"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <span>04</span>
            <div className="flex gap-2 items-center">
              <FaCheckCircle className="text-3xl mb-2 text-red group-hover-text-white" />
              <h4 className="font-playfair font-bold text-green text-3xl text-red pb-4 group-hover:text-white">
                Deliver
              </h4>
            </div>

            <p className="flex-grow text-gray-600 group-hover:text-white">
              We are Results Driven to provide services and solutions to help
              organizations facilitate change, achieve their vision and optimize
              performance and productivity.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
