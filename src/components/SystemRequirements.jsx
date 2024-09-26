import React from "react";
import {
  FaApple,
  FaWindows,
  FaMicrochip,
  FaMemory,
  FaHeadphones,
  FaNetworkWired,
  FaDesktop,
  FaVideo,
  FaBatteryFull,
} from "react-icons/fa";
function SystemRequirements() {
  return (
    <section className="flex justify-center items-center flex-col pb-20">
      <h1 className="font-playfair font-extrabold text-6xl py-10 text-green text-center">
        System Requirements
      </h1>
      <div className="container w-4/5 grid py-10 text-sm 2xl:text-base gap-2 lg:grid-cols-2 sm:grid-cols-1 2xl:w-3/5">
        <div
          className="p-10  flex flex-col justify-center items-center hover:bg-green_dark hover:text-white text-black rounded-lg border-2"
          data-aos="fade-right"
        >
          <div className="flex items-center w-fit p-5 ">
            <FaWindows className="text-6xl" />
          </div>

          <h1 className="font-extrabold flex items-center font-playfair font-extrabold text-2xl mb-10">
            WINDOWS
          </h1>
          <ul className="space-y-4 text-base">
            <li className="flex items-center">
              <FaWindows className="mr-2 text-red" /> Windows 64 Bit
              Desktop/Laptop
            </li>
            <li className="flex items-center">
              <FaMicrochip className="mr-2 text-red" /> Intel Core i3 9th+ gen
              or higher (or AMD equivalent)
            </li>
            <li className="flex items-center">
              <FaMemory className="mr-2 text-red" /> 8 GB RAM or more For
              multitasking requirements
            </li>
            <li className="flex items-center">
              <FaHeadphones className="mr-2 text-red" /> USB Headset with
              Noise-Cancelling Feature
            </li>
            <li className="flex items-center">
              <FaNetworkWired className="mr-2 text-red" /> Internet Service of
              10 Mbps and up (DSL, Fiber, or Cable only)
            </li>
            <li className="flex items-center">
              <FaNetworkWired className="mr-2 text-red" /> Backup internet
              service of 5Mbps or more
            </li>
            <li className="flex items-center">
              <FaDesktop className="mr-2 text-red" /> Workstation free from any
              Noise and Distractions
            </li>
            <li className="flex items-center">
              <FaVideo className="mr-2 text-red" /> Webcam with Full HD (1080p)
              video capture
            </li>
            <li className="flex items-center">
              <FaBatteryFull className="mr-2 text-red" /> (Optional) Backup for
              Power Outage: Generator/UPS or Alternative Location
            </li>
          </ul>
        </div>
        <div
          className=" p-10 flex flex-col items-center border-2 rounded-lg hover:bg-green_dark hover:text-white"
          data-aos="fade-left"
        >
          <div className=" flex justify-center items-center w-fit p-5">
            <FaApple className="text-6xl " />
          </div>
          <h1 className="font-extrabold flex items-center justify-center font-playfair font-extrabold text-2xl mb-10">
            MAC
          </h1>

          <ul className="space-y-4 font-roboto text-base">
            <li className="flex items-center">
              <FaApple className="mr-2 text-red" /> macOS Catalina and newer
            </li>
            <li className="flex items-center">
              <FaMemory className="mr-2 text-red" /> 8 GB RAM or more For
              multitasking requirements
            </li>
            <li className="flex items-center">
              <FaHeadphones className="mr-2 text-red" /> USB Headset with
              Noise-Cancelling Feature
            </li>
            <li className="flex items-center">
              <FaNetworkWired className="mr-2 text-red" /> Internet Service of
              10 Mbps and up (DSL, Fiber, or Cable only)
            </li>
            <li className="flex items-center">
              <FaNetworkWired className="mr-2 text-red" /> Backup internet
              service of 5Mbps or more
            </li>
            <li className="flex items-center">
              <FaDesktop className="mr-2 text-red" /> Workstation free from any
              Noise and Distractions
            </li>
            <li className="flex items-center">
              <FaVideo className="mr-2 text-red" /> Webcam with Full HD (1080p)
              video capture
            </li>
            <li className="flex items-center">
              <FaBatteryFull className="mr-2 text-red" /> (Optional) Backup for
              Power Outage: Generator/UPS or Alternative Location
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default SystemRequirements;
