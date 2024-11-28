import styles from "./Order.module.css";

export default function Order() {
  return (
    <div className={styles.container}>
      <div className={styles.orderSection}>
        <div className={styles.header}>
          <img src="./images/backArrow.png" alt="Go Back" />
          <h2>Your Order Details</h2>
        </div>
        <div className={styles.orderAndSummarySection}>
          <div className={styles.orderItems}>
            <div className={styles.item}>
              <img
                className={styles.itemImage}
                src="./images/orderFood1.png"
                alt="Order Item"
              />
              <div className={styles.itemDetails}>
                <h2 className={styles.itemName}>Royal Cheese Burger</h2>
                <span className={styles.itemQuantity}>1x item</span>
              </div>
              <p className={styles.itemPrice}>₹120</p>
            </div>
            <div className={styles.item}>
              <img
                className={styles.itemImage}
                src="./images/orderFood2.png"
                alt="Order Item"
              />
              <div className={styles.itemDetails}>
                <h2 className={styles.itemName}>Potato Veggies</h2>
                <span className={styles.itemQuantity}>1x item</span>
              </div>
              <p className={styles.itemPrice}>₹70</p>
            </div>
            <div className={styles.item}>
              <img
                className={styles.itemImage}
                src="./images/orderFood3.png"
                alt="Order Item"
              />
              <div className={styles.itemDetails}>
                <h2 className={styles.itemName}>Coke Coca Cola</h2>
                <span className={styles.itemQuantity}>1x item</span>
              </div>
              <p className={styles.itemPrice}>₹40</p>
            </div>
            <div className={styles.notesSection}>
              <h6>Notes</h6>
              <input className={styles.orderNote} placeholder="Add order notes" />
            </div>
          </div>

          <div className={styles.summary}>
            <div className={styles.location}>
              <img
                className={styles.itemImage}
                src="./images/location.png"
                alt="Choose Location"
              />
              <div className={styles.locationDetails}>
                <h4>Delivery Address</h4>
                <span className={styles.address}>Tailor line, Sadar</span>
              </div>
              <img
                className={styles.chooseLocation}
                src="./images/rightArrow.png"
                alt="Choose Location"
              />
            </div>
            <div className={styles.end}></div>
            <div className={styles.pricing}>
              <div className={styles.itemPricing}>
                <p>Items</p>
                <p><b>₹230</b></p>
              </div>
              <div className={styles.tax}>
                <p>Sales Tax</p>
                <p><b>₹10</b></p>
              </div>
            </div>
            <div className={styles.end}></div>
            <div className={styles.total}>
              <p className={styles.subTotal}>Subtotal (3 items)</p>
              <p className={styles.totalPrice}><b>₹240</b></p>
            </div>
            <button type="button" className={styles.paymentBtn}>
              Choose Payment Method
            </button>
          </div>
        </div>
      </div>
      <div className={styles.similarRestaurants}>
        <h2>Similar Restaurants</h2>
        <div className={styles.restaurants}>
          <div className={styles.restaurant}>
            <img
              src="./images/mcdonalds.png"
              alt="Sample"
              className={styles.restaurantImage}
            />
            <div className={styles.restaurantName}>McDonald’s London </div>
          </div>
          <div className={styles.restaurant}>
            <img
              src="./images/papaJohns.png"
              alt="Sample"
              className={styles.restaurantImage}
            />
            <div className={styles.restaurantName}>Papa Johns</div>
          </div>
          <div className={styles.restaurant}>
            <img
              src="./images/kfc.png"
              alt="Sample"
              className={styles.restaurantImage}
            />
            <div className={styles.restaurantName}>KFC West London</div>
          </div>
          <div className={styles.restaurant}>
            <img
              src="./images/texasChicken.png"
              alt="Sample"
              className={styles.restaurantImage}
            />
            <div className={styles.restaurantName}>Texas Chicken</div>
          </div>
          <div className={styles.restaurant}>
            <img
              src="./images/burgerKing.png"
              alt="Sample"
              className={styles.restaurantImage}
            />
            <div className={styles.restaurantName}>Burger King</div>
          </div>
          <div className={styles.restaurant}>
            <img
              src="./images/shaurma.png"
              alt="Sample"
              className={styles.restaurantImage}
            />
            <div className={styles.restaurantName}>Shaurma 1</div>
          </div>
        </div>
      </div>
    </div>
  )
}
