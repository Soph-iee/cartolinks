import React, { Dispatch, SetStateAction } from "react";
import Link from "next/link";

import type { NavIcon } from "../types/type";
type NavItemsProps = {
  activeNavBtn: string;
  setActiveNavBtn: Dispatch<SetStateAction<string>>;
  icon: NavIcon;
};

const Navitems = ({ icon, activeNavBtn, setActiveNavBtn }: NavItemsProps) => {
  return (
    <div className="nav-item">
      <Link
        href="/"
        className={`flex gap-2 p-3 rounded-md lg:block bg-gray-50  justify-center lg:justify-normal ${
          activeNavBtn === icon.item
            ? "bg-white dark:bg-gray-700 shadow-md text-gray-900 dark:text-gray-200"
            : "dark:bg-gray-900 bg-gray-50"
        } transition-all duration-300 ease-in`}
        onClick={() => {
          setActiveNavBtn(icon.item);
        }}
      >
        {<icon.icon className="text-2xl lg:text-xl" />}
        <span className="block capitalize font-medium lg:hidden">
          {icon.item}
        </span>
      </Link>
    </div>
  );
};

export default Navitems;
