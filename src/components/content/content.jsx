import React from "react";
import heroImage from "../../assets/img/hero-img.png";
import AboutUs from "../about/aboutUs";
import HomePage from "../homePage/homePage";
function Content() {
  return (
    <>
      <section id="hero" className="d-flex align-items-center">
       <HomePage/>
      </section>
      <main id="main">
        {/* <!-- ======= About Section ======= --> */}
        <section id="about" className="about">
          <AboutUs />
        </section>

        {/* <!-- ======= Services Section ======= --> */}
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
                    <i className="bx bxl-dribbble"></i>
                  </div>
                  <h4 className="title">
                    <a href="">Lorem Ipsum</a>
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
                    <i className="bx bx-file"></i>
                  </div>
                  <h4 className="title">
                    <a href="">Sed ut perspiciatis</a>
                  </h4>
                  <p className="description">
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla
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
                    <i className="bx bx-tachometer"></i>
                  </div>
                  <h4 className="title">
                    <a href="">Magni Dolores</a>
                  </h4>
                  <p className="description">
                    Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim
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
                    <i className="bx bx-world"></i>
                  </div>
                  <h4 className="title">
                    <a href="">Nemo Enim</a>
                  </h4>
                  <p className="description">
                    At vero eos et accusamus et iusto odio dignissimos ducimus
                    qui blanditiis praesentium voluptatum
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <!-- ======= Portfolio Section ======= --> */}
        <section id="portfolio" className="portfolio">
          <div className="container" data-aos="fade-up">
            <div className="section-title">
              <h2>Portfolio</h2>
              <p>Check out our beautifull portfolio</p>
            </div>

            <div className="row" data-aos="fade-up" data-aos-delay="100">
              <div className="col-lg-12">
                <ul id="portfolio-flters">
                  <li data-filter="*" className="filter-active">
                    All
                  </li>
                  <li data-filter=".filter-app">App</li>
                  <li data-filter=".filter-card">Card</li>
                  <li data-filter=".filter-web">Web</li>
                </ul>
              </div>
            </div>

            <div
              className="row portfolio-container"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                <div className="portfolio-wrap">
                  <img
                    src="assets/img/portfolio/portfolio-1.jpg"
                    className="img-fluid"
                    alt=""
                  />
                  <div className="portfolio-links">
                    <a
                      href="assets/img/portfolio/portfolio-1.jpg"
                      data-gallery="portfolioGallery"
                      className="portfolio-lightbox"
                      title="App 1"
                    >
                      <i className="bi bi-plus"></i>
                    </a>
                    <a href="portfolio-details.html" title="More Details">
                      <i className="bi bi-link"></i>
                    </a>
                  </div>
                  <div className="portfolio-info">
                    <h4>App 1</h4>
                    <p>App</p>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                <div className="portfolio-wrap">
                  <img
                    src="assets/img/portfolio/portfolio-2.jpg"
                    className="img-fluid"
                    alt=""
                  />
                  <div className="portfolio-links">
                    <a
                      href="assets/img/portfolio/portfolio-2.jpg"
                      data-gallery="portfolioGallery"
                      className="portfolio-lightbox"
                      title="Web 3"
                    >
                      <i className="bi bi-plus"></i>
                    </a>
                    <a href="portfolio-details.html" title="More Details">
                      <i className="bi bi-link"></i>
                    </a>
                  </div>
                  <div className="portfolio-info">
                    <h4>Web 3</h4>
                    <p>Web</p>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                <div className="portfolio-wrap">
                  <img
                    src="assets/img/portfolio/portfolio-3.jpg"
                    className="img-fluid"
                    alt=""
                  />
                  <div className="portfolio-links">
                    <a
                      href="assets/img/portfolio/portfolio-3.jpg"
                      data-gallery="portfolioGallery"
                      className="portfolio-lightbox"
                      title="App 2"
                    >
                      <i className="bi bi-plus"></i>
                    </a>
                    <a href="portfolio-details.html" title="More Details">
                      <i className="bi bi-link"></i>
                    </a>
                  </div>
                  <div className="portfolio-info">
                    <h4>App 2</h4>
                    <p>App</p>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                <div className="portfolio-wrap">
                  <img
                    src="assets/img/portfolio/portfolio-4.jpg"
                    className="img-fluid"
                    alt=""
                  />
                  <div className="portfolio-links">
                    <a
                      href="assets/img/portfolio/portfolio-4.jpg"
                      data-gallery="portfolioGallery"
                      className="portfolio-lightbox"
                      title="Card 2"
                    >
                      <i className="bi bi-plus"></i>
                    </a>
                    <a href="portfolio-details.html" title="More Details">
                      <i className="bi bi-link"></i>
                    </a>
                  </div>
                  <div className="portfolio-info">
                    <h4>Card 2</h4>
                    <p>Card</p>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                <div className="portfolio-wrap">
                  <img
                    src="assets/img/portfolio/portfolio-5.jpg"
                    className="img-fluid"
                    alt=""
                  />
                  <div className="portfolio-links">
                    <a
                      href="assets/img/portfolio/portfolio-5.jpg"
                      data-gallery="portfolioGallery"
                      className="portfolio-lightbox"
                      title="Web 2"
                    >
                      <i className="bi bi-plus"></i>
                    </a>
                    <a href="portfolio-details.html" title="More Details">
                      <i className="bi bi-link"></i>
                    </a>
                  </div>
                  <div className="portfolio-info">
                    <h4>Web 2</h4>
                    <p>Web</p>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                <div className="portfolio-wrap">
                  <img
                    src="assets/img/portfolio/portfolio-6.jpg"
                    className="img-fluid"
                    alt=""
                  />
                  <div className="portfolio-links">
                    <a
                      href="assets/img/portfolio/portfolio-6.jpg"
                      data-gallery="portfolioGallery"
                      className="portfolio-lightbox"
                      title="App 3"
                    >
                      <i className="bi bi-plus"></i>
                    </a>
                    <a href="portfolio-details.html" title="More Details">
                      <i className="bi bi-link"></i>
                    </a>
                  </div>
                  <div className="portfolio-info">
                    <h4>App 3</h4>
                    <p>App</p>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                <div className="portfolio-wrap">
                  <img
                    src="assets/img/portfolio/portfolio-7.jpg"
                    className="img-fluid"
                    alt=""
                  />
                  <div className="portfolio-links">
                    <a
                      href="assets/img/portfolio/portfolio-7.jpg"
                      data-gallery="portfolioGallery"
                      className="portfolio-lightbox"
                      title="Card 1"
                    >
                      <i className="bi bi-plus"></i>
                    </a>
                    <a href="portfolio-details.html" title="More Details">
                      <i className="bi bi-link"></i>
                    </a>
                  </div>
                  <div className="portfolio-info">
                    <h4>Card 1</h4>
                    <p>Card</p>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                <div className="portfolio-wrap">
                  <img
                    src="assets/img/portfolio/portfolio-8.jpg"
                    className="img-fluid"
                    alt=""
                  />
                  <div className="portfolio-links">
                    <a
                      href="assets/img/portfolio/portfolio-8.jpg"
                      data-gallery="portfolioGallery"
                      className="portfolio-lightbox"
                      title="Card 3"
                    >
                      <i className="bi bi-plus"></i>
                    </a>
                    <a href="portfolio-details.html" title="More Details">
                      <i className="bi bi-link"></i>
                    </a>
                  </div>
                  <div className="portfolio-info">
                    <h4>Card 3</h4>
                    <p>Card</p>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                <div className="portfolio-wrap">
                  <img
                    src="assets/img/portfolio/portfolio-9.jpg"
                    className="img-fluid"
                    alt=""
                  />
                  <div className="portfolio-links">
                    <a
                      href="assets/img/portfolio/portfolio-9.jpg"
                      data-gallery="portfolioGallery"
                      className="portfolio-lightbox"
                      title="Web 3"
                    >
                      <i className="bi bi-plus"></i>
                    </a>
                    <a href="portfolio-details.html" title="More Details">
                      <i className="bi bi-link"></i>
                    </a>
                  </div>
                  <div className="portfolio-info">
                    <h4>Web 3</h4>
                    <p>Web</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <!-- ======= F.A.Q Section ======= --> */}
        <section id="faq" className="faq section-bg">
          <div className="container" data-aos="fade-up">
            <div className="section-title">
              <h2>F.A.Q</h2>
              <p>Frequently Asked Questions</p>
            </div>

            <ul className="faq-list" data-aos="fade-up" data-aos-delay="100">
              <li>
                <div
                  data-bs-toggle="collapse"
                  className="collapsed question"
                  href="#faq1"
                >
                  Non consectetur a erat nam at lectus urna duis?{" "}
                  <i className="bi bi-chevron-down icon-show"></i>
                  <i className="bi bi-chevron-up icon-close"></i>
                </div>
                <div id="faq1" className="collapse" data-bs-parent=".faq-list">
                  <p>
                    Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id
                    volutpat lacus laoreet non curabitur gravida. Venenatis
                    lectus magna fringilla urna porttitor rhoncus dolor purus
                    non.
                  </p>
                </div>
              </li>

              <li>
                <div
                  data-bs-toggle="collapse"
                  href="#faq2"
                  className="collapsed question"
                >
                  Feugiat scelerisque varius morbi enim nunc faucibus a
                  pellentesque? <i className="bi bi-chevron-down icon-show"></i>
                  <i className="bi bi-chevron-up icon-close"></i>
                </div>
                <div id="faq2" className="collapse" data-bs-parent=".faq-list">
                  <p>
                    Dolor sit amet consectetur adipiscing elit pellentesque
                    habitant morbi. Id interdum velit laoreet id donec ultrices.
                    Fringilla phasellus faucibus scelerisque eleifend donec
                    pretium. Est pellentesque elit ullamcorper dignissim. Mauris
                    ultrices eros in cursus turpis massa tincidunt dui.
                  </p>
                </div>
              </li>

              <li>
                <div
                  data-bs-toggle="collapse"
                  href="#faq3"
                  className="collapsed question"
                >
                  Dolor sit amet consectetur adipiscing elit pellentesque
                  habitant morbi?{" "}
                  <i className="bi bi-chevron-down icon-show"></i>
                  <i className="bi bi-chevron-up icon-close"></i>
                </div>
                <div id="faq3" className="collapse" data-bs-parent=".faq-list">
                  <p>
                    Eleifend mi in nulla posuere sollicitudin aliquam ultrices
                    sagittis orci. Faucibus pulvinar elementum integer enim. Sem
                    nulla pharetra diam sit amet nisl suscipit. Rutrum tellus
                    pellentesque eu tincidunt. Lectus urna duis convallis
                    convallis tellus. Urna molestie at elementum eu facilisis
                    sed odio morbi quis
                  </p>
                </div>
              </li>

              <li>
                <div
                  data-bs-toggle="collapse"
                  href="#faq4"
                  className="collapsed question"
                >
                  Ac odio tempor orci dapibus. Aliquam eleifend mi in nulla?{" "}
                  <i className="bi bi-chevron-down icon-show"></i>
                  <i className="bi bi-chevron-up icon-close"></i>
                </div>
                <div id="faq4" className="collapse" data-bs-parent=".faq-list">
                  <p>
                    Dolor sit amet consectetur adipiscing elit pellentesque
                    habitant morbi. Id interdum velit laoreet id donec ultrices.
                    Fringilla phasellus faucibus scelerisque eleifend donec
                    pretium. Est pellentesque elit ullamcorper dignissim. Mauris
                    ultrices eros in cursus turpis massa tincidunt dui.
                  </p>
                </div>
              </li>

              <li>
                <div
                  data-bs-toggle="collapse"
                  href="#faq5"
                  className="collapsed question"
                >
                  Tempus quam pellentesque nec nam aliquam sem et tortor
                  consequat? <i className="bi bi-chevron-down icon-show"></i>
                  <i className="bi bi-chevron-up icon-close"></i>
                </div>
                <div id="faq5" className="collapse" data-bs-parent=".faq-list">
                  <p>
                    Molestie a iaculis at erat pellentesque adipiscing commodo.
                    Dignissim suspendisse in est ante in. Nunc vel risus commodo
                    viverra maecenas accumsan. Sit amet nisl suscipit adipiscing
                    bibendum est. Purus gravida quis blandit turpis cursus in
                  </p>
                </div>
              </li>

              <li>
                <div
                  data-bs-toggle="collapse"
                  href="#faq6"
                  className="collapsed question"
                >
                  Tortor vitae purus faucibus ornare. Varius vel pharetra vel
                  turpis nunc eget lorem dolor?{" "}
                  <i className="bi bi-chevron-down icon-show"></i>
                  <i className="bi bi-chevron-up icon-close"></i>
                </div>
                <div id="faq6" className="collapse" data-bs-parent=".faq-list">
                  <p>
                    Laoreet sit amet cursus sit amet dictum sit amet justo.
                    Mauris vitae ultricies leo integer malesuada nunc vel.
                    Tincidunt eget nullam non nisi est sit amet. Turpis nunc
                    eget lorem dolor sed. Ut venenatis tellus in metus vulputate
                    eu scelerisque. Pellentesque diam volutpat commodo sed
                    egestas egestas fringilla phasellus faucibus. Nibh tellus
                    molestie nunc non blandit massa enim nec.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </section>

        {/* <!-- ======= Team Section ======= --> */}
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
                    src="assets/img/team/team-1.jpg"
                    className="img-fluid"
                    alt=""
                  />
                  <div className="member-info">
                    <div className="member-info-content">
                      <h4>Walter White</h4>
                      <span>Chief Executive Officer</span>
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

        {/* <!-- ======= Clients Section ======= --> */}
        <section id="clients" className="clients section-bg">
          <div className="container" data-aos="fade-up">
            <div className="section-title">
              <h2>Clients</h2>
              <p>They trusted us</p>
            </div>

            <div
              className="clients-slider swiper"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="swiper-wrapper align-items-center">
                <div className="swiper-slide">
                  <img
                    src="assets/img/clients/client-1.png"
                    className="img-fluid"
                    alt=""
                  />
                </div>
                <div className="swiper-slide">
                  <img
                    src="assets/img/clients/client-2.png"
                    className="img-fluid"
                    alt=""
                  />
                </div>
                <div className="swiper-slide">
                  <img
                    src="assets/img/clients/client-3.png"
                    className="img-fluid"
                    alt=""
                  />
                </div>
                <div className="swiper-slide">
                  <img
                    src="assets/img/clients/client-4.png"
                    className="img-fluid"
                    alt=""
                  />
                </div>
                <div className="swiper-slide">
                  <img
                    src="assets/img/clients/client-5.png"
                    className="img-fluid"
                    alt=""
                  />
                </div>
                <div className="swiper-slide">
                  <img
                    src="assets/img/clients/client-6.png"
                    className="img-fluid"
                    alt=""
                  />
                </div>
                <div className="swiper-slide">
                  <img
                    src="../assets/img/clients/client-7.png"
                    className="img-fluid"
                    alt=""
                  />
                </div>
                <div className="swiper-slide">
                  <img
                    src="assets/img/clients/client-8.png"
                    className="img-fluid"
                    alt=""
                  />
                </div>
              </div>
              <div className="swiper-pagination"></div>
            </div>
          </div>
        </section>

        {/* <!-- ======= Contact Us Section ======= --> */}
        <section id="contact" className="contact">
          <div className="container" data-aos="fade-up">
            <div className="section-title">
              <h2>Contact Us</h2>
              <p>Contact us the get started</p>
            </div>

            <div className="row">
              <div
                className="col-lg-5 d-flex align-items-stretch"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <div className="info">
                  <div className="address">
                    <i className="bi bi-geo-alt"></i>
                    <h4>Location:</h4>
                    <p>A108 Adam Street, New York, NY 535022</p>
                  </div>

                  <div className="email">
                    <i className="bi bi-envelope"></i>
                    <h4>Email:</h4>
                    <p>info@example.com</p>
                  </div>

                  <div className="phone">
                    <i className="bi bi-phone"></i>
                    <h4>Call:</h4>
                    <p>+1 5589 55488 55s</p>
                  </div>

                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621"
                    frameborder="0"
                    style={{ border: "0", width: "100%", height: "290px" }}
                    allowfullscreen
                  ></iframe>
                </div>
              </div>

              <div
                className="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <form
                  action="forms/contact.php"
                  method="post"
                  role="form"
                  className="php-email-form"
                >
                  <div className="row">
                    <div className="form-group col-md-6">
                      <label for="name">Your Name</label>
                      <input
                        type="text"
                        name="name"
                        className="form-control"
                        id="name"
                        placeholder="Your Name"
                        required
                      />
                    </div>
                    <div className="form-group col-md-6 mt-3 mt-md-0">
                      <label for="name">Your Email</label>
                      <input
                        type="email"
                        className="form-control"
                        name="email"
                        id="email"
                        placeholder="Your Email"
                        required
                      />
                    </div>
                  </div>
                  <div className="form-group mt-3">
                    <label for="name">Subject</label>
                    <input
                      type="text"
                      className="form-control"
                      name="subject"
                      id="subject"
                      placeholder="Subject"
                      required
                    />
                  </div>
                  <div className="form-group mt-3">
                    <label for="name">Message</label>
                    <textarea
                      className="form-control"
                      name="message"
                      rows="10"
                      required
                    ></textarea>
                  </div>
                  <div className="my-3">
                    <div className="loading">Loading</div>
                    <div className="error-message"></div>
                    <div className="sent-message">
                      Your message has been sent. Thank you!
                    </div>
                  </div>
                  <div className="text-center">
                    <button type="submit">Send Message</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
export default Content;
