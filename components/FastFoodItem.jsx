import { useContext, useEffect, useState } from "react";
import { getAllFoodByCategory } from "../services/food";
import styles from "./FastFoodItem.module.css";
import { toast } from "react-toastify";
import { AppContext } from "../context/AppContext";
import { SearchContext } from "../context/SearchContext";

export default function FastFoodItem({ addClass, category }) {
  const { searchQuery } = useContext(SearchContext);

  const [foods, setFoods] = useState([]);
  const { updateFoodCart } = useContext(AppContext);

  const handleAddToCart = (food) => {
    const data = {
      id: food._id,
      quantity: 1,
      name: food.name.split(" ").slice(0, 3).join(" "),
      description: food.description.split(" ").slice(0, 6).join(" "),
      price: food.price,
      image: food.image,
    };
    updateFoodCart([data]);
  };

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

  const filteredFoods = foods.filter((food) =>
    food.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      {filteredFoods.length > 0 &&
        filteredFoods.map((food) => (
          <div
            key={food._id}
            className={`${
              addClass == null ? styles.foodItemsCol : styles.colMedium
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
                  onClick={() => handleAddToCart(food)}
                />
              </button>
            </div>
          </div>
        ))}
    </>
  );
}
