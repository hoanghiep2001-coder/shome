import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FilterPage from "./pages/Filter";
import Home from "./pages/Home";
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/filter" element={<FilterPage />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
