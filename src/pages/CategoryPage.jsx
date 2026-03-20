import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";

const CategoryPage = () => {
  const { slug } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    fetch(`https://dummyjson.com/products/category/${slug}`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
        setLoading(false);
      });
  }, [slug]);

  if (loading) {
    return (
      <div className="flex justify-center py-20">
        <p className="text-primary text-xl">Loading...</p>
      </div>
    );
  }

  if (!products || products.length === 0) {
    return (
      <div className="flex justify-center py-20">
        <p className="text-primary text-xl">No products found!</p>
      </div>
    );
  }

  return (
    <section className="py-10">
      <div className="container">
        <div className="flex justify-between items-center mb-6 border-b border-secondary pb-4">
          <h2 className="heading capitalize">
            <span>{slug.replace(/-/g, " ")}</span>
          </h2>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {products.map((product) => {
            const discount = 30;
            const oldPrice = Math.round(
              product.price * (100 / (100 - discount)),
            );
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
      </div>
    </section>
  );
};

export default CategoryPage;
