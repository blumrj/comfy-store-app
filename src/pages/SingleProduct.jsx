import React from "react";
import customFetch, { formatPrice } from "../utils";
import { useLoaderData } from "react-router-dom";
import Breadcrumbs from "../components/Breadcrumbs";

export const loader = async ({ params }) => {
  try {
    const { data } = await customFetch(`/products/${params.id}`);

    return data.data;
  } catch (error) {
    console.log(error);
  }
};

const SingleProduct = () => {
  const { attributes } = useLoaderData();
  const { title, company, description, image, price, colors } = attributes;

  return (
    <>
      <Breadcrumbs />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16">
        <img
          src={image}
          alt={title}
          className="w-full h-128 object-cover rounded-2xl"
        />
        <div>
          <h1 className="capitalize font-bold text-3xl">{title}</h1>
          <h2 className="text-xl font-bold mt-2">{company}</h2>
          <p className="mt-3 text-xl">{formatPrice(price)}</p>
          <p className="mt-6 leading-8">{description}</p>
          <div className="mt-6">
            <h4 className="text-md font-medium tracking-wider capitalize mb-2">
              colors
            </h4>
            {colors.map((color) => {
              return (
                <button
                  key={color}
                  type="button"
                  className={`badge badge-lg mr-2`}
                  style={{ backgroundColor: color }}
                ></button>
              );
            })}
          </div>
          <div className="mt-6 w-full max-w-xs">
            <label className="">
              <h4 className="text-md font-medium tracking-wider capitalize mb-2">
                amount
              </h4>
            </label>
            <select className="select">
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
            </select>
          </div>
          <button className="btn btn-primary mt-6 capitalize hover:bg-accent border-0">
            add to cart
          </button>
        </div>
      </div>
    </>
  );
};

export default SingleProduct;
