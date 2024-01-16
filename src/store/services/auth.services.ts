import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "../utils/services.utils";

export const authApi = createApi({
  baseQuery,
  reducerPath: "authApi",
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (credentials) => ({
        url: "/auth/login",
        method: "POST",
        body: credentials,
      }),
    }),
  }),
});

export const { useLoginMutation } = authApi;
