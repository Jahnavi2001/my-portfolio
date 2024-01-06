import { useNavigate } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";

const buttonVariants = {
  visible: {
    x: [-5, 5],
    transition: {
      repeatType: "reverse",
      repeat: Infinity,
      duration: 0.4,
      ease: "easeOut",
    },
  },
};

const BottomNavigation = ({ text, path }) => {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate(path);
  };

  return (
    <button
      className="mt-10 flex items-center gap-4"
      onClick={handleNavigation}
    >
      {text}
      <motion.span
        variants={buttonVariants}
        animate="visible"
        className="text-pink-600"
      >
        <FaArrowRight />
      </motion.span>
    </button>
  );
};

export default BottomNavigation;
