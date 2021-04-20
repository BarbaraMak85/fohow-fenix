import React from "react";

import styles from "../ProductsCategoriesPage/ProductsCategoriesPage.module.scss";

import Kordiceps from "../../views/Kordiceps/Kordiceps";
import PageHeader from "../PageHeader/PageHeader";
import FooterSubPage from "../../components/navigations/FooterSubPage.js/FooterSubPage";
const KordicepsPage = () => {
  return (
    <div>
      <div className={styles.componentCategories}>
        <PageHeader />
        {/* <Heading whiteTitle="Kordiceps" /> */}
        <Kordiceps hideButton={true} fullText />
        <FooterSubPage />
      </div>
    </div>
  );
};

export default KordicepsPage;
