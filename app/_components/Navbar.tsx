"use client";
import { usePathname, useRouter } from "next/navigation";
import { IoSettingsOutline } from "react-icons/io5";
import { motion } from "framer-motion";

import { Bookend } from "@components/Bookend";
import { NavItem } from "@components/NavItem";
import { useWindowDimensions } from "@hooks/useWindowDimensions";

const DotGroup = () => (
  <div className="relative mx-12">
    <div className="absolute right-[-7px] w-[3px] h-[3px] bg-slate-900" />
    <div className="absolute right-[1px] w-[3px] h-[3px] bg-slate-900" />
    <div className="absolute top-[5px] w-[3px] h-[3px] bg-slate-900" />
  </div>
);

const DotsEmbellishment = () => {
  const { width } = useWindowDimensions();
  const numberOfDotGroups = width / 20;
  console.log(numberOfDotGroups);

  return (
    <div className="flex justify-center mt-4 w-full">
      <div className="flex">
        {Array.from({ length: numberOfDotGroups / 2 }).map((_, i) => (
          <DotGroup key={i} />
        ))}
        <DotGroup />
        {Array.from({ length: numberOfDotGroups / 2 }).map((_, i) => (
          <DotGroup key={i} />
        ))}
      </div>
    </div>
  );
};

export const Navbar = () => {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      transition={{ staggerChildren: 0.1 }}
      className="w-full flex flex-col fixed top-0 left-0"
    >
      <div className="flex justify-between w-full border-b-4 border-slate-900 mt-12 px-12">
        <motion.div className="flex">
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
        <IoSettingsOutline size={35} className="text-slate-900 mt-4 mr-4" />
      </div>
      <DotsEmbellishment />
    </motion.div>
  );
};
