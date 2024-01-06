export const containerVariants = {
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