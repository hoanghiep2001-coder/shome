import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import FilterPage from "./pages/Filter";
import Home from "./pages/Home";
import Details from "./pages/Details/details";

import { Helmet } from 'react-helmet';
import logo from "../src/Content/image/thumb/LOGO2_fix.png";
import ScrollToTop from "./pages/function/scrollToTop";
function App() {
  return (
    <>
      <Helmet>
        <title>Shome</title>
        <link rel="icon" href={logo} />
      </Helmet>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/filter" element={<FilterPage />}></Route>
            <Route path="/details" element={<Details />}></Route>
          </Routes>
        </div>
      </Router>

      <ScrollToTop/>
    </>
  );
}

export default App;
