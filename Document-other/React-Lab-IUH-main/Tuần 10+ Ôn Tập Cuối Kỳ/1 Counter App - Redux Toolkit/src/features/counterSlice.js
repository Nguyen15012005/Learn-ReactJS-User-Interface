import { createSlice } from "@reduxjs/toolkit";

const initialValue = {
  value: 0,
};

// Redux toolkit dùng thư viện Immer
// thư viện này cho phép viết kiểu "mutate" (biến đổi) trực tiếp
// NHƯNG dưới background nó sẽ thực hiện tạo state mới

export const counterSlice = createSlice({
  name: "counter",
  initialState: initialValue,
  reducers: {
    increment: (state, action) => {
      // action {type: "counter/increment", payload: 10}
      state.value += action.payload;
      // không cần return
      // không cần làm ra obj mới return {..state, value: state.value + 1}
    },
    decrement: (state, action) => {
      // action {type: "counter/decrement", payload: 10}
      state.value -= action.payload;
    },
    reset: (state) => {
      // action {type: "counter/reset"}
      state.value = 0;
    },
  },
});

export const { increment, decrement, reset } = counterSlice.actions;
export default counterSlice.reducer;
