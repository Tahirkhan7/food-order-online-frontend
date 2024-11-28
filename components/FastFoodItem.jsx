import { useEffect, useState } from "react";
import { getAllFoodByCategory } from "../services/food";
import styles from "./FastFoodItem.module.css";
import { toast } from "react-toastify";

export default function FastFoodItem({ addClass, category }) {
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    const getAllFoods = async () => {
      try {
        const res = await getAllFoodByCategory(category);
        if (res.status === 200) {
          setFoods(res.data);
        }
      } catch (error) {
        if (error.response && error.response.status === 400) {
          toast.error(error.response.data.message);
        } else {
          toast.error("An unexpected error occurred!");
        }
      }
    };

    if (category) {
      getAllFoods();
    }
  }, [category]);

  return (
    <>
      {foods.length > 0 &&
        foods.map((food) => (
          <div
            className={`${
              addClass !== "colMedium" ? styles.foodItemsCol : styles.colMedium
            }`}
          >
            <div key={food._id} className={styles.fastFoodBlock}>
              <div className={styles.fastFoodInfo}>
                <h5>{food.name}</h5>
                <p>{food.description}</p>
                <h5>₹ {food.price}</h5>
              </div>
              <div className={styles.fastFoodImg}>
                <img src={food.image} alt={food.name} />
              </div>
              <button>
                <img
                  src="./images/plus.png"
                  className={styles.addIcon}
                  alt="Add"
                />
              </button>
            </div>
          </div>
        ))}
    </>
  );
}
