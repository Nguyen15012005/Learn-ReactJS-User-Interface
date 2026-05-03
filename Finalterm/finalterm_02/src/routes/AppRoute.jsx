import { createBrowserRouter } from "react-router-dom";
import RootPage from "../pages/RootPage";
import HomePage from "../pages/HomePage";
import ProductPage from "../pages/ProductPage";
import OrderPage from "../pages/OrderPage";
import Checkout from "../pages/Checkout";

const router = createBrowserRouter([
  {
    path: "",
    element: <RootPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "/products", element: <ProductPage /> },
      { path: "/orders", element: <OrderPage /> },
      { path: "/checkout", element: <Checkout /> },
    ],
  },
]);

export default router;
