import { Link } from "react-router-dom";
import { FaExternalLinkAlt } from "react-icons/fa";
import { projectsData } from "../constants/projectsData";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {
    x: "100vw",
  },
  visible: {
    x: 0,
    transition: { delay: 0.3, ease: "easeInOut" },
  },
  exit: {
    x: "-100vw",
    transition: { ease: "easeInOut" },
  },
};

const Projects = () => {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="py-10 px-8 lg:px-44"
    >
      <h1 className="font-semibold text-2xl text-center">Projects</h1>
      <div className="py-10 flex gap-5 flex-wrap justify-center">
        {projectsData.map((project) => (
          <div className="relative group" key={project.id}>
            <img
              src={project.imgPath}
              alt="work-1"
              className="w-[570px] h-[500px] rounded-lg"
            />
            <div className="absolute left-0 bottom-0 h-full py-4 px-16 hidden group-hover:flex flex-col items-center gap-4 justify-end bg-gradient-to-t from-black to-transparent rounded-lg">
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
          </div>
        ))}
      </div>
    </motion.div>
  );
};
export default Projects;
