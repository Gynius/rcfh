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
      className="how-it-works flex justify-center items-center border "
    >
      <div className="w-4/5 container my-8 flex gap-40">
        <h1 className="font-playfair mb-4 font-extrabold tracking-tight leading-none text-6xl text-green py-5 text-center w-3/10">
          How it Works
        </h1>
        <div className="grid grid-cols-2 gap-4 justify-center items-stretch w-7/10">
          <div
            className="gradient-hover card border border-red-500 p-4 flex flex-col hover:group text-black rounded-lg"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <FaSearch className="text-3xl mb-2 text-green group-hover:text-white" />
            <span className="group-hover:text-white">01</span>
            <h4 className="font-robotoSlab text-3xl pb-4 group-hover:text-white">
              Discover
            </h4>
            <p className="flex-grow text-gray-600 group-hover:text-gray-200">
              We identify expectations and critical issues facing our clients,
              both large and small. Our unique approach is not only what
              differentiates us, but also what makes us successful.
            </p>
          </div>

          <div
            className="gradient-hover card border border-red-500 p-4 flex flex-col hover:group text-black rounded-lg"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <FaTasks className="text-3xl mb-2 text-green group-hover:text-white" />
            <span className="group-hover:text-white">02</span>
            <h4 className="font-robotoSlab text-3xl pb-4 group-hover:text-white">
              Delegate
            </h4>
            <p className="flex-grow text-gray-600 group-hover:text-gray-200">
              We Assign the right people to the right task ensures that it is
              expertly handled and completely accomplished.
            </p>
          </div>
          <div
            className="gradient-hover card border border-red-500 p-4 flex flex-col hover:group text-black rounded-lg"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <FaRocket className="text-3xl mb-2 text-green" />
            <span>03</span>
            <h4 className="font-robotoSlab text-3xl pb-4">Deploy</h4>
            <p className="flex-grow text-gray-600">
              We Execute tasks. Each and everyone is knowledgeable and up to the
              task. Coordination at its finest in providing the best output.
            </p>
          </div>

          <div
            className="gradient-hover card border border-red-500 p-4 flex flex-col hover:group text-black rounded-lg"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <FaCheckCircle className="text-3xl mb-2 text-green" />
            <span>04</span>
            <h4 className="font-robotoSlab text-3xl text-red pb-4 group-hover:text-white">
              Deliver
            </h4>
            <p className="flex-grow text-gray-600">
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
