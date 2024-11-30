import { useContext, useEffect } from "react";
import styles from "./Cart.module.css";
import { AppContext } from "../context/AppContext";
import { NavLink } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getAllFoodsByCartToken } from "../services/food";

export default function Cart({cartToken}) {
  const { token, foodCart, removeItemFromCart, updateFoodCart } = useContext(AppContext);
  const total = foodCart
    .reduce((total, food) => total + food.price * food.quantity, 0)
    .toFixed(2);

    useEffect(()=>{
      const fetchCartTokenFoods = async ()=>{
        if(cartToken!== null){
            try {
              const res = await getAllFoodsByCartToken(cartToken);
              if (res.status === 200) {
                updateFoodCart(res.data.items);
              }
            } catch (error) {
              if (error.response && error.response.status === 400) {
                toast.error(error.response.data.message);
              } else {
                toast.error("An unexpected error occurred!");
              }
            }
          }
        }
        fetchCartTokenFoods();
    },[cartToken])
  
  const handleCopyLink = async () => {
    toast.success("Link copied successfully.");
    const linkToShare = `https://food-order-online-frontend.vercel.app/products?cart=${token}`;
    try {
      await navigator.clipboard.writeText(linkToShare);
    } catch (error) {
      console.error("Failed to copy: ", error);
    }
  };

  return (
    <>
      <div className={styles.productCartright}>
        <div className={styles.basketContainer}>
          <div className={styles.shareCartContainer}>
            <div className={styles.textContainer}>
              <img
                src="./images/share.png"
                alt="Share"
                className={styles.shareIcon}
              />
              <span>Share this cart with your friends</span>
            </div>
            <button className={styles.copyButton} onClick={handleCopyLink}>
              Copy Link
            </button>
          </div>
          <div className={styles.header}>
            <img src="./images/cart.png" className={styles.icon} />
            <h2>My Basket</h2>
          </div>

          {foodCart.length > 0 &&
            foodCart.map((food) => (
              <div className={styles.items} key={food.id}>
                {" "}
                <div className={styles.item}>
                  <span className={styles.quantity}>{food.quantity}x</span>
                  <div className={styles.details}>
                    <span className={styles.price}>₹{food.price}</span>
                    <h3>{food.name}</h3>
                    <p>{food.description}</p>
                  </div>

                  <button className={styles.deleteButton}>
                    <img
                      src="./images/bin.png"
                      className={styles.icon}
                      alt="Delete"
                      onClick={() => removeItemFromCart(food.id)}
                    />
                  </button>
                </div>
              </div>
            ))}

          <div className={styles.summary}>
            <p>
              Sub Total: <span>₹{total}</span>
            </p>
            <p>
              Discounts: <span>-₹3.00</span>
            </p>
            <p>
              Delivery Fee: <span>₹3.00</span>
            </p>
            <p className={styles.total}>
              Total to pay: <span>₹{total}</span>
            </p>
          </div>
          <div className={styles.btnActions}>
            <button className={styles.editButton}>
              <div className={styles.editButton}>
                <p>
                  Total to pay: <span>₹{total}</span>
                </p>
              </div>
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
            <button className={styles.checkoutButton}>
              <NavLink to="/orders"> Checkout!</NavLink>
              <div className={styles.footer}>
                {total > 20 ? (
                  <p>
                    We are open now, but delivery starts at{" "}
                    <span
                      style={{ textDecoration: "underline", color: "#fc8a06" }}
                    >
                      18:00
                    </span>{" "}
                    however you may order and collect in store now
                  </p>
                ) : (
                  <p>
                    Minimum delivery is ₹20, You must Spend{" "}
                    <span
                      style={{ textDecoration: "underline", color: "#fc8a06" }}
                    >
                      ₹10 more
                    </span>{" "}
                    for the checkout!
                  </p>
                )}
              </div>
            </button>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
}
