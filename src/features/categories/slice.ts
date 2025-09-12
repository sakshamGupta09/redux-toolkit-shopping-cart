import { createSlice } from "@reduxjs/toolkit";
import type { RequestState } from "../../models/requestStatus";
import type {
  ICategoriesResponse,
  IProductCategory,
} from "./models/ProductCategory";
import { createAppAsyncThunk } from "@app/withTypes";
import type { RootState } from "@app/store";
import { http } from "@api/client";
import { adaptCategories } from "./adapters/categories.adapter";

const sliceName = "categories";

export type CategoriesState = RequestState<IProductCategory[]>;

const initialState: CategoriesState = {
  status: "idle",
  error: null,
  data: [],
};

export const fetchCategories = createAppAsyncThunk(
  "categories/fetchCategories",
  async () => {
    const response = await http.get<ICategoriesResponse[]>(
      "products/categories"
    );
    return response.data;
  },
  {
    condition(_: void, thunkApi) {
      const requestStatus = selectCategoriesState(thunkApi.getState()).status;
      if (requestStatus !== "idle") {
        return false;
      }
    },
  }
);

const categoriesSlice = createSlice({
  name: sliceName,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategories.pending, () => {
        return { status: "progress", data: [], error: null };
      })
      .addCase(fetchCategories.fulfilled, () => {
        return {
          status: "success",
          data: adaptCategories(),
          error: null,
        };
      })
      .addCase(fetchCategories.rejected, (_unused, action) => {
        return {
          status: "failed",
          data: [],
          error: action.error.message ?? "Unknown Error",
        };
      });
  },
});

export const selectCategoriesState = (state: RootState) => state.categories;

export default categoriesSlice.reducer;
