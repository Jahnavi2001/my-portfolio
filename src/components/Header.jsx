import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="py-6 px-8 flex justify-between items-center">
      <p style={{ fontFamily: "PT Serif" }} className="tracking-[0.5rem]">
        <Link to="/">JAHNAVI</Link>
      </p>
      <ul className="flex gap-4">
        <Link to="/about">
          <li className="px-4 py-2 rounded-lg hover:bg-[#2B3038]">About</li>
        </Link>

        <Link to="/projects">
          <li className="px-5 py-2 rounded-lg hover:bg-[#2B3038]">Projects</li>
        </Link>

        <Link to="/resume">
          <li className="px-5 py-2 rounded-lg hover:bg-[#2B3038]">Resume</li>
        </Link>

        <Link to="/contact">
          <li className="px-5 py-2 rounded-lg hover:bg-[#2B3038]">Contact</li>
        </Link>
      </ul>
    </div>
  );
};

export default Header;
