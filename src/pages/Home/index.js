import Body from "../../Content/js/body/body";
import Footer from "../../Content/js/footer/footer";
import Header from "../../Content/js/header/header";
function Home() {
  return (
    <>
      <Header />
      <Body
        Hero={true}
        FilterPageComp={false}
        Filter={true}
        ListRoom={true}
        SubAboutUs={true}
        Convenient={true}
        Service={true}
      />
      <Footer />
    </>
  );
}

export default Home;
