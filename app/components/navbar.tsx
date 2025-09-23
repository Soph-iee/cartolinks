import React from "react";
import Link from "next/link";
import Image from "next/image";
import NavIcons from "../data/navicons";
import Navitems from "./navitems";
import Navbuttons from "./navbuttons";

const Navbar = () => {
  return (
    <nav className="flex items-center relative lg:static w-full justify-center">
      <section className="logo-section flex gap-4 items-center">
        <Link href="/">Logo</Link>
        <div className="user">
          <Image
            src="/user.jpg"
            width={20}
            height={20}
            className="rounded-full border border-gray-600"
            alt="Picture of the author"
          />
        </div>
        <p>Blessing</p>
      </section>
      <div className="bg-gray-700 lg:bg-transparent absolute w-1/2 h-screen top-0 left-0 p-4 flex flex-col lg:flex-row lg:w-auto lg:h-auto lg:static lg:items-center lg:gap-12">
        <section className=" flex flex-col lg:flex-row gap-3 mb-3 lg:mb-0 lg:p-2 lg:bg-gray-100 lg:rounded-lg">
          {NavIcons &&
            NavIcons.map((icon) => {
              return <Navitems icon={icon} key={icon.id} />;
            })}
        </section>
        <section className="nav-buttons">
          <Navbuttons />
        </section>
      </div>
    </nav>
  );
};

export default Navbar;
