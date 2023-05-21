import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FilterPage from "./pages/Filter";
import Home from "./pages/Home";
import {Helmet } from 'react-helmet';
import logo from "../src/Content/image/thumb/LOGO2_fix.png";
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
        </Routes>
      </div>
    </Router>
    </>
  );
}

export default App;
