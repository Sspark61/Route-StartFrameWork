import React, { useState } from "react";
import port1 from "../../assets/poert1.png";
import port2 from "../../assets/port2.png";
import port3 from "../../assets/port3.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faPlus,
} from "../../../node_modules/@fortawesome/free-solid-svg-icons";
import styles from "./Portfolio.module.css";

export default function Portfolio() {
  const [image, setImage] = useState();
  const [modalVis, setModalVis] = useState(false);
  const displayimg = (image) => {
    console.log(image);

    setImage(image);
    setModalVis(true);
  };

  const hidemodal = () => {
    setModalVis(false);
    setImage();
  };

  return (
    <div
      className={`${styles.cont} container-fluid d-flex justify-content-center align-items-center p-5 min-vh-100 mt-5`}
    >
      <div
        className={`${
          modalVis ? "d-block" : "d-none"
        } position-absolute w-100 h-100 bg-opacity-50 bg-black z-1 d-flex justify-content-center align-items-center`}
        onClick={hidemodal}
      ></div>
      <div className="position-absolute z-3">
        <img src={image} alt="" className="img-fluid" />
      </div>
      <div className="container col-12">
        <div className="row">
          <div className="col-12 text-center d-flex flex-column align-items-center">
            <h1 className="mt-3 text-uppercase fs-1 fw-bold">
              portfolio component
            </h1>
            <div className="seperator d-flex justify-content-center align-items-center mt-3 gap-4">
              <div className={`${styles.line}`}></div>
              <FontAwesomeIcon icon={faStar} />
              <div className={`${styles.line}`}></div>
            </div>
          </div>
        </div>
        <div className="row mt-sm-2 mt-4 g-md-5 g-xs-2 d-flex justify-content-center align-items-center">
          <div className="col-xl-4 col-xs-12 col-sm-6 mt-sm-5 mt-4">
            <div
              className={`${styles.card} position-relative overflow-hidden rounded-3`}
              onClick={() => displayimg(port1)}
            >
              <img src={port1} alt="" className="img-fluid" />
              <div
                className={`${styles.overlay} position-absolute w-100 h-100 top-0 start-0 d-flex align-items-center justify-content-center`}
              >
                <FontAwesomeIcon
                  icon={faPlus}
                  className={`${styles.faPlus} text-white`}
                />
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-xs-12 col-sm-6 mt-sm-5 mt-4">
            <div
              className={`${styles.card} position-relative overflow-hidden rounded-3`}
              onClick={() => displayimg(port2)}
            >
              <img src={port2} alt="" className="img-fluid" />
              <div
                className={`${styles.overlay} position-absolute w-100 h-100 top-0 start-0 d-flex align-items-center justify-content-center`}
              >
                <FontAwesomeIcon
                  icon={faPlus}
                  className={`${styles.faPlus} text-white`}
                />
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-xs-12 col-sm-6 mt-sm-5 mt-4">
            <div
              className={`${styles.card} position-relative overflow-hidden rounded-3`}
              onClick={() => displayimg(port3)}
            >
              <img src={port3} alt="" className="img-fluid" />
              <div
                className={`${styles.overlay} position-absolute w-100 h-100 top-0 start-0 d-flex align-items-center justify-content-center`}
              >
                <FontAwesomeIcon
                  icon={faPlus}
                  className={`${styles.faPlus} text-white`}
                />
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-xs-12 col-sm-6 mt-sm-5 mt-4">
            <div
              className={`${styles.card} position-relative overflow-hidden rounded-3`}
              onClick={() => displayimg(port1)}
            >
              <img src={port1} alt="" className="img-fluid" />
              <div
                className={`${styles.overlay} position-absolute w-100 h-100 top-0 start-0 d-flex align-items-center justify-content-center`}
              >
                <FontAwesomeIcon
                  icon={faPlus}
                  className={`${styles.faPlus} text-white`}
                />
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-xs-12 col-sm-6 mt-sm-5 mt-4">
            <div
              className={`${styles.card} position-relative overflow-hidden rounded-3`}
              onClick={() => displayimg(port2)}
            >
              <img src={port2} alt="" className="img-fluid" />
              <div
                className={`${styles.overlay} position-absolute w-100 h-100 top-0 start-0 d-flex align-items-center justify-content-center`}
              >
                <FontAwesomeIcon
                  icon={faPlus}
                  className={`${styles.faPlus} text-white`}
                />
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-xs-12 col-sm-6 mt-sm-5 mt-4">
            <div
              className={`${styles.card} position-relative overflow-hidden rounded-3`}
              onClick={() => displayimg(port3)}
            >
              <img src={port3} alt="" className="img-fluid" />
              <div
                className={`${styles.overlay} position-absolute w-100 h-100 top-0 d-flex align-items-center justify-content-center`}
              >
                <FontAwesomeIcon
                  icon={faPlus}
                  className={`${styles.faPlus} text-white`}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
