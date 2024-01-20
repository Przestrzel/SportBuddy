import { createApi } from "@reduxjs/toolkit/query/react";
import dayjs from "dayjs";
import { baseQueryWithAuth } from "../utils/services.utils";
import endpoints from "../../config/endpoints";
import { Match } from "../../pages/groups/events/types/events.types";

interface DateQuery {
  date: dayjs.Dayjs;
}

export const matchesApi = createApi({
  baseQuery: baseQueryWithAuth,
  reducerPath: "matchesApi",
  tagTypes: ["UserMatches"],
  endpoints: (builder) => ({
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

export const { useUserMatchesQuery } = matchesApi;
