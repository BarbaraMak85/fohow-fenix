import React from "react";
import styles from "./ProductIngradiensList.module.scss";
import { compositionData } from "../../data/compositionData";
import ProductIngradientsListElement from "../ProductIngradientsListElement/ProductIngradientsListElement";
import { Link } from "react-router-dom";
import { routes } from "../../routes/routes";
import Button from "../Button/Button";

const ProductIngradiensList = ({ mainView }) => {
  return (
    <>
      <ul className={styles.productIngradientsComponent}>
        {compositionData.map((composition, index) => {
          const { id, title, subtitle, image, description } = composition;
          return (
            <>
              {mainView ? (
                <>
                  {index === 0 ? (
                    <>
                      <ProductIngradientsListElement
                        id={id}
                        title={title}
                        subtitle={subtitle}
                        image={image}
                        // description={description}
                      />

                      <Link
                        to={routes.ingredients}
                        style={{ textAlign: "center" }}
                      >
                        <Button>Więcej</Button>
                      </Link>
                    </>
                  ) : null}
                </>
              ) : (
                <ProductIngradientsListElement
                  id={id}
                  title={title}
                  subtitle={subtitle}
                  image={image}
                  description={description}
                />
              )}
            </>
          );
        })}
      </ul>
    </>
  );
};

export default ProductIngradiensList;
