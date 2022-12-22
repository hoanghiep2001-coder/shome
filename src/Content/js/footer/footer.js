import APIs from "../../API";
import FooterAboutUs from "./Component/footerAboutUs";
import CompanyInfo from "./Component/companyInfo";

function Footer() {
    return (
      <div className="footer">
        <div className="container">
          <FooterAboutUs />
          <CompanyInfo />
        </div>
      </div>
    )
  }

  export default Footer;