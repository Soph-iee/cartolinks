"use client";
import Tools from "../data/tools";
import ToolCard from "./toolCard";
import ToggleBtn from "./toggleBtn";
import { useState } from "react";

const Toolsection = () => {
  const [showAll, setShowAll] = useState(false);
  const visibleTools = showAll ? Tools : Tools.slice(0, Tools.length / 2);
  return (
    <ul className="mt-4">
      <header className="flex items-center justify-between">
        <h2 className="text-xl   text-gray-900"> Generate</h2>
        <ToggleBtn showAll={showAll} setShowAll={setShowAll} />
      </header>
      <div className="  grid grid-cols-1 gap-6 text-xs  md:grid-cols-3 lg:grid-cols-4">
        {Tools &&
          visibleTools.map((tool) => {
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
