import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useCart } from "../context/CartContext";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [mainImage, setMainImage] = useState("");
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        setMainImage(data.images[0]);
      });
  }, [id]);

  if (!product) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p className="text-primary text-xl">Loading...</p>
      </div>
    );
  }

  const discount = 30;
  const oldPrice = Math.round(product.price * (100 / (100 - discount)));
  const savings = oldPrice - product.price;

  return (
    <section className="py-10">
      <div className="container">
        <div className="text-sm text-primary mb-6 flex gap-2">
          <span className="hover:text-brand cursor-pointer">Home</span>
          <span>/</span>
          <span className="hover:text-brand cursor-pointer">
            {product.category}
          </span>
          <span>/</span>
          <span className="text-brand">{product.title}</span>
        </div>

        <div className="flex flex-col md:flex-row gap-10">
          <div className="md:w-1/2">
            <div className="bg-secondary rounded-xl p-6 flex justify-center items-center h-80 md:h-96">
              <img
                src={mainImage}
                alt={product.title}
                className="h-full object-contain"
              />
            </div>
            <div className="flex gap-3 mt-4 flex-wrap">
              {product.images.map((img, index) => (
                <div
                  key={index}
                  onClick={() => setMainImage(img)}
                  className={`bg-secondary rounded-lg p-2 cursor-pointer border-2 transition ${
                    mainImage === img ? "border-brand" : "border-transparent"
                  }`}
                >
                  <img src={img} alt="" className="w-16 h-16 object-contain" />
                </div>
              ))}
            </div>
          </div>

          <div className="md:w-1/2">
            <span className="text-xs bg-brand/10 text-brand px-3 py-1 rounded-full font-medium">
              {product.category}
            </span>
            <h1 className="text-2xl md:text-3xl font-bold text-primary mt-3">
              {product.title}
            </h1>
            <div className="flex items-center gap-4 mt-4">
              <span className="text-3xl font-bold text-primary">
                ৳{product.price.toLocaleString()}
              </span>
              <span className="text-gray-400 line-through text-lg">
                ৳{oldPrice.toLocaleString()}
              </span>
              <span className="bg-brand text-white text-sm font-bold px-2 py-1 rounded">
                {discount}% OFF
              </span>
            </div>
            <p className="text-brand font-medium mt-1">
              Save - ৳{savings.toLocaleString()}
            </p>
            <p className="mt-4 text-sm">
              Availability:{" "}
              <span className="text-green-500 font-semibold">In Stock</span>
            </p>
            <p className="mt-2 text-sm">
              Rating:{" "}
              <span className="text-yellow-500 font-semibold">
                ⭐ {product.rating}
              </span>
            </p>
            <p className="text-primary text-sm mt-4 leading-relaxed">
              {product.description}
            </p>
            <div className="mt-6">
              <p className="text-primary font-medium mb-2">Select Quantity:</p>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="w-10 h-10 rounded-full bg-secondary text-primary font-bold text-xl hover:bg-brand hover:text-white transition"
                >
                  −
                </button>
                <span className="text-xl font-bold text-primary w-6 text-center">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity((q) => q + 1)}
                  className="w-10 h-10 rounded-full bg-secondary text-primary font-bold text-xl hover:bg-brand hover:text-white transition"
                >
                  +
                </button>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <button className="flex-1 bg-brand text-white py-3 rounded-lg font-semibold hover:bg-brand/90 transition">
                Shop Now
              </button>
              <button
                onClick={() => addToCart({ ...product, quantity })}
                className="flex-1 border-2 border-brand text-brand py-3 rounded-lg font-semibold hover:bg-brand hover:text-white transition"
              >
                Add To Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
