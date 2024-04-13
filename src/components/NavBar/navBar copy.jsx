import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <header id="header" className="fixed-top d-flex align-items-center">
      <div className="container d-flex align-items-center justify-content-between">
        <div className="logo">
          <h1 className="text-light">
            <Link to="/">
              <span>RT BOOKSHOP</span>
            </Link>
          </h1>
        </div>

        <nav id="navbar" className="navbar">
          <ul>
            <li>
              <Link className="nav-link scrollto" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="nav-link scrollto" to="/about">
                About Us
              </Link>
            </li>
            <li>
              <Link className="nav-link scrollto" to="/services">
                Services
              </Link>
            </li>
            <li>
              <Link className="nav-link scrollto" to="/gallery">
                Gallery
              </Link>
            </li>
            <li>
              <Link className="nav-link scrollto" to="/team">
                Team
              </Link>
            </li>
            <Link className="nav-link scrollto" to="/contact">
              Contact
            </Link>
            <li>
            </li>
          </ul>
          <i className="bi bi-list mobile-nav-toggle">
          </i>
        </nav>
      </div>
    </header>
  );
}
export default NavBar;
