import helloImage from "../assets/hello.svg";
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
      className="py-10 lg:pt-48 px-7 lg:px-44 flex flex-col gap-8 lg:flex-row"
      style={{ fontFamily: "Trebuchet MS, sans-serif" }}
    >
      <div className="flex flex-col gap-4 lg:w-1/2 justify-center">
        <p className="font-semibold text-5xl">Hi,</p>
        <p className="font-semibold text-5xl">I'm <span className="text-pink-600">Jahnavi Vuyyuru</span></p>
        <p className="font-customText font-thin text-justify">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
      <div className="lg:w-1/2 text-center flex justify-center">
        <motion.img
          className="w-80 h-80"
          src={helloImage}
          initial="hidden"
          animate="visible"
          variants={svgVariants}
        />
      </div>
    </motion.div>
  );
};

export default Home;
