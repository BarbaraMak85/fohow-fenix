import React from "react";
import { Link } from "react-router-dom";
import styles from "./ProductsCategoriesListElement.module.scss";

const ProductsCategoriesListElement = ({ category }) => {
  const { id, title, icon, content } = category;

  return (
    <Link
      style={{ textDecoration: "none" }}
      to={{
        pathname: `/kategoria/${title}`,
        //  NIE MYLIC ZE STANEM APLIKACJI, JEST TO STAN LINKU CZYLI TO CO LINK ZE SOBĄ MOŻE ZABRAĆ W MOMENCIE PRZEJSCIA NA INNĄ PODSTRONĘ I ZAGWARANTOWAC KOMPONENTOWI NA KTORY CHCEMY SIĘ DOSTAC.
        state: {
          category,
        },
      }}
    >
      <li className={styles.componentProductElementList} key={id}>
        <img className={styles.componentProductImage} src={icon} alt={title} />
        <h3 className={styles.componentTitleProduct}>{title}</h3>
        <p className={styles.componentTextProduct}>{content}</p>
      </li>
    </Link>
  );
};

export default ProductsCategoriesListElement;
