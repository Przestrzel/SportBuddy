import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { User } from "../../pages/auth/types/auth.types";
import { RootState } from "../store";

interface AuthState {
  token: string | null;
  user: User | null;
}

const initialState: AuthState = {
  user: null,
  token: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
    },
    setToken: (state, action: PayloadAction<AuthState["token"]>) => {
      state.token = action.payload;
    },
    logout: (state) => {
      state.user = null;
    },
  },
});

export const { login, logout } = authSlice.actions;
export const authReducer = authSlice.reducer;

export const selectToken = (state: RootState) => state.auth.token;
export const selectUser = (state: RootState) => state.auth.user;
