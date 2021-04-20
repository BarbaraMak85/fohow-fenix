import React from "react";
import styles from "./TheoryYangShengListElement.module.scss";

const TheoryYangShengListElement = ({ title, content, image }) => {
  return (
    <li className={styles.yangShangElemen} key={title}>
      <img className={styles.yangShengImage} src={image} alt={title} />
      <h3 className={styles.titleYangSheng}>{title}</h3>
      <p className={styles.pharagraphyangSheng}>{content}</p>
    </li>
  );
};

export default TheoryYangShengListElement;
