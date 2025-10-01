// import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import NavIcons from "../data/navicons";
import Navitems from "./navitems";
import Navbuttons from "./navbuttons";
import logo from "../../public/logo.png";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { DeviceNavbarProps } from "../types/type";

const DesktopNavbar = ({
  activeNavBtn,
  setActiveNavBtn,
  toggle,
  setToggle,
}: DeviceNavbarProps) => {
  return (
    <nav
      className="hidden lg:flex flex-row items-center w-full justify-between py-4 px-8 z-50 fixed bg-white  dark:bg-gray-950 top-0 "
      role="navigation"
      aria-label="Desktop navigation"
    >
      <section className="logo-section space-x-4 flex items-center ">
        <Link href="/" aria-label="Go to homepage">
          <Image
            src={logo}
            alt="krea_logo"
            width={40}
            height={40}
            priority
            className="w-10 h-auto"
          />
        </Link>
        <div className="user">
          <Image
            src="/user.jpg"
            width={28}
            height={28}
            className="rounded-full border border-gray-600"
            alt="user avatar"
          />
        </div>
        <button
          className="flex items-center gap-1 relative cursor-pointer"
          aria-haspopup="true"
          aria-expanded={toggle}
          onClick={() => setToggle((prev) => !prev)}
        >
          <span> Blessing</span>

          {toggle ? (
            <IoIosArrowDown className="text-xs" aria-hidden="true" />
          ) : (
            <IoIosArrowUp className="text-xs" aria-hidden="true" />
          )}
          {toggle && (
            <ul
              className="absolute inset-y-6  bg-white dark:bg-gray-900 rounded shadow-lg"
              role="menu"
            >
              <li role="menuitem">
                <Link
                  href="/"
                  className="w-full px-3 py-1 capitalize text-md  hover:bg-gray-200  bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-900"
                >
                  logout
                </Link>
              </li>
            </ul>
          )}
        </button>
      </section>
      <section className=" flex gap-3 p-2 bg-gray-50   text-center dark:bg-gray-950 shadow-sm rounded-lg ">
        {NavIcons?.map((icon) => (
          <Navitems
            key={icon.id}
            icon={icon}
            activeNavBtn={activeNavBtn}
            setActiveNavBtn={setActiveNavBtn}
          />
        ))}
      </section>

      <section className="nav-buttons flex items-center space-x-2">
        <Navbuttons
          activeNavBtn={activeNavBtn}
          setActiveNavBtn={setActiveNavBtn}
        />

        <Image
          src="/user.jpg"
          width={20}
          height={20}
          className="rounded-full border border-gray-600"
          alt="user avatar"
        />
      </section>
    </nav>
  );
};

export default DesktopNavbar;
