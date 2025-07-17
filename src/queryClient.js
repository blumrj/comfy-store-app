import { QueryClient } from "@tanstack/react-query";

//we're creating a separate file for the query client because we need to use this instance in multiple places (app.jsx and routes.jsx). 
//Since routes.jsx is not a react function, but a file where we define the routes, and we need to pass in the query client instance in the loaders, we're creating a separate file for the query client which we can then import wherever we need.
export const queryClient = new QueryClient();
