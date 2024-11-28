import styles from "./DiscountItem.module.css";

export default function DiscountItem({ addClass }) {
  return (
    <div className={`${addClass !== "colMedium" ? styles.foodItemsCol : styles.colMedium}`}>
      <div className={styles.foodItemsBlock}>
        <p>McDonald’s East London</p>
        <h3>First Order Discount</h3>
        <div className={styles.discoutOffer}>-20%</div>
        <button><img src="./images/plus.png" className={styles.addIcon} /></button>
      </div>
    </div>
  );
}
