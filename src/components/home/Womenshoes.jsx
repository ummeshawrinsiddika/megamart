import React, { useRef, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router";
import { ChevronRight, ChevronLeft } from "lucide-react";

export default function Womenshoes() {
  const [products, setProducts] = useState([]);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const scrollRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://dummyjson.com/products/category/womens-shoes?limit=10")
      .then((res) => res.json())
      .then((data) => setProducts(data.products));
  }, []);

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
  }, [products]);

  const scroll = (dir) => {
    scrollRef.current?.scrollBy({ left: dir * 240, behavior: "smooth" });
  };

  return (
    <section className="py-6 md:py-10 lg:py-16">
      <div className="container px-4 mx-auto">
        <div className="mb-6 md:mb-10 flex items-center justify-between pb-4 border-b border-primary/30 relative after:absolute after:w-24 sm:after:w-48 md:after:w-96 after:h-1 after:left-0 after:bottom-0 after:rounded-full after:bg-brand">
          <h2 className="heading text-base sm:text-xl md:text-2xl lg:text-3xl">
            Women <span>Shoes</span>
          </h2>
          <Link
            to="/category/womens-shoes"
            className="text-xs sm:text-sm md:text-base whitespace-nowrap flex items-center gap-1"
          >
            View All <span>›</span>
          </Link>
        </div>

        <div className="relative">
          {canScrollLeft && (
            <>
              <div className="absolute left-0 top-0 bottom-4 w-12 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
              <button
                onClick={() => scroll(-1)}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1 z-20 w-8 h-8 rounded-full bg-white shadow-md border border-gray-200 flex items-center justify-center text-gray-600"
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
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1 z-20 w-8 h-8 rounded-full bg-white shadow-md border border-gray-200 flex items-center justify-center text-gray-600"
              >
                <ChevronRight size={16} />
              </button>
            </>
          )}

          <div
            ref={scrollRef}
            className="flex gap-4 overflow-x-auto pb-2"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {products.map((item) => (
              <div
                key={item.id}
                onClick={() => navigate(`/product/${item.id}`)}
                className="flex-shrink-0 flex flex-col items-center gap-2 cursor-pointer w-36 sm:w-40 md:w-44"
              >
                <div className="w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 rounded-full bg-gray-100 flex items-center justify-center overflow-hidden">
                  <img
                    src={item.images[0]}
                    alt={item.title}
                    className="w-4/5 h-4/5 object-contain"
                  />
                </div>
                <div className="text-center">
                  <h3 className="text-xs sm:text-sm font-semibold text-primary line-clamp-2">
                    {item.title}
                  </h3>
                  <p className="text-xs text-brand font-medium mt-0.5">
                    brand:{item.brand}
                  </p>
                  <p className="text-sm font-bold text-primary mt-1">
                    ${item.price}
                  </p>
                  <p className="text-xs text-gray-500">stock:{item.stock}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
