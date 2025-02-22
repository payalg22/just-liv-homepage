import React from "react";
import styles from "./WorkModel.module.css";
import arrow from "../assets/downArrow.png";
import twisted from "../assets/twistedArrow.png";
import search from "../assets/search.svg";
import calendar from "../assets/calender.svg";
import fav from "../assets/fav.svg";

export default function WorkModel() {
  const data = [
    {
      isData: true,
      icon: search,
      title: "Browse",
      content: "Discover activities from our partner booking providers.",
    },
    { isData: false, img: arrow, class: "arrow" },
    {
      isData: true,
      icon: calendar,
      title: "Build",
      content:
        "Share your child's interests, schedule, and preferences. Watch as JustLiv creates the perfect calendar filled with activities.",
    },
    { isData: false, img: twisted, class: "twisted" },
    {
      isData: true,
      icon: fav,
      title: "Book",
      content:
        "Finalize your selections with one click and enjoy peace of mind.",
    },
  ];

  return (
    <div className={styles.container}>
      <h2>How it works</h2> 
      {data.map((item, index) => {
        return item.isData ? (
          <div key={index} className={styles.item}>
            <div>
              <img src={item.icon} className={styles.icons} />
            </div>
            <div>
              <h3>{item.title}</h3>
              <p className={styles.content}>{item.content}</p>
            </div>
          </div>
        ) : (
          <div className={styles.item}>
            <img src={item.img} key={index} className={styles[item.class]} />
          </div>
        );
      })}
    </div>
  );
}
