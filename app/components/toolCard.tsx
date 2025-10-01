import Link from "next/link";
import { Tooltype } from "../types/type";

const ToolCard = ({ tool }: { tool: Tooltype }) => {
  return (
    <Link
      href={`/${tool.id}`}
      className="flex  items-center gap-2 p-2 shadow-sm hover:scale-95 transition-all duration-500"
    >
      <div className={`${tool.bgColor} rounded-lg p-3`}>
        {<tool.icon className="text-xl text-white" />}
      </div>

      <div>
        <p className="capitalize font-medium">
          {tool.name}
          {tool.isNew ? (
            <button className="capitalize  bg-blue-400 px-1.5 ml-2 py-0.5 text-white rounded-xl font-medium">
              new
            </button>
          ) : (
            ""
          )}
        </p>
        <p>{tool.description}</p>
      </div>
      <button className= " dark:bg-gray-800 bg-gray-100 px-3 py-1 rounded-xl capitalize font-medium cursor-pointer">
        open
      </button>
    </Link>
  );
};

export default ToolCard;
