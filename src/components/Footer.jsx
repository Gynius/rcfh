import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { site_data, services } from "../assets/constants/site_identity";

import {
  terms_and_condition,
  privacy_policy,
} from "../assets/constants/site_identity";
function Footer() {
  const { social_links } = site_data;
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [activeTab, setActiveTab] = useState("terms");

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }
  }, [isModalOpen]);

  const openModal = (tab) => {
    setActiveTab(tab);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <footer className="bg-white :bg-gray-900">
      <div className="mx-auto  2xl:w-3/5 w-4/5 p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <a href="/" className="flex">
              <img
                src="/images/rcfh_logo.svg"
                className="h-8 me-3"
                alt="footer logo"
              />
              <span className="font-playfair self-center text-2xl font-bold whitespace-nowrap :text-white">
                {site_data.short_name}
              </span>
            </a>

            <p className="max-w-md mx-auto text-gray-500 text-sm py-6">
              {site_data.desc}
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3 b">
            <div className="pt-2">
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase :text-white">
                Contact
              </h2>
              <ul className="text-[#00A2AF]  :text-gray ">
                <li className="mb-4">
                  <a
                    href="mailto:support@rcfhagency.com"
                    className="hover:underline inline-block shrink-0 break-all text-sm"
                  >
                    {site_data.email}
                  </a>
                </li>
              </ul>
            </div>
            <div className="pt-2">
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Services
              </h2>
              <ul className="text-[#00A2AF] dark:text-gray-400 font-medium space-y-4 text-sm">
                {Object.keys(services).map((key) => (
                  <li key={key} className="hover:underline">
                    <a href={services[key].link}>{services[key].name}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-2">
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase :text-white">
                Legal
              </h2>
              <ul className="text-[#00A2AF]  :text-gray-400 font-medium">
                <li className="mb-4">
                  <button
                    className="hover:underline text-sm"
                    onClick={() => openModal("privacy")}
                  >
                    Privacy Policy
                  </button>
                </li>
                <li>
                  <button
                    className="hover:underline text-sm text-left"
                    onClick={() => openModal("terms")}
                  >
                    Terms &amp; Conditions
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto :border-gray-700 lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center :text-gray-400">
            © 2024 RCFH. All Rights Reserved.
          </span>
          <div className="flex mt-4 sm:justify-center sm:mt-0 gap-2 ">
            {social_links.map((link, index) => {
              return (
                <a
                  key={index}
                  href={link.url}
                  className="text-gray-500 hover:text-gray-900 :hover:text-white"
                >
                  {link.icon}
                  <span className="sr-only">{link.name}</span>
                </a>
              );
            })}
          </div>
        </div>
      </div>
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div
            className="bg-white p-6 rounded-lg shadow-lg relative w-4/5 overflow-y-auto hide-scrollbar"
            style={{ height: "90vh" }}
          >
            <button
              className="fixed text-gray-600 hover:text-gray-900 text-4xl"
              style={{ top: "7%", right: "12%" }}
              onClick={closeModal}
            >
              &times;
            </button>
            <div className="flex justify-around mb-4">
              <button
                className={`px-4 py-2 ${
                  activeTab === "terms"
                    ? "text-blue-500 border-b-2 border-blue-500"
                    : "text-gray-500"
                }`}
                onClick={() => setActiveTab("terms")}
              >
                Terms & Conditions
              </button>
              <button
                className={`px-4 py-2 ${
                  activeTab === "privacy"
                    ? "text-blue-500 border-b-2 border-blue-500"
                    : "text-gray-500"
                }`}
                onClick={() => setActiveTab("privacy")}
              >
                Privacy Policy
              </button>
            </div>
            {activeTab === "terms" && terms_and_condition}
            {activeTab === "privacy" && privacy_policy}
          </div>
        </div>
      )}
    </footer>
  );
}

export default Footer;
