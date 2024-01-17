import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQueryWithAuth } from "../utils/services.utils";
import { User } from "../../pages/auth/types/auth.types";
import endpoints from "../../config/endpoints";

export const usersApi = createApi({
  baseQuery: baseQueryWithAuth,
  reducerPath: "usersApi",
  endpoints: (builder) => ({
    userInfo: builder.query<User, void>({
      query: () => ({
        url: endpoints.users.me,
        method: "GET",
      }),
    }),
  }),
});

export const { useUserInfoQuery } = usersApi;
