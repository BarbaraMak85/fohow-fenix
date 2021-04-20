import React from "react";
import { Link } from "react-router-dom";
import Button from "../../components/Button/Button";
import Heading from "../../components/Heading/Heading";
import TheoryYangShengList from "../../components/TheoryYangShengList/TheoryYangShengList";
import { routes } from "../../routes/routes";
import styles from "../TheoryYangSheng/TheoryYangSheng.module.scss";

const TheoryYangSheng = ({ hideButton }) => {
  return (
    <div>
      <Heading
        blackTitle="Teoria"
        goldTitle="Yang Sheng"
        secondaryText="Czym jest?"
      />
      <TheoryYangShengList />
      <Link className={styles.linkCoponent} to={routes.theoryYangShengPage}>
        <div className={styles.buttonYangShang}>
          {hideButton ? null : (
            <Link to={routes.theoryYangShengPage}>
              <div className={styles.kordicepsParagraph}>
                <Button>Więcej</Button>
              </div>
            </Link>
          )}
        </div>
      </Link>
    </div>
  );
};

export default TheoryYangSheng;
