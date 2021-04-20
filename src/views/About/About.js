import React from "react";
import styles from "./About.module.scss";

import Onas from "../../assets/images/onas_photo.jpg";
import Fenix from "../../assets/images/feniks.jpg";
import Heading from "../../components/Heading/Heading";

const About = () => {
  return (
    <div>
      <Heading blackTitle="O" goldTitle="nas" secondaryText="Nasza misja" />
      <div className={styles.componetAbaut}>
        <div className={styles.componentAboutImages}>
          <img className={styles.componentAboutImg} src={Fenix} />
        </div>
        <div className={styles.componentAboutText}>
          <p>
            Z Firmą "FOHOW" jesteśmy związani od 2011 roku. Oczywiście każde
            doświadczenie wprowadza do naszego życia naukę o "nim". Najpierw
            zaczęliśmy stosować produkty, które znacznie wspomogły zdrowie nasze
            i naszych dzieci, potem regularnie polecaliśmy produkty,aż wreszcie
            w 2014 roku ropoczęliśmy współpracę z FOHOW Polska. Dziś jesteśmy
            zaszczyceni faktem,że możemy być Oficjalnym Przedstawicielem Firmy
            FOHOW. Nasze Przedstawicielstwo prowadzi obsługę klientów w formie
            doradczej, a także obsługę biznesową naszych konsultantów, którym od
            lat jesteśmy wdzięczni za zaufanie i wspólny rozwój, a także
            propagowanie i rozpowszechnianie produktów oraz wiedzy z zakresu
            TCM, której nas uczą profilaktycznie i terapeutycznie specjaliści
            TCM FOHOW. Zapraszamy osoby zainteresowane produktami,współpracą,
            jak również osoby,które są zainteresowane wiedzą o Firmie i
            produktach <br />z wdzięcznością
            <br /> Joanna
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
