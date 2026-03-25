 import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";

const Productlist = ({ category }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    const url = category
      ? `https://dummyjson.com/products/category/${category}?limit=20`
      : `https://dummyjson.com/products?limit=20`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
        setLoading(false);
      });
  }, [category]);

  if (loading) {
    return (
      <div className="flex justify-center py-20">
        <p className="text-primary">Loading...</p>
      </div>
    );
  }

  return (
    <section>
      <div className="flex justify-between items-center mb-4 border-b border-secondary pb-3">
        <p className="text-sm text-gray-500">
          Showing: <span className="font-bold text-primary">({products.length} Items)</span>
        </p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {products.map((product) => {
          const discount = 30;
          const oldPrice = Math.round(product.price * (100 / (100 - discount)));
          return (
            <div
              key={product.id}
              onClick={() => navigate(`/product/${product.id}`)}
              className="bg-secondary rounded-lg p-4 relative cursor-pointer hover:shadow-md transition"
            >
              <div className="absolute top-2 right-2 bg-brand text-white text-xs font-bold px-2 py-1 rounded">
                {discount}% OFF
              </div>
              <div className="flex justify-center mb-3 bg-white rounded p-2 h-40">
                <img
                  src={product.images[0]}
                  alt={product.title}
                  className="h-full object-contain"
                />
              </div>
              <h3 className="text-primary font-medium text-sm line-clamp-2">
                {product.title}
              </h3>
              <div className="flex gap-2 mt-1 items-center">
                <span className="text-primary font-bold">
                  ৳{product.price.toLocaleString()}
                </span>
                <span className="text-gray-400 line-through text-xs">
                  ৳{oldPrice.toLocaleString()}
                </span>
              </div>
              <p className="text-brand text-xs mt-1">
                Save - ৳{(oldPrice - product.price).toLocaleString()}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Productlist;
