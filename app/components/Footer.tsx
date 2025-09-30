import React from "react";

const Footer = () => {
  return (
    <footer className="footer bottom-0 w-full pt-8 flex justify-between ">
      <h5 className="text-xl font-semibold dark:text-white">Gallery</h5>
      <div>
        <button
          type="button"
          className="text-black dark:text-white bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-3 py-1.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-800 dark:focus:ring-gray-700 dark:border-gray-700"
        >
          Legal
        </button>

        <button
          type="button"
          className="text-black dark:text-white bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-300 font-medium rounded-full text-sm px-3 py-1.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-800 dark:focus:ring-gray-700 dark:border-gray-700"
        >
          Pricing
        </button>
      </div>
    </footer>
  );
};

export default Footer;
