import { motion } from "framer-motion";

import { fadeIn } from "@utils/sharedVariants";

type MobileNavContentProps = {
  currentPath: string;
  goToPath: (path: string) => void;
};
export const MobileNavContent = ({
  currentPath,
  goToPath,
}: MobileNavContentProps) => {
  let label;
  switch (currentPath) {
    case "/":
      label = "Home";
      break;
    case "/articles":
      label = "Articles";
      break;
    case "/contact":
      label = "Contact";
      break;
    default:
      label = "";
  }
  return (
    <div className="flex sm:hidden">
      <motion.h1
        variants={fadeIn}
        className="text-30 text-shadow-small font-medium text-slate-900"
      >
        {label}
      </motion.h1>
    </div>
  );
};
