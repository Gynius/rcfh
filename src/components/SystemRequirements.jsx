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
    <section className="flex justify-center items-center flex-col pb-20 bg-gradient-to-b from-white to-green_light">
      <h2 className="font-playfair font-extrabold text-4xl lg:text-6xl py-10 text-black text-center tracking-tight leading-none">
        System Requirements
      </h2>
      <div className="container w-4/5 2xl:w-3/5 grid py-10 text-sm 2xl:text-base gap-2 grid-cols-1 lg:grid-cols-2 ">
        <div
          className="p-10  flex flex-col justify-center items-center hover:bg-green group hover:text-white text-black rounded-2xl border-4 border-green bg-white "
          data-aos="fade-right"
          data-aos-once="true"
        >
          <div className="flex items-center w-fit p-5 bg-wh ">
            <FaWindows className="text-6xl text-green group-hover:text-white" />
          </div>

          <h2 className="font-extrabold flex items-center font-playfair font-extrabold text-xl lg:text-2xl mb-10 ">
            WINDOWS
          </h2>
          <ul className="space-y-4 text text-sm">
            <li className="flex items-center">
              <FaWindows className="mr-2 text-green group-hover:text-white" />{" "}
              Windows 64 Bit Desktop/Laptop
            </li>
            <li className="flex items-center">
              <FaMicrochip className="mr-2 text-green group-hover:text-white" />{" "}
              Intel Core i3 9th+ gen or higher (or AMD equivalent)
            </li>
            <li className="flex items-center">
              <FaMemory className="mr-2 text-green group-hover:text-white" /> 8
              GB RAM or more For multitasking requirements
            </li>
            <li className="flex items-center">
              <FaHeadphones className="mr-2 text-green group-hover:text-white" />{" "}
              USB Headset with Noise-Cancelling Feature
            </li>
            <li className="flex items-center">
              <FaNetworkWired className="mr-2 text-green group-hover:text-white" />{" "}
              Internet Service of 10 Mbps and up (DSL, Fiber, or Cable only)
            </li>
            <li className="flex items-center">
              <FaNetworkWired className="mr-2 text-green group-hover:text-white" />{" "}
              Backup internet service of 5Mbps or more
            </li>
            <li className="flex items-center">
              <FaDesktop className="mr-2 text-green group-hover:text-white" />{" "}
              Workstation free from any Noise and Distractions
            </li>
            <li className="flex items-center">
              <FaVideo className="mr-2 text-green group-hover:text-white" />{" "}
              Webcam with Full HD (1080p) video capture
            </li>
            <li className="flex items-center">
              <FaBatteryFull className="mr-2 text-green group-hover:text-white" />{" "}
              (Optional) Backup for Power Outage: Generator/UPS or Alternative
              Location
            </li>
          </ul>
        </div>
        <div
          className=" p-10 flex flex-col items-center rounded-2xl hover:bg-green group hover:text-white border-4 border-green bg-white "
          data-aos="fade-left"
          data-aos-once="true"
        >
          <div className=" flex justify-center items-center w-fit p-5 e">
            <FaApple className="text-6xl text-green group-hover:text-white" />
          </div>
          <h2 className="font-extrabold flex items-center justify-center text-xl lg:text-2xl font-playfair font-extrabold text-2xl mb-10">
            MAC
          </h2>

          <ul className="space-y-4 font-roboto text-sm">
            <li className="flex items-center">
              <FaApple className="mr-2 text-green group-hover:text-white" />{" "}
              macOS Catalina and newer
            </li>
            <li className="flex items-center">
              <FaMemory className="mr-2 text-green group-hover:text-white" /> 8
              GB RAM or more For multitasking requirements
            </li>
            <li className="flex items-center">
              <FaHeadphones className="mr-2 text-green group-hover:text-white" />{" "}
              USB Headset with Noise-Cancelling Feature
            </li>
            <li className="flex items-center">
              <FaNetworkWired className="mr-2 text-green group-hover:text-white" />{" "}
              Internet Service of 10 Mbps and up (DSL, Fiber, or Cable only)
            </li>
            <li className="flex items-center">
              <FaNetworkWired className="mr-2 text-green group-hover:text-white" />{" "}
              Backup internet service of 5Mbps or more
            </li>
            <li className="flex items-center">
              <FaDesktop className="mr-2 text-green group-hover:text-white" />{" "}
              Workstation free from any Noise and Distractions
            </li>
            <li className="flex items-center">
              <FaVideo className="mr-2 text-green group-hover:text-white" />{" "}
              Webcam with Full HD (1080p) video capture
            </li>
            <li className="flex items-center">
              <FaBatteryFull className="mr-2 text-green group-hover:text-white" />{" "}
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
