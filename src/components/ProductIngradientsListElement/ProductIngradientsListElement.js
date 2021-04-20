import React from "react";
import styles from "./ProductIngradientsListElement.module.scss";

const ProductIngradientsListElement = ({
  id,
  title,
  subtitle,
  image,
  description,
}) => {
  return (
    <li className={styles.ingradientsElementLi} key={id}>
      <h3 className={styles.titleIngradients}>{title}</h3>
      <h5 className={styles.subtitleIngradients}>{subtitle}</h5>
      <img className={styles.imagesIngradients} src={image} alt={title} />
      <p className={styles.paragraphIngradients}>{description}</p>
    </li>
  );
};

export default ProductIngradientsListElement;
