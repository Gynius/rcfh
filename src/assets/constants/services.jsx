import { FaBolt, FaEnvelopeOpenText } from "react-icons/fa"; // Font Awesome
import { MdWork } from "react-icons/md"; // Material Design Icons
import { BsFillPeopleFill } from "react-icons/bs"; // Bootstrap Icons

export const services = [
  {
    svg: <FaBolt />,
    image: "/images/services/assistant.webp",
    title: "VA services",
    description:
      "Streamline your operations and reclaim valuable time with our Virtual Assistant Services. Our dedicated team of virtual assistants is adept at handling administrative tasks, managing schedules, and executing a wide range of operational responsibilities. Focus on what matters most while we handle the rest.",
  },
  {
    svg: <BsFillPeopleFill />,
    image: "/images/services/staffing.webp",
    title: "VA Staffing",
    description:
      "Finding the right talent for your team just got easier with our Virtual Assistant Staffing services. We match your business needs with skilled professionals who seamlessly integrate into your operations. Whether you require short-term support or long-term collaboration, our virtual assistant staffing ensures a perfect fit for your organizational requirements.",
  },
  {
    svg: <FaEnvelopeOpenText />,
    image: "/images/services/messaging.webp",
    title: "Outbound Messaging",
    description:
      "Elevate your brand's communication strategy with our Outbound Messaging services. From targeted marketing campaigns to personalized customer outreach, we craft compelling messages that resonate with your audience. Enhance your brand presence, foster customer relationships, and drive meaningful engagement with our expert outbound messaging solutions.",
  },
  {
    svg: <MdWork />,
    image: "/images/services/consulting.webp",
    title: "Consulting",
    description:
      "Navigate the complexities of business with confidence through our Consulting services. We bring a wealth of industry knowledge to the table, offering insights that drive informed decision-making. From process optimization to overarching business strategy, we provide personalized guidance to fuel your success.",
  },
];
