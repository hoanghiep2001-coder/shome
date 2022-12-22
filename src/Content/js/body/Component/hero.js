import APIs from "../../../API";
import logo from "../../../image/thumb/LOGO_demo.png";
import { FaAviato } from "react-icons/fa";
function Hero() {
  return (
    <div
      className="body__hero"
      style={{
        padding: "100px 0",
      }}
    >
      <div className="container">
        <FaAviato className="body__hero-logo" />
        <h1 className="body__hero-slogan">{APIs.bodyAPIs.hero.slogan}</h1>
        <p className="body__hero-desc">{APIs.bodyAPIs.hero.description}</p>
      </div>
    </div>
  );
}

export default Hero;
