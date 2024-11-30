import { useContext, useEffect } from "react";
import styles from "./OrderSuccessful.module.css";
import { AppContext } from "../../context/AppContext";
import { NavLink, useNavigate } from "react-router-dom";

export default function OrderSuccessful() {
  const { foodCart, clearCart } = useContext(AppContext);
  const navigate = useNavigate();

  const checkFoods = () => {
    if (foodCart.length === 0) {
      navigate("/");
    }
  };
  checkFoods();

  const handleOrderSuccess = () =>{
    clearCart();
    navigate("/");
  };

  return (
    <div className={styles.container}>
      <div className={styles.OrderSuccessfulSection}>
        <div className={styles.successIcon}>
          <img src="./images/success.png" alt="Order successful" />
        </div>
        <h2 className={styles.title}>Order Placed Successfully</h2>
        <p className={styles.description}>
          Your order is confirmed and on its way. Get set to savor your chosen
          delights!
        </p>
        <div className={styles.footerSection}>
          <ul className={styles.orderList}>
            {foodCart.map((food) => (
              <li key={food.id}>{food.name}</li>
            ))}
          </ul>
          <button className={styles.backButton} onClick={handleOrderSuccess}>
          Back to Home
        </button>
        </div>
      </div>
    </div>
  );
}
