import React from "react";
import styles from "./Cart.module.css";

export default function Cart() {
  return (
    <div className={styles.container}>
      <div className={styles.basketContainer}>
        <div className={styles.header}>
          <img src="./images/cart.png" className={styles.icon} />
          <h2>My Basket</h2>
        </div>

        <div className={styles.items}>
          <div className={styles.item}>
            <span className={styles.quantity}>1x</span>
            <div className={styles.details}>
              <span className={styles.price}>₹120</span>
              <h3>Royal Cheese Burger</h3>
              <p>With extra fries</p>
            </div>

            <button className={styles.deleteButton}>
              <img src="./images/bin.png" className={styles.icon} />
            </button>
          </div>

          <div className={styles.item}>
            <span className={styles.quantity}>1x</span>
            <div className={styles.details}>
              <span className={styles.price}>₹120</span>
              <h3>Potato Veggies</h3>
              <p>No Mushrooms + green peppers</p>
            </div>
            <button className={styles.deleteButton}>
              <img src="./images/bin.png" className={styles.icon} />
            </button>
          </div>

          <div className={styles.item}>
            <span className={styles.quantity}>1x</span>
            <div className={styles.details}>
              <span className={styles.price}>₹120</span>
              <h3>Coke Coca Cola</h3>
            </div>
            <button className={styles.deleteButton}>
              <img src="./images/bin.png" className={styles.icon} />
            </button>
          </div>
        </div>

        <div className={styles.summary}>
          <p>
            Sub Total: <span>₹230.00</span>
          </p>
          <p>
            Discounts: <span>-₹3.00</span>
          </p>
          <p>
            Delivery Fee: <span>₹3.00</span>
          </p>
          <p className={styles.total}>
            Total to pay: <span>₹230.00</span>
          </p>
        </div>
        <button className={styles.editButton}>
          <p>
            Total to pay: <span>₹230.00</span>
          </p>
        </button>
        <div className={styles.actions}>
          <select className={styles.freeItem}>
            <option>Choose your free item...</option>
          </select>
          <div className={styles.coupon}>
            <input
              type="text"
              placeholder="Apply Coupon Code here"
              className={styles.couponInput}
            />
          </div>
        </div>

        <div className={styles.checkout}>
          <div className={styles.checkoutOptions}>
            <div className={styles.deliveryInfo}>
              <img src="./images/bike.png" alt="Delivery" />
              <h4>Delivery</h4>
              <p>Starts at 17:50</p>
            </div>
            <div className={styles.deliveryInfo}>
              <img src="./images/bike.png" alt="Delivery" />
              <h4>Delivery</h4>
              <p>Starts at 17:50</p>
            </div>
          </div>
          <button className={styles.checkoutButton}>Checkout!</button>
        </div>

        <div className={styles.footer}>
          <p>
            We are open now, but delivery starts at however you may order and
            collect in store now
          </p>
        </div>
      </div>
    </div>
  );
}
