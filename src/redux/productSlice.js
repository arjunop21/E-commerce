import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchProducts } from "../api/productApi";
import axios from "axios";

const initialState = {
  products: [],
  loading: false,
  error: null,
};

// Fetch Products from API
export const getProducts = createAsyncThunk("product/getProducts", async (_, thunkAPI) => {
  try {
    return await fetchProducts();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.message);
  }
});

// Add a new product (Admin only)
export const addProduct = createAsyncThunk("products/addProduct", async (productData, { rejectWithValue }) => {
  try {
    const { data } = await axios.post("/api/products", productData, {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    });
    return data;
  } catch (error) {
    return rejectWithValue(error.response.data.message || "Failed to add product");
  }
});

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
      })
      .addCase(getProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default productSlice.reducer;
