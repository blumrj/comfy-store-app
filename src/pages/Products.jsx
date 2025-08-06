import React from "react";
import customFetch from "../utils";
import { useLoaderData } from "react-router-dom";
import ProductList from "../components/ProductList";
import Filters from "../components/Filters";
import Pagination from "../components/Pagination";

//defining a loader func which we'll call in the routes.jsx file for the matching route - /products

//we're creating a function that calls another function because we need to pass queryClient as an argument but the loader func by design can't have custom arguments

//ensureQueryData() is a method of the query client that checks whether the data is already cached based on the queryKey. If it's already cached it gets that value, and if it's not, it calls the queryFn that fetches the data

// eslint-disable-next-line react-refresh/only-export-components
export const loader =
  (queryClient) =>
  async ({ request }) => {
    //create a new url object based on the request url
    const url = new URL(request.url);

    //create an array to store all of the keys
    const paramKeys = ["search", "shipping", "category", "company", "order", "page"];

    const queryParams = {};
    //loop through the param keys to create query params object which will store the matching key and value pairs
    paramKeys.forEach((param) => {
      const paramValue = url.searchParams.get(param);

      if (paramValue != null) {
        queryParams[param] = paramValue;
      }
    });

    const queryKey = ["products", ...paramKeys.map((key) => queryParams[key])];

    const { data } = await queryClient.ensureQueryData({
      queryKey,
      queryFn: () =>
        customFetch.get("/products", {
          params: queryParams,
        }),
    });

    return { products: data.data, meta: data.meta };
  };

const Products = () => {
  const { products, meta } = useLoaderData();
  const { total } = meta.pagination;
  

  return (
    <div>
      <Filters />
      <ProductList products={products} total={total} />
      <Pagination {...meta.pagination} />
    </div>
  );
};

export default Products;
