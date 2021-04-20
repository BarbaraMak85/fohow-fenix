import React from "react";
import Heading from "../../components/Heading/Heading";
import styles from "./ProductsCategoriesPage.module.scss";
import PageHeader from "../PageHeader/PageHeader";
import { Link } from "react-router-dom";
import FooterSubPage from "../../components/navigations/FooterSubPage.js/FooterSubPage";

const ProductsCategoriesPage = (props) => {
  console.log(props);

  const { content, categories, products } = props.location.state.category;

  return (
    <div className={styles.componentCategories}>
      <PageHeader />

      <Heading whiteTitle="Kategorie produktów" />
      <div className={styles.clinerComponentWrapper}>
        {/* <h2 className={styles.titleCliner}>{title}</h2> */}
        <h3 className={styles.contentCliner}>{content}</h3>
        <div className={styles.wrapperProduct}>
          <ul
            className={
              categories.length > 2
                ? styles.clinerComponent
                : styles.clinerComponentTwoCollumns
            }
          >
            {categories.map((category, index) => {
              const { name, icon } = category;
              return (
                <Link
                  className={styles.linkComponent}
                  to={{
                    pathname: `/produkty/${name}`,
                    state: {
                      products: products.filter(
                        (product) => product.type === name
                      ),
                      name,
                    },
                  }}
                >
                  <li className={styles.clinerListComponent} key={index}>
                    <h4 className={styles.clinerCategoryName}>{name}</h4>
                    <img
                      className={
                        name.includes("kapsułki") ||
                        name === "pasty" ||
                        name === "żele"
                          ? styles.smallImg
                          : styles.imgProduct
                      }
                      src={icon}
                      alt={name}
                    />
                  </li>
                </Link>
              );
            })}
          </ul>
        </div>
      </div>

      <FooterSubPage />
    </div>
  );
};

export default ProductsCategoriesPage;
