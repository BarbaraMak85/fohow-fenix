import React from "react";
import styles from "./Button.module.scss";

const Button = ({ children }) => {
  return <button className={styles.btnGold}>{children}</button>;
};

export default Button;
