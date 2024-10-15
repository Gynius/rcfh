import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import teamMembers from "../assets/constants/teams";

function Team() {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with a duration of 1000ms
  }, []);

  return (
    <section
      id="team"
      className="team section flex align-center justify-center py-16"
    >
      <div className="2xl:w-3/5">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="member"
              data-aos="fade-up"
              data-aos-delay={member.aosDelay}
              data-aos-once="true"
            >
              <div className="member-img">
                <img
                  src={member.imgSrc}
                  className="w-full object-cover aspect-square "
                  alt={`Team Member ${index + 1}`}
                />
                <div className="social text-white px-10 text-center italic">
                  <p className="text-xs lg:text-base">
                    "{member.description}"{" "}
                  </p>
                  {/* {member.socialLinks.map((link, linkIndex) => {
                    const IconComponent = link.icon;
                    return (
                      <a key={linkIndex} href={link.href}>
                        <IconComponent size={24} />
                      </a>
                    );
                  })} */}
                </div>
              </div>
              <div className="member-info text-center">
                <h4>{member.name}</h4>
                <span>{member.title}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Team;
