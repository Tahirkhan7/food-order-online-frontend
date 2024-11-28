import React from "react";
import styles from "./Profile.module.css";

export default function Profile() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <button className={styles.backButton}>&larr;</button>
        <h1 className={styles.title}>My Profile</h1>
      </div>

      <div className={styles.profileSection}>
        <img
          src="./images/profile.png"
          alt="Profile"
          className={styles.avatar}
        />
        <div className={styles.userInfo}>
          <h2 className={styles.userName}>Mike Ross</h2>
          <button className={styles.editButton}>Edit</button>
        </div>
      </div>

      <div className={styles.detailsSection}>
        <div className={styles.detailItem}>
          <label>Full Name</label>
          <input type="text" value="Mike Ross" readOnly />
        </div>
        <div className={styles.detailItem}>
          <label>Email Address</label>
          <input type="text" value="mikeross@gmail.com" readOnly />
        </div>
        <div className={styles.detailItem}>
          <label>Gender</label>
          <input type="text" value="Male" readOnly />
        </div>
        <div className={styles.detailItem}>
          <label>Country</label>
          <input type="text" value="India" readOnly />
        </div>
      </div>

      <div className={styles.end}></div>
      <div className={styles.paymentMethods}>
        <h3>Saved Payment Methods</h3>
        <div className={styles.cards}>
          {["Mastercard", "Rupay", "Rupay"].map((type, index) => (
            <div className={styles.card} key={index}>
              <span className={styles.cardIcon}>
                <img src="./images/creditCard.png" alt="Credit Card" />
              </span>
              <div className={styles.cardDetail}>
              <p>xxxx xxxx xxxx {1234 + index * 3456}</p>
              <span className={styles.cardType}>{type}</span>
              </div>
              <button className={styles.editIcon}>
              <img src="./images/pencil.png" alt="Edit" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
