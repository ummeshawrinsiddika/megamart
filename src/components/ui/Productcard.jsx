import React from "react";
import { useNavigate } from "react-router";

function Productcard({ id, title, image, price, originalPrice }) {
  const savings = originalPrice - price;
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/product/${id}`)}
      className="border border-primary/20 rounded-2xl overflow-hidden w-full cursor-pointer hover:shadow-md transition"
    >
      <div className="bg-secondary py-4 flex justify-center">
        <img src={image} alt={title} className="w-full h-40 object-contain" />
      </div>

      <div className="bg-theme p-3">
        <h3 className="text-sm md:text-base font-medium truncate">{title}</h3>
        <div className="flex gap-2 pb-2.5 mb-2.5 border-b border-secondary text-xs md:text-sm">
          <p>৳{price}</p>
          <p className="line-through text-gray-400">৳{originalPrice}</p>
        </div>
        <p className="text-green-700 font-semibold text-xs md:text-sm">
          Save - ৳{savings}
        </p>
      </div>
    </div>
  );
}

export default Productcard;
