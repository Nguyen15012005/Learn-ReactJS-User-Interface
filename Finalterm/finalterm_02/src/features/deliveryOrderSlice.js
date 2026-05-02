import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialValue = {
  orders: [],
  loading: false,
  error: null,
};

const deliveryOrderSlice = createSlice({
  name: "deliveryOrderSlice",
  initialState: initialValue,
  reducers: {},
  extraReducers: (builder) =>
    builder
      //   fetch deliveryOrder
      .addCase(fetchDeliveryOrders.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchDeliveryOrders.fulfilled, (state, action) => {
        state.loading = false;
        state.orders = action.payload;
      })
      .addCase(fetchDeliveryOrders.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      //   create deliveryOrder
      .addCase(createDeliveryOrder.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createDeliveryOrder.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(createDeliveryOrder.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      }),
});

export const fetchDeliveryOrders = createAsyncThunk(
  "deliveryOrderSlice/fetchOrder",
  async (_, { rejectWithValue }) => {
    return await fetch("http://localhost:731/delivery_orders")
      .then((res) => res.json())
      .catch((err) => rejectWithValue(err));
  },
);

export const createDeliveryOrder = createAsyncThunk(
  "deliveryOrderSlice/createDeliveryOrder",
  async (orders, { rejectWithValue }) => {
    await fetch("http://localhost:731/delivery_orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(orders),
    }).catch((err) => rejectWithValue(err));
  },
);

export default deliveryOrderSlice.reducer;
