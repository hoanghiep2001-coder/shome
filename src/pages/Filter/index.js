// import Body from "~/Content/js/body/body";
// import Footer from "~/Content/js/footer/footer";

import Body from "../../Content/js/body/body";
import Footer from "../../Content/js/footer/footer";
import Header from "../../Content/js/header/header";

// import Header from "~/Content/js/header/header";

function FilterPage() {
  return (
    <>
      <Header></Header>
      <Body
        Hero={false}
        FilterPageComp={true}
        Filter={false}
        ListRoom={true}
        SubAboutUs={false}
        Convenient={false}
        Service={false}
      ></Body>
      <Footer></Footer>
    </>
  );
}

export default FilterPage;
