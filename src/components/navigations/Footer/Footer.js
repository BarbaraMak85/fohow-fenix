import React from "react";
import { Link } from "react-scroll";
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <div className={styles.componentFooter}>
      <div className={styles.componentFooterText}>
        <h5 className={styles.componentFooterTitleAbout}>
          Podstawową misją korporacji fohow feniks jest:
        </h5>
        <p className={styles.componentFooterParagraph}>
          Nasze Przedstawicielstwo prowadzi obsługę klientów w formie doradczej,
          a także obsługę biznesową naszych konsultantów, którym od lat jesteśmy
          wdzięczni za zaufanie i wspólny rozwój, a także propagowanie i
          rozpowszechnianie produktów oraz wiedzy z zakresu TCM, której nas uczą
          profilaktycznie i terapeutycznie specjaliści TCM FOHOW. Zapraszamy
          osoby zainteresowane produktami,współpracą, jak również osoby,które są
          zainteresowane wiedzą o Firmie i produktach
        </p>
      </div>
      <div className={styles.componentFooterList}>
        <h3 className={styles.componentFooterTitle}>MENU</h3>
        <ul className={styles.componentFooterElement}>
          <Link
            style={{ cursor: "pointer" }}
            activeClass={styles.active}
            to="about"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            <li>o nas</li>
          </Link>
          <Link
            activeClass={styles.active}
            style={{ cursor: "pointer" }}
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
            style={{ cursor: "pointer" }}
            to="theoryYangSheng"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            <li>Theory Yang Sheng</li>
          </Link>
          <Link
            activeClass={styles.active}
            style={{ cursor: "pointer" }}
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
            style={{ cursor: "pointer" }}
            to="contact"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            <li>Kontakt</li>
          </Link>
        </ul>
      </div>
      <div className={styles.componentFooterList}>
        <h3 className={styles.componentFooterTitle}>PRODUKTY</h3>
        <ul className={styles.componentFooterElement}>
          <li>seria odżywcza</li>
          <li>seria regulująca</li>
          <li>seria pielęgnacyjna</li>
          <li>seria terapeutyczna</li>
          <li>zdrowy sen</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
