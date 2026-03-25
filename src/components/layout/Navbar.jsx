 import React, { useState } from "react";
import { Link, useNavigate } from "react-router";
import { FaSearch } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import { CiShoppingCart } from "react-icons/ci";
import { FaBars } from "react-icons/fa";
import { useCart } from "../../context/CartContext";

const Navbar = () => {
  const [sidebar, setSidebar] = useState(false);
  const { totalItems } = useCart();
  const user = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();

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

            <div className="hidden sm:flex gap-2.5 items-center p-4 bg-[#F3F9FB] rounded-xl w-full max-w-lg mx-4">
              <FaSearch className="text-brand text-2xl" />
              <input
                type="text"
                placeholder="Search essentials, groceries and more..."
                className="text-base text-primary w-full outline-0 bg-transparent"
              />
            </div>

            <div className="flex gap-10">
              {user ? (
                <div
                  onClick={() => navigate("/profile")}
                  className="hidden md:flex items-center gap-2 cursor-pointer hover:opacity-80"
                >
                  <img
                    src={user.image}
                    alt={user.firstName}
                    className="w-8 h-8 rounded-full object-cover"
                  />
                  <span className="text-sm font-bold text-primary">
                    {user.firstName} {user.lastName}
                  </span>
                </div>
              ) : (
                <Link
                  to="/login"
                  className="hidden md:flex items-center gap-1.5 text-base font-bold text-primary relative after:absolute after:h-full after:w-0.5 after:bg-primary/50 after:top-0 after:-right-5"
                >
                  <FaRegUser className="text-xl text-brand" />
                  Sign Up/Sign In
                </Link>
              )}
              <Link
                to="/cart"
                className="flex items-center gap-1.5 text-lg font-bold text-primary relative"
              >
                <div className="relative">
                  <CiShoppingCart className="text-2xl text-brand" />
                  {totalItems > 0 && (
                    <span className="absolute -top-2 -right-2 bg-brand text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                      {totalItems}
                    </span>
                  )}
                </div>
                <span className="hidden sm:block">cart</span>
              </Link>
            </div>
          </div>

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

      {sidebar && (
        <div
          onClick={() => setSidebar(false)}
          className="fixed top-0 left-0 w-full h-screen bg-primary/80"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="w-4/5 sm:w-3/5 bg-theme h-full p-4"
          >
            {user ? (
              <div
                onClick={() => {
                  navigate("/profile");
                  setSidebar(false);
                }}
                className="flex items-center gap-2 cursor-pointer"
              >
                <img
                  src={user.image}
                  alt={user.firstName}
                  className="w-8 h-8 rounded-full object-cover"
                />
                <span className="text-sm font-bold text-primary">
                  {user.firstName} {user.lastName}
                </span>
              </div>
            ) : (
              <Link
                to="/login"
                className="border-secondary flex items-center gap-1.5 text-base font-bold text-primary"
              >
                <FaRegUser className="text-xl text-brand" />
                Sign Up/Sign In
              </Link>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
