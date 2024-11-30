import { Link, NavLink } from "react-router-dom";
import styles from "./Order.module.css";
import { useContext } from "react";
import { AppContext } from "../../context/AppContext";

export default function Order() {
  const { foodCart, removeItemFromCart } = useContext(AppContext);
  const total = 
    foodCart
      .reduce(
        (total, food) => total + food.price * food.quantity,
        0
      );
      const quantity = foodCart
      .reduce(
        (total, food) => total +  food.quantity,
        0
      );

  return (
    <>
    <div className={styles.container}>
      <div className={styles.orderSection}>
        <div className={styles.header}>
          <img src="./images/backArrow.png" alt="Go Back" />
          <h2>Your Order Details</h2>
        </div>
        <div className={styles.orderAndSummarySection}>
          <div className={styles.orderItems}>
          {foodCart.length > 0 &&
            foodCart.map((food) => (
            <div className={styles.item} key={food.id}>
              <img
                className={styles.itemImage}
                src={food.image}
                alt={food.name}
              />
              <div className={styles.itemDetails}>
                <h2 className={styles.itemName}>{food.name}</h2>
                <span className={styles.itemQuantity}>{food.quantity}x item</span>
              </div>
              <p className={styles.itemPrice}>₹{food.price*food.quantity}</p>
            </div>
            ))}

            <div className={styles.notesSection}>
              <h6>Notes</h6>
              <input
                className={styles.orderNote}
                placeholder="Add order notes"
              />
            </div>
          </div>

          <div className={styles.summary}>
            <div className={styles.location}>
              <img
                className={styles.itemImage}
                src="./images/locationYellow.png"
                alt="Choose Location"
              />
              <div className={styles.locationDetails}>
                <h4>Delivery Address</h4>
                <span className={styles.address}>Tailor line, Sadar</span>
              </div>
              <Link to="/address">
                <img
                  className={styles.chooseLocation}
                  src="./images/rightArrow.png"
                  alt="Choose Location"
                />
              </Link>
            </div>
            <div className={styles.end}></div>
            <div className={styles.pricing}>
              <div className={styles.itemPricing}>
                <p>Items</p>
                <p>
                  <b>₹{total}</b>
                </p>
              </div>
              <div className={styles.tax}>
                <p>Sales Tax</p>
                <p>
                  <b>₹10</b>
                </p>
              </div>
            </div>
            <div className={styles.end}></div>
            <div className={styles.total}>
              <p className={styles.subTotal}>Subtotal ({quantity} items)</p>
              <p className={styles.totalPrice}>
                <b>₹{total+10}</b>
              </p>
            </div>
            <button type="button" className={styles.paymentBtn}>
            <NavLink to="/payment">
              Choose Payment Method
            </NavLink>
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
    </>
  );
}
