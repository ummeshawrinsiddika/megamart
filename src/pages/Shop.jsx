import React, { useEffect, useState } from "react";
import Productlist from "../components/shop/Productlist";

const Shop = () => {
  const [categories, setCategories] = useState([]);
  const [selected, setSelected] = useState("");

  useEffect(() => {
    fetch("https://dummyjson.com/products/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  return (
    <div className="py-6">
      <div className="container">
        <div className="flex flex-wrap gap-2 mb-6">
          <button
            onClick={() => setSelected("")}
            className={`px-4 py-1.5 rounded-full text-sm font-medium border transition ${
              selected === ""
                ? "bg-brand text-white border-brand"
                : "bg-white text-primary border-gray-200 hover:border-brand hover:text-brand"
            }`}
          >
            All
          </button>
          {categories.map((cat) => (
            <button
              key={cat.slug}
              onClick={() => setSelected(cat.slug)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium border transition ${
                selected === cat.slug
                  ? "bg-brand text-white border-brand"
                  : "bg-white text-primary border-gray-200 hover:border-brand hover:text-brand"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>
        <Productlist category={selected} />
      </div>
    </div>
  );
};

export default Shop;
