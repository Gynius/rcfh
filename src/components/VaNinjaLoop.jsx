import React, { useEffect } from "react";
import {
  FaArrowRight,
  FaUser,
  FaEnvelope,
  FaPhone,
  FaLaptopCode,
} from "react-icons/fa";
import { MdWork, MdGroup, MdMessage, MdSettings } from "react-icons/md";
import Aos from "aos";
import "aos/dist/aos.css";

const ninja_tasks = [
  {
    title: "General VA",
    desc: "As a General Virtual Assistant, you will be the backbone of daily operations for our clients. Your responsibilities may include managing emails, scheduling appointments, data entry, customer service, and other administrative tasks. You’ll play a crucial role in keeping businesses running smoothly, freeing up time for clients to focus on their core goals.",
    icon: <FaUser />,
    link: "https://form.jotform.com/240193622260044",
  },
  {
    title: "Executive Assistant",
    desc: "An Executive Assistant provides high-level administrative support to executives, managing their schedules, communications, and often acting as the primary point of contact. Responsibilities include organizing meetings, handling correspondence, and overseeing key projects or tasks. An Executive Assistant ensures that business leaders are able to focus on strategic tasks by taking care of operational details.",
    icon: <MdWork />,
    link: "https://form.jotform.com/240193622260044",
  },
  {
    title: "Outbound Messenger",
    desc: "An Outbound Messenger is responsible for reaching out to clients, customers, or leads via various communication channels, including email, social media, and phone. Their primary tasks involve engaging in conversations, answering inquiries, and nurturing relationships, often to generate leads or provide customer service. Strong communication skills and a customer-focused approach are essential for this role.",
    icon: <MdMessage />,
    link: "https://form.jotform.com/240193622260044",
  },
  {
    title: "Technical/IT Specialist",
    desc: "A Technical/IT Specialist handles the technical aspects of a business, including troubleshooting hardware and software issues, managing IT infrastructure, and ensuring systems run smoothly. They may also be involved in setting up new technologies, maintaining networks, and providing technical support to employees or clients. This role is crucial for keeping a business's technology running efficiently and securely.",
    icon: <FaLaptopCode />,
    link: "https://form.jotform.com/240193622260044",
  },
  {
    title: "Community Management",
    desc: "A Community Manager is responsible for building, growing, and managing online communities, often on social media platforms or forums. They engage with members, moderate discussions, and create content to foster a positive and active community. This role involves interacting with the audience, handling feedback, and promoting brand loyalty by creating meaningful connections within the community.",
    icon: <MdGroup />,
    link: "https://form.jotform.com/240193622260044",
  },
];

function VaNinjaLoop() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <section className="flex w-full justify-center py-10">
      <div className="w-4/5  container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {ninja_tasks.map((task, index) => {
          return (
            <div
              className="border px-5 py-2 flex flex-col justify-between rounded-lg drop-shadow-md  bg-white"
              key={index}
              data-aos="zoom-in"
              data-aos-once="true"
            >
              <div className="flex justify-between py-5">
                <h1 className="font-playfair font-extrabold text-xl w-1/2 text-green 2xl:text-2xl">
                  {task.title}
                </h1>
                <i>
                  {React.cloneElement(task.icon, {
                    size: 30,
                    color: "#144835",
                  })}
                </i>
              </div>
              <p className="text-base font-roboto text-gray-500 text-sm 2xl:text-base">
                {task.desc}
              </p>
              <a
                href={task.link}
                className="text-sm 2xl:text-base flex items-center border-t-2 border-gray-100 font-light py-3 text-green"
              >
                Join now <FaArrowRight className="ml-2 text-red" />
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default VaNinjaLoop;
