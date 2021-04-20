import React from "react";
import { Link } from "react-scroll";
import Button from "../../components/Button/Button";
import styles from "./Home.module.scss";
// import Top from "../../../assets/images/top.jpg";

const Home = () => {
  return (
    <div className={styles.navBaner}>
      <div className={styles.contentBaner}>
        <p className={styles.hometitle}>
          Fohow to kultura zachowania
          <br /> zdrowia i osiągnięcia długowieczności
          <Link
            to="productsCategories"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            <p className={styles.paragraphHome}>
              Oficjalne Przedstawicielstwo FOHOW
            </p>
            <Button>Produkty</Button>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Home;
