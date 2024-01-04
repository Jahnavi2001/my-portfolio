import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./components/About";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Header from "./components/Header";

const App = () => {
  return (
    <BrowserRouter>
      <div
        className="bg-[#1D232A] text-white w-screen"
        style={{ fontFamily: "Verdana, sans-serif", minHeight: '100vh'}}
      >
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
