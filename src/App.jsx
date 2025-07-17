import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { routes } from "./routes";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./queryClient";

const router = createBrowserRouter(routes);


const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
};

export default App;
