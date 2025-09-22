import React from "react";
import Link from "next/link";

import type { NavIcon } from "../type";

const Navitems = ({ icon }: { icon: NavIcon }) => {
  return (
    <div className="nav-item">
      <Link href="/"  className="flex gap-2 p-3 rounded-md lg:block bg-gray-100 lg:bg-transparent ">
        {<icon.icon  className="text-2xl lg:text-xl"/>}
        <span className="block capitalize font-medium lg:hidden">{icon.item}</span>
      </Link>

    </div>
  );
};

export default Navitems;
