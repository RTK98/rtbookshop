import React from "react";
import { Link } from "react-router-dom";
// import './homePage.css';
import heroImage from "../../assets/img/hero-img.png";

function HomePage() {
    return (
        <>
            <section id="hero" className="d-flex align-items-center">
                <div className="container">
                    <div className="row gy-4">
                        <div className="col-lg-6 order-2 order-lg-1 d-flex flex-column justify-content-center">
                            <h1>Welcome To RT Bookshop & Communication</h1>
                            <h2>
                                Your Local Haven for Learning and Creativity: Books, Stationery,
                                and More!
                            </h2>
                            <div>
                                <Link className="btn-get-started scrollto" to="/about">
                                    Get Started
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-6 order-1 order-lg-2 hero-img">
                            <img src={heroImage} className="img-fluid animated" alt="" />
                        </div>
                    </div>
                </div>
            </section>
        </>

    );
}
export default HomePage;