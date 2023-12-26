import Body from "../../Content/js/body/body";
import Footer from "../../Content/js/footer/footer";
import Header from "../../Content/js/header/header";
function Home() {

  let SHome_Data = JSON.parse(localStorage.getItem("SHome_Data"));
  if(!SHome_Data) {
    SHome_Data = {
      userAccounts: []
    }
    localStorage.setItem("SHome_Data", JSON.stringify(SHome_Data));
  } else {
    console.log("List: ", SHome_Data);
  }

  return (
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
