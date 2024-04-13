import React from "react";

function Footer() {
  return (
    <>
      <footer id="footer">

        <div className="footer-top">
          <div className="container">
            <div className="row">

              <div className="col-lg-3 col-md-6 footer-contact">
                <h3>RT Bookshop</h3>
                <p>
                 136/1, Horahena Road, <br />
                  Rukmale<br />
                  Pannipitiya <br /><br />
                  <strong>Phone:</strong> +94 765390304<br />
                  <strong>Email:</strong> rtbookshop@gmail.com<br />
                </p>
              </div>

              <div className="col-lg-3 col-md-6 footer-links">
                <h4>Useful Links</h4>
                <ul>
                  <li><i className="bx bx-chevron-right"></i> <a href="#">Home</a></li>
                  <li><i className="bx bx-chevron-right"></i> <a href="#">About us</a></li>
                  <li><i className="bx bx-chevron-right"></i> <a href="#">Services</a></li>
                  <li><i className="bx bx-chevron-right"></i> <a href="#">Terms of service</a></li>
                  <li><i className="bx bx-chevron-right"></i> <a href="#">Privacy policy</a></li>
                </ul>
              </div>

              <div className="col-lg-3 col-md-6 footer-links">
                <h4>Our Services</h4>
                <ul>
                  <li><i className="bx bx-chevron-right"></i> <a href="#">CEB, NWSB, SLT Bill Payments</a></li>
                  <li><i className="bx bx-chevron-right"></i> <a href="#">EZ Cash Payments</a></li>
                  <li><i className="bx bx-chevron-right"></i> <a href="#">Sim Activation</a></li>
                  <li><i className="bx bx-chevron-right"></i> <a href="#">Stationaries</a></li>
                  <li><i className="bx bx-chevron-right"></i> <a href="#">Gift Items</a></li>
                </ul>
              </div>

              <div className="col-lg-3 col-md-6 footer-links">
                <h4>Our Social Networks</h4>
                <p>Cras fermentum odio eu feugiat lide par naso tierra videa magna derita valies</p>
                <div className="social-links mt-3">
                  <a href="#" className="twitter"><i className="bx bxl-twitter"></i></a>
                  <a href="#" className="facebook"><i className="bx bxl-facebook"></i></a>
                  <a href="#" className="instagram"><i className="bx bxl-instagram"></i></a>
                  <a href="#" className="google-plus"><i className="bx bxl-skype"></i></a>
                  <a href="#" className="linkedin"><i className="bx bxl-linkedin"></i></a>
                </div>
              </div>

            </div>
          </div>
        </div>

        <div className="container py-4">
          <div className="copyright">
            &copy; Copyright <strong><span>Rajindra</span></strong>. All Rights Reserved
          </div>
        </div>
      </footer>

      <a href="#" className="back-to-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short"></i></a>

      <script src="../../assets/vendor/aos/aos.js"></script>
      <script src="../../assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
      <script src="../../assets/vendor/glightbox/js/glightbox.min.js"></script>
      <script src="../../assets/vendor/isotope-layout/isotope.pkgd.min.js"></script>
      <script src="../../assets/vendor/swiper/swiper-bundle.min.js"></script>
      <script src="../../assets/vendor/php-email-form/validate.js"></script>
      <script src="../../assets/js/main.js"></script>
    </>
  );
}

export default Footer;
