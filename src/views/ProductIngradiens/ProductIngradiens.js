import React from "react";
import Heading from "../../components/Heading/Heading";
import FooterSubPage from "../../components/navigations/FooterSubPage.js/FooterSubPage";
import ProductIngradiensList from "../../components/ProductIngradientsList/ProductIngradiensList";
import PageHeader from "../../pages/PageHeader/PageHeader";
import styles from "./ProductIngradiens.module.scss";

const ProductIngradiens = () => {
  return (
    <div className={styles.ingradiensComponent}>
      <PageHeader />
      <Heading blackTitle="Składniki" />
      <ProductIngradiensList />
      <FooterSubPage />
    </div>
  );
};

export default ProductIngradiens;
