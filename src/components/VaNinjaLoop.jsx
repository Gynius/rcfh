import React from "react";
import {
  FaArrowRight,
  FaUser,
  FaEnvelope,
  FaPhone,
  FaLaptopCode,
} from "react-icons/fa";
import { MdWork, MdGroup, MdMessage, MdSettings } from "react-icons/md";
import { GiTechnoHeart, GiTeamIdea } from "react-icons/gi";
const ninja_tasks = [
  {
    title: "General VA",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    icon: <FaUser />,
    link: "https://form.jotform.com/240193622260044",
  },
  {
    title: "Executive Assistant",
    desc: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    icon: <MdWork />,
    link: "https://form.jotform.com/240193622260044",
  },
  {
    title: "Outbound Messenger",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    icon: <MdMessage />,
    link: "https://form.jotform.com/240193622260044",
  },
  {
    title: "Technical/IT Specialist",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    icon: <FaLaptopCode />,
    link: "https://form.jotform.com/240193622260044",
  },
  {
    title: "Community Management",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    icon: <MdGroup />,
    link: "https://form.jotform.com/240193622260044",
  },
];

function VaNinjaLoop() {
  return (
    <section className="flex w-full justify-center py-10 bg-gray-100">
      <div className="w-4/5 container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {ninja_tasks.map((task, index) => {
          return (
            <div
              className="border px-5 py-2 flex flex-col justify-between rounded-lg drop-shadow-md  bg-white"
              key={index}
            >
              <div className="flex justify-between py-5">
                <h1 className="font-playfair font-extrabold text-xl w-1/2 text-green">
                  {task.title}
                </h1>
                <i>
                  {React.cloneElement(task.icon, {
                    size: 30,
                    color: "#144835",
                  })}
                </i>
              </div>
              <p className="text-base font-roboto text-gray-500 text-sm">
                {task.desc}
              </p>
              <a
                href={task.link}
                className="text-sm flex items-center border-t-2 border-gray-100 font-light py-3 text-green"
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
