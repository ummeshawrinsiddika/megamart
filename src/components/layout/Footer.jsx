import React from "react";
import { Link } from "react-router";
import { Phone, MessageCircle } from "lucide-react";

const popularCategories = [
  "Staples",
  "Beverages",
  "Personal Care",
  "Home Care",
  "Baby Care",
  "Vegetables & Fruits",
  "Snacks & Foods",
  "Dairy & Bakery",
];

const customerServices = [
  "About Us",
  "Terms & Conditions",
  "FAQ",
  "Privacy Policy",
  "E-waste Policy",
  "Cancellation & Return Policy",
];

const Footer = () => {
  return (
    <footer className="bg-brand  text-theme">
      <div className="container mx-auto px-4 py-10 md:py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          <div className="flex flex-col gap-6">
            <h2 className="text-3xl md:text-4xl font-bold ">MegaMart</h2>

            <div>
              <h3 className="text-base font-semibold mb-3">Contact Us</h3>
              <div className="flex flex-col gap-3">
                <a
                  href="https://wa.me/12029182132"
                  className="flex items-center gap-2 text-sm text-white/90 hover:text-theme transition-colors"
                >
                  <MessageCircle size={16} className="flex " />
                  <div>
                    <p className="text-xs text-theme">Whats App</p>
                    <p>+1 202-918-2132</p>
                  </div>
                </a>
                <a
                  href="tel:+12029182132"
                  className="flex items-center gap-2 text-sm text-white/90 hover:  text-theme transition-colors"
                >
                  <Phone size={16} className="flex " />
                  <div>
                    <p className="text-xs text-theme">Call Us</p>
                    <p>+1 202-918-2132</p>
                  </div>
                </a>
              </div>
            </div>

            <div>
              <h3 className=" text-theme  font-semibold mb-3">Download App</h3>
              <div className="flex flex-wrap gap-3">
                <a
                  href="#"
                  className="h-10 px-4 bg-primary  rounded-lg flex items-center gap-2 text-xs font-medium"
                >
                  App Store
                </a>
                <a
                  href="#"
                  className="h-10 px-4 bg-primary  rounded-lg flex items-center gap-2 text-xs font-medium"
                >
                  Google Play
                </a>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-base font-semibold mb-4 pb-2 border-b border-theme ">
              Most Popular Categories
            </h3>
            <ul className="flex flex-col gap-2">
              {popularCategories.map((item, index) => (
                <li key={index}>
                  <Link to="/" className="text-sm text-theme    ">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-base font-semibold mb-4 pb-2 border-b border-theme ">
              Customer Services
            </h3>
            <ul className="flex flex-col gap-2">
              {customerServices.map((item, index) => (
                <li key={index}>
                  <Link to="/" className="text-sm text-theme ">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-theme ">
        <div className="container mx-auto px-4 py-4">
          <p className="text-center text-xs sm:text-sm  text-theme">
            © 2022 All rights reserved. Reliance Retail Ltd.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
