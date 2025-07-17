import {
  About,
  Cart,
  Checkout,
  Error,
  ErrorElement,
  HomeLayout,
  Landing,
  Login,
  Orders,
  Products,
  Register,
  SingleProduct,
} from "./pages";

import { loader as FeaturedProductsLoader } from "./pages/Landing";
import { loader as ProductsLoader } from "./pages/Products";
import { loader as SingleProductLoader } from "./pages/SingleProduct";
import { queryClient } from "./queryClient";

export const routes = [
  {
    path: "/",
    Component: HomeLayout,
    errorElement: <Error />,
    //handle property is a special property in React Router which allows us to store custom data attached to each route. This data can then later be accessed via useMatches().
    //In this case I want to build dynamic breadcrumbs so i am creating an object with a breadcrumb key and the value is the name I want to display in the breadcrumb
    handle: {
      breadcrumb: "Home",
    },
    children: [
      {
        index: true,
        Component: Landing,
        // label: "Home",
        // showInNav: true,
        errorElement: <ErrorElement />,
        // we need to pass the queryClient because the loader can't access it automatically. The loader function is a simple async function and not a react component, therefore it can't access hooks and React Context (where the query client lives)
        loader: FeaturedProductsLoader(queryClient),
        handle: {
          nav: { show: true, label: "Home" },
        },
      },
      {
        path: "about",
        Component: About,
        // label: "About",
        // showInNav: true,
        handle: {
          nav: { show: true, label: "About" },
        },
      },
      {
        path: "products",
        // label: "Products",
        // showInNav: true,
        handle: {
          breadcrumb: "Products",
          nav: { show: true, label: "Products" },
        },
        children: [
          {
            index: true,
            Component: Products,
            loader: ProductsLoader(queryClient),
          },
          {
            path: ":id",
            Component: SingleProduct,
            loader: SingleProductLoader(queryClient),
            //accepting the matched object
            handle: {
              breadcrumb: (item) => {
                //getting the data from the loader
                const product = item.data;
                return product?.attributes?.title;
              },
            },
          },
        ],
      },
      {
        path: "cart",
        Component: Cart,
        // label: "Cart",
        // showInNav: true,
        handle: {
          nav: { show: true, label: "Cart" },
        },
      },
      {
        path: "checkout",
        Component: Checkout,
        // label: "Checkout",
        // showInNav: true,
        handle: {
          nav: { show: true, label: "Checkout" },
        },
      },
      {
        path: "orders",
        Component: Orders,
        // label: "Orders",
        // showInNav: true,
        handle: {
          nav: { show: true, label: "Orders" },
        },
      },
    ],
  },
  {
    path: "/login",
    Component: Login,
  },
  {
    path: "/register",
    Component: Register,
  },
];
