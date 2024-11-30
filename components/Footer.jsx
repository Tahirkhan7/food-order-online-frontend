import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <>
      <footer>
        <div className={styles.footerTop}>
          <div className={styles.container}>
            <div className={styles.footerRow}>
              <div className={`${styles.footerCol} ${styles.footerLogoCol}`}>
                <div className={styles.footerLogo}>
                  <img src="./images/LOGO 1 (6).png" className={styles.logo} />
                </div>
                <div className={styles.footerAppLinks}>
                  <a href="#">
                    <img
                      src="./images/Group.png"
                      className={styles.footerImg}
                    />
                  </a>
                  <a href="#">
                    <img
                      src="./images/appstore.png"
                      className={styles.footerImg}
                    />
                  </a>
                </div>
                <p className={styles.footerText}>
                  Company #490039-445, Registered with House of companies.
                </p>
              </div>
              <div
                className={`${styles.footerCol} ${styles.footerSubscribeCol}`}
              >
                <h5 className={styles.footerHeading}>
                  Get Exclusive Deals in your Inbox
                </h5>
                <div className={styles.footerSubscribe}>
                  <input
                    type="email"
                    className={styles.footerInput}
                    placeholder="youremail@gmail.com"
                  />
                  <button className={styles.footerBtn}>Subscribe</button>
                </div>
                <small className={styles.footerSmallText}>
                  We won't spam, read our <a href="#">email policy</a>.
                </small>
                <div className={styles.footerSocialIcons}>
                  <a href="#" className={styles.footerSocialIcon}>
                    <img src="./images/Facebook.png" />
                  </a>
                  <a href="#" className={styles.footerSocialIcon}>
                    <img src="./images/Instagram.png" />
                  </a>
                  <a href="#" className={styles.footerSocialIcon}>
                    <img src="./images/TikTok.png" />
                  </a>
                  <a href="#" className={styles.footerSocialIcon}>
                    <img src="./images/Snapchat.png" />
                  </a>
                </div>
              </div>
              <div className={`${styles.footerCol2} ${styles.footerLinksCol2}`}>
                <h5 className={styles.footerHeading}>Legal Pages</h5>
                <ul className={styles.footerLinks}>
                  <li>
                    <a href="#">Terms and conditions</a>
                  </li>
                  <li>
                    <a href="#">Privacy</a>
                  </li>
                  <li>
                    <a href="#">Cookies</a>
                  </li>
                  <li>
                    <a href="#">Modern Slavery Statement</a>
                  </li>
                </ul>
              </div>
              <div className={`${styles.footerCol2} ${styles.footerLinksCol}`}>
                <h5 className={styles.footerHeading}>Important Links</h5>
                <ul className={styles.footerLinks}>
                  <li>
                    <a href="#">Get help</a>
                  </li>
                  <li>
                    <a href="#">Add your restaurant</a>
                  </li>
                  <li>
                    <a href="#">Sign up to deliver</a>
                  </li>
                  <li>
                    <a href="#">Create a business account</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.footerBottom}>
          <section className={styles.container}>
          <div className={styles.footerRow}>
            <div className={styles.footerBottomLeft}>
              <p>Order.uk Copyright 2024, All Rights Reserved.</p>
            </div>
            <div className={styles.footerBottomRight}>
              <a href="#">Privacy Policy</a>
              <a href="#">Terms</a>
              <a href="#">Pricing</a>
              <a href="#">Do not sell or share my personal information</a>
            </div>
          </div>
          </section>
        </div>
      </footer>
    </>
  );
}
