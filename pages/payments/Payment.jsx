import { useContext, useState } from "react";
import styles from "./Payment.module.css";
import { AppContext } from "../../context/AppContext";
import { NavLink, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Payment() {
  const [paymentSelected, setPaymentSelected] = useState(false);
  const handlePaymentSelected = () => setPaymentSelected(true);
  const navigate = useNavigate();
  const { foodCart } = useContext(AppContext);
  const total = 
    foodCart
      .reduce(
        (total, food) => total + food.price * food.quantity,
        0
      );
      // const quantity = foodCart
      // .reduce(
      //   (total, food) => total +  food.quantity,
      //   0
      // );

      const handleConfirm = () =>{
        toast.success("Order place successfully.")
        setTimeout(()=>{
          navigate("/order-successful");
        },[1000])
      }; 

  return (
    <>
    <div className={styles.container}>
      <div className={styles.paymentSection}>
        <div className={styles.header}>
          <img src="./images/backArrow.png" alt="Go Back" />
          <h2>Chose and Pay</h2>
        </div>
        <div className={styles.paymentAndMethodSection}>
          <div className={styles.paymentItems}>
            <div className={styles.payment}>
              <img
                className={styles.paymentImage}
                src="./images/wallet.png"
                alt="Order Item"
              />
              <div className={styles.paymentDetails}>
                <h4 className={styles.itemName}>Zeldapay</h4>
                <span className={styles.availabelBalance}>
                  Available balance: £183.43
                </span>
              </div>
              <img
                className={styles.choosePayment}
                src="./images/rightArrow.png"
                alt="Select Payment"
              />
            </div>
            <div className={styles.end}></div>
            <div className={`${styles.paymentOther} first`}>
              <img
                className={styles.paymentImage}
                src="./images/maestroCard.png"
                alt="Order Item"
              />
              <div className={styles.paymentDetails}>
                <p className={styles.itemName}>MaestroKard</p>
              </div>
              <input type="radio" name="payment" onChange={handlePaymentSelected}/>
            </div>
            <div className={styles.paymentOther}>
              <img
                className={styles.paymentImage}
                src="./images/paypol.png"
                alt="Order Item"
              />
              <div className={styles.paymentDetails}>
                <p className={styles.itemName}>Paypol</p>
              </div>
              <input type="radio" name="payment" onChange={handlePaymentSelected} />
            </div>
            <div className={styles.paymentOther}>
              <img
                className={styles.paymentImage}
                src="./images/strike.png"
                alt="Order Item"
              />
              <div className={styles.paymentDetails}>
                <p className={styles.itemName}>Strike</p>
              </div>
              <input type="radio" name="payment" onChange={handlePaymentSelected} />
            </div>
            <div className={styles.paymentOther}>
              <p className="plus">+</p>
              <div className={styles.paymentDetails}>
                <NavLink to="/profile"> <p className={styles.itemName}>Add Debit Card</p></NavLink>
              </div>
              <input type="radio" name="payment" onChange={handlePaymentSelected} />
            </div>
          </div>

          <div className={styles.summary}>
            <div className={styles.amount}>
              <p className={styles.amountHeading}>Amount to be payed</p>
              <p className={styles.totalPrice}>
                <b>₹{total}</b>
              </p>
            </div>
            <div className={styles.end}></div>
            <button type="button" className={styles.paymentBtn} onClick={handleConfirm}>
              {paymentSelected ? "Proceed Payment": "Choose Payment Method" }
            </button>
          </div>
        </div>
      </div>
    </div>
    <ToastContainer />
    </>
  );
}
