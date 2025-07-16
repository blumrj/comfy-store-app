import React from "react";
import { Link } from "react-router-dom";
import { formatPrice } from "../utils";

const ProductCard = ({ id, image, price, title }) => {
  return (
    <Link to={`/products/${id}`}>
      <div className="card bg-accent-content shadow-xl hover:shadow-2xl transition duration-300">
        <figure>
          <img
            src={image}
            alt={title}
            className="rounded-xl h-64 md:h-48 w-full object-cover"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title capitalize">{title}</h2>
          <p>{formatPrice(price)}</p>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
