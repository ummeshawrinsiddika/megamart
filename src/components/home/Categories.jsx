import React from "react";
import { useNavigate } from "react-router";

function Categories() {
  const navigate = useNavigate();

  const category = [
    { title: "Mobile", src: "/phn1.png", slug: "smartphones" },
    { title: "Cosmetics", src: "/cosmetics.png", slug: "beauty" },
    { title: "Electronics", src: "/electronics.png", slug: "laptops" },
    { title: "Furniture", src: "/furnuter.png", slug: "furniture" },
    { title: "Watches", src: "/watch.png", slug: "mens-watches" },
    { title: "Decor", src: "/decor.png", slug: "home-decoration" },
    { title: "Accessories", src: "/jweelary.png", slug: "womens-jewellery" },
  ];

  return (
    <section className="py-6 md:py-10 lg:py-16">
      <div className="container px-4 mx-auto">
        <div className="mb-6 md:mb-10 flex items-center justify-between pb-4 border-b border-primary/30 relative after:absolute after:w-24 sm:after:w-48 md:after:w-96 after:h-1 after:left-0 after:bottom-0 after:rounded-full after:bg-brand">
          <h2 className="heading text-base sm:text-xl md:text-2xl lg:text-3xl">
            Shop From <span>Top Categories</span>
          </h2>
          <button
            onClick={() => navigate("/shop")}
            className="text-xs sm:text-sm md:text-base whitespace-nowrap"
          >
            View All
          </button>
        </div>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-3 sm:gap-4 md:gap-6">
          {category.map((item, index) => (
            <div
              key={index}
              onClick={() => navigate(`/category/${item.slug}`)}
              className="flex flex-col items-center gap-2 cursor-pointer hover:scale-105 transition"
            >
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
