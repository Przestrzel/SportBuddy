import { createApi } from "@reduxjs/toolkit/query/react";
import dayjs from "dayjs";
import { baseQueryWithAuth } from "../utils/services.utils";
import { AccessToken, User } from "../../pages/auth/types/auth.types";
import endpoints from "../../config/endpoints";
import { Match } from "../../pages/groups/events/types/events.types";

interface DateQuery {
  date: dayjs.Dayjs;
}

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
    userMatches: builder.query<Match[], DateQuery>({
      query: ({ date }) => ({
        url: endpoints.users.me,
        method: "GET",
        params: { date: date.format("YYYY-MM-DD") },
      }),
      providesTags: (_, __, { date }) => [
        { type: "UserMatches", id: date.format("YYYY-MM-DD") },
      ],
    }),
  }),
});

export const { useUserInfoMutation, useUserMatchesQuery } = usersApi;
