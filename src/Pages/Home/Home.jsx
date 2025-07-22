import React from "react";
import avatar from "../../assets/avataaars.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "../../../node_modules/@fortawesome/free-solid-svg-icons";
import styles from "./Home.module.css";

export default function Home() {
  return (
    <div className={`${styles.cont} container-fluid d-flex justify-content-center align-items-center vh-100`}>
      <div className="container col-6">
        <div className="row">
          <div className="col-12 text-center d-flex flex-column align-items-center">
            <img src={avatar} alt="Avatar" className={`${styles.avatar}`}/>
            <h1 className="mt-3 text-uppercase fs-1 fw-bold">Start FrameWork</h1>
            <div className="seperator d-flex justify-content-center align-items-center mt-3 gap-4">
              <div className={`${styles.line}`}></div>
              <FontAwesomeIcon icon={faStar} />
              <div className={`${styles.line}`}></div>
            </div>
            <h3 className="fs-6 fw-normal mt-3">Graphic Artist - Web Designer - Illustrator</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
