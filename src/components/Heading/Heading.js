import React from "react";
import styles from "./Heading.module.scss";

const Heading = ({ blackTitle, whiteTitle, goldTitle, secondaryText }) => {
  return (
    <div className={styles.headingComponent}>
      <h1
        className={blackTitle ? styles.blackTextStyles : styles.whiteTextStyles}
      >
        {blackTitle ? blackTitle : whiteTitle}
        <span className={styles.decorationTextGold}> {goldTitle}</span>
      </h1>
      <p
        className={
          blackTitle ? styles.greySecondaryText : styles.goldSecondaryText
        }
      >
        {secondaryText}
      </p>
    </div>
  );
};

export default Heading;
