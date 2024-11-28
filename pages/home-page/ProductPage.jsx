import styles from "./ProductPage.module.css";

export default function ProductPage() {
  return (
    <>
      <section className={styles.restBanner}>
        <div className={styles.container}>
          <div className={styles.restBannerBg}>
            <div className={styles.bannerOverlay}>
              <div className={styles.bannerInfo}>
                <p>I'm lovin' it!</p>
                <h1>McDonald’s East London</h1>
                <div className={styles.orderTiming}>
                  <button>
                    <img src="./images/Order Completed.png" /> Minimum Order: 12
                    GBP
                  </button>
                  <button>
                    <img src="./images/Motocross.png" />
                    Delivery in 20-25 Minutes
                  </button>
                </div>
                <div className={styles.timeLimit}>
                  <img src="./images/clock.png" />
                  <p>Open until 3:00 AM</p>
                </div>
              </div>
              <div className={styles.bannerImg}>
                <img
                  className={styles.dishImg}
                  src="./images/rest-banner-img.jpg"
                />
                <div className={styles.ratingBlock}>
                  <img src="./images/rating.png" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.offerMenu}>
        <div className={styles.container}>
          <div className={styles.offerFields}>
            <h3>All Offers from McDonald’s East London</h3>
            <div className={styles.searchSec}>
              <img src="./images/SearchMore.png" className={styles.searchImg} />
              <input type="text" placeholder="Seacrh from menu..." />
            </div>
          </div>
        </div>
      </section>

      <section className={styles.foodListSec}>
        <div className={styles.container}>
          <ul>
            <li>
              <a href="#" className={styles.Offers}>
                Offers
              </a>
            </li>
            <li>
              <a href="#">Burgers</a>
            </li>
            <li>
              <a href="#">Fries</a>
            </li>
            <li>
              <a href="#">Snacks</a>
            </li>
            <li>
              <a href="#">Salads</a>
            </li>
            <li>
              <a href="#">Cold drinks</a>
            </li>
            <li>
              <a href="#">Happy Meal®</a>
            </li>
            <li>
              <a href="#">Desserts</a>
            </li>
            <li>
              <a href="#">Hot drinks</a>
            </li>
            <li>
              <a href="#">Sauces</a>
            </li>
            <li>
              <a href="#">Orbit®</a>
            </li>
          </ul>
        </div>
      </section>

      <section className={styles.foodItemsMain}>
        <div className={styles.container}>
          <div className={styles.foodItemsRow}>
            <div className={styles.foodItemsCol}>
              <div className={styles.foodItemsBlock}>
                <p>McDonald’s East London</p>
                <h3>First Order Discount</h3>
                <div className={styles.discoutOffer}>-20%</div>
                <button>
                  <img src="./images/plus.png" className={styles.addIcon} />
                </button>
              </div>
            </div>
            <div className={styles.foodItemsCol}>
              <div className={styles.foodItemsBlock}>
                <p>McDonald’s East London</p>
                <h3>First Order Discount</h3>
                <div className={styles.discoutOffer}>-20%</div>
                <button>
                  <img src="./images/plus.png" className={styles.addIcon} />
                </button>
              </div>
            </div>
            <div className={styles.foodItemsCol}>
              <div className={styles.foodItemsBlock}>
                <p>McDonald’s East London</p>
                <h3>First Order Discount</h3>
                <div className={styles.discoutOffer}>-20%</div>
                <button>
                  <img src="./images/plus.png" className={styles.addIcon} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.foodItemsBlockMain}>
        <div className={styles.container}>
          <h2>Burgers</h2>
          <div className={styles.foodItemsRow}>
            <div className={styles.foodItemsCol}>
              <div className={styles.fastFoodBlock}>
                <div className={styles.fastFoodInfo}>
                  <h5>Royal Cheese Burger with extra Fries</h5>
                  <p>
                    1 McChicken™, 1 Big Mac™, 1 Royal Cheeseburger, 3 medium
                  </p>
                  <h5>₹ 120</h5>
                </div>
                <div className={styles.fastFoodImg}>
                  <img src="./images/snacks.png" />
                </div>
                <button>
                  <img src="./images/plus.png" className={styles.addIcon} />
                </button>
              </div>
            </div>
            <div className={styles.foodItemsCol}>
              <div className={styles.fastFoodBlock}>
                <div className={styles.fastFoodInfo}>
                  <h5>Royal Cheese Burger with extra Fries</h5>
                  <p>
                    1 McChicken™, 1 Big Mac™, 1 Royal Cheeseburger, 3 medium
                  </p>
                  <h5>₹ 120</h5>
                </div>
                <div className={styles.fastFoodImg}>
                  <img src="./images/snacks.png" />
                </div>
                <button>
                  <img src="./images/plus.png" className={styles.addIcon} />
                </button>
              </div>
            </div>
            <div className={styles.foodItemsCol}>
              <div className={styles.fastFoodBlock}>
                <div className={styles.fastFoodInfo}>
                  <h5>Royal Cheese Burger with extra Fries</h5>
                  <p>
                    1 McChicken™, 1 Big Mac™, 1 Royal Cheeseburger, 3 medium
                  </p>
                  <h5>₹ 120</h5>
                </div>
                <div className={styles.fastFoodImg}>
                  <img src="./images/snacks.png" />
                </div>
                <button>
                  <img src="./images/plus.png" className={styles.addIcon} />
                </button>
              </div>
            </div>
            <div className={styles.foodItemsCol}>
              <div className={styles.fastFoodBlock}>
                <div className={styles.fastFoodInfo}>
                  <h5>Royal Cheese Burger with extra Fries</h5>
                  <p>
                    1 McChicken™, 1 Big Mac™, 1 Royal Cheeseburger, 3 medium
                  </p>
                  <h5>₹ 120</h5>
                </div>
                <div className={styles.fastFoodImg}>
                  <img src="./images/snacks.png" />
                </div>
                <button>
                  <img src="./images/plus.png" className={styles.addIcon} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={`${styles.foodItemsBlockMain} ${styles.second}`}>
        <div className={styles.container}>
          <h2>Fries</h2>
          <div className={styles.foodItemsRow}>
            <div className={styles.foodItemsCol}>
              <div className={styles.fastFoodBlock}>
                <div className={styles.fastFoodInfo}>
                  <h5>Royal Cheese Burger with extra Fries</h5>
                  <p>
                    1 McChicken™, 1 Big Mac™, 1 Royal Cheeseburger, 3 medium
                  </p>
                  <h5>₹ 120</h5>
                </div>
                <div className={styles.fastFoodImg}>
                  <img src="./images/snacks.png" />
                </div>
                <button>
                  <img src="./images/plus.png" className={styles.addIcon} />
                </button>
              </div>
            </div>
            <div className={styles.foodItemsCol}>
              <div className={styles.fastFoodBlock}>
                <div className={styles.fastFoodInfo}>
                  <h5>Royal Cheese Burger with extra Fries</h5>
                  <p>
                    1 McChicken™, 1 Big Mac™, 1 Royal Cheeseburger, 3 medium
                  </p>
                  <h5>₹ 120</h5>
                </div>
                <div className={styles.fastFoodImg}>
                  <img src="./images/snacks.png" />
                </div>
                <button>
                  <img src="./images/plus.png" className={styles.addIcon} />
                </button>
              </div>
            </div>
            <div className={styles.foodItemsCol}>
              <div className={styles.fastFoodBlock}>
                <div className={styles.fastFoodInfo}>
                  <h5>Royal Cheese Burger with extra Fries</h5>
                  <p>
                    1 McChicken™, 1 Big Mac™, 1 Royal Cheeseburger, 3 medium
                  </p>
                  <h5>₹ 120</h5>
                </div>
                <div className={styles.fastFoodImg}>
                  <img src="./images/snacks.png" />
                </div>
                <button>
                  <img src="./images/plus.png" className={styles.addIcon} />
                </button>
              </div>
            </div>
            <div className={styles.foodItemsCol}>
              <div className={styles.fastFoodBlock}>
                <div className={styles.fastFoodInfo}>
                  <h5>Royal Cheese Burger with extra Fries</h5>
                  <p>
                    1 McChicken™, 1 Big Mac™, 1 Royal Cheeseburger, 3 medium
                  </p>
                  <h5>₹ 120</h5>
                </div>
                <div className={styles.fastFoodImg}>
                  <img src="./images/snacks.png" />
                </div>
                <button>
                  <img src="./images/plus.png" className={styles.addIcon} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={`${styles.foodItemsBlockMain} ${styles.second}`}>
        <div className={styles.container}>
          <h2>Cold Drinks</h2>
          <div className={styles.foodItemsRow}>
            <div className={styles.foodItemsCol}>
              <div className={styles.fastFoodBlock}>
                <div className={styles.fastFoodInfo}>
                  <h5>Royal Cheese Burger with extra Fries</h5>
                  <p>
                    1 McChicken™, 1 Big Mac™, 1 Royal Cheeseburger, 3 medium
                  </p>
                  <h5>₹ 120</h5>
                </div>
                <div className={styles.fastFoodImg}>
                  <img src="./images/snacks.png" />
                </div>
                <button>
                  <img src="./images/plus.png" className={styles.addIcon} />
                </button>
              </div>
            </div>
            <div className={styles.foodItemsCol}>
              <div className={styles.fastFoodBlock}>
                <div className={styles.fastFoodInfo}>
                  <h5>Royal Cheese Burger with extra Fries</h5>
                  <p>
                    1 McChicken™, 1 Big Mac™, 1 Royal Cheeseburger, 3 medium
                  </p>
                  <h5>₹ 120</h5>
                </div>
                <div className={styles.fastFoodImg}>
                  <img src="./images/snacks.png" />
                </div>
                <button>
                  <img src="./images/plus.png" className={styles.addIcon} />
                </button>
              </div>
            </div>
            <div className={styles.foodItemsCol}>
              <div className={styles.fastFoodBlock}>
                <div className={styles.fastFoodInfo}>
                  <h5>Royal Cheese Burger with extra Fries</h5>
                  <p>
                    1 McChicken™, 1 Big Mac™, 1 Royal Cheeseburger, 3 medium
                  </p>
                  <h5>₹ 120</h5>
                </div>
                <div className={styles.fastFoodImg}>
                  <img src="./images/snacks.png" />
                </div>
                <button>
                  <img src="./images/plus.png" className={styles.addIcon} />
                </button>
              </div>
            </div>
            <div className={styles.foodItemsCol}>
              <div className={styles.fastFoodBlock}>
                <div className={styles.fastFoodInfo}>
                  <h5>Royal Cheese Burger with extra Fries</h5>
                  <p>
                    1 McChicken™, 1 Big Mac™, 1 Royal Cheeseburger, 3 medium
                  </p>
                  <h5>₹ 120</h5>
                </div>
                <div className={styles.fastFoodImg}>
                  <img src="./images/snacks.png" />
                </div>
                <button>
                  <img src="./images/plus.png" className={styles.addIcon} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
