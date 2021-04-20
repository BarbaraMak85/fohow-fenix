import React from "react";
import { useMediaQuery } from "react-responsive";
import MobileNavbar from "./MobileNavbar";
import Navbar from "./Navbar";

const NavbarManager = ({
  pageType,
  isHamburgerMenuOpen,
  toggleHamburgerMenuVisibility,
}) => {
  const isMobile = useMediaQuery({
    query: "(max-width: 768px)",
  });

  return (
    <div>
      {isMobile ? (
        <MobileNavbar
          pageType={pageType}
          isHamburgerMenuOpen={isHamburgerMenuOpen}
          toggleHamburgerMenuVisibility={toggleHamburgerMenuVisibility}
        />
      ) : (
        <Navbar pageType={pageType} />
      )}
    </div>
  );
};

export default NavbarManager;
