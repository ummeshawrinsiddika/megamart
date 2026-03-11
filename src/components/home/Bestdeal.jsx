import React from "react";
import { Link } from "react-router";
import Productcard from "../ui/Productcard";

const Bestdeal = () => {
  const products = [
    {
      title: "Galaxy S22 Ultra",
      image: "/phn1.png",
      price: 32999,
      originalPrice: 74999,
    },
    {
      title: "iPhone 15 Pro",
      image: "/phn 2.png ",
      price: 89999,
      originalPrice: 120000,
    },
    {
      title: "Redmi Note 13",
      image: "/phn3.png",
      price: 15999,
      originalPrice: 22999,
    },
    {
      title: "OnePlus 12R",
      image: "/phn4.png",
      price: 42999,
      originalPrice: 55999,
    },
    {
      title: "OnePlus 12R",
      image: "/phn 4.png",
      price: 42999,
      originalPrice: 55999,
    },
    {
      title: "Redmi Note 13",
      image: "/phn3.png",
      price: 15999,
      originalPrice: 22999,
    },
  ];

  return (
    <section className="py-10 md:py-16">
      <div className="container">
        <div className="mb-10 flex items-center justify-between pb-4 border-b border-primary/30 relative after:absolute after:w-96 after:h-1 after:left-0 after:bottom-0 after:rounded-full after:bg-brand">
          <h2 className="heading text-lg sm:text-xl md:text-2xl lg:text-3xl">
            Grab the best deal on <span>Smartphones</span>
          </h2>
          <Link to="/" className="text-sm sm:text-base whitespace-nowrap">
            View All
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4">
          {products.map((item, index) => (
            <Productcard
              key={index}
              title={item.title}
              image={item.image}
              price={item.price}
              originalPrice={item.originalPrice}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Bestdeal;
