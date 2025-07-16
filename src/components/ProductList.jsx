import React from "react";
import ProductCard from "./ProductCard";

const ProductList = ({ products }) => {
  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-32">
      {products.map((product) => {
        const { id, attributes } = product;
        // console.log(product);

        return <ProductCard key={id} {...attributes} id={id} />;
      })}
    </div>
  );
};

export default ProductList;
