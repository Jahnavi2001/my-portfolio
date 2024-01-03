import { useState } from "react";
import profileImage from "../assets/profile.png";
import Experience from "./Experience";
import Skills from "./Skills";
import Education from "./Education";

const tabs = [
  {
    id: "experience",
    label: "Experience",
    component: <Experience />,
  },
  {
    id: "skills",
    label: "Skills",
    component: <Skills />,
  },
  {
    id: "education",
    label: "Education",
    component: <Education />,
  },
];

const About = () => {
  const [activeTab, setActiveTab] = useState("experience");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div>
      <h1>About Me</h1>
      <img src={profileImage} alt="profile" className="w-44 h-44" />
      <p>Some content</p>
      <div>
        <ul className="flex gap-12">
          {tabs.map((tab) => (
            <li
              key={tab.id}
              className={
                "cursor-pointer " +
                (activeTab === tab.id ? "border-b-2 border-b-pink-600" : "")
              }
              onClick={() => handleTabClick(tab.id)}
            >
              {tab.label}
            </li>
          ))}
        </ul>
        {tabs.find((tab) => activeTab === tab.id)?.component}
      </div>
    </div>
  );
};

export default About;
