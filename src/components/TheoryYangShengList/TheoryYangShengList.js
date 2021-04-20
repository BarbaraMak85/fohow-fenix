import React from "react";
import { theoryYangShengData } from "../../data/theoryYangShengData";
import TheoryYangShengListElement from "../TheoryYangShengListElement/TheoryYangShengListElement";
import styles from "./TheoryYangShengList.module.scss";

const TheoryYangShengList = () => {
  return (
    <div className={styles.wrapperTheoryYangSheng}>
      <ul className={styles.componentYangSheng}>
        {theoryYangShengData.map((item) => {
          // const { title, content, image } = item;
          return (
            <TheoryYangShengListElement
              // title={title}
              // content={content}
              // image={image}
              {...item}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default TheoryYangShengList;
