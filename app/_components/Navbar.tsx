"use client";
import { useRouter } from "next/navigation";

import { NavItem } from "@components/NavItem";

export const Navbar = () => {
  const router = useRouter();

  return (
    <div className="fixed top-0 left-0 w-full">
      <ul className="flex">
        <NavItem label="Home" onClick={() => router.push("/")} />
        <NavItem label="Articles" onClick={() => router.push("/articles")} />
        <NavItem label="Contact" onClick={() => router.push("/contact")} />
      </ul>
    </div>
  );
};
