import Hero from "../components/Hero";
import ProductList from "../components/ProductList";
import customFetch from "../utils";
import { useLoaderData } from "react-router-dom";

// eslint-disable-next-line react-refresh/only-export-components
export const loader = async () => {
  try {
    const { data } = await customFetch("/products?featured=true");

    return data.data;
  } catch (error) {
    console.log(error);
  }
};

const Landing = () => {
  const featuredProducts = useLoaderData();

  return (
    <>
      {/* hero section */}
      <Hero />
      {/* featured products section */}
      <ProductList products={featuredProducts} />
    </>
  );
};

export default Landing;
