import React from "react";
import { Link } from "react-router";
import Productcard from "../ui/Productcard";

function Categories() {
  const cetagory = [
    {
      title: "mobile",
      src: "/phn1.png",
    },
    {
      title: "Cosmetics ",
      src: "/cosmetics.png",
    },
    {
      title: "Electronics ",
      src: "/electronics.png",
    },
    {
      title: "Furniture  ",
      src: "/furnuter.png",
    },
    {
      title: "Watches ",
      src: "/watch.png",
    },
    {
      title: "Decor ",
      src: "/decor.png",
    },
    {
      title: "Accessories ",
      src: "/jweelary.png",
    },
  ];
  return (
    <section className="py-6 md:py-10 lg:py-16">
      <div className="container px-4 mx-auto">
        <div className="mb-6 md:mb-10 flex items-center justify-between pb-4 border-b border-primary/30 relative after:absolute after:w-24 sm:after:w-48 md:after:w-96 after:h-1 after:left-0 after:bottom-0 after:rounded-full after:bg-brand">
          <h2 className="heading text-base sm:text-xl md:text-2xl lg:text-3xl">
            Shop From <span>Top Categories</span>
          </h2>
          <Link
            to="/"
            className="text-xs sm:text-sm md:text-base whitespace-nowrap"
          >
            View All
          </Link>
        </div>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-3 sm:gap-4 md:gap-6">
          {cetagory.map((item, index) => (
            <div key={index} className="flex flex-col items-center gap-2">
              <div className="bg-secondary w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 rounded-full flex items-center justify-center">
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-4/5 h-4/5 object-contain"
                />
              </div>
              <h3 className="text-xs sm:text-sm md:text-base font-medium text-center">
                {item.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Categories;
