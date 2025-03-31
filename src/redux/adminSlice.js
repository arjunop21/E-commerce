import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Fetch Users (Admin Only)
export const getUsers = createAsyncThunk("admin/getUsers", async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get("/api/admin/users", { withCredentials: true });
      console.log("admin data: ", data)
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.message || "Failed to fetch users");
    }
});

export const getOrders = createAsyncThunk("admin/getOrders", async () => {
  const response = await axios.get("/api/admin/orders", { withCredentials: true });
  return response.data;
});

const adminSlice = createSlice({
    name: "admin",
    initialState: { users: [], loading: false, error: null },
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(getUsers.pending, (state) => {
          state.loading = true;
        })
        .addCase(getUsers.fulfilled, (state, action) => {
          state.loading = false;
          state.users = action.payload;
        })
        .addCase(getUsers.rejected, (state, action) => {
          state.loading = false;
          state.error = action.payload;
        });
    },
  });

export default adminSlice.reducer;
