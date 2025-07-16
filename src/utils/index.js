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

export const getNavLinks = (routes) => {
  const links = routes[0].children
    .filter((item) => item.handle.nav.show)
    .map((item) => {
      const label = item.handle?.nav?.label;
      const to = item.index ? "/" : item.path;

      return { label, to };
    });

  return links;
};
