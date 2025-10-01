import Link from "next/link";
import React from "react";

const footerLinks = [
  {
    name: "legal",
    href: "/legal",
  },
  {
    name: "pricing",
    href: "/pricing",
  },
];

const Footer = () => {
  return (
    <footer className="footer bottom-0 w-full pt-8 flex  items-center justify-between flex-row">
      <h5 className="text-xl font-semibold dark:text-white">Gallery</h5>
      <nav
        aria-label="footer navigation"
        className="flex gap-2  flex-row"
      >
        {footerLinks?.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className="text-black dark:text-white bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-300 font-medium rounded-md  lg:rounded-xl px-3 py-2  dark:bg-gray-800 dark:hover:bg-gray-800 dark:focus:ring-gray-700 dark:border-gray-700"
          >
            {link.name}
          </Link>
        ))}
      </nav>
    </footer>
  );
};

export default Footer;
