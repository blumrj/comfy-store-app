import React from "react";
import customFetch from "../utils";
import { useLoaderData } from "react-router-dom";
import ProductList from "../components/ProductList";
import Filters from "../components/Filters";

//defining a loader func which we'll call in the routes.jsx file for the matching route - /products

//we're creating a function that calls another function because we need to pass queryClient as an argument but the loader func by design can't have custom arguments

//ensureQueryData() is a method of the query client that checks whether the data is already cached based on the queryKey. If it's already cached it gets that value, and if it's not, it calls the queryFn that fetches the data

// eslint-disable-next-line react-refresh/only-export-components
export const loader =
  (queryClient) =>
  async ({ request }) => {
    const url = new URL(request.url);
    console.log(url);
    
    const searchParam = url.searchParams.get("search");
    const shippingParam = url.searchParams.get("shipping")
    const categoryParam = url.searchParams.get("category")
    const companyParam = url.searchParams.get("company")
    const orderParam = url.searchParams.get("order")


    const { data } = await queryClient.ensureQueryData({
      queryKey: ["products", searchParam, shippingParam, categoryParam, companyParam, orderParam],
      queryFn: () =>
        customFetch.get("/products", {
          params: {
            search: searchParam,
            shipping: shippingParam,
            category: categoryParam,
            company: companyParam,
            order: orderParam,
          },
        }),
    });

    console.log(data.data);
    

    return data.data;
  };

const Products = () => {
  const products = useLoaderData();
  return (
    <div>
      <Filters />
      <ProductList products={products} />
    </div>
  );
};

export default Products;
