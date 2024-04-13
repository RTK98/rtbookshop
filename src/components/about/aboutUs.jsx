import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
// import './about.css';
import AboutUsImg from "../../assets/img/about-img.svg";

function AboutUs() {
  useEffect(() => {
    AOS.init({}); // Initialize AOS
  }, []);
  return (
    <main id="main">
      <section id="about" className="about">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-5 d-flex align-items-center justify-content-center about-img">
              <img
                src={AboutUsImg}
                className="img-fluid"
                alt=""
                data-aos="zoom-in"
              />
            </div>
            <div className="col-lg-6 pt-5 pt-lg-0">
              <h3 data-aos="fade-up">About Us</h3>
              <p data-aos="fade-up" data-aos-delay="100">
                Located in Kottawa since 2018, our store is a vibrant hub for
                all your printing needs, from printouts to photocopying. Explore
                our curated selection of stationery, reload cards, and an array
                of fancy and gift items, tailored to inspire creativity and
                convenience for our community.
              </p>
              <div className="row">
                <div
                  className="col-md-6"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  <i className="bx bx-receipt"></i>
                  <h4>Corporis voluptates sit</h4>
                  <p>
                    Consequuntur sunt aut quasi enim aliquam quae harum pariatur
                    laboris nisi ut aliquip
                  </p>
                </div>
                <div
                  className="col-md-6"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  <i className="bx bx-cube-alt"></i>
                  <h4>Ullamco laboris nisi</h4>
                  <p>
                    Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
export default AboutUs;
