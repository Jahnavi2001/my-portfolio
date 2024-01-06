import { Routes, Route, useLocation } from "react-router-dom";
import About from "./components/About";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Header from "./components/Header";
import { AnimatePresence } from "framer-motion";
import ScrollToTop from "./components/ScrollToTop";

const App = () => {
  const location = useLocation();

  return (
    <div
      className="bg-[#1D232A] text-white w-screen"
      style={{ fontFamily: "Verdana, sans-serif", minHeight: "100vh" }}
    >
      <Header />
      <ScrollToTop />
      <AnimatePresence>
        <Routes location={location} key={location.key}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
};

export default App;
