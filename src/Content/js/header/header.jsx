import { React, useEffect } from "react";
import Navigation from "./Component/nav";
import Logo from "../../image/thumb/LOGO2_fix.png";
import classnames from "classnames/bind";
import styles from "./Header.module.scss";
const cb = classnames.bind(styles);
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
      <div className={cb("header__container", "container", "d-flex", "align-items-center", "justify-content-between")}>
        <a href="/" className={cb("header__homePage")}>
          <img src={Logo} alt="Logo" className={cb("icon-LOGO_demo")} />
        </a>
        <Navigation />
      </div>
    </div>
  );
}

export default Header;
