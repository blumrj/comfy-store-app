import axios from "axios";

const customFetch = axios.create({
  baseURL: "https://strapi-store-server.onrender.com/api",
});

export default customFetch;

export const formatPrice = (price) => {
  const dollarsAmount = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format((price / 100).toFixed(2));
  return dollarsAmount;
};

