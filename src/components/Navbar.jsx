import React, { useState } from "react";
import { Link } from "react-router-dom";

// ! import all Image
import logo from "/images/logo.png";

// ! import header Icon
import { FaBars } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaShoppingBag } from "react-icons/fa";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  const navItem = [
    { title: "Jewelry & Accessories", path: "/" },
    { title: "Clothing & Shoes", path: "/" },
    { title: "Home & Living", path: "/" },
    { title: "Wedding & Party", path: "/" },
    { title: "Toys & Entertainment", path: "/" },
    { title: "Art & Collectibles", path: "/" },
    { title: "Craft Supplies & Tools", path: "/" },
  ];

  return (
    <header className="max-w-screen-2xl xl:px-28 px-4 absolute top-0 right-0 left-0 mx-auto">
      <nav className="flex justify-between items-center container md:py-4 pt-6 pb-3">
        <FaSearch className="text-black w-5 h-5 cursor-pointer hidden md:block" />

        {/* logo */}
        <a href="/">
          <img src={logo} alt="logo" width={130} />
        </a>

        {/* account and shopping btn */}

        <div className="text-lg text-black sm:flex items-center gap-4 hidden">
          <a href="/" className="flex items-center gap-2">
            <FaUser />
            Account
          </a>
          <a href="/" className="flex items-center gap-2">
            <FaShoppingBag />
            Shopping
          </a>
        </div>

        {/* nav icon for sm devices */}

        <div className="sm:hidden">
          <button onClick={toggleMenu}>
            {openMenu ? (
              <FaTimes className="w-5 h-5 text-black" />
            ) : (
              <FaBars className="w-5 h-5 text-black" />
            )}
          </button>
        </div>
      </nav>

      <hr />

      {/* category item */}

      <div className="pt-4">
        <ul className="lg:flex items-center justify-between text-black hidden">
          {navItem.map(({ title, path }) => (
            <li key={title} className="hover:text-orange-500">
              <Link to="/">{title}</Link>
            </li>
          ))}
        </ul>
      </div>

      {/* only mobile menu devices */}

      <div>
        <ul
          className={`bg-black text-white px-4 py-2 rounded ${
            openMenu ? "" : "hidden"
          }`}
        >
          {navItem.map(({ title, path }) => (
            <li
              key={title}
              className="hover:text-orange-500 my-3 cursor-pointer"
            >
              <Link to="/">{title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
