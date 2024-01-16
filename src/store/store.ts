import { configureStore } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { authApi } from "./services/auth.services";
import { authReducer } from "./slices/auth.slice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    [authApi.reducerPath]: authApi.reducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
export const useAppSelector = useSelector<RootState>;
