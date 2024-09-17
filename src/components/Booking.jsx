import React from "react";

function Booking() {
  return (
    <div className="w-full overflow-hidden flex flex-col justify-center items-center bg-custom_bg">
      <h1 className="font-robotoSlab text-5xl font-extrabold tracking-tight leading-none mt-10">
        Schedule Now
      </h1>
      <iframe
        className="w-4/5 border border-1 border-red my-0"
        style={{ border: "none", height: "800px", background: "transparent" }}
        src="https://calendly.com/kathy-rcfhagency/60min"
      ></iframe>
    </div>
  );
}

export default Booking;
