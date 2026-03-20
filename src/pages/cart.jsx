import React from "react";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router";

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity, totalPrice } = useCart();
  const navigate = useNavigate();

  if (cartItems.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20 gap-4">
        <p className="text-2xl font-bold text-primary">Cart is empty!</p>
        <button
          onClick={() => navigate("/shop")}
          className="bg-brand text-white px-6 py-3 rounded-lg font-semibold"
        >
          Continue Shopping
        </button>
      </div>
    );
  }

  return (
    <section className="py-10">
      <div className="container">
        <h2 className="heading mb-6">
          Your <span>Cart</span>
        </h2>
        <div className="flex flex-col gap-4">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center gap-4 bg-secondary rounded-lg p-4"
            >
              <img
                src={item.images[0]}
                alt={item.title}
                className="w-20 h-20 object-contain bg-white rounded p-1"
              />
              <div className="flex-1">
                <h3 className="text-primary font-semibold text-sm line-clamp-2">
                  {item.title}
                </h3>
                <p className="text-brand font-bold mt-1">
                  ৳{item.price.toLocaleString()}
                </p>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  className="w-8 h-8 rounded-full bg-white text-primary font-bold hover:bg-brand hover:text-white transition"
                >
                  −
                </button>
                <span className="font-bold text-primary w-4 text-center">
                  {item.quantity}
                </span>
                <button
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  className="w-8 h-8 rounded-full bg-white text-primary font-bold hover:bg-brand hover:text-white transition"
                >
                  +
                </button>
              </div>
              <button
                onClick={() => removeFromCart(item.id)}
                className="text-red-500 font-bold text-lg hover:text-red-700"
              >
                ✕
              </button>
            </div>
          ))}
        </div>
        <div className="mt-8 flex justify-between items-center border-t border-secondary pt-6">
          <p className="text-xl font-bold text-primary">
            Total: ৳{totalPrice.toLocaleString()}
          </p>
          <button className="bg-brand text-white px-8 py-3 rounded-lg font-semibold hover:bg-brand/90 transition">
            Checkout
          </button>
        </div>
      </div>
    </section>
  );
};

export default Cart;
