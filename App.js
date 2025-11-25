import "./App.css";
import Contact from "./Pages/Contact/Contact";
import Home from "./Pages/Home/Home";
import Pricing from "./Pages/Pricing/Pricing";
import Training from "./Pages/Training/Training";
import ServicesSection from "./Pages/Services/Services";



import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./Components/ScrollToTop";

function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop>
          <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/training" element={<Training />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<><Home /><ServicesSection /></>} />
        </Routes>
        </ScrollToTop>
      </Router>
    </div>
  );
}

export default App;
