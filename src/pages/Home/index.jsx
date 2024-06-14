import Body from "../../Content/js/body/body";
import Footer from "../../Content/js/footer/footer";
import Header from "../../Content/js/header/header";
function Home() {
  return (
    // ahihi
    <>
      <Header />
      <Body
        className="body"
        Hero={true}
        FilterPageComp={false}
        Filter={true}
        ListRoom={true}
        OutstandingArea={true}
        SubAboutUs={true}
        Convenient={true}
        Service={true}
      />
      <Footer />
    </>
  );
}

export default Home;
