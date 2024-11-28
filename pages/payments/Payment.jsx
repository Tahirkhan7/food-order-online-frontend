import styles from "./Payment.module.css";

export default function Payment() {
  return (
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
              <input type="checkbox" />
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
              <input type="checkbox" />
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
              <input type="checkbox" />
            </div>
            <div className={styles.paymentOther}>
              <p className="plus">+</p>
              <div className={styles.paymentDetails}>
                <p className={styles.itemName}>Add Debit Card</p>
              </div>
              <input type="checkbox" />
            </div>
          </div>

          <div className={styles.summary}>
            <div className={styles.amount}>
              <p className={styles.amountHeading}>Amount to be payed</p>
              <p className={styles.totalPrice}>
                <b>₹240</b>
              </p>
            </div>
            <div className={styles.end}></div>
            <button type="button" className={styles.paymentBtn}>
              Choose Payment Method
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
