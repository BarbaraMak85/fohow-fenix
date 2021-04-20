import React from "react";
import Heading from "../../components/Heading/Heading";
import ProductsCategoriesList from "../../components/ProductsCategoriesList/ProductsCategoriesList";
import styles from "../../components/ProductsCategoriesList/ProductsCategoriesList.module.scss";

const ProductsCategories = () => {
  return (
    <div className={styles.componentProduct}>
      <Heading
        whiteTitle="Produkty"
        secondaryText="Zapraszamy do zapoznania się z naszymi produktami"
      />
      <ProductsCategoriesList />
    </div>
  );
};

export default ProductsCategories;
