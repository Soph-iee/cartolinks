"use client";

import React, { Dispatch, SetStateAction } from "react";
import { FaBell, FaHeadphones } from "react-icons/fa";
import { FaPhotoFilm } from "react-icons/fa6";
import ThemeToggle from "../ThemeToggle";

const Buttons = [
  { icon: FaPhotoFilm, name: "Gallery" },
  { icon: FaHeadphones, name: "Support" },
  { icon: FaBell, name: "notifications" },
];

type NavButtonsProps = {
  activeNavBtn: string;
  setActiveNavBtn: Dispatch<SetStateAction<string>>;
};
const Navbuttons = ({ activeNavBtn, setActiveNavBtn }: NavButtonsProps) => {
  // const { theme, setTheme } = useTheme();

  return (
    <menu className="flex  gap-3 lg:gap-2 lg:flex-row items-center dark:bg-gray-950 lg:p-2 flex-col ">
      {Buttons.map((btn, i) => {
        return (
          <button
            className={`flex items-center justify-center gap-1 ${
              activeNavBtn === btn.name
                ? "bg-white  dark:bg-gray-800 dark:text-gray-200 shadow-md"
                : "bg-gray-50  dark:bg-gray-900"
            }  p-1 lg:p-2 rounded-sm w-full lg:w-auto`}
            key={i}
            onClick={() => {
              setActiveNavBtn(btn.name);
            }}
          >
            {<btn.icon />}
            <span>{i <= 1 ? btn.name : ""}</span>
          </button>
        );
      })}
      <div className="hidden lg:static">
        <ThemeToggle setActiveNavBtn={setActiveNavBtn} />
      </div>
    </menu>
  );
};

export default Navbuttons;
