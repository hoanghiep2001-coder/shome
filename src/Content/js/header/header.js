import { React, useState, useEffect } from "react";
import Navigation from "./Component/nav";
import Logo from "../../image/thumb/LOGO2_fix.png";
function Header() {
  const [headerClass, setHeaderClass] = useState("header");
  useEffect(() => {
    const handleStickyHeaderNav = () => {
      if (window.scrollY >= 200) {
        setHeaderClass("header is-sticky");
      } else {
        setHeaderClass("header");
      }
    };

    window.addEventListener("scroll", handleStickyHeaderNav);

    return () => {
      window.removeEventListener("scroll", handleStickyHeaderNav);
    };
  }, [headerClass]);

  return (
    <div className={headerClass}>
      <div className="header__container container d-lg-flex align-items-lg-center justify-content-lg-between">
        <a href="/" className="header__homePage">
          <img src={Logo} className="icon-LOGO_demo" />
        </a>

        <Navigation />
      </div>
    </div>
  );
}

export default Header;
