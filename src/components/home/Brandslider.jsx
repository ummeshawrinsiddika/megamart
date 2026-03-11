import React, { useState } from "react";
import { Link } from "react-router";

const brands = [
  {
    id: 1,
    brand: "IPHONE",
    logo: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/apple.svg",
    discount: "UP to 80% OFF",
    image: "/slider 1.png",
    bg: "bg-gray-800",
    textColor: "text-theme",
    logoBg: "bg-white",
  },
  {
    id: 2,
    brand: "REALME",
    logo: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/realme.svg",
    discount: "UP to 80% OFF",
    image: "/slider 2.png",
    bg: "bg-yellow-50",
    textColor: "text-primary",
    logoBg: "bg-yellow-400",
  },
  {
    id: 3,
    brand: "XIAOMI",
    logo: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/xiaomi.svg",
    discount: "UP to 80% OFF",
    image: "/slider 3.png",
    bg: "bg-orange-50",
    textColor: "text-primary",
    logoBg: "bg-orange-400",
  },
  {
    id: 4,
    brand: "SAMSUNG",
    logo: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/samsung.svg",
    discount: "UP to 80% OFF",
    image: "/slider 1.png",
    bg: "bg-blue-50",
    textColor: "text-primary",
    logoBg: "bg-blue-500",
  },
  {
    id: 5,
    brand: "ONEPLUS",
    logo: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/oneplus.svg",
    discount: "UP to 80% OFF",
    image: "/slider 2.png",
    bg: "bg-red-50",
    textColor: "text-primary",
    logoBg: "bg-red-500",
  },
];

const Brandslider = () => {
  const [current, setCurrent] = useState(0);
  const visibleCount = 3;
  const total = brands.length;
  const totalDots = total - visibleCount + 1;

  const visibleBrands = brands.slice(current, current + visibleCount);

  return (
    <section className="py-10 md:py-16">
      <div className="container px-4 mx-auto">
        <div className="mb-6 flex items-center justify-between pb-4 border-b border-primary/30 relative after:absolute after:w-40 after:h-1 after:left-0 after:bottom-0 after:rounded-full after:bg-brand">
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold">
            Top <span className="text-brand">Electronics Brands</span>
          </h2>
          <Link
            to="/"
            className="text-sm sm:text-base text-brand flex items-center gap-1 whitespace-nowrap"
          >
            View All
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {visibleBrands.map((item) => (
            <div
              key={item.id}
              className={`${item.bg} rounded-2xl p-5 flex items-center justify-between overflow-hidden relative h-40`}
            >
              {/* Left content */}
              <div className="flex flex-col gap-2 z-10 w-1/2">
                <span
                  className={`text-xs font-bold tracking-widest ${item.textColor} opacity-60 uppercase`}
                >
                  {item.brand}
                </span>
                <div
                  className={`${item.logoBg} w-12 h-12 rounded-xl flex items-center justify-center`}
                >
                  <img
                    src={item.logo}
                    alt={item.brand}
                    className="w-8 h-8 object-contain"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                    }}
                  />
                </div>
                <p
                  className={`text-sm sm:text-base font-bold ${item.textColor}`}
                >
                  {item.discount}
                </p>
              </div>

              {/* Right - Phone image */}
              <div className="absolute right-0 top-0 h-full w-1/2 flex items-center justify-end">
                <img
                  src={item.image}
                  alt={item.brand}
                  className="h-full w-auto object-contain"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-6">
          {Array.from({ length: totalDots }).map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                current === i ? "bg-brand w-5" : "bg-brand/30 w-2.5"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Brandslider;
