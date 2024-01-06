import VerticalLineWithCircles from "./VerticalLineWithCircles";
import { workData } from "../constants/workData";
import { motion } from "framer-motion";
import { childVariants, parentVariants } from "../utils/text-animations";

const WorkExperience = () => {
  return (
    <motion.div
      variants={parentVariants}
      initial="hidden"
      animate="visible"
      className="py-10 overflow-hidden"
    >
      {workData.map((work) => (
        <motion.div
          className="flex gap-4"
          key={work.id}
          variants={childVariants}
        >
          <div className="min-w-24 lg:min-w-52">
            <h1 className="font-semibold tracking-widest text-right break-words">
              {work.company}
            </h1>
            <div className="text-gray-300 my-5 font-thin tracking-wider font-customText">
              <p className="text-right">{work.startDate}</p>
              <p className="text-right pr-8">-</p>
              <p className="text-right">{work.endDate}</p>
            </div>
          </div>
          <div className="w-5">
            <VerticalLineWithCircles />
          </div>
          <div>
            <h1 className="tracking-[0.09rem]">{work.role}</h1>
            <p className="text-gray-300 my-4 text-justify font-thin tracking-wider font-customText">
              {work.description}
            </p>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};
export default WorkExperience;
