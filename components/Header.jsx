import styles from "./Header.module.css";
import starIcon from "../src/assets/star.png";
import location from "../src/assets/Location.png";
import cart from "../src/assets/cart.png";
import download from "../src/assets/Forward Button.png";
import logo from "../src/assets/logo.png";
import user from "../src/assets/user.png";

import { Link, NavLink } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { SearchContext } from "../context/SearchContext";

export default function Home() {
  const { name } = useContext(AppContext);
  return (
    <>
      <div className={styles.headerTopMain} id="homepage">
        <div className={styles.container}>
          <div className={styles.topHeader}>
            <div className={styles.offerBlock}>
              <img src={starIcon} alt="Star" />
              <p> Get 5% Off your first order, </p>
              <button>Promo: ORDER5</button>
            </div>
            <div className={styles.secondBlock}>
              <div className={styles.locationBlock}>
                <img src={location} alt="Location" />
                <p>Regent Street, A4, A4201, London</p>
                <button>Change Location</button>
              </div>
              <Link to="/products" className={styles.cartBlock}>
                <div className={styles.myCart}>
                  <img src={cart} />
                  <p>My Cart</p>
                </div>
                <button>
                  <img src={download} />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <header className={styles.headerNavMain}>
        <div className={styles.container}>
          <div className={styles.navHeader}>
            <div className={styles.logoSec}>
              <img src={logo} alt="Logo" />
            </div>
            <div className={styles.navSec}>
              <ul className={styles.navListItems}>
                {/* <!-- Menu Item Calendar --> */}
                <li>
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      isActive
                        ? `${styles.navlist} ${styles.active}`
                        : styles.navlist
                    }
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/special-offers" className={styles.navlist}>
                    SpecialOffers
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/restaurants"
                    className={({ isActive }) =>
                      isActive
                        ? `${styles.navlist} ${styles.active}`
                        : styles.navlist
                    }
                  >
                    Restaurants
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/track-order" className={styles.navlist}>
                    TrackOrder
                  </NavLink>
                </li>
                <NavLink to="/profile">
                  <li>
                    <button className="userButton">
                      <img src={user} alt="User" />
                      Hey {name ? name : "Guest"}
                    </button>
                  </li>
                </NavLink>
              </ul>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
