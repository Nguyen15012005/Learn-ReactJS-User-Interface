import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { RootPage } from "./pages/RootPage";
import { HomePage } from "./pages/HomePage";
import { BookDetailsPage } from "./pages/BookDetailsPage";
import { CartPage } from "./pages/CartPage";
import { ErrorPage } from "./pages/ErrorPage";
import { CartContextProvider } from "./context/CartContext";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootPage />,
    errorElement: <ErrorPage />,
    children: [
      { path: "", element: <HomePage /> },
      { path: "/book/:id", element: <BookDetailsPage /> },
      { path: "/cart", element: <CartPage /> },
    ],
  },
]);

function App() {
  return (
    <CartContextProvider>
      <RouterProvider router={router} />
    </CartContextProvider>
  );
}

export default App;
