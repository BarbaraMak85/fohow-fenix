import React, { useContext } from "react";
import ProductsCategoriesListElement from "../ProductsCategoriesListElement/ProductsCategoriesListElement";
import styles from "./ProductsCategoriesList.module.scss";
import AppContext from "../../context/context";

const ProductsCategoriesList = () => {
  const context = useContext(AppContext);
  return (
    <>
      <ul className={styles.componentProductList}>
        {context.products.map((category) => {
          // const { id, icon, title, content, categories } = category;
          return (
            <ProductsCategoriesListElement
              // id={id}
              // icon={icon}
              // title={title}
              // content={content}
              // categories={categories}
              category={category}
            />
          );
        })}
      </ul>
    </>
  );
};

export default ProductsCategoriesList;
