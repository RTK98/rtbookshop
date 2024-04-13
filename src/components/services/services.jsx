import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { Icon } from "@iconify-icon/react";

function Services() {
  useEffect(() => {
    AOS.init({}); // Initialize AOS
  }, []);
  return (
    <main id="main">
      <section id="services" className="services section-bg">
        <div className="container" data-aos="fade-up">
          <div className="section-title">
            <h2>Services</h2>
            <p>Check out the great services we offer</p>
          </div>

          <div className="row">
            <div
              className="col-md-6 col-lg-3 d-flex align-items-stretch"
              data-aos="zoom-in"
              data-aos-delay="100"
            >
              <div className="icon-box">
                <div className="icon">
                  <Icon icon="iconoir:hand-cash" className="newIcon" />
                </div>
                <h4 className="title">
                  <Link to="/services/BillPayments"><p>CEB, NWSB, SLT Bill Payments</p></Link>
                </h4>
                <p className="description">
                  Voluptatum deleniti atque corrupti quos dolores et quas
                  molestias excepturi sint occaecati cupiditate
                </p>
              </div>
            </div>
            <div
              className="col-md-6 col-lg-3 d-flex align-items-stretch"
              data-aos="zoom-in"
              data-aos-delay="200"
            >
              <div className="icon-box">
                <div className="icon">
                  <Icon icon="mdi:recurring-payment" className="newIcon" />
                </div>
                <h4 className="title">
                  <Link to="/services/EzCash"><p>EZ Cash Payments</p></Link>
                </h4>
                <p className="description">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla
                </p>
              </div>
            </div>

            <div
              className="col-md-6 col-lg-3 d-flex align-items-stretch"
              data-aos="zoom-in"
              data-aos-delay="300"
            >
              <div className="icon-box">
                <div className="icon">
                  {/* <Icon icon="flat-color-icons:sim-card" className="newIcon" /> */}
                  <Icon icon="fa6-solid:sim-card" className="newIcon" />
                </div>
                <h4 className="title">
                  <Link to="/services/SimcActivation">  <p>Sim Card Activation</p></Link>
                </h4>
                <p className="description">
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa
                  qui officia deserunt mollit anim
                </p>
              </div>
            </div>
            <div
              className="col-md-6 col-lg-3 d-flex align-items-stretch"
              data-aos="zoom-in"
              data-aos-delay="400"
            >
              <div className="icon-box">
                <div className="icon">
                  <Icon icon="solar:letter-bold-duotone" className="newIcon" />
                </div>
                <h4 className="title">
                  <a href="">Stationeries</a>
                </h4>
                <p className="description">
                  At vero eos et accusamus et iusto odio dignissimos ducimus qui
                  blanditiis praesentium voluptatum
                </p>
              </div>
            </div>
            <div
              className="col-md-6 col-lg-3 d-flex align-items-stretch"
              data-aos="zoom-in"
              data-aos-delay="400"
            >
              <div className="icon-box">
                <div className="icon">
                  <Icon icon="uil:gift" className="newIcon" />
                </div>
                <h4 className="title">
                  <a href="">Gift Items</a>
                </h4>
                <p className="description">
                  At vero eos et accusamus et iusto odio dignissimos ducimus qui
                  blanditiis praesentium voluptatum
                </p>
              </div>
            </div>
            <div
              className="col-md-6 col-lg-3 d-flex align-items-stretch"
              data-aos="zoom-in"
              data-aos-delay="400"
            >
              <div className="icon-box">
                <div className="icon">
                  <Icon icon="clarity:mobile-line" className="newIcon" />
                </div>
                <h4 className="title">
                  <a href="">Mobile Phone Accessories</a>
                </h4>
                <p className="description">
                  At vero eos et accusamus et iusto odio dignissimos ducimus qui
                  blanditiis praesentium voluptatum
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
export default Services;
