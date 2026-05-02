import { createSlice } from "@reduxjs/toolkit";

// const initialValue = {
//   items: [{ products, quantity }],
//   actions: addToCart(product),
//   function: removeFromCart(id),
// };

const cartSlice = createSlice({
  name: "cartSlice",
  initialState: {
    items: [],
  },
  reducers: {
    addToCart: (state, action) => {
      console.log(state, action);
    },
    removeFromCart: (state, action) => {
      console.log(state, action);
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
