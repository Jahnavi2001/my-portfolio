import VerticalLineWithCircles from "./VerticalLineWithCircles";
import { educationData } from "../constants/educationData";
import { motion } from "framer-motion";
import { childVariants, parentVariants } from "../utils/text-animations";

const Education = () => {
  return (
    <motion.div
      variants={parentVariants}
      initial="hidden"
      animate="visible"
      className="py-10 overflow-hidden"
    >
      {educationData.map((education) => (
        <motion.div
          variants={childVariants}
          className="flex gap-4"
          key={education.id}
        >
          <div className="min-w-40 max-w-24 lg:w-48 text-right">
            <h1 className="font-semibold tracking-widest break-words">
              {education.degree}
            </h1>
          </div>
          <div className="w-5">
            <VerticalLineWithCircles/>
          </div>
          <div>
            <h1 className="tracking-[0.09rem] break-all">{education.school}</h1>
            <div className="text-gray-300 my-4 text-justify font-thin tracking-wider font-customText">
              {education.yearOfStudy}
            </div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};
export default Education;
