import { Link } from "react-router-dom";
import { FaExternalLinkAlt } from "react-icons/fa";
import { projectsData } from "../constants/projectsData";

const Projects = () => {
  return (
    <div className="py-10 px-44">
      <h1 className="font-semibold text-2xl text-center">Projects</h1>
      <div className="py-10 flex gap-5 flex-wrap">
        {projectsData.map((project) => (
          <div className="relative group" key={project.id}>
            <img
              src={project.imgPath}
              alt="work-1"
              className="w-[570px] h-[500px] rounded-lg"
            />
            <div className="absolute left-0 bottom-0 h-full py-4 px-16 hidden group-hover:flex flex-col items-center gap-4 justify-end bg-gradient-to-t from-black to-transparent">
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
    </div>
  );
};
export default Projects;
