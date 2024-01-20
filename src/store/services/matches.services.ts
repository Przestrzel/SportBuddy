import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQueryWithAuth } from "../utils/services.utils";
import endpoints from "../../config/endpoints";
import { Match } from "../../pages/groups/events/types/events.types";

interface DateQuery {
  date: string;
}

export const matchesApi = createApi({
  baseQuery: baseQueryWithAuth,
  reducerPath: "matchesApi",
  tagTypes: ["UserMatches"],
  endpoints: (builder) => ({
    userMatches: builder.query<Match[], DateQuery>({
      query: ({ date }) => ({
        url: endpoints.matches.index,
        method: "GET",
        params: { date },
      }),
      providesTags: (_, __, { date }) => [{ type: "UserMatches", id: date }],
    }),
  }),
});

export const { useUserMatchesQuery } = matchesApi;
