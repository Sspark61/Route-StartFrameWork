import React from "react";
import { Link, NavLink } from "react-router-dom";
import styles from './Navbar.module.css';
function Navbar() {
  return (
    <nav className={`${styles.navbar} navbar navbar-expand-lg bg-body-tertiary fixed-top p-3 text-uppercase text-white`}>
      <div className="container">
        <NavLink className="navbar-brand text-white fs-2 fw-bold" to="">
          start framework
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 gap-3">
            <li className="nav-item">
              <NavLink className={(check)=> check.isActive ? `${styles.active} nav-link text-white` : "nav-link text-white"} aria-current="page" to="/about">
                about
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={(check)=> check.isActive ? `${styles.active} nav-link text-white` : "nav-link text-white"} to="/portfolio">
                portfolio
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={(check)=> check.isActive ? `${styles.active} nav-link text-white` : "nav-link text-white"} to="/contact">
                contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
