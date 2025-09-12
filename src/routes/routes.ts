import { type RouteObject } from "react-router";

export const Routes: RouteObject[] = [
  {
    path: "/",
    lazy: async () => {
      const layoutComponent = await import(
        "@components/layout/AppLayout/AppLayout"
      );
      return { Component: layoutComponent.default };
    },
    children: [
      {
        index: true,
        lazy: async () => {
          const HomePageComponent = await import("@pages/Home/HomePage");
          return { Component: HomePageComponent.default };
        },
      },
      {
        path: "products",
        lazy: async () => {
          const ProductsComponent = await import(
            "@pages/ProductListing/Products"
          );
          return { Component: ProductsComponent.default };
        },
      },
      {
        path: "products/:id",
        lazy: async () => {
          const ProductDetailsComponent = await import(
            "@pages/ProductDetails/ProductDetails"
          );
          return { Component: ProductDetailsComponent.default };
        },
      },
      {
        path: "cart",
        lazy: async () => {
          const CartComponent = await import("@pages/Cart/Cart");
          return { Component: CartComponent.default };
        },
      },
      {
        path: "login",
        lazy: async () => {
          const LoginComponent = await import("@pages/Login/Login");
          return { Component: LoginComponent.default };
        },
      },
      {
        path: "register",
        lazy: async () => {
          const RegisterComponent = await import(
            "@pages/Register/Register"
          );
          return { Component: RegisterComponent.default };
        },
      },
    ],
  },
  {
    path: "*",
    lazy: async () => {
      const PageNotFoundComponent = await import(
        "@components/ui/PageNotFound/PageNotFound"
      );
      return { Component: PageNotFoundComponent.default };
    },
  },
];
