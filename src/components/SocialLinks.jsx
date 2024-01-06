import { Link } from "react-router-dom";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { AiFillMail } from "react-icons/ai";
import { motion } from "framer-motion";

const motionProps = {
  whileHover: { scale: 1.5 },
  transition: { type: "spring", stiffness: 300 },
};

const SocialLinks = () => {
  return (
    <ul className="flex gap-8 items-center justify-center">
      <motion.li {...motionProps}>
        <Link to="mailto:jahnavivuyyuru179@gmail.com">
          <AiFillMail className="w-10 h-10" />
        </Link>
      </motion.li>
      <motion.li {...motionProps}>
        <Link
          to="https://www.linkedin.com/in/jahnavi-vuyyuru-17900ks/"
          target="_blank"
        >
          <FaLinkedin className="w-8 h-8" />
        </Link>
      </motion.li>
      <motion.li {...motionProps}>
        <Link to="https://github.com/Jahnavi2001" target="_blank">
          <FaGithub className="w-8 h-8" />
        </Link>
      </motion.li>
    </ul>
  );
};

export default SocialLinks;
