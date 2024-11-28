import { Outlet } from 'react-router-dom';  
import styles from "./DefaultLayout.module.css";
import Header from "../components/Header"

const DefaultLayout = () => {

  return (
      <>
        <Header />
        <div className={styles.main}>
          <Outlet />
        </div>
      </>
  );
};

export default DefaultLayout;
