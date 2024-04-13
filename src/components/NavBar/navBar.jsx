import React, { useState } from "react";
import { Link } from "react-router-dom";

function NavBar() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const toggleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };

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
          <ul className="navbar-desktop">
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
            <li>
              <Link className="nav-link scrollto" to="/contact">
                Contact
              </Link>
            </li>
          </ul>
          <i className="bi bi-list mobile-nav-toggle" onClick={toggleMobileMenu}></i>
        </nav>

        {/* Mobile Navigation */}
        {showMobileMenu && (
          <div className="navbar-mobile">
            <ul>
              <li>
                <Link className="nav-link scrollto" to="/" onClick={toggleMobileMenu}>
                  Home
                </Link>
              </li>
              <li>
                <Link className="nav-link scrollto" to="/about" onClick={toggleMobileMenu}>
                  About Us
                </Link>
              </li>
              <li>
                <Link className="nav-link scrollto" to="/services" onClick={toggleMobileMenu}>
                  Services
                </Link>
              </li>
              <li>
                <Link className="nav-link scrollto" to="/gallery" onClick={toggleMobileMenu}>
                  Gallery
                </Link>
              </li>
              <li>
                <Link className="nav-link scrollto" to="/team" onClick={toggleMobileMenu}>
                  Team
                </Link>
              </li>
              <li>
                <Link className="nav-link scrollto" to="/contact" onClick={toggleMobileMenu}>
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}

export default NavBar;
