"use client";
import { usePathname, useRouter } from "next/navigation";
import { IoSettingsOutline } from "react-icons/io5";
import { motion, useAnimation } from "framer-motion";

import { Bookend } from "@components/Bookend";
import { NavItem } from "@components/NavItem";
import { useWindowDimensions } from "@hooks/useWindowDimensions";
import { fadeIn } from "@utils/sharedVariants";

const DotGroup = () => (
  <motion.div variants={fadeIn} className="relative mx-12 h-12">
    <div className="absolute right-[-7px] w-[3px] h-[3px] bg-slate-900" />
    <div className="absolute right-[1px] w-[3px] h-[3px] bg-slate-900" />
    <div className="absolute top-[5px] w-[3px] h-[3px] bg-slate-900" />
  </motion.div>
);

const DotsEmbellishment = () => {
  const { width } = useWindowDimensions();
  const numberOfDotGroups = width / 20;
  const staggerDuration = 0.025;

  return (
    <div className="flex justify-center mt-4 w-full overflow-x-hidden">
      <div className="flex">
        <motion.div
          variants={{
            itemsAppearing: {
              transition: {
                staggerChildren: staggerDuration,
                staggerDirection: -1,
              },
            },
          }}
          className="flex"
        >
          {Array.from({ length: numberOfDotGroups / 2 }).map((_, i) => (
            <DotGroup key={i} />
          ))}
        </motion.div>
        <DotGroup />
        <motion.div
          className="flex"
          variants={{
            itemsAppearing: {
              transition: {
                staggerChildren: staggerDuration,
                staggerDirection: 1,
              },
            },
          }}
        >
          {Array.from({ length: numberOfDotGroups / 2 }).map((_, i) => (
            <DotGroup key={i} />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

const underlineVariants = {
  hidden: { scaleX: 0 },
  underlineExpanding: { scaleX: 1, transition: { duration: 0.7 } },
};

export const Navbar = () => {
  const router = useRouter();
  const pathname = usePathname();
  const controls = useAnimation();

  const sequence = async () => {
    await controls.start("underlineExpanding");
    await controls.start("itemsAppearing");
  };

  return (
    <motion.div
      initial="hidden"
      animate={controls}
      onViewportEnter={sequence}
      // transition={{ staggerChildren: 0.1 }}
      className="w-full flex flex-col"
    >
      <div className="flex flex-col items-center">
        <div className="flex justify-between w-full mt-12 px-12">
          <motion.div
            className="flex"
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
                onClick={() => router.push("/")}
                isActive={pathname === "/"}
                symbol="⏀"
              />
              <NavItem
                label="Articles"
                onClick={() => router.push("/articles")}
                isActive={pathname === "/articles"}
                symbol="⎅"
              />
              <NavItem
                label="Contact"
                onClick={() => router.push("/contact")}
                isActive={pathname === "/contact"}
                symbol="⏃"
              />
            </div>
          </motion.div>
          <motion.button variants={fadeIn} className="mb-8">
            <IoSettingsOutline size={35} className="text-slate-900  mr-4" />
          </motion.button>
        </div>
        <motion.div
          variants={underlineVariants}
          className="h-4 w-full bg-slate-900"
        />
      </div>
      <DotsEmbellishment />
    </motion.div>
  );
};
