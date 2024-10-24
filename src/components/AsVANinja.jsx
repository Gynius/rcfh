import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
function AsVANinja() {
  return (
    <div className="flex justify-center items-center py-10  z-10">
      <div className="container xl:w-4/5 flex flex-col xl:flex-row justify-center items-center ">
        <div className="text-white xl:w-1/2 p-10  justify-center items-center ">
          <h1
            className="font-playfair text-3xl font-extrabold  text-center"
            data-aos="fade-right"
          >
            What does it mean to reach the Ninja level of Virtual Assistance?
          </h1>
        </div>
        <div className="w-5/6 text-white xl:w-1/2 2xl:pl-10 lg:pl-10 xl:border-l-4 py-10 text-justify">
          <p className="text-sm" data-aos="fade-left">
            At RCFH, we take pride in our Virtual Assistant Ninjas — the unseen
            and unheard masters of efficiency. As a Virtual Assistant Ninja, you
            won’t just complete tasks; you’ll anticipate needs, solve problems
            before they arise, and operate seamlessly behind the scenes. Whether
            managing schedules, handling communications, or providing strategic
            support, you’ll always be one step ahead, ensuring that everything
            runs smoothly without anyone ever knowing there was a challenge to
            begin with. It’s about being proactive, discreet, and incredibly
            effective — a true extension of your client’s team, always
            delivering results with precision and excellence.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AsVANinja;
