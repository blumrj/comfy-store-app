import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { routes } from "./routes";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./queryClient";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const router = createBrowserRouter(routes);

const App = () => {
  const theme = useSelector((state) => state.user.theme);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
};

export default App;
