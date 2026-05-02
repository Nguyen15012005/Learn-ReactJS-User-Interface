import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./productSlice";
import cartReducer from "./cartSlice";
import deliveryOrderReducer from "./deliveryOrderSlice";

const store = configureStore({
  reducer: {
    products: productReducer,
    cart: cartReducer,
    orders: deliveryOrderReducer,
  },
});

export default store;
