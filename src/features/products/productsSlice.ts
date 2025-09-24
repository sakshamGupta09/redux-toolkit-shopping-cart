import type { RequestState } from "@models/requestStatus";
import { createAppAsyncThunk } from "@app/withTypes";
import type { RootState } from "@app/store";
import { http } from "@api/client";
import type { IProductsResponse } from "./models/products-response";
import { createSlice } from "@reduxjs/toolkit";

const sliceName = "products";

export type ProductsState = RequestState<IProductsResponse>;

const initialState: ProductsState = {
  status: "idle",
  error: null,
  data: { products: [], total: 0 },
};

export const fetchProducts = createAppAsyncThunk(
  `${sliceName}/fetchProducts`,
  async () => {
    const response = await http.get<IProductsResponse>("products");
    return response.data;
  },
  {
    condition(_: void, thunkApi) {
      const requestStatus = selectProductsState(thunkApi.getState()).status;
      if (requestStatus === "progress") {
        return false;
      }
      return true;
    },
  }
);

export const productsSlice = createSlice({
  name: sliceName,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = "progress";
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = "success";
        state.data = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Something went wrong";
      });
  },
});

export const selectProductsState = (state: RootState) => state.products;

export default productsSlice.reducer;
