import { Outlet } from 'react-router-dom';  
import styles from "./DefaultLayout.module.css";
import Header from "../components/Header"
import Footer from '../components/Footer';

const DefaultLayout = () => {

  return (
      <>
        <Header />
        <div className={styles.main}>
          <Outlet />
        </div>
        <Footer />
      </>
  );
};

export default DefaultLayout;
