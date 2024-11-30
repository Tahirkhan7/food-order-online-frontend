import SimilarRestaurants from "../../components/SimilarRestaurants";
import styles from "./Homepage.module.css";

export default function Homepage() {
  return (
    <>
      <div className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.heroRow}>
            <div className={styles.heroContent}>
              <p className={styles.preTitle}>
                Order Restaurant food, takeaway and groceries.
              </p>
              <h1 className={styles.heroTitle}>
                Feast Your Senses,
                <span className={styles.textWarning}> Fast and Fresh</span>
              </h1>
              <p className={styles.heroSubtitle}>
                Enter a postcode to see what we deliver
              </p>
              <div className={styles.searchBar}>
                <input
                  type="email"
                  className={styles.searchInput}
                  placeholder="e.g EC4R 3TE"
                />
                <button className={styles.footerBtn}>Search</button>
              </div>
            </div>
            <div className={styles.heroImage}>
              <img src="./images/girls.png" alt="Food Banner" />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.tabHead}>
          <h2 className={styles.textCenter}>
            Up to -40% 🎊 Order.uk Exclusive Deals
          </h2>

          <ul className={styles.customNavTabs} id="dealTabs">
            <li className={styles.customNavItem}>
              <button
                className={styles.customNavLink}
                id="vegan-tab"
                data-target="vegan"
                type="button"
              >
                Vegan
              </button>
            </li>
            <li className={styles.customNavItem}>
              <button
                className={styles.customNavLink}
                id="sushi-tab"
                data-target="sushi"
                type="button"
              >
                Sushi
              </button>
            </li>
            <li className={styles.customNavItem}>
              <button
                className={`${styles.customNavLink} ${styles.active}`}
                id="pizza-tab"
                data-target="pizza"
                type="button"
              >
                Pizza & Fast Food
              </button>
            </li>
            <li className={styles.customNavItem}>
              <button
                className={styles.customNavLink}
                id="others-tab"
                data-target="others"
                type="button"
              >
                Others
              </button>
            </li>
          </ul>
        </div>

        <div className={styles.customTabContent} id="dealTabsContent">
          <div className={styles.customTabPane} id="vegan">
            <div className={styles.customRoww}>
              <div className={styles.customCol}>
                <div className={styles.card}>
                  <img
                    src="./images/pizz1.png"
                    className={styles.cardImg}
                    alt="Vegan Delight"
                  />
                  <div className={styles.discountBadge}>-30%</div>
                  <div className={styles.cardBody}>
                    <h5 className={styles.restaurantTitle}>Vegan Delight</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.customTabPane} id="sushi">
            <div className={styles.customRow}>
              <div className={styles.customCol}>
                <div className={styles.card}>
                  <img
                    src="./images/pizz1.png"
                    className={styles.cardImg}
                    alt="Sushi Haven"
                  />
                  <div className={styles.discountBadge}>-25%</div>
                  <div className={styles.cardBody}>
                    <h5 className={styles.restaurantTitle}>Sushi Haven</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className={`${styles.customTabPane} ${styles.active}`}
            id="pizza"
          >
            <div className={styles.customRow}>
              <div className={styles.customCol}>
                <div className={styles.card}>
                  <img
                    src="./images/pizz1.png"
                    className={styles.cardImg}
                    alt="Chef Burgers London"
                  />
                  <div className={styles.discountBadge}>-40%</div>
                  <div className={styles.cardBody}>
                    <p className={styles.restaurantPreTitle}>Restaurant</p>
                    <h5 className={styles.restaurantTitle}>
                      Chef Burgers London
                    </h5>
                  </div>
                </div>
              </div>
              <div className={styles.customCol}>
                <div className={styles.card}>
                  <img
                    src="./images/pizz2.png"
                    className={styles.cardImg}
                    alt="Grand Ai Cafe London"
                  />
                  <div className={styles.discountBadge}>-20%</div>
                  <div className={styles.cardBody}>
                    <p className={styles.restaurantPreTitle}>Restaurant</p>
                    <h5 className={styles.restaurantTitle}>
                      Grand Ai Cafe London
                    </h5>
                  </div>
                </div>
              </div>
              <div className={styles.customCol}>
                <div className={styles.card}>
                  <img
                    src="./images/pizz3.png"
                    className={styles.cardImg}
                    alt="Butterbrot Café London"
                  />
                  <div className={styles.discountBadge}>-17%</div>
                  <div className={styles.cardBody}>
                    <p className={styles.restaurantPreTitle}>Restaurant</p>
                    <h5 className={styles.restaurantTitle}>
                      Butterbrot Café London
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.customTabPane} id="others">
            <div className={styles.customRow}>
              <div className={styles.customCol}>
                <div className={styles.card}>
                  <img
                    src="./images/pizz1.png"
                    className={styles.cardImg}
                    alt="Global Cuisine"
                  />
                  <div className={styles.discountBadge}>-10%</div>
                  <div className={styles.cardBody}>
                    <h5 className={styles.restaurantTitle}>Global Cuisine</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className={styles.category}>
        <div className={styles.container}>
          <div className={styles.catyTitle}>
            <h2>Order.uk Popular Categories 🤩</h2>
          </div>
          <div className={styles.cardMain}>
            <div className={styles.customCard}>
              <img
                src="./images/category1.png"
                className={styles.customCardImg}
                alt="Chef Burgers London"
              />
              <div className={styles.customCardBody}>
                <h5 className={styles.customRestaurantTitle}>
                  Burger & Fast Food
                </h5>
                <p className={styles.customRestaurantInfo}>21 Restaurants</p>
              </div>
            </div>
            <div className={styles.customCard}>
              <img
                src="./images/category2.png"
                className={styles.customCardImg}
                alt="Salads"
              />
              <div className={styles.customCardBody}>
                <h5 className={styles.customRestaurantTitle}>
                Salads
                </h5>
                <p className={styles.customRestaurantInfo}>32 Restaurants</p>
              </div>
            </div>
            <div className={styles.customCard}>
              <img
                src="./images/category3.png"
                className={styles.customCardImg}
                alt="Pasta & Casuals"
              />
              <div className={styles.customCardBody}>
                <h5 className={styles.customRestaurantTitle}>
                Pasta & Casuals
                </h5>
                <p className={styles.customRestaurantInfo}>4 Restaurants</p>
              </div>
            </div>
            <div className={styles.customCard}>
              <img
                src="./images/category4.png"
                className={styles.customCardImg}
                alt="Pizza"
              />
              <div className={styles.customCardBody}>
                <h5 className={styles.customRestaurantTitle}>Pizza</h5>
                <p className={styles.customRestaurantInfo}>32 Restaurants</p>
              </div>
            </div>
            <div className={styles.customCard}>
              <img
                src="./images/category5.png"
                className={styles.customCardImg}
                alt="Breakfast"
              />
              <div className={styles.customCardBody}>
                <h5 className={styles.customRestaurantTitle}>Breakfast</h5>
                <p className={styles.customRestaurantInfo}>4 Restaurants</p>
              </div>
            </div>
            <div className={styles.customCard}>
              <img
                src="./images/category6.png"
                className={styles.customCardImg}
                alt="Soups"
              />
              <div className={styles.customCardBody}>
                <h5 className={styles.customRestaurantTitle}>Soups</h5>
                <p className={styles.customRestaurantInfo}>32 Restaurants</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.container}>
        <SimilarRestaurants homepage="homepage" />
      </section>

      <section className={styles.container}>
      <div className={styles.homepageSection}>
        <div className={styles.container}>
          <div className={styles.customRow}>
            <div className={styles.imageContent}>
              <img
                src="./images/couple.png"
                alt="Happy users"
                className={styles.imgFluid}
              />
            </div>
            <div className={styles.textContent}>
              <h1>
                <span className={styles.highlight}>
                  <img src="./images/LOGO 1 (6).png" />
                </span>
                ing is more
                <br />
              </h1>
              <h3 className={styles.highlightBox}>
                <span className={styles.highlightOrange}>Personalised</span> &
                Instant
              </h3>
              <p>Download the Order.uk app for faster ordering</p>
              <div className={styles.buttonGroup}>
                <a
                  href="#"
                  className={styles.customBtn + " " + styles.appStoreBtn}
                >
                  <img
                    src="./images/appstore.png"
                    alt="Download on the App Store"
                    className={styles.imgFluid}
                  />
                </a>
                <a
                  href="#"
                  className={styles.customBtn + " " + styles.googlePlayBtn}
                >
                  <img
                    src="./images/Group.png"
                    alt="Get it on Google Play"
                    className={styles.imgFluid}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      </section>

      <section className={styles.container}>
        <div className={styles.partner}>
          <div className={styles.partnerRow}>
            <div className={styles.partnerCol}>
              <div className={styles.partnerCard}>
                <div className={styles.partnerBanner}>
                  <p>Earn more with lower fees</p>
                </div>
                <img
                  src="./images/partner.png"
                  className={styles.partnerCardImg}
                  alt="Partner with us"
                />
                <div className={styles.partnerCardContent}>
                  <p>Signup as a business</p>
                  <h5 className={styles.partnerTitle}>Partner with us</h5>
                  <button className={styles.partnerBtn}>Get Started</button>
                </div>
              </div>
            </div>
            <div className={styles.partnerCol}>
              <div className={styles.partnerCard}>
                <div className={styles.partnerBanner}>
                  <p>Avail exclusive perks</p>
                </div>
                <img
                  src="./images/rider.png"
                  className={styles.partnerCardImg}
                  alt="Ride with us"
                />
                <div className={styles.partnerCardContent}>
                  <p>Signup as a rider</p>
                  <h5 className={styles.partnerTitle}>Ride with us</h5>
                  <button className={styles.partnerBtn}>Get Started</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.container}>
      <section className={styles.faqSection}>
          <div className={styles.faqMenu}>
            <h2 className={styles.sectionTitle}>Know more about us!</h2>

            <div className={styles.faqNav}>
              <a href="#" className={`${styles.faqLink} ${styles.active}`}>
                Frequent Questions
              </a>
              <a href="#" className={styles.faqLink}>
                Who we are?
              </a>
              <a href="#" className={styles.faqLink}>
                Partner Program
              </a>
              <a href="#" className={styles.faqLink}>
                Help & Support
              </a>
            </div>
          </div>

          <div className={styles.faqContent}>
            <div className={styles.faqRow}>
              <div className={styles.faqLeft}>
                <h5>How does Order.UK work?</h5>
                <ul className={styles.faqList}>
                  <li className={styles.faqItem}>
                    What payment methods are accepted?
                  </li>
                  <li className={styles.faqItem}>
                    Can I track my order in real-time?
                  </li>
                  <li className={styles.faqItem}>
                    Are there any special discounts or promotions available?
                  </li>
                  <li className={styles.faqItem}>
                    Is Order.UK available in my area?
                  </li>
                </ul>
              </div>

              <div className={styles.faqRight}>
                <div className={styles.faqCards}>
                  <div className={styles.faqCard}>
                    <h5 className={styles.faqCardTitle}>Place an Order!</h5>
                    <img
                      src="./images/bell-icon.png"
                      alt="Place an Order"
                      className={styles.faqIcon}
                    />
                    <p>Place order through our website or Mobile app</p>
                  </div>
                  <div className={styles.faqCard}>
                    <h5 className={styles.faqCardTitle}>Track Progress</h5>
                    <img
                      src="./images/food 1.png"
                      alt="Track Progress"
                      className={styles.faqIcon}
                    />
                    <p>You can track your order status with delivery time</p>
                  </div>

                  <div className={styles.faqCard}>
                    <h5 className={styles.faqCardTitle}>Get your Order!</h5>
                    <img
                      src="./images/order 1.png"
                      alt="Get your Order"
                      className={styles.faqIcon}
                    />
                    <p>Receive your order at a lightning fast speed!</p>
                  </div>
                </div>
                <p className={styles.faqSummary}>
                  Order.UK simplifies the food ordering process. Browse through
                  our diverse menu, select your favorite dishes, and proceed to
                  checkout. Your delicious meal will be on its way to your
                  doorstep in no time!
                </p>
              </div>
            </div>
          </div>
      </section>
      </section>

      <div className={styles.counter}>
        <div className={styles.container}>
          <div className={styles.counterMain}>
            <div className={styles.counterBox}>
              <h2>546+</h2>
              <p>Registered Riders</p>
            </div>
            <div className={styles.counterBox}>
              <h2>789,900+</h2>
              <p>Orders Delivered</p>
            </div>
            <div className={styles.counterBox}>
              <h2>690+</h2>
              <p>Restaurants Partnered</p>
            </div>
            <div className={styles.counterBox}>
              <h2>17,457+</h2>
              <p>Food items</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
