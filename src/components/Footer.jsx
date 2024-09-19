import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";
function Footer() {
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
            <a className="flex items-center">
              <Link to="/" className="flex">
                <img
                  src="https://static.wixstatic.com/media/368cfa_281c9844ac5a4fd0b0b3c605c91c63c6~mv2.png/v1/fill/w_150,h_130,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/WS_GraphicsLogoA.png"
                  className="h-8 me-3"
                  alt="rcfh"
                />
                <span className="self-center text-2xl font-semibold whitespace-nowrap :text-white">
                  RCFH
                </span>
              </Link>
            </a>
            <p className="max-w-md mx-auto text-gray-500 text-sm py-6 2xl:text-base">
              A group of passionate Virtual Assistants, OBMs & SMEs in providing
              practically all parts of business that allows to deal with most of
              business related or specified individual tasks so you can commit
              yourself to achieving what makes the biggest difference
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3 b">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase :text-white">
                Contact
              </h2>
              <ul className="text-gray-500 :text-gray-400 text-base ">
                <li className="mb-4">
                  <a
                    href="mailto:support@rcfhagency.com"
                    className="hover:underline inline-block shrink-0 break-all text-sm 2xl:text-base"
                  >
                    support@rcfhagency.com
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Services
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium space-y-4">
                <li>
                  <a className="hover:underline text-sm 2xl:text-base">
                    <Link to="/services">VA Services</Link>
                  </a>
                </li>
                <li>
                  <a className="hover:underline text-sm 2xl:text-base">
                    <Link to="/services">VA Staffing</Link>
                  </a>
                </li>
                <li>
                  <a className="hover:underline text-sm 2xl:text-base">
                    <Link to="/services">Consulting</Link>
                  </a>
                </li>
                <li>
                  <a className="hover:underline text-sm 2xl:text-base">
                    <Link to="/services">Outbound Messaging</Link>
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase :text-white">
                Legal
              </h2>
              <ul className="text-gray-500 :text-gray-400 font-medium">
                <li className="mb-4">
                  <button
                    className="hover:underline text-sm 2xl:text-base"
                    onClick={() => openModal("privacy")}
                  >
                    Privacy Policy
                  </button>
                </li>
                <li>
                  <button
                    className="hover:underline text-sm 2xl:text-base"
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
            © 2024
            <a className="hover:underline">
              <Link to="/">RCFH</Link>
            </a>
            . All Rights Reserved.
          </span>
          <div className="flex mt-4 sm:justify-center sm:mt-0 ">
            <a
              href="https://www.facebook.com/people/RCFH/65555467765595/"
              className="text-gray-500 hover:text-gray-900 :hover:text-white mx-2"
            >
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 8 59"
              >
                <path
                  fillRule="evenodd"
                  d="M6.535 3H8V0H6.535a4.547 4.547 0 0 0-4.542 4.542V6H0v3h2v9.938h3V9h2.025l.592-3H5V3.595A.6.6 0 0 5 5.592 3h.543Z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="sr-only">Facebook page</span>
            </a>

            <a
              href="https://ph.linkedin.com/company/reliable-consulting-for-hire"
              className="text-gray-500 hover:text-gray-900 :hover:text-white"
            >
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M22.23 0H5.77C.79 0 0 .77 0 5.72v20.56C0 23.23.79 24 5.77 24h20.46c.98 0 5.77-.77 5.77-5.72V5.72C24 .77 23.25 0 22.23 0zM7.52 20.45H3.56V9h3.56v5.45zM5.34 7.58c-5.54 0-2.06-.92-2.06-2.06s.92-2.06 2.06-2.06 2.06.92 2.06 2.06-.92 2.06-2.06 2.06zM20.45 20.45h-3.56v-5.6c0-5.34-.03-3.07-5.87-3.07-5.87 0-2.56 5.46-2.56 2.97v5.7h-3.56V9h3.42v5.56h.05c.48-.9 5.65-5.85 3.4-5.85 3.63 0 4.3 2.39 4.3 5.5v6.24z" />
              </svg>
              <span className="sr-only">LinkedIn page</span>
            </a>
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
            {activeTab === "terms" && (
              <div className="text-gray-700">
                <h2 className="text-xl text-black font-semibold mb-4">
                  Terms & Conditions
                </h2>
                <p className="mb-5">
                  Welcome to the RCFH Agency website. By using our website, you
                  agree to the following terms and conditions. Please read them
                  carefully.
                </p>

                <ol className="flex flex-col gap-3 text-justify  p-5">
                  <li className="flex gap-5">
                    <p> 1. </p>
                    <div>
                      <b className="text-black">General Terms:</b> These terms
                      and conditions govern your use of this website. By using
                      this website, you accept these terms and conditions in
                      full. If you disagree with these terms and conditions or
                      any part of these terms and conditions, you must not use
                      this website.
                    </div>
                  </li>
                  <li className="flex gap-5">
                    <p> 2.</p>
                    <div>
                      <b className="text-black">
                        Intellectual Property Rights:
                      </b>
                      Unless otherwise stated, RCFH Agency owns the intellectual
                      property rights in the website and material on the
                      website. You may view, download for caching purposes only,
                      and print pages or other content from the website for your
                      own personal use, subject to the restrictions set out
                      below and elsewhere in these terms and conditions.
                    </div>
                  </li>
                  <li className="flex gap-5">
                    <p> 3. </p>
                    <div>
                      <b className="text-black">Restrictions:</b> You must not:
                      <ul className="list-disc pl-5 space-y-2">
                        <li>
                          Sell, rent, or sub-license material from the website.
                        </li>
                        <li>
                          Reproduce, duplicate, copy, or otherwise exploit
                          material on this website for a commercial purpose.
                        </li>
                        <li>
                          Edit or otherwise modify any material on the website.
                        </li>
                        <li>Redistribute material from this website.</li>
                      </ul>
                    </div>
                  </li>
                  <li className="flex gap-5">
                    <p>4.</p>
                    <div>
                      <b className="text-black">Acceptable Use:</b> You must not
                      use this website in any way that causes, or may cause,
                      damage to the website or impairment of the availability or
                      accessibility of the website; or in any way which is
                      unlawful, illegal, fraudulent, or harmful, or in
                      connection with any unlawful, illegal, fraudulent, or
                      harmful purpose or activity.
                    </div>
                  </li>
                  <li className="flex gap-5">
                    <p>5.</p>
                    <div>
                      <b className="text-black">Limitation of Liability:</b> The
                      information on this website is provided free-of-charge,
                      and you acknowledge that it would be unreasonable to hold
                      us liable in respect of this website and the information
                      on this website. We strive to maintain the accuracy of the
                      information on this website but cannot guarantee that the
                      information is fully accurate or current.
                    </div>
                  </li>
                  <li className="flex gap-5">
                    <p>6.</p>
                    <div>
                      <b className="text-black">Revisions:</b> RCFH Agency may
                      revise these terms and conditions from time-to-time.
                      Revised terms and conditions will apply to the use of this
                      website from the date of the publication of the revised
                      terms and conditions on this website. Please check this
                      page regularly to ensure you are familiar with the current
                      version.
                    </div>
                  </li>
                  <li className="flex gap-5">
                    <p>7.</p>
                    <div>
                      <b className="text-black">Entire Agreement:</b> These
                      terms and conditions, together with our privacy policy,
                      constitute the entire agreement between you and RCFH
                      Agency in relation to your use of this website and
                      supersede all previous agreements in respect of your use
                      of this website.
                    </div>
                  </li>
                </ol>
              </div>
            )}
            {activeTab === "privacy" && (
              <div className="text-justify text-gray-700">
                <h2 className="text-xl font-semibold mb-4 text-black">
                  Privacy Policy
                </h2>
                <div>
                  <p className="mb-5">
                    A privacy policy is a statement that discloses some or all
                    of the ways a website collects, uses, discloses, and manages
                    the data of its visitors and customers. It fulfills a legal
                    requirement to protect a visitor or client's privacy.
                    <br /> <br />
                    Countries have their own laws with different requirements
                    per jurisdiction regarding the use of privacy policies. Make
                    sure you are following the legislation relevant to your
                    activities and location.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl py-2 text-black">
                    In general, what should you cover in your Privacy Policy?
                  </h3>
                  <ol className="pl-50">
                    <li className="flex gap-5">
                      <p>5.</p>
                      <p>What type of information do you collect?</p>
                    </li>
                    <li className="flex gap-5">
                      <p>2.</p>
                      <p>How do you collect information?</p>
                    </li>
                    <li className="flex gap-5">
                      <p>3.</p>
                      <p>Why do you collect such personal information?</p>
                    </li>
                    <li className="flex gap-5">
                      <p>4.</p>
                      <p>
                        How do you store, use, share and disclose your site
                        visitors' personal information?
                      </p>
                    </li>
                    <li className="flex gap-5">
                      <p>5.</p>
                      <p>
                        How (and if) do you communicate with your site visitors?
                      </p>
                    </li>
                    <li className="flex gap-5">
                      <p>5.</p>
                      <p>
                        How (and if) do you communicate with your site visitors?
                      </p>
                    </li>
                    <li className="flex gap-5">
                      <p>6.</p>
                      <p>
                        Is your service targeting and collecting information
                        from Minors?
                      </p>
                    </li>
                    <li className="flex gap-5">
                      <p>7.</p>
                      <p>Privacy policy updates</p>
                    </li>
                    <li className="flex gap-5">
                      <p>8.</p>
                      <p>Contact Information</p>
                    </li>
                  </ol>
                </div>
                <p className="py-8">
                  A privacy policy is a statement that discloses some or all of
                  the ways a website collects, uses, discloses, and manages the
                  data of its visitors and customers. It fulfills a legal
                  requirement to protect a visitor or client's privacy. ​
                  Countries have their own laws with different requirements per
                  jurisdiction regarding the use of privacy policies. Make sure
                  you are following the legislation relevant to your activities
                  and location. In general, what should you cover in your
                  Privacy Policy? ​ What type of information do you collect? How
                  do you collect information? Why do you collect such personal
                  information? How do you store, use, share and disclose your
                  site visitors' personal information? How (and if) do you
                  communicate with your site visitors? Is your service targeting
                  and collecting information from Minors? Privacy policy updates
                  Contact Information You can check out this support article to
                  receive more information about how to create a privacy policy.
                  The explanations and information provided herein are only
                  general explanations, information and samples. You should not
                  rely on this article as legal advice or as recommendations
                  regarding what you should actually do. We recommend that you
                  seek legal advice to help you understand and to assist you in
                  the creation of your privacy policy.
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </footer>
  );
}

export default Footer;
