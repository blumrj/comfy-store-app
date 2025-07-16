import React from 'react'
import customFetch from '../utils';
import { Outlet, useLoaderData } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import ProductList from '../components/ProductList';

//defining a loader func which we'll call in the routes.jsx file for the matching route - /products
// eslint-disable-next-line react-refresh/only-export-components
export const loader = async () => {
  try {
    const {data} = await customFetch('/products')

    return data.data
    
  } catch (error) {
    console.log(error);
  }
}

const Products = () => {
  const products = useLoaderData()
  return (
    <div>
      <ProductList products={products} />
    </div>
  )
}

export default Products
