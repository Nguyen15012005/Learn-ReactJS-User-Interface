import React from "react";
import { Provider } from "react-redux";
import { store } from "./features/store";
import CartView from "./components/CartView";
import ProductList from "./components/ProductList";

function App() {
  return (
    <Provider store={store}>
      <div className="min-h-screen bg-gray-50 p-6 flex flex-col items-center gap-8">
        <h1 className="text-3xl font-bold">🛍️ Sản phẩm</h1>
        <ProductList />
        <CartView />
      </div>
    </Provider>
  );
}

export default App;
