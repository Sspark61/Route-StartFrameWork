import React from "react";
import styles from "./Footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faLinkedinIn,
  faGoogle,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
      <div className="d-flex flex-column">
        <div
          className={`${styles.foot1} container-fluid details-footer d-flex justify-content-between align-items-center row-gap-5  flex-column flex-sm-column flex-lg-row`}
        >
          <div className="loc col-md-4">
            <h1>Location</h1>
            <p>2215 John Daniel Drive Clark, MO 65243</p>
          </div>
          <div className="socials col-md-4">
            <h1>Around The Web</h1>
            <div className="links d-flex justify-content-center gap-2">
              <FontAwesomeIcon
                icon={faFacebook}
                className="border border-white rounded-circle p-2 fs-5"
              />
              <FontAwesomeIcon
                icon={faTwitter}
                className="border border-white rounded-circle p-2 fs-5"
              />
              <FontAwesomeIcon
                icon={faLinkedinIn}
                className="border border-white rounded-circle p-2 fs-5"
              />
              <FontAwesomeIcon
                icon={faGoogle}
                className="border border-white rounded-circle p-2 fs-5"
              />
            </div>
          </div>
          <div className="freelance col-md-4">
            <h1>ABOUT FREELANCER</h1>
            <p>
              Freelance is a free to use, licensed Bootstrap theme created by
              Route
            </p>
          </div>
        </div>
        <div className={`${styles.foot2}`}>
          <p>
            Copyright © Your Website 2025
          </p>
        </div>
      </div>
  );
}
