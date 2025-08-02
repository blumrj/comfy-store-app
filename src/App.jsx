import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { routes } from "./routes";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./queryClient";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { ToastContainer } from "react-toastify";
import { Slide } from "react-toastify";
import Modal from "./components/Modal";

const router = createBrowserRouter(routes);

const App = () => {
  const theme = useSelector((state) => state.user.theme);
  const cartItems = useSelector((state) => state.cart.cartItems);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        pauseOnFocusLoss
        pauseOnHover
        transition={Slide}
      />
    </QueryClientProvider>
  );
};

export default App;
