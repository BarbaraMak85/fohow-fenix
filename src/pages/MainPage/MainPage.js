import React, { Component } from "react";
import CookieInfo from "../../components/CookieInfo/CookieInfo";
import Footer from "../../components/navigations/Footer/Footer";
import NavbarManager from "../../components/navigations/Navbar/NavbarManager";
import About from "../../views/About/About";
import Contact from "../../views/Contact/Contact";
import Home from "../../views/Home/Home";
import Kordiceps from "../../views/Kordiceps/Kordiceps";
import ProductIngradiens from "../../views/ProductIngradiens/ProductIngradiens";
import ProductsCategories from "../../views/ProductsCategories/ProductsCategories";
import ProductIngradiensMainView from "../../views/ProductsIngradiensMainView/ProductsIngradiensMainView";
import TheoryYangSheng from "../../views/TheoryYangSheng/TheoryYangSheng";

class MainPage extends Component {
  state = {
    isHamburgerMenuOpen: false,
    isHamburgerIconVisible: true,
  };

  toggleHamburgerMenuVisibility = () => {
    this.setState({
      isHamburgerMenuOpen: !this.state.isHamburgerMenuOpen,
    });
  };

  openHamburgerMenu = () => {
    this.setState({
      isHamburgerMenuOpen: true,
    });
  };

  closeHamburgerMenu = () => {
    this.setState({
      isHamburgerMenuOpen: false,
    });
  };

  render() {
    return (
      <div>
        <NavbarManager
          pageType="main"
          isHamburgerMenuOpen={this.state.isHamburgerMenuOpen}
          openHamburgerMenu={this.openHamburgerMenu}
          closeHamburgerMenu={this.closeHamburgerMenu}
          isHamburgerIconVisible={this.state.isHamburgerIconVisible}
          toggleHamburgerMenuVisibility={this.toggleHamburgerMenuVisibility}
        />
        <CookieInfo />
        <div id="start">
          <Home />
        </div>
        <div id="about">
          <About />
        </div>
        <div id="kordiceps">
          <Kordiceps />
        </div>
        <div id="productIngradiens">
          <ProductIngradiensMainView />
        </div>
        <div id="theoryYangSheng">
          <TheoryYangSheng />
        </div>
        <div id="productsCategories">
          <ProductsCategories />
        </div>
        <div id="contact">
          <Contact />
        </div>
        <Footer />
      </div>
    );
  }
}

export default MainPage;
