import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQueryWithAuth } from "../utils/services.utils";
import endpoints from "../../config/endpoints";
import { Group } from "../../pages/groups/types/groups.types";
import { Match } from "../../pages/groups/events/types/events.types";

interface GroupId {
  groupId: string;
}

interface MatchWithGroupId extends GroupId {
  match: Match;
}

export const groupsApi = createApi({
  baseQuery: baseQueryWithAuth,
  reducerPath: "groupsApi",
  tagTypes: ["Groups", "ArchivedMatches", "UpcomingMatches"],
  endpoints: (builder) => ({
    groups: builder.query<Group[], void>({
      query: () => ({
        url: endpoints.groups.index,
        method: "GET",
        providesTags: ["Groups"],
      }),
    }),
    groupDetails: builder.query<Group, GroupId>({
      query: ({ groupId }) => ({
        url: endpoints.groups.details.replace(":id", groupId),
        method: "GET",
      }),
      providesTags: (_, __, { groupId }) => [{ type: "Groups", id: groupId }],
    }),
    createGroup: builder.mutation<Group, Omit<Group, "id">>({
      query: (group) => ({
        url: endpoints.groups.index,
        method: "POST",
        body: group,
        invalidatesTags: ["Groups"],
      }),
    }),
    createMatch: builder.mutation<Match, Omit<MatchWithGroupId, "id">>({
      query: ({ groupId, match }) => ({
        url: endpoints.groups.matches.add.replace(":id", groupId),
        method: "POST",
        data: match,
      }),
      invalidatesTags: (_, __, { groupId }) => [
        { type: "ArchivedMatches", id: groupId },
        { type: "UpcomingMatches", id: groupId },
      ],
    }),
    archivedMatches: builder.query<Group, GroupId>({
      query: ({ groupId }) => ({
        url: endpoints.groups.details.replace(":id", groupId),
        method: "GET",
      }),
      providesTags: (_, __, { groupId }) => [
        { type: "ArchivedMatches", id: groupId },
      ],
    }),
    upcomingMatches: builder.query<Group, GroupId>({
      query: ({ groupId }) => ({
        url: endpoints.groups.details.replace(":id", groupId),
        method: "GET",
      }),
      providesTags: (_, __, { groupId }) => [
        { type: "UpcomingMatches", id: groupId },
      ],
    }),
    leaveGroup: builder.mutation<void, GroupId>({
      query: ({ groupId }) => ({
        url: endpoints.groups.leave.replace(":id", groupId),
        method: "DELETE",
        invalidatesTags: ["Groups"],
      }),
    }),
  }),
});

export const {
  useGroupsQuery,
  useCreateGroupMutation,
  useGroupDetailsQuery,
  useCreateMatchMutation,
  useLeaveGroupMutation,
  useUpcomingMatchesQuery,
  useArchivedMatchesQuery,
} = groupsApi;
