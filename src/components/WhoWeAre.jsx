import { items } from "../assets/constants/whoweare";
import { Link } from "react-router-dom";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function WhoWeAre() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <div className="w-full h-auto items-center justify-center flex flex-col md:flex-col py-10">
      <h2 className="font-playfair mb-4  font-extrabold tracking-tight leading-none text-gray-900 text-4xl lg:text-6xl text-green py-5 text-right">
        Who We Are
      </h2>
      <h3 className="font-robotoCondensed text-2xl mb-10 text-green text-center lg:text-left">
        RCFH is your trusted Business Partner
      </h3>
      <div className="w-4/5 lg:w-3/5 flex flex-col md:flex-row justify-center items-center gap-10 mb-10">
        <div className="md:w-[35%] p-4 rounded w-full flex flex-col items-center justify-center text-left shadow-md aspect-square rounded-full bg-va_bg ">
          <h2 className="font-playfair mb-4  font-extrabold tracking-tight leading-none text-gray-900 text-2xl lg:text-4xl text-white py-5 text-right">
            Mission
          </h2>
          <p className="text-gray-100 text-base text-center text-sm 2xl:text-base w-[80%]">
            Our mission is to satisfy our customer’s requirements by providing
            the best services. Offering innovative solutions and high quality
            service.
          </p>
        </div>
        <div className="md:w-[45%] p-4 rounded w-full flex flex-col items-center justify-center text-left shadow-md aspect-square rounded-full bg-va_bg">
          <h2 className="font-playfair mb-4  font-extrabold tracking-tight leading-none text-gray-900 text-2xl lg:text-4xl text-white py-5 text-right">
            Vision
          </h2>
          <p className="text-gray-100 text-base text-center text-sm 2xl:text-base w-[80%]">
            Our vision is to become the preferred support service provider
            globally, known for our professionalism, efficiency, and innovative
            solutions. We believe in empowering businesses by providing them
            with the support they need to focus on their core competencies.
          </p>
        </div>
      </div>
      <h2 className="font-playfair mb-4  font-extrabold tracking-tight leading-none text-gray-900 text-2xl lg:text-4xl text-green py-5 text-right">
        Core Values
      </h2>
      <div className="w-4/5 2xl:w-3/5 grid gap-4 lg:grid-cols-4 md:grid-cols-2 align-center py-5">
        {items.map((item, index) => {
          return (
            <div
              className="p-4 rounded shadow-md w-full flex flex-col items-center"
              style={{ background: "#fafafa" }}
              key={index}
              data-aos="zoom-in"
              data-aos-once="true"
            >
              {item.svg("80px", "80px")}
              <h4 className="text-lg font-semibold my-5">{item.title}</h4>
              <p className="font-normal text-gray-500 text-base">
                {item.description}
              </p>
            </div>
          );
        })}
      </div>

      <p className="font-roboto text-small my-10 text-center w-4/5 2xl:w-3/5">
        Your business is on the cusp of growth, and our team is here to keep you
        organized and on track to success. Take a look at some of our team
        members and learn a bit more about what they do here at RCFH.
      </p>

      <button
        data-aos="fade-up"
        className="inline-flex justify-center py-3 px-5 text-base font-medium text-center text-gray-900 rounded-lg border-2 border-green hover:text-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 hover:bg-green :text-white :border-gray-700 :hover:bg-gray-700 :focus:ring-gray-800 text-green"
      >
        <Link to="/teams">See Our Teams</Link>
      </button>
    </div>
  );
}

export default WhoWeAre;
