import React from "react";
import topImg from "../../assets/images/top_podstrona.jpg";
import NavbarManager from "../../components/navigations/Navbar/NavbarManager";
import styles from "./PageHeader.module.scss";

const PageHeader = () => {
  return (
    <>
      <NavbarManager />
      <img className={styles.topImg} src={topImg} />
    </>
  );
};

export default PageHeader;
