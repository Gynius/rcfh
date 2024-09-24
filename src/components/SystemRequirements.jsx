import React from "react";

function SystemRequirements() {
  return (
    <section className=" flex justify-center items-center flex-col">
      <h1 className="font-playfair font-extrabold text-6xl py-10 text-green">
        System Requirements
      </h1>
      <div className="container w-4/5 grid grid-cols-2">
        <div className=" p-4 border-r-4 border-black text-right hover:bg-green">
          <h1 className="font-extrabold">WINDOWS</h1>
          <ul>
            <li>Windows 64 Bit Desktop/Laptop</li>
            <li>Intel Core i3 9th+ gen or higher (or AMD equivalent)</li>
            <li>8 GB RAM or more For multitasking requirements</li>
            <li>USB Headset with Noise-Cancelling Feature</li>
            <li>
              Internet Service of 10 Mbps and up (DSL, Fiber, or Cable only)
            </li>
            <li>Backup internet service of 5Mbps or more</li>
            <li>Workstation free from any Noise and Distractions</li>
            <li>Webcam with Full HD (1080p) video capture</li>
            <li>
              (Optional) Backup for Power Outage: Generator/UPS or Alternative
              Location
            </li>
          </ul>
        </div>
        <div className=" p-4 hover:bg-red ">
          <h1 className="font-extrabold">MAC</h1>
          <ul>
            <li>macOS Catalina and newer</li>
            <li>8 GB RAM or more For multitasking requirements</li>
            <li>USB Headset with Noise-Cancelling Feature</li>
            <li>
              Internet Service of 10 Mbps and up (DSL, Fiber, or Cable only)
            </li>
            <li>Backup internet service of 5Mbps or more</li>
            <li>Workstation free from any Noise and Distractions</li>
            <li>Webcam with Full HD (1080p) video capture</li>
            <li>
              (Optional) Backup for Power Outage: Generator/UPS or Alternative
              Location
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default SystemRequirements;
