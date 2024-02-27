import helloImage from "../assets/hello.svg";
import { motion } from "framer-motion";
import BottomNavigation from "./BottomNavigation";
import { containerVariants } from "../utils/page-animations";
import { childVariants, parentVariants } from "../utils/text-animations";
import SocialLinks from "./SocialLinks";

const svgVariants = {
  visible: {
    rotate: [-5, 15],
    transition: {
      repeatType: "reverse",
      repeat: Infinity,
      duration: 1,
      ease: "easeOut",
    },
  },
};

const Home = () => {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="py-10 lg:pt-40 px-7 lg:px-44 overflow-hidden"
    >
      <div className="flex flex-col gap-8 lg:flex-row items-center">
        <motion.div
          variants={parentVariants}
          className="flex flex-col gap-4 lg:w-1/2 justify-center"
          style={{ fontFamily: "Trebuchet MS, sans-serif" }}
        >
          <motion.p variants={childVariants} className="font-semibold text-5xl">
            Hello,
          </motion.p>
          <motion.p variants={childVariants} className="font-semibold text-5xl">
            I'm <span className="text-pink-600">Jahnavi Vuyyuru</span>
          </motion.p>
          <motion.p
            variants={childVariants}
            className="font-customText font-thin text-justify pt-4"
          >
            Frontend Developer with 2+ years of experience, specialized in
            JavaScript, ReactJS and VueJS. Proficient in collaborative project
            delivery, feature development, performance optimization and
            adherence to coding standards. Seeking a challenging role to
            leverage frontend expertise and contribute to projects, while
            embracing cutting-edge technologies.
          </motion.p>
          <motion.div variants={childVariants} className="flex pt-4">
            <SocialLinks />
          </motion.div>
        </motion.div>
        <div className="lg:w-1/2 text-center flex justify-center pt-12">
          <motion.img
            className="w-60 h-60 lg:w-64 lg:h-64"
            src={helloImage}
            variants={svgVariants}
          />
        </div>
      </div>

      <BottomNavigation text="Let's explore more about me" path="/about" />
    </motion.div>
  );
};

export default Home;
