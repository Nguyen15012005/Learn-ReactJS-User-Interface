import { Provider } from "react-redux";
import store from "./features/store";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { RouterProvider } from "react-router-dom";
import route from "./routers/AppRoute";

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={route}></RouterProvider>
    </Provider>
  );
}

export default App;
