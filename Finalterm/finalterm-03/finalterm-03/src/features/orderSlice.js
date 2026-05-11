import {
  createAsyncThunk,
  createSlice,
  isRejectedWithValue,
} from "@reduxjs/toolkit";

const initialValue = {
  orders: [],
  isLoading: false,
  error: null,
};

const orderSlice = createSlice({
  name: "orderSlice",
  initialState: initialValue,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchOrders.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchOrders.fulfilled, (state, action) => {
        state.isLoading = false;
        state.orders = action.payload;
      })
      .addCase(fetchOrders.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(updateOrder.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(updateOrder.fulfilled, (state, action) => {
        state.isLoading = false;
        state.orders = action.payload;
      })
      .addCase(updateOrder.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const fetchOrders = createAsyncThunk(
  "orderSlice/fetchOrders",
  async (_, { rejectedWithValue }) => {
    return await fetch("http://localhost:731")
      .then((res) => res.json())
      .catch((err) => rejectedWithValue(err.message));
  },
);

export const updateOrder = createAsyncThunk(
  "orderSlice/updateOrder",
  async ({ id, order }, { rejectWithValue }) => {
    await fetch(`http://localhost:731/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(order),
    })
      // .then((res) => res.json())
      .catch((err) => rejectWithValue(err));
  },
);
export default orderSlice.reducer;
