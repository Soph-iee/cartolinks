"use client";

import { Dispatch, SetStateAction } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

type ToggleBtnProps = {
  showAll: boolean;
  setShowAll: Dispatch<SetStateAction<boolean>>;
};

const ToggleBtn = ({ showAll, setShowAll }: ToggleBtnProps) => {
  return (
    <button
      className="flex  items-center text-blue-500 gap-1 "
      onClick={() => {
        setShowAll(!showAll);
      }}
    >
      Show all
      <span>
        {showAll ? (
          <IoIosArrowDown className="transition-all duration-700 ease-in" />
        ) : (
          <IoIosArrowUp className="transition-all duration-700 ease-in" />
        )}
      </span>
    </button>
  );
};

export default ToggleBtn;
