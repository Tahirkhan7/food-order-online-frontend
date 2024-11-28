import React from "react";
import styles from "./Address.module.css";

export default function Address() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <img src="./images/backArrow.png" alt="Go Back" />
        <h1 className={styles.title}>Your Addesses</h1>
      </div>

      <div className={styles.addresses}>
        <div className={styles.cards}>
          <div className={styles.addAddress}>
            <span className={styles.cardIcon}>
              <img src="./images/plusYellow.png" alt="Add Address" />
            </span>
            <div className={styles.cardDetail}>
              <p>Add Address</p>
            </div>
          </div>

          <div className={styles.cardAddress}>
            <div className={styles.header}>
              <h3 className={styles.name}>Mike Ross</h3>
              <span className={styles.defaultTag}>Default</span>
            </div>
            <p className={styles.address}>
              45, Green Street, Sector 12, New Delhi, 110001, India
            </p>
            <p className={styles.phone}>
              Phone Number:{" "}
              <span className={styles.phoneNumber}>8734637468</span>
            </p>
            <div className={styles.actions}>
              <button className={styles.editButton}>Edit</button>
              <span className={styles.divider}>|</span>
              <button className={styles.removeButton}>Remove</button>
            </div>
          </div>

          <div className={styles.cardAddress}>
            <div className={styles.header}>
              <h3 className={styles.name}>Mike Ross</h3>
            </div>
            <p className={styles.address}>
              45, Green Street, Sector 12, New Delhi, 110001, India
            </p>
            <p className={styles.phone}>
              Phone Number:{" "}
              <span className={styles.phoneNumber}>8734637468</span>
            </p>
            <div className={styles.actions}>
              <button className={styles.editButton}>Edit</button>
              <span className={styles.divider}>|</span>
              <button className={styles.removeButton}>Remove</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
