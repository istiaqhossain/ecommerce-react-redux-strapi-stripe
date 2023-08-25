import { createBrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import Error from "./pages/Error";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import ProductCategory from "./pages/ProductCategory";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/shop",
        element: <Shop />,
      },
      {
        path: "/product-category/:slug",
        element: <ProductCategory />,
      },
      {
        path: "/product/:slug",
        element: <Product />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/checkout",
        element: <Checkout />,
      },
    ],
  },
]);

export default routes;
