import React from "react";

function Rcfh() {
  return (
    <div className="flex justify-center items-center py-10">
      <div className="w-4/5 flex flex-col ">
        <p className="font-roboto tracking-wide text-center text-[14px] md:text-base">
          <span className="text-6xl font-playfair font-extrabold text-green tracking-wider pr-10 rounded-full">
            RCFH
          </span>
          is all about taking a weight off your shoulders. From renowned
          business executives to small business owners, our list of clients
          keeps growing each year. We ensure quality by offering smart, agile
          and customizable solutions for each and every client. Our team members
          will go above and beyond in order to deliver excellent results. With
          our services, you will be able to focus on what really matters - and
          leave the rest to us. Contact us today so we can start working
          together!
        </p>
        <div className="flex justify-center items-center h-full pt-10">
          <a href="https://calendly.com/kathy-rcfhagency/60min">
            <button className="border font-bold rounded-full px-5 py-3 bg-green text-white">
              Book A Call
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Rcfh;
