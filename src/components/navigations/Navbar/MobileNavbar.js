import React from "react";
import { Link } from "react-scroll";
import { Link as PageLink } from "react-router-dom";
import { routes } from "../../../routes/routes";
import styles from "./MobileNavbar.module.scss";
import Logo from "../../../assets/icons/logo.png";
import HamburgerMenu from "react-hamburger-menu";

const MobileNavbar = ({
  pageType,
  toggleHamburgerMenuVisibility,
  isHamburgerMenuOpen,
}) => {
  return (
    <nav className={styles.navigationWrapper__mobile}>
      <div className={styles.imgNavigations__mobile}>
        <img src={Logo} />
      </div>
      {pageType === "main" ? (
        <div style={{ cursor: "pointer", alignSelf: "center" }}>
          <HamburgerMenu
            isOpen={isHamburgerMenuOpen}
            menuClicked={toggleHamburgerMenuVisibility}
            width={25}
            height={18}
            strokeWidth={2}
            rotate={0}
            color="#a98748"
            borderRadius={0}
            animationDuration={0.5}
          />
        </div>
      ) : null}

      {pageType === "main" ? (
        <>
          {isHamburgerMenuOpen ? (
            <ul className={styles.navigationList__wrapper__moblie}>
              <li className={styles.naviagtionList__element}>
                <Link
                  className
                  activeClass={styles.active}
                  to="start"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={500}
                >
                  Start
                </Link>
              </li>
              <li className={styles.naviagtionList__element}>
                <Link
                  activeClass={styles.active}
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={500}
                >
                  O nas
                </Link>
              </li>
              <li className={styles.naviagtionList__element}>
                <Link
                  activeClass={styles.active}
                  to="kordiceps"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={500}
                >
                  Kordiceps
                </Link>
              </li>
              <li className={styles.naviagtionList__element}>
                <Link
                  activeClass={styles.active}
                  to="productIngradiens"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={500}
                >
                  Skład produktów
                </Link>
              </li>
              <li className={styles.naviagtionList__element}>
                <Link
                  activeClass={styles.active}
                  to="theoryYangSheng"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={500}
                >
                  Teoria Yang Sheng
                </Link>
              </li>
              <li className={styles.naviagtionList__element}>
                <Link
                  activeClass={styles.active}
                  to="productsCategories"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={500}
                >
                  Produkty
                </Link>
              </li>
              <li className={styles.naviagtionList__element}>
                <Link
                  activeClass={styles.active}
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={500}
                >
                  Kontakt
                </Link>
              </li>
            </ul>
          ) : null}
        </>
      ) : (
        <PageLink
          to={routes.mainPage}
          className={styles.naviagtionList__element}
        >
          <li>Strona główna</li>
        </PageLink>
      )}
    </nav>
  );
};

export default MobileNavbar;
