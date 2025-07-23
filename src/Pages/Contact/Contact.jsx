import React, { useState } from "react";
import styles from "./Contact.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

export default function Contact() {
  const [nameFocused, setNameFocused] = useState(false);
  const [ageFocused, setAgeFocused] = useState(false);
  const [emailFocused, setEmailFocused] = useState(false);
  const [passFocused, setPassFocused] = useState(false);

  const handleFocus = (e) => {
    console.log("changed");
    console.log(e);

    if (e.target.name === "username") {
      const value = e.target.value;
      setNameFocused(value.trim() !== "");
    } else if (e.target.name === "userage") {
      const value = e.target.value;
      setAgeFocused(value.trim() !== "");
    } else if (e.target.name === "useremail") {
      const value = e.target.value;
      setEmailFocused(value.trim() !== "");
    } else if (e.target.name === "userpassword") {
      const value = e.target.value;
      setPassFocused(value.trim() !== "");
    }
  };
  return (
    <div
      className={`${styles.cont} container-fluid d-flex justify-content-center align-items-center p-5 min-vh-100 mt-5`}
    >
      <div className="container-fluid col-12 col-md-8 col-lg-6">
        <div className="row">
          <div className="col-12 text-center d-flex flex-column align-items-center">
            <h1 className="mt-3 text-uppercase fs-1 fw-bold">
              contact section
            </h1>
            <div className="seperator d-flex justify-content-center align-items-center mt-3 gap-4">
              <div className={`${styles.line}`}></div>
              <FontAwesomeIcon icon={faStar} />
              <div className={`${styles.line}`}></div>
            </div>
          </div>
        </div>
        <form action="" className="w-100 p-3 mx-auto mt-5 d-flex flex-column justify-content-start">
          <label
            htmlFor="username"
            className={`position-relative w-100  ${
              nameFocused ? " top-0" : ""
            }`}
          >
            User Name :
          </label>
          <input
            type="text"
            id="username"
            className={`${styles["form-control"]} form-control border-0 border-bottom py-3 position-relative`}
            placeholder="User Name"
            name="username"
            onChange={handleFocus}
          />
          <label
            htmlFor="userage"
            className={`position-relative w-100  ${ageFocused ? " top-0" : ""}`}
          >
            User Age :
          </label>
          <input
            type="text"
            id="userage"
            className={`${styles["form-control"]} form-control border-0 border-bottom py-3 position-relative`}
            placeholder="User Age"
            name="userage"
            onChange={handleFocus}
          />
          <label
            htmlFor="useremail"
            className={`position-relative w-100  ${
              emailFocused ? " top-0" : ""
            }`}
          >
            User Email :
          </label>
          <input
            type="text"
            id="useremail"
            className={`${styles["form-control"]} form-control border-0 border-bottom py-3 position-relative`}
            placeholder="User Email"
            name="useremail"
            onChange={handleFocus}
          />
          <label
            htmlFor="userpassword"
            className={`position-relative w-100  ${
              passFocused ? " top-0" : ""
            }`}
          >
            User Password :
          </label>
          <input
            type="text"
            id="userpassword"
            className={`${styles["form-control"]} form-control border-0 border-bottom py-3 position-relative`}
            placeholder="User Password"
            name="userpassword"
            onChange={handleFocus}
          />
          <button className={`${styles.btn} btn mt-4 text-white w-25`}>
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
