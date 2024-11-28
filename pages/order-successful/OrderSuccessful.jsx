import styles from "./OrderSuccessful.module.css";

export default function OrderSuccessful() {
  return (
    <div className={styles.container}>
      <div className={styles.OrderSuccessfulSection}>
        <div className={styles.successIcon}>
          <img src="./images/success.png" alt="" />
        </div>
        <h2 className={styles.title}>Order Placed Successfully</h2>
        <p className={styles.description}>
          Your order is confirmed and on its way. Get set to savor your chosen
          delights!
        </p>
        <div className={styles.footerSection}>
        <ul className={styles.orderList}>
          <li>Royal Cheese Burger</li>
          <li>Potato Veggies</li>
          <li>Coke Coca Cola</li>
        </ul>
        <a href="/" className={styles.backButton}>
          Back to Home
        </a>
        </div>
      </div>
    </div>
  );
}
