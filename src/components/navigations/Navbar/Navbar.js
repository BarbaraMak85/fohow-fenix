import React from "react";
import styles from "./Navbar.module.scss";
import Logo from "../../../assets/icons/logo.png";
import { Link } from "react-scroll";
import { Link as PageLink } from "react-router-dom";
import { routes } from "../../../routes/routes";

const Navbar = ({ pageType }) => {
  return (
    <nav className={styles.navigationWrapper}>
      <div className={styles.imgNavigations}>
        <img className={styles.imgNavbar} src={Logo} />
      </div>
      <ul className={styles.navigationList__wrapper}>
        {pageType === "main" ? (
          <>
            <>
              <Link
                className
                activeClass={styles.active}
                className={styles.naviagtionList__element}
                to="start"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
              >
                <li>Start</li>
              </Link>
              <Link
                className={styles.naviagtionList__element}
                activeClass={styles.active}
                to="about"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
              >
                <li>O nas</li>
              </Link>
              <Link
                activeClass={styles.active}
                className={styles.naviagtionList__element}
                to="kordiceps"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
              >
                <li>Kordiceps</li>
              </Link>

              <Link
                activeClass={styles.active}
                className={styles.naviagtionList__element}
                to="productIngradiens"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
              >
                <li>Skład produktów</li>
              </Link>

              <Link
                activeClass={styles.active}
                className={styles.naviagtionList__element}
                to="theoryYangSheng"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
              >
                <li>Teoria Yang Sheng</li>
              </Link>

              <Link
                activeClass={styles.active}
                className={styles.naviagtionList__element}
                to="productsCategories"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
              >
                <li>Produkty</li>
              </Link>
              <Link
                activeClass={styles.active}
                className={styles.naviagtionList__element}
                to="contact"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
              >
                <li>Kontakt</li>
              </Link>
            </>
            )}
          </>
        ) : (
          <PageLink
            to={routes.mainPage}
            className={styles.naviagtionList__element}
          >
            <li>Strona główna</li>
          </PageLink>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
