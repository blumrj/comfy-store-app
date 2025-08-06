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

export const isEmpty = (obj) => {
  return Object.keys(obj).length === 0
}

export const calculateTotals = (items, shippingFee = 500) =>{
  let subtotal = 0;
  items.map(item => {
    subtotal += item.price * item.amount
  })

  const total = subtotal + shippingFee

  return {total, subtotal}
}

