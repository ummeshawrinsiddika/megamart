import React from "react";
import { href, Link } from "react-router";
import { FaSearch } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import { CiShoppingCart } from "react-icons/ci";
import { ChevronDown } from "lucide-react";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  const categories = [
    {
      title: "phone",
      to: "",
      children: ["iphone", "samsung", "oppo"],
    },
    {
      title: "watch",
      to: "",
      children: ["iphone", "samsung", "oppo"],
    },
    {
      title: "laptop",
      to: "",
      children: ["iphone", "samsung", "oppo"],
    },
    {
      title: "tws",
      to: "",
      children: ["iphone", "samsung", "oppo"],
    },
    {
      title: "panjabi",
      to: "",
      children: ["iphone", "samsung", "oppo"],
    },
  ];

  return (
    <header>
      <nav className="py-5">
        <div className="container">
          <div className="flex justify-between items-center">
            <button className="text-primary text-2xl sm:hidden">
              <FaBars />
            </button>
            <Link to="/" className="inline-block w-36 sm:w-auto">
              <img src="/logo.png" alt="logo" className="w-full" />
            </Link>

            {/* Desktop search bar   */}
            <div className="hidden sm:flex gap-2.5 items-center p-4 bg-[#F3F9FB] rounded-xl w-full max-w-lg mx-4">
              <FaSearch className="text-brand text-2xl" />
              <input
                type="text"
                placeholder="Search essentials, groceries and more..."
                className="text-base text-primary w-full outline-0 bg-transparent"
              />
            </div>

            <div className="flex gap-10">
              <Link
                to="/Sign In"
                className="hidden sm:flex items-center gap-1.5 text-base font-bold text-primary relative after:absolute after:h-full after:w-0.5 after:bg-primary/50 after:top-0 after:-right-5"
              >
                <FaRegUser className="text-xl text-brand" />
                Sign Up/Sign In
              </Link>
              <Link
                to="/cart"
                className="flex items-center gap-1.5 text-lg font-bold text-primary"
              >
                <CiShoppingCart className="text-2xl text-brand" />
                <span className="hidden sm:block">cart</span>
              </Link>
            </div>
          </div>

          {/* Mobile search bar  */}
          <div className="mt-4 sm:hidden flex gap-2.5 items-center p-4 bg-[#F3F9FB] rounded-xl w-full">
            <FaSearch className="text-brand text-xl" />
            <input
              type="text"
              placeholder="Search essentials, groceries and more..."
              className="text-base text-primary w-full outline-0 bg-transparent"
            />
          </div>
        </div>
      </nav>

      {/* Categories */}
      <div>
        <div className="py-4 border-y border-secondary ">
          <div className="container flex gap-6">
            {categories.map((items) => (
              <div className="relative group" key={items.title}>
                <button className="px-4 py-2 bg-theme rounded-full flex items-center gap-1 capitalize">
                  {items.title} <ChevronDown className="w-4 h-4" />
                </button>

                {/* dropdown   */}
                <ul className="absolute left-0 top-full mt-2 hidden group-hover:block bg-theme shadow rounded z-50">
                  {items.children.map((child) => (
                    <li key={child}>
                      <Link
                        to={`/${child.toLowerCase()}`}
                        className="block px-4 py-2 hover:bg-theme  "
                      >
                        {child}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
