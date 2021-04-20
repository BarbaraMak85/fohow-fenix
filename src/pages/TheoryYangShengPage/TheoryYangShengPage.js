import React from "react";
import FooterSubPage from "../../components/navigations/FooterSubPage.js/FooterSubPage";

import TheoryYangSheng from "../../views/TheoryYangSheng/TheoryYangSheng";
import PageHeader from "../PageHeader/PageHeader";
import styles from "./TheoryYangShengPage.module.scss";

const TheoryYangShengPage = () => {
  return (
    <div>
      <PageHeader />
      <TheoryYangSheng hideButton={true} />
      <FooterSubPage />
    </div>
  );
};

export default TheoryYangShengPage;
