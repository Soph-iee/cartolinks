import React from "react";
import Tools from "../data/tools";
// import { FaArrowDown } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import ToolCard from "./toolCard";

const Toolsection = () => {
  return (
    <ul>
      <header className="flex items-center justify-between">
        <h2 className="text-2xl "> Generate</h2>
        <button className="flex  items-center text-blue-500 gap-1">
          Show all
          <span>
            <IoIosArrowDown />
          </span>
        </button>
      </header>
      <div className="  grid grid-cols-4 gap-6 text-xs">
        {Tools &&
          Tools.map((tool) => {
            return (
              <li key={tool.id}>
                <ToolCard tool={tool} />
              </li>
            );
          })}
      </div>
    </ul>
  );
};

export default Toolsection;
