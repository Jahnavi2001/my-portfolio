import { motion } from "framer-motion";
import BottomNavigation from "./BottomNavigation";
import { containerVariants } from "../utils/framer-page-variants";

const Resume = () => {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="py-10 px-8 lg:px-44"
    >
      <div className="flex flex-col items-center">
        <h1 className="font-semibold text-2xl">Resume</h1>
        <p className="my-4 text-gray-400">View (or) Download the resume</p>
        <div className="py-10 px-4 w-full overflow-scroll flex justify-center">
          <iframe
            className="w-[750px] h-[800px] border border-gray-600 p-2 rounded-md"
            title="Resume"
            src="https://drive.google.com/file/d/1XWE8xvCUyIaPuhl-CsOJBoWTHO6wh1v0/preview"
          ></iframe>
        </div>
      </div>

      <BottomNavigation text="Let's establish a connection" path="/contact" />
    </motion.div>
  );
};

export default Resume;
