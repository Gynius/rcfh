import React, { useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

function VASpotlight() {
  const vaSpotlights = [
    {
      image: "/images/team/jess-op.png",
      name: "Jessica Taufmann",
      title: "Outbound Services Director/Trainer",
      description: (
        <ul>
          <li>
            Comprehensive Business Support - Handling a wide range of tasks,
            including managing documentation, emails, scheduling, and overall
            administrative support
          </li>
          <li>
            Social Media Management - Creating, scheduling, and managing social
            media content to boost engagement and grow following
          </li>
          <li>
            Website Management & Creation - Website creation and management,
            ensuring seamless updates, and user-friendly experiences
          </li>
          <li>
            Customer Service Excellence - Ability to manage customer
            interactions, provide support, and resolve inquiries to ensure
            positive customer experience
          </li>
          <li>
            Organization & Time Management - Highly organized, with a focus on
            prioritization, multitasking, and managing tight deadlines
          </li>
          <li>
            Tech-Savvy & Adaptable - Comfortable with various tools and
            platforms, from email and content management systems to project
            management software and communication tools
          </li>
          <li>
            Problem-Solving & Initiative: Capable of identifying challenges and
            implementing solutions quickly, with proactive attitude towards
            tasks and responsibilities
          </li>
        </ul>
      ),
    },
    {
      image: "/images/team/logan.jpg",
      name: "Logan Welch",
      title: "VA Services Director/Trainer",
      description: (
        <ul>
          <li>
            Comprehensive Business Support - Handling a wide range of tasks,
            including managing documentation, emails, scheduling, and overall
            administrative support
          </li>
          <li>
            Social Media Management - Creating, scheduling, and managing social
            media content to boost engagement and grow following
          </li>
          <li>
            Website Management & Creation - Website creation and management,
            ensuring seamless updates, and user-friendly experiences
          </li>
          <li>
            Customer Service Excellence - Ability to manage customer
            interactions, provide support, and resolve inquiries to ensure
            positive customer experience
          </li>
          <li>
            Organization & Time Management - Highly organized, with a focus on
            prioritization, multitasking, and managing tight deadlines
          </li>
          <li>
            Tech-Savvy & Adaptable - Comfortable with various tools and
            platforms, from email and content management systems to project
            management software and communication tools
          </li>
          <li>
            Problem-Solving & Initiative: Capable of identifying challenges and
            implementing solutions quickly, with proactive attitude towards
            tasks and responsibilities
          </li>
        </ul>
      ),
    },
    {
      image: "/images/team/team-3.jpg",
      name: "Someone Else",
      title: "Another Role",
      description: (
        <ul>
          <li>
            <b className="text-white">Effective Communication </b>: I can convey
            messages clearly and professionally, ensuring the recipient
            understands the information.
          </li>
          <li>
            <b className="text-white">Time Management</b>: I prioritize tasks
            efficiently to meet deadlines and ensure timely follow-ups.
          </li>
          <li>
            <b className="text-white">Personalization</b>: I tailor messages to
            suit the recipient's needs and preferences, fostering a better
            connection.
          </li>
          <li>
            <b className="text-white">Problem-Solving</b>: I quickly identify
            and address any issues that arise in the messaging process.
          </li>
          <li>
            <b className="text-white">Adaptability</b>: I adjust my approach
            based on feedback and changes in the workflow. These strengths
            enable me to support outreach efforts effectively and maintain
            positive relationships with clients or customers.
          </li>
        </ul>
      ),
    },
    {
      image: "/images/team/ela.png",
      name: "Narella",
      title: "VA for 6 months",
      description: (
        <ul className="flex flex-col gap-1">
          <li>
            <b className="text-white">Comprehensive Business Support</b> -
            Handling a wide range of tasks, including managing documentation,
            emails, scheduling, and overall administrative support
          </li>
          <li>
            <b className="text-white">Social Media Management </b>- Creating,
            scheduling, and managing social media content to boost engagement
            and grow following
          </li>
          <li>
            <b className="text-white">Website Management & Creation</b> -
            Website creation and management, ensuring seamless updates, and
            user-friendly experiences
          </li>
          <li>
            <b className="text-white">Customer Service Excellence</b> - Ability
            to manage customer interactions, provide support, and resolve
            inquiries to ensure positive customer experience
          </li>
          <li>
            <b className="text-white">Organization & Time Management</b> -
            Highly organized, with a focus on prioritization, multitasking, and
            managing tight deadlines
          </li>
          <li>
            <b className="text-white">Tech-Savvy & Adaptable</b> - Comfortable
            with various tools and platforms, from email and content management
            systems to project management software and communication tools
          </li>
          <li>
            <b className="text-white">Problem-Solving & Initiative</b>: Capable
            of identifying challenges and implementing solutions quickly, with
            proactive attitude towards tasks and responsibilities
          </li>
        </ul>
      ),
    },
    // Add more items as needed
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % vaSpotlights.length);
    }, 10000); // Change the slide every 5 seconds

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? vaSpotlights.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % vaSpotlights.length);
  };

  const itemsToShow = [
    vaSpotlights[currentIndex], // Center item
  ];

  return (
    <section className="spotlight-container flex flex-col w-full justify-center items-center relative py-20">
      <h2 className="w-4/5 text-center text-4xl lg:text-6xl font-playfair mb-4 font-extrabold tracking-tight leading-none text-green mb-10">
        VA Spotlights
      </h2>
      <div className=" w-9/12 flex relative my-20 justify-center">
        {itemsToShow.map((spotlight, index) => (
          <div
            key={index}
            className="w-5/6 center w-full bg-va_bg border flex p-10 text-white"
          >
            <img
              src={spotlight.image}
              alt={spotlight.name}
              className="h-auto object-cover rounded-full aspect-square w-1/3 border-8 border-red"
            />
            <div className="right text-left">
              <h3 className="font-playfair font-extrabold text-center text-2xl">
                {spotlight.name}
              </h3>
              <h4 className="font-robotoCondensed text-sm text-center pb-2 text-gray-500">
                {spotlight.title}
              </h4>
              <div className="font-roboto px-10 text-sm text-gray-400 text-justify">
                {spotlight.description}
              </div>
            </div>
          </div>
        ))}
      </div>
      <button className="carousel-button prev text-red" onClick={handlePrev}>
        <FaChevronLeft />
      </button>
      <button className="carousel-button next text-red" onClick={handleNext}>
        <FaChevronRight />
      </button>
    </section>
  );
}

export default VASpotlight;
