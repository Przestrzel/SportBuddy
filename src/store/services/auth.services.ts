import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "../utils/services.utils";
import { AccessToken, ILogin } from "../../pages/auth/types/auth.types";
import endpoints from "../../config/endpoints";

export interface IRegisterRequest {
  email: string;
  fullName: string;
  password: string;
  username: string;
}

export const authApi = createApi({
  baseQuery,
  reducerPath: "authApi",
  endpoints: (builder) => ({
    login: builder.mutation<AccessToken, ILogin>({
      query: (credentials) => ({
        url: endpoints.users.login,
        method: "POST",
        body: credentials,
      }),
    }),
    signUp: builder.mutation<AccessToken, IRegisterRequest>({
      query: (user) => ({
        url: endpoints.users.signUp,
        method: "POST",
        body: user,
      }),
    }),
  }),
});

export const { useLoginMutation, useSignUpMutation } = authApi;
