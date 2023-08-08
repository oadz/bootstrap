import { configureStore } from "@reduxjs/toolkit";
import profileReducer from "../store/profileSlice";
import productReducer from "../store/productSlice";
export const store = configureStore({
  reducer: {
    profile: profileReducer,
    products: productReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
