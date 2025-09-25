"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import NavIcons from "../data/navicons";
import Navitems from "./navitems";
import Navbuttons from "./navbuttons";
import logo from "../../public/logo.png";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const Navbar = () => {
  const [activeNavBtn, setActiveNavBtn] = useState("home");
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="flex items-center relative lg:static w-full justify-between mb-4">
      <section className="logo-section flex gap-4 items-center">
        <Link href="/">
          <Image
            src={logo}
            alt="krea_logo"
            width={225}
            height={225}
            className="w-20 h-20"
          />
        </Link>
        <div className="user">
          <Image
            src="/user.jpg"
            width={20}
            height={20}
            className="rounded-full border border-gray-600"
            alt="Picture of the author"
          />
        </div>
        <p
          className="flex items-center gap-1 relative cursor-pointer"
          onClick={() => {
            setToggle(!toggle);
          }}
        >
          Blessing
          {toggle ? (
            <span>
              <IoIosArrowUp className="text-xs" />
            </span>
          ) : (
            <span>
              <IoIosArrowDown className="text-xs" />
            </span>
          )}
          <span className="absolute inset-y-6 -inset-x-0  ">
            {toggle ? (
              <button
                className="capitalize text-md border-b 
             border-gray-100 rounded-sm  py-1 "
              >
                logout
              </button>
            ) : (
              ""
            )}
          </span>
        </p>
      </section>
      <section className=" flex flex-col lg:flex-row gap-3 mb-3 lg:mb-0 lg:p-2 lg:bg-gray-50 shadow-sm lg:rounded-lg ">
        {NavIcons &&
          NavIcons.map((icon) => {
            return (
              <Navitems
                icon={icon}
                key={icon.id}
                activeNavBtn={activeNavBtn}
                setActiveNavBtn={setActiveNavBtn}
              />
            );
          })}
      </section>
      <div className="bg-gray-700  lg:self-end lg:bg-transparent absolute w-1/2  h-screen top-0 left-0 p-4 flex flex-col lg:flex-row lg:w-auto lg:h-auto lg:static lg:items-center lg:gap-12 justify-between ">
        <section className="nav-buttons">
          <Navbuttons
            activeNavBtn={activeNavBtn}
            setActiveNavBtn={setActiveNavBtn}
          />
        </section>
      </div>
    </nav>
  );
};

export default Navbar;
