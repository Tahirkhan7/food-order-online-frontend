import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Navigation, Pagination, Scrollbar } from 'swiper/modules';
import { useRef, useState } from 'react';

import styles from "./ProductCartPage.module.css";

import DiscountItem from "../../components/DiscountItem"
import FastFoodItem from "../../components/FastFoodItem"

export default function ProductPage() {

  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [swiperInstance, setSwiperInstance] = useState(null);

  const handleSwiper = (swiper) => {
    setSwiperInstance(swiper);
  };

  return (
    <>
      <section className={styles.restBanner} >
        <div className={styles.container}>
          <div className={styles.restBannerBg}>
            <div className={styles.bannerOverlay}>
                <div className={styles.bannerInfo}>
                  <p>I'm lovin' it!</p>
                  <h1>McDonald’s East London</h1>
                  <div className={styles.orderTiming}>
                      <button><img src="./images/Order Completed.png" /> Minimum Order: 12 GBP</button>
                      <button><img src="./images/Motocross.png" />Delivery in 20-25 Minutes</button>
                  </div>
                  <div className={styles.timeLimit} >
                    <img src="./images/clock.png" />
                    <p>Open until 3:00 AM</p>
                  </div>
                </div>
                <div className={styles.bannerImg}>
                  <img className={styles.dishImg} src="./images/rest-banner-img.jpg"  />
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
              <img src="./images/Search More.png" className={styles.searchImg} />
              <input type="text" placeholder="Seacrh from menu..." />
            </div>
          </div>
        </div>
      </section>

      <section className={styles.foodListSec}>
        <div className={styles.container}>
          <ul>
            <li><a href="#" className={styles.Offers}>Offers</a></li>
            <li><a href="#">Burgers</a></li>
            <li><a href="#">Fries</a></li>
            <li><a href="#">Snacks</a></li>
            <li><a href="#">Salads</a></li>
            <li><a href="#">Cold drinks</a></li>
            <li><a href="#">Happy Meal®</a></li>
            <li><a href="#">Desserts</a></li>
            <li><a href="#">Hot drinks</a></li>
            <li><a href="#">Sauces</a></li>
            <li><a href="#">Orbit®</a></li>
          </ul>
        </div>
      </section>

      <section className={styles.productCartDiv}>
        <div className={styles.container}>
          <div className={styles.productCartRow}>
            <div className={styles.productCartLeft}>
              <section className={styles.foodItemsMain}>
                <div className={styles.foodItemsRow}>
                  <DiscountItem addClass="colMedium"/>
                  <DiscountItem addClass="colMedium"/>
                  <DiscountItem addClass="colMedium"/>
                  <DiscountItem addClass="colMedium"/>
                </div>
              </section>

              <section className={styles.foodItemsBlockMain}>
                <h2>Burgers</h2>
                <div className={styles.foodItemsRow}>
                  <FastFoodItem addClass="colMedium" />
                  <FastFoodItem addClass="colMedium" />
                  <FastFoodItem addClass="colMedium" />
                  <FastFoodItem addClass="colMedium" />
                </div>
              </section>

              <section  className={`${styles.foodItemsBlockMain} ${styles.second}`}>
                <h2>Fries</h2>
                <div className={styles.foodItemsRow}>
                  <FastFoodItem addClass="colMedium" />
                  <FastFoodItem addClass="colMedium" />
                  <FastFoodItem addClass="colMedium" />
                  <FastFoodItem addClass="colMedium" />
                </div>
              </section>

              <section  className={`${styles.foodItemsBlockMain} ${styles.second}`}>
                <h2>Cold Drinks</h2>
                <div className={styles.foodItemsRow}>
                  <FastFoodItem addClass="colMedium" />
                  <FastFoodItem addClass="colMedium" />
                  <FastFoodItem addClass="colMedium" />
                  <FastFoodItem addClass="colMedium" />
                </div>
              </section>
            </div>

            <div className={styles.productCartright}>
              <div className={styles.basketContainer}>
                <div className={styles.header}>
                  <img src="./images/cart.png" className={styles.icon} />
                  <h2>My Basket</h2>
                </div>

                <div className={styles.items}>
                  <div className={styles.item}>
                    <span className={styles.quantity}>1x</span>
                    <div className={styles.details}>
                      <span className={styles.price}>₹120</span>
                      <h3>Royal Cheese Burger</h3>
                      <p>With extra fries</p>
                    </div>

                    <button className={styles.deleteButton}>
                      <img src="./images/bin.png" className={styles.icon} />
                    </button>
                  </div>

                  <div className={styles.item}>
                    <span className={styles.quantity}>1x</span>
                    <div className={styles.details}>
                      <span className={styles.price}>₹120</span>
                      <h3>Potato Veggies</h3>
                      <p>No Mushrooms + green peppers</p>
                    </div>
                    <button className={styles.deleteButton}>
                      <img src="./images/bin.png" className={styles.icon} />
                    </button>
                  </div>

                  <div className={styles.item}>
                    <span className={styles.quantity}>1x</span>
                    <div className={styles.details}>
                      <span className={styles.price}>₹120</span>
                      <h3>Coke Coca Cola</h3>
                    </div>
                    <button className={styles.deleteButton}>
                      <img src="./images/bin.png" className={styles.icon} />
                    </button>
                  </div>
                </div>

                <div className={styles.summary}>
                  <p>
                    Sub Total: <span>₹230.00</span>
                  </p>
                  <p>
                    Discounts: <span>-₹3.00</span>
                  </p>
                  <p>
                    Delivery Fee: <span>₹3.00</span>
                  </p>
                  <p className={styles.total}>
                    Total to pay: <span>₹230.00</span>
                  </p>
                </div>
                <button className={styles.editButton}>
                  <p>
                    Total to pay: <span>₹230.00</span>
                  </p>
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
                  <button className={styles.checkoutButton}>Checkout!

                  <div className={styles.footer}>
                  <p>
                    We are open now, but delivery starts at however you may order and
                    collect in store now
                  </p>
                </div>
                  </button>
                  
                </div>

                
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.deliveryInfoSec}>
        <div className={styles.container}>
          <div className={styles.deliveryBlockRow}>
            <div className={styles.deliveryBlockCol}>
              <div className={styles.deliveryInfoBlock}>
                <h2><img src="./images/delivery.png" /> Delivery information</h2>
                <ul>
                  <li><strong>Monday:</strong> 12:00 AM–3:00 AM, 8:00 AM–3:00 AM </li>
                  <li><strong>Tuesday:</strong> 8:00 AM–3:00 AM </li>
                  <li><strong>Wednesday:</strong> 8:00 AM–3:00 AM</li>
                  <li><strong>Thursday:</strong> Thursday: 8:00 AM–3:00 AM </li>
                  <li><strong>Friday</strong>: 8:00 AM–3:00 AM</li>
                  <li><strong>Saturday:</strong> 8:00 AM–3:00 AM </li>
                  <li><strong>Sunday:</strong> 8:00 AM–12:00 AM</li>
                  <li><strong>Estimated time until delivery:</strong> 20 min</li>
                </ul>
              </div>
            </div>
            <div className={styles.deliveryBlockCol}>
              <div className={styles.deliveryInfoBlock}>
                <h2><img src="./images/contactInfo.png" /> Contact information</h2>
                <p>If you have allergies or other dietary restrictions, please contact the restaurant. The restaurant will provide food-specific information upon request.</p>
                <ul>
                  <li><strong>Phone number</strong></li>
                  <li><a href="tel:+934443-43">+934443-43</a></li>
                  <li><strong>Website</strong></li>
                  <li><a href="http://mcdonalds.uk/">http://mcdonalds.uk/</a></li>
                </ul>
              </div>
            </div>
            <div className={styles.deliveryBlockCol}>
              <div className={styles.deliveryInfoBlock}  style={{ backgroundColor: '#03081F', color: '#fff', borderTopRightRadius: 15, borderBottomRightRadius: 15, }}>
                <h2><img src="./images/time.png" />Operational Times</h2>
                <ul>
                  <li><strong>Monday:</strong> 12:00 AM–3:00 AM, 8:00 AM–3:00 AM </li>
                  <li><strong>Tuesday:</strong> 8:00 AM–3:00 AM </li>
                  <li><strong>Wednesday:</strong> 8:00 AM–3:00 AM</li>
                  <li><strong>Thursday:</strong> Thursday: 8:00 AM–3:00 AM </li>
                  <li><strong>Friday</strong>: 8:00 AM–3:00 AM</li>
                  <li><strong>Saturday:</strong> 8:00 AM–3:00 AM </li>
                  <li><strong>Sunday:</strong> 8:00 AM–12:00 AM</li>
                  <li><strong>Estimated time until delivery:</strong> 20 min</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.mapMainSec}>
        <div className={styles.container}>
          <div className={styles.mapRow}>
            <div className={styles.mapInfoBlock}>
              <h2>McDonald’s</h2>
              <h3>South London</h3>
              <p>Tooley St, London Bridge, London SE1 2TF,United Kingdom</p>
              <ul>
                <li><strong>Phone number</strong></li>
                <li><a href="tel:+934443-43">+934443-43</a></li>
                <li><strong>Website</strong></li>
                <li><a href="http://mcdonalds.uk/">http://mcdonalds.uk/</a></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.reviewSec}>
        <div className={styles.container}>
          <div className={styles.reviewHeading}>
            <h2>Customer Reviews</h2>
            <div className={styles.navigationButtons}>
              <button
                ref={prevRef}
                className="customPrevButton"
                onClick={() => swiperInstance?.slidePrev()} // Manually control the slide
              >
                <img  src="./images/left-arrow.png" />
              </button>
              <button
                ref={nextRef}
                className="customNextButton"
                onClick={() => swiperInstance?.slideNext()} // Manually control the slide
              >
                <img  src="./images/right-arrow.png" />
              </button>
            </div>
          </div>

          <Swiper
            modules={[Navigation, Pagination, Scrollbar]}
            spaceBetween={15}
            slidesPerView={3}
            loop
            onSwiper={handleSwiper} // Store swiper instance
            navigation={{
              prevEl: prevRef.current, // Link to previous button
              nextEl: nextRef.current, // Link to next button
            }}
          >
            {[...Array(4)].map((_, index) => (
              <SwiperSlide key={index}>
                <div className={styles.reviewBlock}>
                  <div className={styles.reviewHeader}>
                    <img className={styles.userIcon} src="./images/revUser.png" alt="User" />
                    <div className={styles.userInfo}>
                      <h5>St Glx</h5>
                      <span> South London</span>
                    </div>
                    <div className={styles.userRating}>
                      <img src="./images/star-rating.png" alt="Star Rating" />
                      <p>
                        <img src="./images/ratingTime.png" alt="Rating Time" />
                        24th September, 2023
                      </p>
                    </div>
                  </div>
                  <div className={styles.reviewFooter}>
                    <p>
                      The positive aspect was undoubtedly the efficiency of the service. The queue moved quickly, the staff was friendly, and the food was up to the usual McDonald's standard – hot and satisfying.
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <img src="./images/rating.png" className={styles.reviewRatingImg} />
      </section>

      <section className={styles.container}>
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
      </section>
    </>
  );
}
