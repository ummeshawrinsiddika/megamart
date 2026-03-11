import React, { useState } from "react";
import { href, Link } from "react-router";
import { FaSearch } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import { CiShoppingCart } from "react-icons/ci";
import { ChevronDown } from "lucide-react";
import { FaBars } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";

const Navbar = () => {
  const [sidebar, setSidebar] = useState(false);

  const categories = [
    {
      title: "phone",
      to: "",
      children: [
        { title: "samsung", to: "" },
        { title: "vivo", to: "" },
        { title: "nokia", to: "" },
        { title: "iphone", to: "" },
      ],
    },
    {
      title: "watch",
      to: "",
      children: [
        { title: "samsung", to: "" },
        { title: "vivo", to: "" },
        { title: "iphone", to: "" },
      ],
    },
    {
      title: "laptop",
      to: "",
      children: [
        { title: "samsung", to: "" },
        { title: "vivo", to: "" },
        { title: "iphone", to: "" },
        { title: "nokia", to: "" },
      ],
    },
    {
      title: "tws",
      to: "",
      children: [
        { title: "iphone", to: "" },
        { title: "samsung", to: "" },
        { title: "vivo", to: "" },
        { title: "nokia", to: "" },
      ],
    },
    {
      title: "panjabi",
      to: "",
      children: [
        { title: "nokia", to: "" },
        { title: "samsung", to: "" },
        { title: "iphone", to: "" },
        { title: "vivo", to: "" },
      ],
    },
  ];

  return (
    <header>
      <nav className="py-5">
        <div className="container">
          <div className="flex justify-between items-center">
            <button
              onClick={() => setSidebar(true)}
              className="text-primary text-2xl sm:hidden"
            >
              <FaBars />
            </button>
            <Link to="/" className="inline-block w-36 sm:w-auto">
              <img src="/logo.png" alt="logo" className="w-full" />
            </Link>

            {/* Desktop search bar */}
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
                className="hidden md:flex items-center gap-1.5 text-base font-bold text-primary relative after:absolute after:h-full after:w-0.5 after:bg-primary/50 after:top-0 after:-right-5"
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

          {/* Mobile search bar */}
          <div className="mt-4 md:hidden flex gap-2.5 items-center p-4 bg-[#F3F9FB] rounded-xl w-full">
            <FaSearch className="text-brand text-xl" />
            <input
              type="text"
              placeholder="Search essentials, groceries and more..."
              className="text-base text-primary w-full outline-0 bg-transparent"
            />
          </div>
        </div>
      </nav>

      {/* Desktop product Categories */}
      <div>
        <div className="py-4 border-y border-secondary hidden md:block">
          <div className="container flex gap-6">
            {categories.map((items) => (
              <div className="relative group" key={items.title}>
                <button className="px-4 py-2 bg-theme rounded-full flex items-center gap-1 capitalize">
                  {items.title} <ChevronDown className="w-4 h-4" />
                </button>

                {/* dropdown */}
                <ul className="absolute left-0 top-full mt-2 hidden group-hover:block bg-theme shadow rounded z-50">
                  {items.children.map((child) => (
                    <li key={child.title}>
                      <Link
                        to={`/${child.title.trim().toLowerCase()}`}
                        className="block px-4 py-2 hover:bg-theme"
                      >
                        {child.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Sidebar */}
      {sidebar && (
        <div
          onClick={() => setSidebar(false)}
          className="fixed top-0 left-0 w-full h-screen bg-primary/80"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className=" w-4/5 sm:w-3/5    bg-theme h-full p-4"
          >
            <ul className="space-y-4 text-primary font-bold text-lg mb-5 pb-5 border-b border-secondary">
              {categories.map((items) => (
                <li key={items.title}>
                  <div className="flex justify-between items-center">
                    <Link to={items.to}>{items.title}</Link>
                    <button>
                      <FaChevronRight />
                    </button>
                  </div>

                  <ul
                    className={` hidden font-semibold  text-base pl-2 space-y-2 mt-2`}
                  >
                    {items.children.map((child) => (
                      <li key={child.title}>
                        <Link to={`/${child.title.trim().toLowerCase()}`}>
                          {child.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>

            <Link
              to="/signin"
              className="   border-secondary flex items-center gap-1.5 text-base font-bold text-primary relative after:absolute after:h-full after:w-0.5 after:bg-primary/50 after:top-0 after:-right-5"
            >
              Sign Up/Sign In
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
