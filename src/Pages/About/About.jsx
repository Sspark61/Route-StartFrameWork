import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "../../../node_modules/@fortawesome/free-solid-svg-icons";
import styles from "./About.module.css";

export default function About() {
  return (
    <div
      className={`${styles.cont} container-fluid d-flex justify-content-center align-items-center min-vh-100`}
    >
      <div className="container col-10">
        <div className="row">
          <div className="col-12 text-center d-flex flex-column align-items-center">
            <h1 className="mt-3 text-uppercase fs-1 fw-bold">
              about component
            </h1>
            <div className="seperator d-flex justify-content-center align-items-center mt-3 gap-4">
              <div className={`${styles.line}`}></div>
              <FontAwesomeIcon icon={faStar} />
              <div className={`${styles.line}`}></div>
            </div>
            <div className="d-flex mt-3 text-start col-12 flex-sm-row flex-column justify-content-center align-items-center gap-3">
              <p className="col-12 m-3 col-sm-6">
                Freelancer is a free bootstrap theme created by Route. The
                download includes the complete source files including HTML, CSS,
                and JavaScript as well as optional SASS stylesheets for easy
                customization.
              </p>
              <p className="col-12 m-3 col-sm-6">
                Freelancer is a free bootstrap theme created by Route. The
                download includes the complete source files including HTML, CSS,
                and JavaScript as well as optional SASS stylesheets for easy
                customization.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
