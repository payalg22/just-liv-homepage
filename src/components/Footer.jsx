import React from "react";
import styles from "./Footer.module.css";
import logo from "../assets/logo.png";
import linkedin from "../assets/linkedin.svg";
import insta from "../assets/insta.svg";

export default function Footer() {
  return (
    <footer className={styles.container}>
      <img src={logo} className={styles.logo} />
      <p className={styles.link}>
        <img src={insta} />
        <a
          href="https://www.instagram.com/justlivatx?igsh=MWo3czd1MXh3cQ%3D%3D&utm_source=qr"
          target="_blank"
        >
          Connect with us on Instagram ♡
        </a>
      </p>
      <a href="https://justliv.org/privacy-policy" target="_blank">
        Privacy policy
      </a>
      <a href="https://justliv.org/accessibility-statement" target="_blank">
        Accessibility Statement
      </a>
      <a
        href="https://www.linkedin.com/company/justliv-app-for-busy-parents/"
        target="_blank"
        className={styles.linkedin}
      >
        <img src={linkedin} />{" "}
      </a>
      <p>&#169; 2024 by JustLiv</p>
    </footer>
  );
}
