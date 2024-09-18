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
    <div className="w-full h-auto items-center justify-center flex flex-col md:flex-col py-10 ">
      <h1 className="font-playfair mb-4  font-extrabold tracking-tight leading-none text-gray-900 text-6xl text-green py-5">
        Who We Are
      </h1>
      <h2 className="font-robotoCondensed text-2xl mb-10 text-green">
        Your Partner in Growth and Success
      </h2>
      <div className="w-4/5 2xl:w-3/5 grid gap-4 lg:grid-cols-4 md:grid-cols-2 align-center py-10">
        {items.map((item, index) => {
          return (
            <div
              className="p-4 rounded shadow-md w-full flex flex-col items-center"
              style={{ background: "#fafafa" }}
              key={index}
              data-aos="zoom-in"
            >
              {item.svg("80px", "80px")}
              <h3 className="text-lg font-semibold my-5">{item.title}</h3>
              <p className="font-normal text-gray-500 text-base">
                {item.description}
              </p>
            </div>
          );
        })}
      </div>
      <p className="font-roboto text-small my-10 text-center px-20 w-full">
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
