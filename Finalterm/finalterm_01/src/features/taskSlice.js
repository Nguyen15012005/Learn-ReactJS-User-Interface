import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// =======================================================================

const initialValue = {
  tasks: [],
  isLoading: false,
  error: null,
};

const taskSlice = createSlice({
  name: "taskSlice",
  initialState: initialValue,
  reducers: {},
  extraReducers: (builder) => {
    builder
      //fetchTasks
      .addCase(fetchTasks.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchTasks.fulfilled, (state, action) => {
        state.isLoading = false;
        state.tasks = action.payload;
      })
      .addCase(fetchTasks.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      //deleteTask
      .addCase(deleteTask.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(deleteTask.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(deleteTask.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      //deleteTask
      .addCase(addTask.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(addTask.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(addTask.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      // update task
      .addCase(updateTask.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(updateTask.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(updateTask.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

// =======================================================================
// ASYNC THUNK
// =======================================================================

export const fetchTasks = createAsyncThunk(
  "taskSlice/fetchTasks",
  async (_, { rejectWithValue }) => {
    return await fetch("http://localhost:731/tasks")
      .then((res) => res.json())
      .catch((err) => rejectWithValue(err));
  },
);

export const deleteTask = createAsyncThunk(
  "taskSlice/deleteTask",
  async (id, { rejectWithValue }) => {
    await fetch(`http://localhost:731/tasks/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      // .then((res) => res.json())
      .catch((err) => rejectWithValue(err));
  },
);

export const addTask = createAsyncThunk(
  "taskSlice/addTask",
  async (task, { rejectWithValue }) => {
    await fetch(`http://localhost:731/tasks`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(task),
    })
      // .then((res) => res.json())
      .catch((err) => rejectWithValue(err));
  },
);

export const updateTask = createAsyncThunk(
  "taskSlice/updateTask",
  async ({ id, task }, { rejectWithValue }) => {
    await fetch(`http://localhost:731/tasks/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(task),
    })
      // .then((res) => res.json())
      .catch((err) => rejectWithValue(err));
  },
);

// =======================================================================

export default taskSlice.reducer;
