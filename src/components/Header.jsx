import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars } from "react-icons/fa";

const NavItem = ({ to, children }) => {
  const { pathname } = useLocation();

  return (
    <Link to={to}>
      <li
        className={
          "px-4 py-2 rounded-lg hover:bg-gray-700 " +
          (pathname === to ? "text-pink-600" : "")
        }
      >
        {children}
      </li>
    </Link>
  );
};

const Header = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav className="shadow-md py-4 px-4 lg:px-28 flex flex-wrap lg:flex-nowrap justify-between items-center sticky top-0 z-10 bg-[#1D232A]">
      <div className="flex justify-between items-center w-full lg:w-auto">
        <p className="tracking-[0.5rem] font-serif">
          <Link to="/">JAHNAVI</Link>
        </p>
        <button
          className="text-xl block lg:hidden"
          onClick={() => setNavbarOpen(!navbarOpen)}
        >
          <FaBars />
        </button>
      </div>
      <ul
        className={`lg:flex ${
          navbarOpen ? "" : "hidden"
        } flex-col lg:flex-row pt-4 lg:pt-0`}
      >
        <NavItem to="/about">About</NavItem>
        <NavItem to="/projects">Projects</NavItem>
        <NavItem to="/resume">Resume</NavItem>
        <NavItem to="/contact">Contact</NavItem>
      </ul>
    </nav>
  );
};

export default Header;
