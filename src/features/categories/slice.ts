import { createSlice } from "@reduxjs/toolkit";
import type { RequestState } from "../../models/requestStatus";
import type { IProductCategory } from "./models/ProductCategory";

const sliceName = "categories";

export type CategoriesState = RequestState<IProductCategory[]>;

const initialState: CategoriesState = {
  status: "idle",
  error: null,
  data: [],
};

const categoriesSlice = createSlice({
  name: sliceName,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    
  },
});

export default categoriesSlice.reducer;

export const {} = categoriesSlice.actions;
