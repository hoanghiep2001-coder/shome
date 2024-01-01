import APIs from "../../../../data/API";
import logo from "../../../../image/thumb/LOGO2_fix.png";
import classnames from "classnames/bind";
import styles from "./hero.module.scss";
import { useContext } from "react";
import { Shome_Context } from "../../../../../provider/ShomeContext";
const cb = classnames.bind(styles);

function Hero() {
  const context = useContext(Shome_Context);

  return (
    <div
      className="body__hero"
      style={{
        padding: "100px 0",
      }}
    >
      <div className="container">
        <img
          src={logo}
          className={cb(
            "body__hero-logo",
            context.webResponsiveStyle && "mobile-logo"
          )}
        />
        <h1
          className={cb(
            "body__hero-slogan",
            context.webResponsiveStyle && "mobile-slogan"
          )}
        >
          {APIs.bodyAPIs.hero.slogan}
        </h1>
        <p className="body__hero-desc">{APIs.bodyAPIs.hero.description}</p>
      </div>
    </div>
  );
}

export default Hero;
