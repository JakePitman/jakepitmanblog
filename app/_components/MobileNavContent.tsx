import { motion } from "framer-motion";
import { GiHamburgerMenu } from "react-icons/gi";

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
    <div className="px-12 w-full flex justify-between items-center sm:hidden bg-slate-900">
      <motion.h1
        variants={fadeIn}
        className="text-36 tracking-widest text-shadow font-medium text-slate-300"
      >
        {label}
      </motion.h1>
      <motion.div variants={fadeIn}>
        <GiHamburgerMenu className="text-slate-300" size={36} />
      </motion.div>
    </div>
  );
};
