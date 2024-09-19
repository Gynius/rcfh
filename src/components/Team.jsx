import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Team() {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with a duration of 1000ms
  }, []);

  return (
    <section
      id="team"
      className="team section flex align-center justify-center py-16"
    >
      <div className="2xl:w-3/5 w-4/5 container">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="member" data-aos="fade-up" data-aos-delay="100">
            <div className="member-img">
              <img
                src="/images/team/team1.png"
                className="w-full object-cover"
                style={{ height: "20rem" }}
                alt="Team Member 1"
              />
              <div className="social">
                <a href="#">
                  <i className="bi bi-twitter-x"></i>
                </a>
                <a href="#">
                  <i className="bi bi-facebook"></i>
                </a>
                <a href="#">
                  <i className="bi bi-instagram"></i>
                </a>
                <a href="#">
                  <i className="bi bi-linkedin"></i>
                </a>
              </div>
            </div>
            <div className="member-info text-center">
              <h4>Jessica Taufmann</h4>
              <span>Outbound Services Director/Trainer</span>
              <p>
                Aliquam iure quaerat voluptatem praesentium possimus unde
                laudantium vel dolorum distinctio dire flow
              </p>
            </div>
          </div>

          <div className="member" data-aos="fade-up" data-aos-delay="200">
            <div className="member-img">
              <img
                src="/images/team/team2.jpg"
                className="w-full object-cover"
                style={{ height: "20rem" }}
                alt="Team Member 1"
              />
              <div className="social">
                <a href="#">
                  <i className="bi bi-twitter-x"></i>
                </a>
                <a href="#">
                  <i className="bi bi-facebook"></i>
                </a>
                <a href="#">
                  <i className="bi bi-instagram"></i>
                </a>
                <a href="#">
                  <i className="bi bi-linkedin"></i>
                </a>
              </div>
            </div>
            <div className="member-info text-center">
              <h4>Logan Welch</h4>
              <span>VA Services Director/Trainer</span>
              <p>
                Labore ipsam sit consequatur exercitationem rerum laboriosam
                laudantium aut quod dolores exercitationem ut
              </p>
            </div>
          </div>

          <div className="member" data-aos="fade-up" data-aos-delay="300">
            <div className="member-img">
              <img
                src="/images/team/team-3.jpg"
                className="w-full h-64 object-cover"
                style={{ height: "20rem" }}
                alt="Team Member 3"
              />
              <div className="social">
                <a href="#">
                  <i className="bi bi-twitter-x"></i>
                </a>
                <a href="#">
                  <i className="bi bi-facebook"></i>
                </a>
                <a href="#">
                  <i className="bi bi-instagram"></i>
                </a>
                <a href="#">
                  <i className="bi bi-linkedin"></i>
                </a>
              </div>
            </div>
            <div className="member-info text-center">
              <h4>Melody Quilanita</h4>
              <span>Manager of Operations</span>
              <p>
                Illum minima ea autem doloremque ipsum quidem quas aspernatur
                modi ut praesentium vel tque sed facilis at qui
              </p>
            </div>
          </div>

          <div className="member" data-aos="fade-up" data-aos-delay="400">
            <div className="member-img">
              <img
                src="/images/team/team-4.jpg"
                className="w-full object-cover"
                style={{ height: "20rem" }}
                alt="Team Member 4"
              />
              <div className="social">
                <a href="#">
                  <i className="bi bi-twitter-x"></i>
                </a>
                <a href="#">
                  <i className="bi bi-facebook"></i>
                </a>
                <a href="#">
                  <i className="bi bi-instagram"></i>
                </a>
                <a href="#">
                  <i className="bi bi-linkedin"></i>
                </a>
              </div>
            </div>
            <div className="member-info text-center">
              <h4>Sofia Magwale</h4>
              <span>Assistant Manager of Operations</span>
              <p>
                Magni voluptatem accusamus assumenda cum nisi aut qui dolorem
                voluptate sed et veniam quasi quam consectetur
              </p>
            </div>
          </div>

          <div className="member" data-aos="fade-up" data-aos-delay="500">
            <div className="member-img">
              <img
                src="/images/team/team-5.jpg"
                className="w-full object-cover"
                style={{ height: "20rem" }}
                alt="Team Member 5"
              />
              <div className="social">
                <a href="#">
                  <i className="bi bi-twitter-x"></i>
                </a>
                <a href="#">
                  <i className="bi bi-facebook"></i>
                </a>
                <a href="#">
                  <i className="bi bi-instagram"></i>
                </a>
                <a href="#">
                  <i className="bi bi-linkedin"></i>
                </a>
              </div>
            </div>
            <div className="member-info text-center">
              <h4>Brian Doe</h4>
              <span>Marketing</span>
              <p>
                Qui consequuntur quos accusamus magnam quo est molestiae eius
                laboriosam sunt doloribus quia impedit laborum velit
              </p>
            </div>
          </div>

          <div className="member" data-aos="fade-up" data-aos-delay="600">
            <div className="member-img">
              <img
                src="/images/team/team-6.jpg"
                className="w-full object-cover"
                style={{ height: "20rem" }}
                alt="Team Member 6"
              />
              <div className="social">
                <a href="#">
                  <i className="bi bi-twitter-x"></i>
                </a>
                <a href="#">
                  <i className="bi bi-facebook"></i>
                </a>
                <a href="#">
                  <i className="bi bi-instagram"></i>
                </a>
                <a href="#">
                  <i className="bi bi-linkedin"></i>
                </a>
              </div>
            </div>
            <div className="member-info text-center">
              <h4>Josepha Palas</h4>
              <span>Operation</span>
              <p>
                Sint sint eveniet explicabo amet consequatur nesciunt error enim
                rerum earum et omnis fugit eligendi cupiditate vel
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Team;
