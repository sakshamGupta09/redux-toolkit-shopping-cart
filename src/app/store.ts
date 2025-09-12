import {
  configureStore,
  type Action,
  type ThunkAction,
} from "@reduxjs/toolkit";

import categoriesReducer from "@features/categories/slice";

export const store = configureStore({
  reducer: {
    categories: categoriesReducer,
  },
});

export type AppStore = typeof store;

export type AppDispatch = typeof store.dispatch;

export type RootState = ReturnType<typeof store.getState>;

export type AppThunk = ThunkAction<void, RootState, unknown, Action>;
