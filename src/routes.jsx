import {
  About,
  Cart,
  Checkout,
  Error,
  HomeLayout,
  Landing,
  Login,
  Orders,
  Products,
  Register,
  SingleProduct,
} from "./pages";

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
        children: [
          {
            path: ":id",
            Component: SingleProduct,
          },
        ],
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
