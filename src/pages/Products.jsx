import React from "react";
import customFetch from "../utils";
import { useLoaderData } from "react-router-dom";
import ProductList from "../components/ProductList";

//defining a loader func which we'll call in the routes.jsx file for the matching route - /products

//we're creating a function that calls another function because we need to pass queryClient as an argument but the loader func by design can't have custom arguments

//ensureQueryData() is a method of the query client that checks whether the data is already cached based on the queryKey. If it's already cached it gets that value, and if it's not, it calls the queryFn that fetches the data

// eslint-disable-next-line react-refresh/only-export-components
export const loader = (queryClient) => async () => {
  const { data } = await queryClient.ensureQueryData({
    queryKey: ["products"],
    queryFn: () => customFetch("/products"),
  });

  return data.data;
};

const Products = () => {
  const products = useLoaderData();
  return (
    <div>
      <ProductList products={products} />
    </div>
  );
};

export default Products;
