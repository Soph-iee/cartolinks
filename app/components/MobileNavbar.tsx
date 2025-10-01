import Link from "next/link";
import Image from "next/image";
import NavIcons from "../data/navicons";
import Navitems from "./navitems";
import Navbuttons from "./navbuttons";
import logo from "../../public/logo.png";
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
      className={`flex flex-col  w-full z-50 bg-gray-100 dark:bg-gray-950  fixed top-20 overflow-hidden  lg:hidden ${
        openNavBar ? "opacity-100 h-screen " : "opacity-0 max-h-0"
      }`}
      role="navigation"
      aria-label="Mobile naviagtion"
      aria-hidden={!openNavBar}
    >
      {/* Logo + User Section */}

      <div className="logo-section space-x-4 lg:flex items-center hidden">
        <Link href="/" aria-label="Go to homepage">
          <Image
            src={logo}
            alt="Krea logo"
            width={80}
            height={80}
            priority
            className="w-16 h-auto"
          />
        </Link>
        {/* User Profile Dropdown */}
        <div className="user">
          <Image
            src="/user.jpg"
            width={32}
            height={32}
            className="rounded-full border border-gray-600"
            alt="User profile avatar"
          />
        </div>
        <p
          className="flex items-center gap-1 relative cursor-pointer"
          onClick={() => {
            setToggle(!toggle);
          }}
          aria-expanded={toggle}
          aria-controls="user-menu"
        >
          <span>Blessing</span>

          <span className="absolute inset-y-6 -inset-x-0  ">
            {toggle && (
              <button
                className="capitalize text-md border-b 
             border-gray-100  dark:border-gray-950  rounded-sm  py-1 "
              >
                logout
              </button>
            )}
          </span>
        </p>
      </div>
      <section className=" flex flex-col lg:flex-row gap-3 mb-3 lg:mb-0 lg:p-2 lg:bg-gray-50   text-center dark:lg:bg-gray-950 shadow-sm lg:rounded-lg">
        {NavIcons?.map((icon) => {
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
