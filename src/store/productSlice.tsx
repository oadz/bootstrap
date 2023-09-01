import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "./store";
export const fetchProducts = createAsyncThunk(
  "products/getProducts",
  async () => {
    const response = await axios.get("https://fakestoreapi.com/products");
    return response.data;
  }
);
export const searchProducts = createAsyncThunk(
  "products/searchProducts",
  async (searchTerm) => {
    const response = await axios.get(
      `https://fakestoreapi.com/products/${searchTerm}`
    );
    return response.data;
  }
);
export const getAllCatagoryProducts = createAsyncThunk(
  "products/getAllCatagoryProducts",
  async () => {
    const response = await axios.get(
      "https://fakestoreapi.com/products/categories"
    );
    return response.data;
  }
);
interface dataDetail {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}
interface Products {
  data: dataDetail[];
  status: string;
  error: boolean;
  catagory: string[];
}
const initialState: Products = {
  data: [],
  status: "idle",
  error: false,
  catagory: [],
};
const postsSlice = createSlice({
  name: "posts",
  initialState: initialState,
  reducers: {
    reset: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = "failed";
        state.error = true;
      })
      // .addCase(getAllCatagoryProducts.pending, (state) => {
      //   state.status = "loading";
      // })
      .addCase(getAllCatagoryProducts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.catagory = action.payload;
      })
      .addCase(getAllCatagoryProducts.rejected, (state, action) => {
        state.status = "failed";
        state.error = true;
      })
      .addCase(searchProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(searchProducts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(searchProducts.rejected, (state, action) => {
        state.status = "failed";
        state.error = true;
      });
  },
});
export const productSelector = (store: RootState) => store.products;
export const { reset } = postsSlice.actions;
export default postsSlice.reducer;
