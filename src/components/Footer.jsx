import { Link } from "react-router-dom";
function Footer() {
  return (
    <footer className="bg-white :bg-gray-900">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
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
            <p className="max-w-md mx-auto text-gray-500 text-xs_sm py-6">
              A group of passionate Virtual Assistants, OBMs & SMEs in providing
              practically all parts of business that allows to deal with most of
              business related or specified individual tasks so you can commit
              yourself to achieving what makes the biggest difference
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase :text-white">
                Contact
              </h2>
              <ul className="text-gray-500 :text-gray-400 font-medium">
                <li className="mb-4">
                  <a href="https://flowbite.com/" className="hover:underline">
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
                  <a className="hover:underline">VA Services</a>
                </li>
                <li>
                  <a className="hover:underline">VA Staffing</a>
                </li>
                <li>
                  <a className="hover:underline">Consulting</a>
                </li>
                <li>
                  <a className="hover:underline">Outbound Messaging</a>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase :text-white">
                Legal
              </h2>
              <ul className="text-gray-500 :text-gray-400 font-medium">
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Terms &amp; Conditions
                  </a>
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
              href="https://www.facebook.com/people/RCFH/61555467761591/"
              className="text-gray-500 hover:text-gray-900 :hover:text-white mx-2"
            >
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 8 19"
              >
                <path
                  fillRule="evenodd"
                  d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
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
                <path d="M22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.21 0 22.23 0zM7.12 20.45H3.56V9h3.56v11.45zM5.34 7.58c-1.14 0-2.06-.92-2.06-2.06s.92-2.06 2.06-2.06 2.06.92 2.06 2.06-.92 2.06-2.06 2.06zM20.45 20.45h-3.56v-5.6c0-1.34-.03-3.07-1.87-3.07-1.87 0-2.16 1.46-2.16 2.97v5.7h-3.56V9h3.42v1.56h.05c.48-.9 1.65-1.85 3.4-1.85 3.63 0 4.3 2.39 4.3 5.5v6.24z" />
              </svg>
              <span className="sr-only">LinkedIn page</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
