import { IoSettingsOutline } from "react-icons/io5";
import { motion } from "framer-motion";

import { Bookend } from "@components/Bookend";
import { NavItem } from "@components/NavItem";
import { fadeIn } from "@utils/sharedVariants";

type DesktopNavContentProps = {
  currentPath: string;
  goToPath: (path: string) => void;
  toggleDropdown: () => void;
};

export const DesktopNavContent = ({
  currentPath,
  goToPath,
  toggleDropdown,
}: DesktopNavContentProps) => {
  return (
    <>
      <motion.div
        className="hidden sm:flex"
        variants={{
          itemsAppearing: {
            transition: { staggerChildren: 0.1, delay: 0 },
          },
        }}
      >
        <Bookend />
        <div className="flex">
          <NavItem
            label="Home"
            onClick={() => goToPath("/")}
            isActive={currentPath === "/"}
            symbol="⏀"
          />
          <NavItem
            label="Articles"
            onClick={() => goToPath("/articles")}
            isActive={currentPath === "/articles"}
            symbol="⎅"
          />
          <NavItem
            label="Contact"
            onClick={() => goToPath("/contact")}
            isActive={currentPath === "/contact"}
            symbol="⏃"
          />
        </div>
      </motion.div>
      <motion.button
        variants={fadeIn}
        className="hidden sm:block mb-8"
        onClick={toggleDropdown}
      >
        <IoSettingsOutline size={35} className="text-slate-900  mr-4" />
      </motion.button>
    </>
  );
};
