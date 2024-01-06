export const parentVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.4,
      staggerChildren: 0.7,
    },
  },
};

export const childVariants = {
  hidden: { y: "100vh" },
  visible: {
    y: 0,
    transition: {
      duration: 1,
    },
  },
};
