import Link from "next/link";
import Image from "next/image";
import NavIcons from "../data/navicons";
import Navitems from "./navitems";
import Navbuttons from "./navbuttons";
import logo from "../../public/logo.png";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { DeviceNavbarProps } from "../types/type";

const MobileNavbar = ({
  setToggle,
  toggle,
  activeNavBtn,
  setActiveNavBtn,
  openNavBar,
}: DeviceNavbarProps & {
  openNavBar: boolean;
}) => {
  return (
    <nav
      className={`flex flex-col  w-full z-50 bg-gray-100 dark:bg-gray-950  fixed top-20 overflow-hidden transition-all duration-1000 ease-in-out lg:hidden ${
        openNavBar ? "opacity-100 h-screen " : "opacity-0 max-h-0"
      }`}
    >
      <section className="logo-section space-x-4 lg:flex items-center hidden">
        <Link href="/">
          <Image
            src={logo}
            alt="krea_logo"
            width={225}
            height={225}
            className="w-20 h-auto"
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
              <IoIosArrowDown className="text-xs" />
            </span>
          ) : (
            <span>
              <IoIosArrowUp className="text-xs" />
            </span>
          )}
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
      </section>
      <section className=" flex flex-col lg:flex-row gap-3 mb-3 lg:mb-0 lg:p-2 lg:bg-gray-50   text-center dark:lg:bg-gray-950 shadow-sm lg:rounded-lg">
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
      <div className=" w-full flex flex-col justify-between font-bold ">
        <section className="nav-buttons ">
          <Navbuttons
            activeNavBtn={activeNavBtn}
            setActiveNavBtn={setActiveNavBtn}
          />
        </section>
      </div>
    </nav>
  );
};

export default MobileNavbar;
