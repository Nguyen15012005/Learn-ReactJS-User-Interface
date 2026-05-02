import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootPage from "./pages/RootPage";
import HomePage from "./pages/HomePage";
import CounterPage from "./pages/CounterPage";
import TodosPage from "./pages/TodosPage";

const router = createBrowserRouter([
  {
    path: "",
    element: <RootPage />,
    children: [
      { path: "", element: <HomePage /> },
      { path: "/counter", element: <CounterPage /> },
      { path: "/todos", element: <TodosPage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
