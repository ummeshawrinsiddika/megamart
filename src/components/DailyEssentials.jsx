import React, { useRef, useEffect, useState } from "react";
import { Link } from "react-router";
import { ChevronRight, ChevronLeft } from "lucide-react";

const categories = [
  {
    id: 1,
    title: "Daily Essentials",
    discount: "UP to 50% OFF",
    src: "/basket .png",
  },
  {
    id: 2,
    title: "Vegetables",
    discount: "UP to 50% OFF",
    src: "/grocery.png",
  },
  { id: 3, title: "Fruits", discount: "UP to 50% OFF", src: "/fruits.png" },
  {
    id: 4,
    title: "Strawberry",
    discount: "UP to 50% OFF",
    src: "/strawbary.png",
  },
  { id: 5, title: "Mango", discount: "UP to 50% OFF", src: "/mango.png" },
  { id: 6, title: "Cherry", discount: "UP to 50% OFF", src: "/cherry.png" },
];

export default function DailyEssentials() {
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const scrollRef = useRef(null);

  const checkScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 8);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 8);
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (el) {
      el.addEventListener("scroll", checkScroll, { passive: true });
      checkScroll();
    }
    return () => el?.removeEventListener("scroll", checkScroll);
  }, []);

  const scroll = (dir) => {
    scrollRef.current?.scrollBy({ left: dir * 240, behavior: "smooth" });
  };

  return (
    <section className="py-6 md:py-10 lg:py-16">
      <div className="container px-4 mx-auto">
        {/* Header */}
        <div className="mb-6 md:mb-10 flex items-center justify-between pb-4 border-b border-primary/30 relative after:absolute after:w-24 sm:after:w-48 md:after:w-96 after:h-1 after:left-0 after:bottom-0 after:rounded-full after:bg-brand">
          <h2 className="heading text-base sm:text-xl md:text-2xl lg:text-3xl">
            Daily <span>Essentials</span>
          </h2>
          <Link
            to="/"
            className="text-xs sm:text-sm md:text-base whitespace-nowrap"
          >
            View All
          </Link>
        </div>

        {/* Scrollable Cards */}
        <div className="relative">
          {canScrollLeft && (
            <>
              <div className="absolute left-0 top-0 bottom-4 w-12 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
              <button
                onClick={() => scroll(-1)}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1 z-20
                  w-8 h-8 rounded-full bg-white shadow-md border border-gray-200
                  flex items-center justify-center text-gray-600 transition-all duration-200"
              >
                <ChevronLeft size={16} />
              </button>
            </>
          )}

          {canScrollRight && (
            <>
              <div className="absolute right-0 top-0 bottom-4 w-12 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
              <button
                onClick={() => scroll(1)}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1 z-20
                  w-8 h-8 rounded-full bg-white shadow-md border border-gray-200
                  flex items-center justify-center text-gray-600 transition-all duration-200"
              >
                <ChevronRight size={16} />
              </button>
            </>
          )}

          <div
            ref={scrollRef}
            className="flex justify-center gap-3 sm:gap-4 md:gap-6 overflow-x-auto pb-2"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {categories.map((item) => (
              <div
                key={item.id}
                className="flex-shrink-0 flex flex-col items-center gap-2 cursor-pointer"
              >
                <div
                  className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28
                  rounded-2xl bg-secondary flex items-center justify-center"
                >
                  <img
                    src={item.src}
                    alt={item.title}
                    className="w-4/5 h-4/5 object-contain"
                  />
                </div>
                <div className="text-center">
                  <h3 className="text-xs sm:text-sm md:text-base font-medium">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm font-bold text-gray-800">
                    {item.discount}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
