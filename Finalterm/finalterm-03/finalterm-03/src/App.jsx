import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import store from "./features/store";

function App() {
  return (
    <Provider store={store}>
      <RouterProvider />
    </Provider>
  );
}

export default App;

// npm install react-toastify