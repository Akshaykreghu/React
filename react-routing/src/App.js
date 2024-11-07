import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Hooks from "./pages/Hooks";

function App() {
  return (
    <div className="All">
      <Router>
        <Navbar />
        <div className="App">
          <div className="route-box">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/hooks" element={<Hooks/>} />
          </Routes>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
