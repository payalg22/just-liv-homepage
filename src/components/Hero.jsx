import React from "react";
import styles from "./Hero.module.css";
import heroMain from "../assets/hero.png";
import heroMb from "../assets/heroMobile.png";
import star from "../assets/star.svg";

export default function Hero() {
  return (
    <div className={styles.container}>
      <img src={heroMain} className={styles.heroMain} />
      <img src={heroMb} className={styles.heroMb} />
      <div className={styles.content}>
        <p className={styles.heading}>Your Child's Perfect Schedule </p>
        <p className={styles.heading}>in Just a Few Clicks</p>
        <div className={styles.main}>
          Your Child's Perfect Schedule in Just a Few Clicks
        </div>
        <p className={styles.text}>Less Planning, More Living.</p>
        <div>
          <div className={styles.join}>
            <img src={star} />
            <a href="#waitlist">Join the waiting list</a>
          </div>
        </div>
      </div>
    </div>
  );
}
