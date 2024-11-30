import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import styles from "./SimilarRestaurants.module.css";
import { Link } from "react-router-dom";

export default function SimilarRestaurants({homepage}) {
    return (
        <>
            <div className={styles.similarRestaurants}>
            <h2>{homepage != 'homepage' ? "Similar" : "Popular"} Restaurants</h2>
                <div className={styles.restaurants}>
                    <div className={styles.restaurant}>
                        <Link to="/products">
                            <img
                                src="./images/mcdonalds.png"
                                alt="McDonald's"
                                className={styles.restaurantImage}
                            />
                            <div className={styles.restaurantName}>McDonald’s London</div>
                        </Link>
                    </div>
                    <div className={styles.restaurant}>
                        <Link to="/products">
                            <img
                                src="./images/papaJohns.png"
                                alt="Papa Johns"
                                className={styles.restaurantImage}
                            />
                            <div className={styles.restaurantName}>Papa Johns</div>
                        </Link>
                    </div>
                    <div className={styles.restaurant}>
                        <Link to="/products">
                            <img
                                src="./images/kfc.png"
                                alt="KFC"
                                className={styles.restaurantImage}
                            />
                            <div className={styles.restaurantName}>KFC West London</div>
                        </Link>
                    </div>
                    <div className={styles.restaurant}>
                        <Link to="/products">
                            <img
                                src="./images/texasChicken.png"
                                alt="Texas Chicken"
                                className={styles.restaurantImage}
                            />
                            <div className={styles.restaurantName}>Texas Chicken</div>
                        </Link>
                    </div>
                    <div className={styles.restaurant}>
                        <Link to="/products">
                            <img
                                src="./images/burgerKing.png"
                                alt="Burger King"
                                className={styles.restaurantImage}
                            />
                            <div className={styles.restaurantName}>Burger King</div>
                        </Link>
                    </div>
                    <div className={styles.restaurant}>
                        <Link to="/products">
                            <img
                                src="./images/shaurma.png"
                                alt="Shaurma"
                                className={styles.restaurantImage}
                            />
                            <div className={styles.restaurantName}>Shaurma 1</div>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}
