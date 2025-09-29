"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import NavIcons from "../data/navicons";
import Navitems from "./navitems";
import Navbuttons from "./navbuttons";
import logo from "../../public/logo.png";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import ThemeToggle from "../ThemeToggle";
import { IoClose, IoMenu } from "react-icons/io5";
import DesktopNavbar from "./DesktopNavbar";
import MobileNavbar from "./MobileNavbar";

const Navbar = () => {
  const [activeNavBtn, setActiveNavBtn] = useState("home");
  const [toggle, setToggle] = useState(false);
  const [mobileNav, setMobileNav] = useState(true);

  return (
    <>
      <section className=" mobile-navbar logo-section space-x-4 flex items-center lg:hidden justify-between pb-4">
        <Link href="/">
          <Image
            src={logo}
            alt="krea_logo"
            width={225}
            height={225}
            className="w-5 h-auto"
          />
        </Link>
        <div className="user flex gap-2 items-center">
          <Image
            src="/user.jpg"
            width={20}
            height={20}
            className="rounded-full border border-gray-600"
            alt="Picture of the author"
          />
          <p
            className="flex items-center gap-1 relative cursor-pointer"
            onClick={() => {
              setToggle(!toggle);
            }}
          >
            Blessing
            <span className="absolute inset-y-6 -inset-x-0  ">
              {toggle ? (
                <button
                  className="capitalize text-md border-b 
             border-gray-100  dark:border-gray-950  rounded-sm  py-1 "
                >
                  logout
                </button>
              ) : (
                ""
              )}
            </span>
          </p>
          <ThemeToggle setActiveNavBtn={setActiveNavBtn} />
          {mobileNav ? (
            <IoClose
              onClick={() => {
                setMobileNav(!mobileNav);
              }}
            />
          ) : (
            <IoMenu
              onClick={() => {
                setMobileNav(!mobileNav);
              }}
            />
          )}
        </div>
      </section>
      {mobileNav ? (
        <MobileNavbar
          toggle={toggle}
          setToggle={setToggle}
          setActiveNavBtn={setActiveNavBtn}
          activeNavBtn={activeNavBtn}
        />
      ) : (
        <DesktopNavbar
          toggle={toggle}
          setToggle={setToggle}
          setActiveNavBtn={setActiveNavBtn}
          activeNavBtn={activeNavBtn}
        />
      )}
    </>
  );
};

export default Navbar;
