import { FaFacebook, FaLinkedin } from "react-icons/fa";

export const navbar_links = [
  {
    name: "Home",
    url: "/",
  },
  {
    name: "Our Teams",
    url: "/teams",
  },
  {
    name: "Our Services",
    url: "/services",
  },
  {
    name: "Become a VA Ninja",
    url: "/va-ninja",
  },
];

export const site_data = {
  company_name: "Reliable Consulting For Hire",
  short_name: "RCFH",
  email: "support@rcfhagency.com",
  desc: "A group of passionate Virtual Assistants, OBMs & SMEs in providing practically all parts of business that allows to deal with most of business related or specified individual tasks so you can commit yourself to achieving what makes the biggest difference",
  social_links: [
    {
      name: "Facebook",
      url: "https://www.facebook.com/people/RCFH/65555467765595/",
      icon: <FaFacebook size={32} />,
    },
    {
      name: "LinkedIn",
      url: "https://ph.linkedin.com/company/reliable-consulting-for-hire",
      icon: <FaLinkedin size={32} />,
    },
  ],
};

export const terms_and_condition = [
  <div className="text-gray-700">
    <h2 className="text-xl text-black font-semibold mb-4">
      Terms & Conditions
    </h2>
    <p className="mb-5">
      Welcome to the RCFH Agency website. By using our website, you agree to the
      following terms and conditions. Please read them carefully.
    </p>

    <ol className="flex flex-col gap-3 text-justify  p-5">
      <li className="flex gap-5">
        <p> 1. </p>
        <div>
          <b className="text-black">General Terms:</b> These terms and
          conditions govern your use of this website. By using this website, you
          accept these terms and conditions in full. If you disagree with these
          terms and conditions or any part of these terms and conditions, you
          must not use this website.
        </div>
      </li>
      <li className="flex gap-5">
        <p> 2.</p>
        <div>
          <b className="text-black">Intellectual Property Rights:</b>
          Unless otherwise stated, RCFH Agency owns the intellectual property
          rights in the website and material on the website. You may view,
          download for caching purposes only, and print pages or other content
          from the website for your own personal use, subject to the
          restrictions set out below and elsewhere in these terms and
          conditions.
        </div>
      </li>
      <li className="flex gap-5">
        <p> 3. </p>
        <div>
          <b className="text-black">Restrictions:</b> You must not:
          <ul className="list-disc pl-5 space-y-2">
            <li>Sell, rent, or sub-license material from the website.</li>
            <li>
              Reproduce, duplicate, copy, or otherwise exploit material on this
              website for a commercial purpose.
            </li>
            <li>Edit or otherwise modify any material on the website.</li>
            <li>Redistribute material from this website.</li>
          </ul>
        </div>
      </li>
      <li className="flex gap-5">
        <p>4.</p>
        <div>
          <b className="text-black">Acceptable Use:</b> You must not use this
          website in any way that causes, or may cause, damage to the website or
          impairment of the availability or accessibility of the website; or in
          any way which is unlawful, illegal, fraudulent, or harmful, or in
          connection with any unlawful, illegal, fraudulent, or harmful purpose
          or activity.
        </div>
      </li>
      <li className="flex gap-5">
        <p>5.</p>
        <div>
          <b className="text-black">Limitation of Liability:</b> The information
          on this website is provided free-of-charge, and you acknowledge that
          it would be unreasonable to hold us liable in respect of this website
          and the information on this website. We strive to maintain the
          accuracy of the information on this website but cannot guarantee that
          the information is fully accurate or current.
        </div>
      </li>
      <li className="flex gap-5">
        <p>6.</p>
        <div>
          <b className="text-black">Revisions:</b> RCFH Agency may revise these
          terms and conditions from time-to-time. Revised terms and conditions
          will apply to the use of this website from the date of the publication
          of the revised terms and conditions on this website. Please check this
          page regularly to ensure you are familiar with the current version.
        </div>
      </li>
      <li className="flex gap-5">
        <p>7.</p>
        <div>
          <b className="text-black">Entire Agreement:</b> These terms and
          conditions, together with our privacy policy, constitute the entire
          agreement between you and RCFH Agency in relation to your use of this
          website and supersede all previous agreements in respect of your use
          of this website.
        </div>
      </li>
    </ol>
  </div>,
];

export const privacy_policy = [
  <div className="text-justify text-gray-700">
    <h2 className="text-xl font-semibold mb-4 text-black">Privacy Policy</h2>
    <div>
      <p className="mb-5">
        A privacy policy is a statement that discloses some or all of the ways a
        website collects, uses, discloses, and manages the data of its visitors
        and customers. It fulfills a legal requirement to protect a visitor or
        client's privacy.
        <br /> <br />
        Countries have their own laws with different requirements per
        jurisdiction regarding the use of privacy policies. Make sure you are
        following the legislation relevant to your activities and location.
      </p>
    </div>
    <div>
      <h3 className="text-xl py-2 text-black">
        In general, what should you cover in your Privacy Policy?
      </h3>
      <ol className="pl-50">
        <li className="flex gap-5">
          <p>1.</p>
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
            How do you store, use, share and disclose your site visitors'
            personal information?
          </p>
        </li>
        <li className="flex gap-5">
          <p>5.</p>
          <p>How (and if) do you communicate with your site visitors?</p>
        </li>

        <li className="flex gap-5">
          <p>6.</p>
          <p>
            Is your service targeting and collecting information from Minors?
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
      A privacy policy is a statement that discloses some or all of the ways a
      website collects, uses, discloses, and manages the data of its visitors
      and customers. It fulfills a legal requirement to protect a visitor or
      client's privacy. ​ Countries have their own laws with different
      requirements per jurisdiction regarding the use of privacy policies. Make
      sure you are following the legislation relevant to your activities and
      location. In general, what should you cover in your Privacy Policy? ​ What
      type of information do you collect? How do you collect information? Why do
      you collect such personal information? How do you store, use, share and
      disclose your site visitors' personal information? How (and if) do you
      communicate with your site visitors? Is your service targeting and
      collecting information from Minors? Privacy policy updates Contact
      Information You can check out this support article to receive more
      information about how to create a privacy policy. The explanations and
      information provided herein are only general explanations, information and
      samples. You should not rely on this article as legal advice or as
      recommendations regarding what you should actually do. We recommend that
      you seek legal advice to help you understand and to assist you in the
      creation of your privacy policy.
    </p>
  </div>,
];

export const services = {
  va_services: {
    name: "VA Services",
    link: "/services",
  },
  va_staffing: {
    name: "VA Staffing",
    link: "/services",
  },
  consulting: {
    name: "Consulting",
    link: "/services",
  },
  outbound_messaging: {
    name: "Outbound Messaging",
    link: "/services",
  },
};
