import Hero from "../components/Hero";
import ProductList from "../components/ProductList";
import customFetch from "../utils";
import { useLoaderData } from "react-router-dom";


//we're creating a function that calls another function because we need to pass queryClient as an argument but the loader func by design can't have custom arguments

//ensureQueryData() is a method of the query client that checks whether the data is already cached based on the queryKey. If it's already cached it gets that value, and if it's not, it calls the queryFn that fetches the data

// eslint-disable-next-line react-refresh/only-export-components
export const loader = (queryClient) => async () => {
  try {
    const { data } = await queryClient.ensureQueryData({
      queryKey: ['featuredProducts'],
      queryFn: () => customFetch("/products?featured=true")
    });

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
      <ProductList products={featuredProducts} showLayoutOptions={false} />
    </>
  );
};

export default Landing;
