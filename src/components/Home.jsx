import helloImage from "../assets/hello.svg";
import { motion } from "framer-motion";
import BottomNavigation from "./BottomNavigation";
import { containerVariants } from "../utils/framer-page-variants";

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
      className="py-10 lg:pt-40 px-7 lg:px-44"
    >
      <div className="flex flex-col gap-8 lg:flex-row items-center">
        <div
          className="flex flex-col gap-4 lg:w-1/2 justify-center"
          style={{ fontFamily: "Trebuchet MS, sans-serif" }}
        >
          <p className="font-semibold text-5xl">Hi,</p>
          <p className="font-semibold text-5xl">
            I'm <span className="text-pink-600">Jahnavi Vuyyuru</span>
          </p>
          <p className="font-customText font-thin text-justify pt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <div className="lg:w-1/2 text-center flex justify-center pt-12">
          <motion.img
            className="w-60 h-60 lg:w-64 lg:h-64"
            src={helloImage}
            initial="hidden"
            animate="visible"
            variants={svgVariants}
          />
        </div>
      </div>

      <BottomNavigation text="Let's explore more about me" path="/about" />
    </motion.div>
  );
};

export default Home;
