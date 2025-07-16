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

export const routes = [
  {
    path: "/",
    Component: HomeLayout,
    errorElement: <Error />,
    children: [
      {
        index: true,
        Component: Landing,
        label: "Home",
        showInNav: true,
        errorElement: <ErrorElement/>,
        loader: FeaturedProductsLoader
      },
      {
        path: "about",
        Component: About,
        label: "About",
        showInNav: true,
      },
      {
        path: "products",
        Component: Products,
        label: "Products",
        showInNav: true,
        loader: ProductsLoader
      },
      {
        path: "products/:id",
        Component: SingleProduct,
        label: "Products",
        showInNav: false,
      },
      {
        path: "cart",
        Component: Cart,
        label: "Cart",
        showInNav: true,
      },
      {
        path: "checkout",
        Component: Checkout,
        label: "Checkout",
        showInNav: true,
      },
      {
        path: "orders",
        Component: Orders,
        label: "Orders",
        showInNav: true,
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
