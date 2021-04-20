import React from "react";
import { Link } from "react-router-dom";
import FooterSubPage from "../../components/navigations/FooterSubPage.js/FooterSubPage";
import PageHeader from "../PageHeader/PageHeader";
import styles from "./ProductsPage.module.scss";

const ProductsPage = (props) => {
  console.log(props);
  const { products, name, image } = props.location.state;
  return (
    <div className={styles.componentsProductPage}>
      <PageHeader />
      <div className={styles.wrraperProductPage}>
        {/* <h1>To jest Products Page</h1> */}
        <h1 className={styles.componentTitleMainProductPage}>{name}</h1>
        <ul className={styles.componentproductPageList}>
          {products.map((product) => {
            const { id, name, image } = product;
            return (
              <Link
                className={styles.linkComponent}
                to={{
                  pathname: `/produkt/${name}`,
                  state: {
                    ...product,
                  },
                }}
              >
                <li className={styles.componentListContentProductPage} key={id}>
                  <h3 className={styles.componentTitleProductPage}>{name}</h3>
                  <div className={styles.photoPages}>
                    <img className={styles.componentImage} src={image} />
                  </div>
                </li>
              </Link>
            );
          })}
        </ul>
      </div>
      <FooterSubPage />
    </div>
  );
};

export default ProductsPage;
