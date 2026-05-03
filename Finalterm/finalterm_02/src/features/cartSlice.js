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
      const prod = action.payload;

      const existItem = state.items.find((x) => x.id === prod.id);

      if (existItem) existItem.quantity++;
      else {
        state.items.push({ ...prod, quantity: 1 });
      }
    },
    removeFromCart: (state, action) => {
      const id = action.payload;

      const existItem = state.items.find((x) => x.id === id);

      if (!existItem) return state;
      if (existItem.quantity === 1)
        state.items = state.items.filter((x) => x.id !== id);
      else {
        existItem.quantity--;
      }
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
