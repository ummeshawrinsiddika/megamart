import React from "react";

const Categorie = () => {
  return (
    <section className="py-10">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8 border-b border-secondary pb-4">
          <h2 className="text-2xl font-bold text-primary">
            Shop From <span className="text-brand">Top Categories</span>
          </h2>
          <button className="text-primary hover:text-brand font-medium underline">
            View All
          </button>
        </div>

        <div className="flex flex-wrap justify-center gap-10">
          {categories.map((item) => (
            <div
              key={item.id}
              className="flex flex-col items-center group cursor-pointer"
            >
              <div className="w-24 h-24 sm:w-32 sm:h-32 bg-secondary rounded-full flex items-center justify-center p-6 group-hover:bg-brand/10 transition-colors border border-gray-100 shadow-sm">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-contain"
                />
              </div>
              <p className="mt-4 text-sm font-bold text-primary group-hover:text-brand transition-colors text-center">
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categorie;
