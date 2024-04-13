import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import team1 from '../../assets/img/team/team-1.jpg'
function Team() {
  useEffect(() => {
    AOS.init({}); // Initialize AOS
  }, []);
  return (
    <section id="team" className="team">
      <div className="container">
        <div className="section-title" data-aos="fade-up">
          <h2>Team</h2>
          <p>Our team is always here to help</p>
        </div>

        <div className="row">
          <div
            className="col-xl-3 col-lg-4 col-md-6"
            data-aos="zoom-in"
            data-aos-delay="100"
          >
            <div className="member">
              <img
                src={team1}
                className="img-fluid"
                alt=""
              />
              <div className="member-info">
                <div className="member-info-content">
                  <h4>Rajindra Tharindu</h4>
                  <span>Chief Executive Officer</span>
                </div>
                <div className="social">
                  <a href="https://www.facebook.com/rajindratharindu">
                    <i className="bi bi-facebook"></i>
                  </a>
                  <a href="https://www.instagram.com/rajindratharindu/">
                    <i className="bi bi-instagram"></i>
                  </a>
                  <a href="https://www.linkedin.com/in/rajindratharindu">
                    <i className="bi bi-linkedin"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div
            className="col-xl-3 col-lg-4 col-md-6"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            <div className="member">
              <img
                src="assets/img/team/team-2.jpg"
                className="img-fluid"
                alt=""
              />
              <div className="member-info">
                <div className="member-info-content">
                  <h4>Sarah Jhonson</h4>
                  <span>Product Manager</span>
                </div>
                <div className="social">
                  <a href="">
                    <i className="bi bi-twitter"></i>
                  </a>
                  <a href="">
                    <i className="bi bi-facebook"></i>
                  </a>
                  <a href="">
                    <i className="bi bi-instagram"></i>
                  </a>
                  <a href="">
                    <i className="bi bi-linkedin"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div
            className="col-xl-3 col-lg-4 col-md-6"
            data-aos="zoom-in"
            data-aos-delay="300"
          >
            <div className="member">
              <img
                src="assets/img/team/team-3.jpg"
                className="img-fluid"
                alt=""
              />
              <div className="member-info">
                <div className="member-info-content">
                  <h4>William Anderson</h4>
                  <span>CTO</span>
                </div>
                <div className="social">
                  <a href="">
                    <i className="bi bi-twitter"></i>
                  </a>
                  <a href="">
                    <i className="bi bi-facebook"></i>
                  </a>
                  <a href="">
                    <i className="bi bi-instagram"></i>
                  </a>
                  <a href="">
                    <i className="bi bi-linkedin"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div
            className="col-xl-3 col-lg-4 col-md-6"
            data-aos="zoom-in"
            data-aos-delay="400"
          >
            <div className="member">
              <img
                src="assets/img/team/team-4.jpg"
                className="img-fluid"
                alt=""
              />
              <div className="member-info">
                <div className="member-info-content">
                  <h4>Amanda Jepson</h4>
                  <span>Accountant</span>
                </div>
                <div className="social">
                  <a href="">
                    <i className="bi bi-twitter"></i>
                  </a>
                  <a href="">
                    <i className="bi bi-facebook"></i>
                  </a>
                  <a href="">
                    <i className="bi bi-instagram"></i>
                  </a>
                  <a href="">
                    <i className="bi bi-linkedin"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Team;
