import React from "react";
import styles from "./Mission.module.css";
import family from "../assets/family.png";
import hearts from "../assets/hearts.svg";

export default function Mission() {
  return (
    <div className={styles.container}>
      <h2 className={styles.header}>
        Our Mission
        <img src={hearts} />
      </h2>
      <p>
        Parents need a simple way to find, book, and track their kids
        activities. Businesses need a better way to be found and to keep
        families coming back.
      </p>
      <div>
        <p>Our purpose is to</p>
        <p className={styles.subHeading}>
          make parents lives <span>easier</span>, <span>happier</span>, and{" "}
          <span>less stressful</span>.
        </p>
      </div>
      <p>As parents and business owners, we get it.</p>
      <img src={family} />
    </div>
  );
}
