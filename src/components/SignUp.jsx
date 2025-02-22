import React from "react";
import styles from "./SignUp.module.css";
import star from "../assets/star.svg";

export default function SignUp() {
  return (
    <div id="waitlist" className={styles.container}>
      <p className={styles.heading}>Ready to Simplify Your Life?</p>
      <p>
        Be the first to know when we launch! Join our waiting list and get
        exclusive updates and early access to our journey.
      </p>
      <div className={styles.join}>
        <img src={star} />
        <span>Join the waiting list</span>
      </div>
    </div>
  );
}
