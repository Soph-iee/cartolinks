"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../../public/logo.png";
import ThemeToggle from "../ThemeToggle";
import { IoClose, IoMenu } from "react-icons/io5";
import DesktopNavbar from "./DesktopNavbar";
import MobileNavbar from "./MobileNavbar";

const Navbar = () => {
  const [activeNavBtn, setActiveNavBtn] = useState("home");
  const [toggle, setToggle] = useState(false);
  const [openNavBar, setOpenNavBar] = useState(false);

  return (
    <>
      <section className=" mobile-navbar logo-section space-x-4 flex items-center lg:hidden justify-between px-8 bg-white fixed z-50 top-0 w-full dark:bg-gray-950 py-8">
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
          {openNavBar ? (
            <IoClose
              onClick={() => {
                setOpenNavBar(false);
              }}
            />
          ) : (
            <IoMenu
              onClick={() => {
                setOpenNavBar(true);
              }}
            />
          )}
        </div>
      </section>
      {openNavBar ? (
        <MobileNavbar
          toggle={toggle}
          setToggle={setToggle}
          setActiveNavBtn={setActiveNavBtn}
          activeNavBtn={activeNavBtn}
          openNavBar={openNavBar}
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
