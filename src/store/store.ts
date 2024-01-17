import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useSelector, useDispatch } from "react-redux";
import { authApi } from "./services/auth.services";
import { authReducer } from "./slices/auth.slice";
import { groupsApi } from "./services/groups.services";
import { usersApi } from "./services/users.services";

export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    [groupsApi.reducerPath]: groupsApi.reducer,
    [usersApi.reducerPath]: usersApi.reducer,
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      authApi.middleware,
      groupsApi.middleware,
      usersApi.middleware,
    ),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
