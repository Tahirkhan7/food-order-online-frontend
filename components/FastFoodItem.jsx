import styles from "./FastFoodItem.module.css";

export default function FastFoodItem({ addClass }) {
  return (
    <>
        <div className={`${addClass !== "colMedium" ? styles.foodItemsCol : styles.colMedium}`}>
            <div className={styles.fastFoodBlock}>
            <div className={styles.fastFoodInfo}>
                <h5>Royal Cheese Burger with extra Fries</h5>
                <p>1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium</p>
                <h5>₹ 120</h5>
            </div>
            <div className={styles.fastFoodImg}>
                <img src="./images/snacks.png" />
            </div>
            <button><img src="./images/plus.png" className={styles.addIcon} /></button>
            </div>
        </div>
    </>
  );
}
