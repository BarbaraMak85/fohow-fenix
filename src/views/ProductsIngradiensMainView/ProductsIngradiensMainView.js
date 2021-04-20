import React from "react";
import Heading from "../../components/Heading/Heading";
import ProductIngradiensList from "../../components/ProductIngradientsList/ProductIngradiensList";
import styles from "./ProductsIngradiensMainView.module.scss";

const ProductIngradiensMainView = () => {
  return (
    <div className={styles.ingradiensComponentMainView}>
      <Heading blackTitle="Składniki" />
      <ProductIngradiensList mainView />
    </div>
  );
};

export default ProductIngradiensMainView;
