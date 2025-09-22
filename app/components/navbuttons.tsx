"use client";

import React from "react";
import { FaBell, FaHeadphones, FaSun } from "react-icons/fa";
import { FaPhotoFilm } from "react-icons/fa6";

const Navbuttons = () => {
  return (
    <menu className="flex flex-col gap-2 lg:flex-row items-center ">
      <button
        onClick={() => {
          console.log("clicked");
        }}
        className="flex items-center justify-center gap-1 bg-gray-100 p-1 lg:p-3 rounded-sm w-full lg:w-auto"
      >
        <FaPhotoFilm />
        Gallery
      </button>
      <button className="flex items-center justify-center gap-1 bg-gray-100 p-1 rounded-sm lg:p-3 w-full lg:w-auto">
        <FaHeadphones />
        Support
      </button>
      <button className="bg-gray-100 p-1 rounded-sm lg:p-3 w-full lg:w-auto flex justify-center">
        <FaBell />
      </button>
      <button className="bg-gray-100 p-1 rounded-sm lg:p-3 w-full lg:w-auto flex justify-center">
        <FaSun />
      </button>
    </menu>
  );
};

export default Navbuttons;
