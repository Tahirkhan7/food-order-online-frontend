import React from "react";
import styles from "./AddAddress.module.css";

const AddAddress = () => {
  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modal}>
        <div className={styles.modalHeader}>
        <img src="./images/locationWhite.png" alt="Address" />
        <h2 className={styles.modalTitle}>Add Address</h2>
        </div>
        <form className={styles.form}>
          <div className={styles.row}>
            <select className={styles.input} required>
              <option value="" disabled selected>
                State
              </option>
            </select>
            <input
              type="text"
              className={styles.input}
              placeholder="City/District"
              required
            />
            <input
              type="text"
              className={styles.input}
              placeholder="Pin Code"
              required
            />
            <input
              type="text"
              className={styles.input}
              placeholder="Phone Number"
              required
            />
          </div>
          <textarea
            className={styles.textarea}
            placeholder="Enter full address"
            rows="4"
            required
          ></textarea>
          <div className={styles.footer}>
            <button type="submit" className={styles.saveButton}>
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddAddress;
