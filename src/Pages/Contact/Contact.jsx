import React, { useState } from "react";
import styles from "./Contact.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

export default function Contact() {
  const [inputvalue, setInputValue] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = (e) => {
    console.log('changed');
    
    const value = e.target.value;
    setInputValue(value);
    setIsFocused(value.trim() !== "");
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
        <form action="" className="w-100 p-3 mx-auto mt-5">
          <label htmlFor="username" style={{ display: isFocused ? "block" : "none" , transition: '0.6s',} } className={`position relative top-0`}>
            User Name :
          </label>
          <input
            type="text"
            id="username"
            className="form-control border-0 border-bottom py-3 position-relative"
            placeholder="User Name"
            name="username"
            value={inputvalue}
            onChange={handleFocus}
          />
          <label htmlFor="userage" className={`position relative top-0`}>
            User Age :
          </label>
          <input
            type="text"
            id="userage"
            className="form-control border-0 border-bottom py-3 position-relative"
            placeholder="User Age"
            name="userage"
          />
          <label htmlFor="useremail" className={`position relative top-0`}>
            User Email :
          </label>
          <input
            type="text"
            id="useremail"
            className="form-control border-0 border-bottom py-3 position-relative"
            placeholder="User Email"
            name="useremail"
          />
          <label htmlFor="userpassword" className={"position relative top-0"}>
            User Password :
          </label>
          <input
            type="text"
            id="userpassword"
            className="form-control border-0 border-bottom py-3 position-relative"
            placeholder="User Password"
            name="userpassword"
          />
          <button className={`${styles.btn} btn mt-4 text-white`}>
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
