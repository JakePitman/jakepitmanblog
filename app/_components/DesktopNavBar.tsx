import { IoSettingsOutline } from "react-icons/io5";
import { motion } from "framer-motion";

import { Bookend } from "@components/Bookend";
import { NavItem } from "@components/NavItem";
import { fadeIn } from "@utils/sharedVariants";

type DesktopNavBarProps = {
  currentPath: string;
  goToPath: (path: string) => void;
  toggleDropdown: () => void;
};

export const DesktopNavBar = ({
  currentPath,
  goToPath,
  toggleDropdown,
}: DesktopNavBarProps) => {
  return (
    <>
      <motion.div
        className="hidden sm:flex"
        variants={{
          itemsAppearing: {
            transition: { staggerChildren: 0.1, delay: 0 },
          },
        }}
        data-testid="desktop-nav-bar"
      >
        <Bookend />
        <div className="flex">
          <NavItem
            labelMessageId="navbar.home"
            labelDefaultMessage="Home"
            onClick={() => goToPath("/")}
            isActive={currentPath === "/"}
            symbol="⏀"
          />
          <NavItem
            labelMessageId="navbar.articles"
            labelDefaultMessage="Articles"
            onClick={() => goToPath("/articles")}
            isActive={currentPath === "/articles"}
            symbol="⎅"
          />
          <NavItem
            labelMessageId="navbar.contact"
            labelDefaultMessage="Contact"
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
        data-testid="desktop-nav-settings-button"
      >
        <IoSettingsOutline size={35} className="text-slate-900  mr-4" />
      </motion.button>
    </>
  );
};
