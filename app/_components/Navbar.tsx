"use client";
import { usePathname, useRouter } from "next/navigation";
import { IoSettingsOutline } from "react-icons/io5";

import { Bookend } from "@components/Bookend";
import { NavItem } from "@components/NavItem";

export const Navbar = () => {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <div className="flex justify-between fixed top-0 left-0 w-full border-b-4 border-slate-900 mt-12 px-12">
      <div className="flex">
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
      </div>
      <IoSettingsOutline size={35} className="text-slate-900 mt-4 mr-4" />
    </div>
  );
};
