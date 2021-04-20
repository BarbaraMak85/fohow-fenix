import React from "react";
import { Link } from "react-router-dom";
import FooterSubPage from "../../components/navigations/FooterSubPage.js/FooterSubPage";
import { routes } from "../../routes/routes";
import PageHeader from "../PageHeader/PageHeader";
import styles from "./SingleProductsPage.module.scss";

const SingleProductsPage = (props) => {
  console.log(props);
  const {
    id,
    name,
    code,
    image,
    compositionOfProduct,
    howToUseProduct,
    dosage,
    storageMethod,
    description,
    comments,
  } = props.location.state;

  return (
    <>
      <div className={styles.componentMainSingleProductPage}>
        <PageHeader />
        <div className={styles.wrapperSinglePage}>
          <h1 className={styles.componentTitleSinglePage}>{name}</h1>
          <div className={styles.componentImageSinglePage}>
            <img className={styles.singelProductImage} src={image} />
          </div>

          <div className={styles.componentParagraphsSingleProductPage}>
            <p className={styles.paragraphSinglePage}>
              <span className={styles.titleSinglePage}>Kod produktu: </span>
              {code}
            </p>

            <p className={styles.paragraphSinglePage}>
              <span className={styles.titleSinglePage}>Skład produktu: </span>
              {compositionOfProduct}
            </p>
            <p className={styles.paragraphSinglePage}>
              <span className={styles.titleSinglePage}>Sposób użycia: </span>
              {howToUseProduct}
            </p>
            <p className={styles.paragraphSinglePage}>
              <span className={styles.titleSinglePage}>Dawkowanie: </span>
              {dosage}
            </p>

            <p className={styles.paragraphSinglePage}>
              <span className={styles.titleSinglePage}>
                Sposób przechowywania:
              </span>
              {storageMethod}
            </p>

            <p className={styles.paragraphSinglePage}>
              <span className={styles.titleSinglePage}>Opis produktu: </span>
              {description}
            </p>

            <p className={styles.paragraphSinglePage}>
              <span className={styles.titleSinglePage}>Uwagi: </span>
              {comments}
            </p>
          </div>

          <Link
            className={styles.componentIngradientsProductPage}
            to={routes.ingredients}
          >
            zobacz nasze składniki
          </Link>
        </div>
        <FooterSubPage />
      </div>
    </>
  );
};

export default SingleProductsPage;
