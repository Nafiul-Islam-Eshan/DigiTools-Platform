import React from "react";

const Products = ({ product }) => {
  return (
    <div key={product.id}>
      <div className="card bg-base-200 mb-9 shadow-xl p-7 h-full">
        <div className="card-body  relative">
          {/* Badge */}
          <span className="badge badge-sm badge-warning absolute top-4 right-4">
            {product.tag}
          </span>

            {/* name description price */}
          <div className="flex flex-col space-y-2">
            {/* Icon */}
            <img className="w-15 h-15" src={product.icon} alt="" />
            {/* Product name */}
            <h2 className="text-3xl font-bold">{product.name}</h2>
            {/* Description */}
            <p className="opacity-60 ">{product.description} </p>
            {/* Price */}
            <span className="text-xl lowercase">
              {`$${Math.round(product.price)}/${product.period}`}
            </span>
          </div>

            {/* Features list */}
          <ul className="mt-6 flex flex-col gap-2 text-sm">
            {product.features.map((feature, index) => (
              <li key={index}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-4 me-2 inline-block text-success"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>{feature}</span>
              </li>
            ))}
          </ul>

          {/* Button */}
          <div className="mt-6 ">
            <button className="w-full btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-full">
              Buy now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
