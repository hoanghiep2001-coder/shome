import { React, useEffect } from "react";

import Navigation from "./Component/nav";
import Logo from "../../image/thumb/LOGO2_fix.png";
function Header() {
  useEffect(() => {
    const header = document.querySelector("#header");
    const handleStickyHeaderNav = () => {
      if (window.scrollY >= 200) {
        header.classList.add("is-sticky")
      } else {
        header.classList.remove("is-sticky")
      }
    };

    window.addEventListener("scroll", handleStickyHeaderNav);

    return () => {
      window.removeEventListener("scroll", handleStickyHeaderNav);
    };
  }, []);

  return (
    <div id="header" className={"header"}>
      <div className="header__container container d-lg-flex align-items-lg-center justify-content-lg-between">
        <a href="/" className="header__homePage">
          <img src={Logo} alt="Logo" className="icon-LOGO_demo" />
        </a>

        <Navigation />
      </div>
    </div>
  );
}

export default Header;
