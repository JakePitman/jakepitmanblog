"use client";
import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { motion, useAnimation } from "framer-motion";
import dynamic from "next/dynamic";

import { useAnimationContext } from "@contexts/animationContext";
import { DesktopNavBar } from "@components/DesktopNavBar";
import { MobileNavBar } from "@components/MobileNavBar";
import { NavDropdown } from "@components/NavDropdown";

const underlineVariants = {
  hidden: { scaleX: 0 },
  underlineExpanding: { scaleX: 1, transition: { delay: 0.5, duration: 0.7 } },
};

// This is necessary because the DotsEmbellishment component changes how many divs it renders according to the window width, which would otherwise lead to a hydration error.
const DotsEmbellishment = dynamic(() => import("./DotsEmbellishment"), {
  ssr: false,
});

export const Navbar = () => {
  const router = useRouter();
  const pathname = usePathname();
  const controls = useAnimation();
  const { setOpeningAnimationIsCompleted } = useAnimationContext();
  const [dropdownIsOpen, setDropdownIsOpen] = useState<Boolean>(false);

  const sequence = async () => {
    await controls.start("underlineExpanding");
    // This makes the MainContentWrapper trigger its children to render
    // Necessary because the underline is lazy loaded
    setOpeningAnimationIsCompleted(true);
    await controls.start("itemsAppearing");
  };

  return (
    <motion.div
      initial="hidden"
      animate={controls}
      onViewportEnter={sequence}
      className="w-full flex flex-col relative"
    >
      <div className="flex flex-col items-center">
        <div className="flex justify-between w-full sm:mt-12 sm:px-12 mb-4 sm:mb-0">
          <MobileNavBar
            currentPath={pathname}
            goToPath={router.push}
            toggleDropdown={() => setDropdownIsOpen((prev) => !prev)}
          />
          <DesktopNavBar
            currentPath={pathname}
            goToPath={router.push}
            toggleDropdown={() => setDropdownIsOpen((prev) => !prev)}
          />
        </div>
        <motion.div
          variants={underlineVariants}
          className="h-4 w-full bg-slate-900"
        />
      </div>
      <div className="relative">
        <DotsEmbellishment />
        {dropdownIsOpen && (
          <NavDropdown
            dismiss={() => setDropdownIsOpen(false)}
            pathname={pathname}
            goToPath={(path: string) => {
              router.push(path);
            }}
          />
        )}
      </div>
    </motion.div>
  );
};
