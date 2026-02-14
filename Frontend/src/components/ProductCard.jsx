import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white rounded-3xl shadow-lg overflow-hidden">
      {/* Image */}
      <div className="relative h-64">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
        />

        {/* Badge */}
        {product.badge && (
          <div className="absolute top-4 right-4 bg-coffee-700 text-white px-4 py-1 rounded-full text-sm">
            {product.badge}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-1 text-coffee-800">
          {product.name}
        </h3>

        {product.brewer && (
          <p className="text-xs text-coffee-500 mb-2">
            {product.brewer}
          </p>
        )}

        <p className="text-coffee-600 mb-4 text-sm">
          {product.description}
        </p>

        {/* Price + Prelaunch label */}
        <div className="flex items-center justify-between">
          <span className="text-lg font-bold text-coffee-800">
            ${product.price}
          </span>

          <span className="text-xs bg-coffee-100 text-coffee-700 px-3 py-1 rounded-full">
            Available Soon
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
