import React from "react";
import styles from "./PersonContact.module.scss";

const Person = ({
  personImage,
  personName,
  personPhone,
  personEmail,
  personPosition,
}) => {
  return (
    <div className={styles.componentPersonContent}>
      <li className={styles.personList} key={personName}>
        <img
          className={styles.personPhoto}
          src={personImage}
          alt={personName}
          // style={{ width: "150px", height: "200px" }}
        />
        <h3 className={styles.personName}>{personName}</h3>
        <p className={styles.personPhone}>{personPhone}</p>
        <p className={styles.personEmail}>{personEmail}</p>
        <p className={styles.personPosition}>{personPosition}</p>
      </li>
    </div>
  );
};
export default Person;
