import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { UserWithAccessToken } from "../../pages/auth/types/auth.types";

interface AuthState {
  user: UserWithAccessToken | null;
}

const initialState: AuthState = {
  user: null,
};

function assertUserLoggedIn(
  user: UserWithAccessToken | null,
): asserts user is UserWithAccessToken {
  if (!user) {
    throw new Error("User must be logged in");
  }
}

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<UserWithAccessToken>) => {
      state.user = action.payload;
    },
    tokenReceived: (state, action: PayloadAction<UserWithAccessToken>) => {
      assertUserLoggedIn(state.user);
      state.user = {
        ...state.user,
        accessToken: action.payload.accessToken,
      };
    },
    logout: (state) => {
      state.user = null;
    },
  },
});

export const { login, logout } = authSlice.actions;
export const authReducer = authSlice.reducer;
