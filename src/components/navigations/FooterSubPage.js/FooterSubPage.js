import React from "react";
import styles from "./FooterSubPage.module.scss";
const FooterSubPage = () => {
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
    </div>
  );
};

export default FooterSubPage;
