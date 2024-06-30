import { motion } from "framer-motion";

const NavItemVariants = {
  hidden: { opacity: 0 },
  itemsAppearing: { opacity: 1 },
};
export const Bookend = () => (
  <motion.div variants={NavItemVariants} className="flex mr-12 mb-8">
    <div className="w-16 bg-slate-500" />
    <div className="w-4 ml-4 bg-slate-500" />
  </motion.div>
);
