import React from "react";
import { Switch, Route } from "react-router-dom";
import IngredientsPage from "../pages/IngredientsPage/IngredientsPage";
import KordicepsPage from "../pages/KordicepsPage/KordicepsPage";
import MainPage from "../pages/MainPage/MainPage";
import ProductsCategoriesPage from "../pages/ProductsCategoriesPage/ProductsCategoriesPage";
import ProductsPage from "../pages/ProductsPage/ProductsPage";
import RegulationsPage from "../pages/RegulationsPage/RegulationsPage";
import SingleProductsPage from "../pages/SingleProductPage/SingleProductsPage";
//import TheoryYangShengPage from "../views/TheoryYangSheng/TheoryYangSheng";
import TheoryYangShengPage from "../pages/TheoryYangShengPage/TheoryYangShengPage";
import { routes } from "../routes/routes";

const Router = () => {
  return (
    <Switch>
      <Route exact path={routes.mainPage} component={MainPage} />
      <Route path={routes.kordicepsPage} component={KordicepsPage} />
      <Route path={routes.categoryPage} component={ProductsCategoriesPage} />
      <Route exact path={routes.productsPage} component={ProductsPage} />
      <Route path={routes.singleProductCard} component={SingleProductsPage} />
      <Route path={routes.ingredients} component={IngredientsPage} />
      <Route
        path={routes.theoryYangShengPage}
        component={TheoryYangShengPage}
      />

      <Route path={routes.regulations} component={RegulationsPage} />
    </Switch>
  );
};

export default Router;
