import { useState } from "react";
import profileImage from "../assets/profile.jpeg";
import WorkExperience from "./WorkExperience";
import Skills from "./Skills";
import Education from "./Education";
import { motion } from "framer-motion";
import BottomNavigation from "./BottomNavigation";
import { containerVariants } from "../utils/page-animations";

const tabs = [
  {
    id: "experience",
    label: "Experience",
    component: <WorkExperience />,
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
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="py-10 px-8 lg:px-44"
    >
      <div className="flex flex-col items-center">
        <h1 className="font-semibold text-2xl">About Me</h1>
        <img src={profileImage} alt="profile" className="w-72 h-72 object-cover  mt-8 mb-4 rounded-full" />
        <p className="text-gray-300">Developer</p>
      </div>
      <div className="mt-12">
        <ul className="flex gap-12 lg:gap-20 border-b-[0.5px] border-b-neutral-700">
          {tabs.map((tab) => (
            <li
              key={tab.id}
              className={
                "cursor-pointer pb-2 " +
                (activeTab === tab.id
                  ? "border-b-2 border-b-pink-600 text-pink-500"
                  : "text-gray-300")
              }
              onClick={() => handleTabClick(tab.id)}
            >
              {tab.label}
            </li>
          ))}
        </ul>
        {tabs.find((tab) => activeTab === tab.id)?.component}
      </div>

      <BottomNavigation
        text="Let's take a look at my projects"
        path="/projects"
      />
    </motion.div>
  );
};

export default About;
