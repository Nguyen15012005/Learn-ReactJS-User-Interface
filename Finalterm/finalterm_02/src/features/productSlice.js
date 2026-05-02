import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialValue = {
  products: [],
  loading: false,
  error: null,
};

const productSlice = createSlice({
  name: "productSlice",
  initialState: initialValue,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      }),
});

export const fetchProducts = createAsyncThunk(
  "productSlice/fetchProducts",
  async (_, { rejectWithValue }) => {
    return await fetch("http://localhost:731/products")
      .then((res) => res.json())
      .catch((err) => rejectWithValue(err));
  },
);

export default productSlice.reducer;
