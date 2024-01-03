import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="py-6 px-8 flex justify-between items-center">
      <p style={{ fontFamily: "PT Serif" }} className="tracking-[0.5rem]">
        <Link to="/">JAHNAVI</Link>
      </p>
      <ul className="flex gap-4">
        <li className="px-4 py-2 rounded-lg hover:bg-[#2B3038]">
          <Link to="/about">About</Link>
        </li>
        <li className="px-5 py-2 rounded-lg hover:bg-[#2B3038]">
          <Link to="/projects">Projects</Link>
        </li>
        <li className="px-5 py-2 rounded-lg hover:bg-[#2B3038]">
          <Link to="/resume">Resume</Link>
        </li>
        <li className="px-5 py-2 rounded-lg hover:bg-[#2B3038]">
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
