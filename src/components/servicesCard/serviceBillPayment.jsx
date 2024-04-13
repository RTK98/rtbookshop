import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
// import './about.css';
import BillLogos from "../../assets/img/BillPayment.png";

function EZCash() {
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
                src={BillLogos}
                className="img-fluid"
                alt=""
                data-aos="zoom-in-left"
              />
            </div>
            <div className="col-lg-6 pt-5 pt-lg-0">
              <h3 data-aos="fade-up">CEB, NWSB, SLT Bill Payments</h3>
              <p data-aos="fade-up" data-aos-delay="100">
                Conveniently pay your Ceylon Electricity Board (CEB), National
                Water Supply and Drainage Board (NWSB), and Sri Lanka Telecom
                (SLT) bills hassle-free. Our platform allows you to manage and
                settle your utility bills efficiently, ensuring seamless
                transactions and peace of mind.
              </p>
              <div className="row">
                <h4 data-aos="fade-up" data-aos-delay="100">Service Charges</h4>
                <table data-aos="fade-up" data-aos-delay="100">
                  <thead>
                    <tr>
                      <th>Description</th>
                      <th>CEB</th>
                      <th>NWSB</th>
                      <th>SLT Bill</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Rs. 0 &lt;= 4999</td>
                      <td>Rs. 30</td>
                      <td>Rs. 30</td>
                      <td>0</td>
                    </tr>
                    <tr>
                      <td>Above Rs. 5000</td>
                      <td>Rs. 40</td>
                      <td>Rs. 40</td>
                      <td>0</td>
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
export default EZCash;
