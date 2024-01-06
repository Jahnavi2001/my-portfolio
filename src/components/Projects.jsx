import { Link } from "react-router-dom";
import { FaExternalLinkAlt } from "react-icons/fa";
import { projectsData } from "../constants/projectsData";
import { motion } from "framer-motion";
import BottomNavigation from "./BottomNavigation";
import { containerVariants } from "../utils/page-animations";
import { childVariants, parentVariants } from "../utils/text-animations";

const Projects = () => {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="py-10 px-8 lg:px-44 overflow-hidden"
    >
      <h1 className="font-semibold text-2xl text-center">Projects</h1>
      <motion.div
        className="py-10 flex gap-5 flex-wrap justify-center"
        variants={parentVariants}
      >
        {projectsData.map((project) => (
          <motion.div
            className="relative group"
            key={project.id}
            variants={childVariants}
            whileHover={{
              scale: 1.02,
            }}
          >
            <img
              src={project.imgPath}
              alt="work-1"
              className="w-[570px] h-[500px] rounded-lg"
            />
            <div className="absolute left-0 bottom-0 h-full py-4 px-16 hidden group-hover:flex flex-col items-center gap-4 justify-end bg-gradient-to-t from-stone-800 to-transparent rounded-lg">
              <h1 className="font-semibold text-lg">{project.name}</h1>
              <p className="font-thin text-sm font-customText">
                {project.text}
              </p>
              <Link to={project.redirectUrl} target="_blank">
                <div className="w-10 h-10 rounded-full bg-white text-black flex justify-center items-center">
                  <FaExternalLinkAlt />
                </div>
              </Link>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <BottomNavigation text="Let's go over the resume" path="/resume" />
    </motion.div>
  );
};
export default Projects;
