import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Icon } from "@iconify-icon/react";

function ServiceSimActive() {
  useEffect(() => {
    AOS.init({}); // Initialize AOS
  }, []);
  return (
    <main id="main">
      <section id="about" className="about">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-5 d-flex align-items-center justify-content-center about-img">
              <Icon icon="flat-color-icons:sim-card" data-aos="zoom-in-left" width="250" height="250"/>
            </div>
            <div className="col-lg-6 pt-5 pt-lg-0">
              <h3 data-aos="fade-up">Sim Activation</h3>
              <p data-aos="fade-up" data-aos-delay="100">
                EZ Cash is a mobile payment facility provided by Dialog, a
                leading telecommunication company. With EZ Cash, users can
                conveniently send and receive money, pay bills, recharge mobile
                credit, and perform various other financial transactions
                directly from their mobile phones. It offers a wide range of
                services, with over 50 options available for users. In Kottawa
                Area, RT Communication is one of the authorized agents
                facilitating EZ Cash transactions, providing seamless and secure
                payment services to the local community.
              </p>
              <div className="row">
                <h4 data-aos="fade-up" data-aos-delay="100">
                  Services on Ez Cash
                </h4>
                <table data-aos="fade-up" data-aos-delay="100">
                  <thead>
                    <tr>
                      <th>Description</th>
                      <th>Company / Service</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>EZ Cash Payments</td>
                      <td>Ezcash Account Top Up</td>
                    </tr>
                    <tr>
                      <td>Dialog Bill Payments</td>
                      <td>Dialog Mobile, Home broadband,Dialog TV</td>
                    </tr>
                    <tr>
                      <td>Institutional Payments</td>
                      <td>Pickme, Uber Eats, Uber Taxi and More</td>
                    </tr>
                    <tr>
                      <td>Finance Payments</td>
                      <td>HNB Finance, Assoc. Motor Finance, Assetline Leasing and More</td>
                    </tr>
                    <tr>
                      <td>Insurance Payments</td>
                      <td>HNB Assurance, Sri Lanka Insurace, Janashakthi Insurance, Union Assurance And More</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
export default ServiceSimActive;
