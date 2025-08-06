import {
  About,
  Cart,
  Checkout,
  Error,
  ErrorElement,
  HomeLayout,
  Landing,
  Login,
  Products,
  ProductsLayout,
  Register,
  SingleProduct,
} from "./pages";

import { loader as FeaturedProductsLoader } from "./pages/Landing";
import { loader as LoginLoader, action as LoginAction } from "./pages/Login";
import {
  loader as RegisterLoader,
  action as RegisterAction,
} from "./pages/Register";
import { loader as ProductsLoader } from "./pages/Products";
import { loader as SingleProductLoader } from "./pages/SingleProduct";
import { loader as CheckoutLoader } from "./pages/Checkout";
import { queryClient } from "./queryClient";
import { store } from "./store";

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
        handle: {
          nav: { show: true, label: "About" },
        },
      },
      {
        path: "products",
        Component: ProductsLayout,
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
        handle: {
          nav: { show: true, label: "Cart" },
        },
      },
      {
        path: "checkout",
        Component: Checkout,
        loader: CheckoutLoader(store),
        handle: {
          nav: { show: true, label: "Checkout", authRequired: true },
        },
      },
    ],
  },
  {
    path: "/login",
    Component: Login,
    loader: LoginLoader(store),
    action: LoginAction(store),
  },
  {
    path: "/register",
    Component: Register,
    loader: RegisterLoader(store),
    action: RegisterAction,
  },
];
