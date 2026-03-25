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
        <div className="flex gap-6">
          <div className="w-56 shrink-0">
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4">
              <h2 className="text-lg font-bold text-primary mb-1">Categories</h2>
              <p className="text-xs text-gray-400 mb-4">Browse all product categories</p>
              <ul className="space-y-1">
                <li>
                  <button
                    onClick={() => setSelected("")}
                    className={`w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition ${
                      selected === ""
                        ? "bg-brand text-white"
                        : "text-primary hover:bg-gray-50"
                    }`}
                  >
                    All
                  </button>
                </li>
                {categories.map((cat) => (
                  <li key={cat.slug}>
                    <button
                      onClick={() => setSelected(cat.slug)}
                      className={`w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition capitalize ${
                        selected === cat.slug
                          ? "bg-brand text-white"
                          : "text-primary hover:bg-gray-50"
                      }`}
                    >
                      {cat.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex-1">
            <Productlist category={selected} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
