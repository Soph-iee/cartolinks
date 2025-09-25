"use client";

import React, { Dispatch, SetStateAction } from "react";
import { FaBell, FaHeadphones, FaSun } from "react-icons/fa";
import { FaPhotoFilm } from "react-icons/fa6";

const Buttons = [
  { icon: FaPhotoFilm, name: "Gallery" },
  { icon: FaHeadphones, name: "Support" },
  { icon: FaBell, name: "notifications" },
  { icon: FaSun, name: "theme" },
];

type NavButtonsProps = {
  activeNavBtn: string;
  setActiveNavBtn: Dispatch<SetStateAction<string>>;
};
const Navbuttons = ({ activeNavBtn, setActiveNavBtn }: NavButtonsProps) => {
  return (
    <menu className="flex flex-col gap-2 lg:flex-row items-center bg-gray-50 p-2 ">
      {Buttons.map((btn, i) => {
        return (
          <button
            className={`flex items-center justify-center gap-1 ${
              activeNavBtn === btn.name ? "bg-white shadow-sm" : "bg-gray-50"
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
    </menu>
  );
};

export default Navbuttons;
