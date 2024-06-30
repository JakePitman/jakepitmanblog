"use client";
import { usePathname, useRouter } from "next/navigation";

import { NavItem } from "@components/NavItem";

export const Navbar = () => {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <div className="fixed top-0 left-0 w-full border-solid border-[1px] mt-12 px-12">
      <ul className="flex">
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
      </ul>
    </div>
  );
};
