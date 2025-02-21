import React from "react";
import styles from "./Features.module.css";
import star from "../assets/star.svg";

export default function Features() {
  const features = [
    {
      title: "Custom Calendar",
      content:
        "Our Custom Activities Calendar instantly creates a personalized activity schedule based on your preferences, budget, and location. No more endless searching or juggling calendars.",
      img: "",
    },
    {
      title: "Tailored to Your Interests",
      content:
        "Filters let you choose activities by age, category, price, and more. Social features help you sync schedules with friends and see what they’re attending",
      img: "",
    },
    {
      title: "Stress-Free Bulk Booking",
      content:
        "Book all your child's activities in just a few clicks. Our platform handles the details so you don’t have to.",
      img: "",
    },
  ];


  return (
    <div className={styles.container}>
      <p className={styles.heading}>Why JustLiv?</p>
      <div className={styles.features}>
        {features.map((feat, index) => {
            return <div key={index} className={styles.card}>
                <img src={star} />
                <p>{feat.title}</p>
                <p>{feat.content}</p>
            </div>
        })}
      </div>
    </div>
  );
}
