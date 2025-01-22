import { configureStore } from "@reduxjs/toolkit";
import postReducer from "./reducer/postsSlice";
import { useDispatch } from "react-redux";

const store = configureStore({
  reducer: {
    post: postReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export default store;
