import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQueryWithAuth } from "../utils/services.utils";
import { AccessToken, User } from "../../pages/auth/types/auth.types";
import endpoints from "../../config/endpoints";

export const usersApi = createApi({
  baseQuery: baseQueryWithAuth,
  reducerPath: "usersApi",
  tagTypes: ["UserMatches"],
  endpoints: (builder) => ({
    userInfo: builder.mutation<User, AccessToken>({
      query: (token) => ({
        url: endpoints.users.me,
        method: "GET",
        body: token,
      }),
    }),
  }),
});

export const { useUserInfoMutation } = usersApi;
