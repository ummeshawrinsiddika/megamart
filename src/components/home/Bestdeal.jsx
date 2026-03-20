import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import Productcard from "../ui/Productcard";

const Bestdeal = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products/category/smartphones?limit=6")
      .then((res) => res.json())
      .then((data) => setProducts(data.products));
  }, []);

  return (
    <section className="py-10 md:py-16">
      <div className="container">
        <div className="mb-10 flex items-center justify-between pb-4 border-b border-primary/30 relative after:absolute after:w-96 after:h-1 after:left-0 after:bottom-0 after:rounded-full after:bg-brand">
          <h2 className="heading text-lg sm:text-xl md:text-2xl lg:text-3xl">
            Grab the best deal on <span>Smartphones</span>
          </h2>
          <Link to="/shop" className="text-sm sm:text-base whitespace-nowrap">
            View All
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4">
          {products.map((item) => (
            <Productcard
              key={item.id}
              id={item.id}
              title={item.title}
              image={item.images[0]}
              price={item.price}
              originalPrice={Math.round(item.price * (100 / 70))}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Bestdeal;
