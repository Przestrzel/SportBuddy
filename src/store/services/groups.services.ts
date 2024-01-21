import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQueryWithAuth } from "../utils/services.utils";
import endpoints from "../../config/endpoints";
import { Group } from "../../pages/groups/types/groups.types";
import { Match } from "../../pages/groups/events/types/events.types";
import { User } from "../../pages/auth/types/auth.types";

interface GroupId {
  groupId: string;
}
interface MatchWithGroupId extends GroupId {
  match: Match;
}

interface MatchId {
  matchId: string;
}

export const groupsApi = createApi({
  baseQuery: baseQueryWithAuth,
  reducerPath: "groupsApi",
  tagTypes: [
    "Groups",
    "ArchivedMatches",
    "UpcomingMatches",
    "Users",
    "UsersToInvite",
    "GroupDetails",
  ],
  endpoints: (builder) => ({
    groups: builder.query<Group[], void>({
      query: () => ({
        url: endpoints.groups.index,
        method: "GET",
      }),
      providesTags: ["Groups"],
    }),
    groupDetails: builder.query<Group, GroupId>({
      query: ({ groupId }) => ({
        url: endpoints.groups.details.replace(":id", groupId),
        method: "GET",
      }),
      providesTags: (_, __, { groupId }) => [
        { type: "GroupDetails", id: groupId },
      ],
    }),
    createGroup: builder.mutation<Group, Omit<Group, "id" | "adminId">>({
      query: (group) => ({
        url: endpoints.groups.index,
        method: "POST",
        body: group,
      }),
      invalidatesTags: ["Groups"],
    }),
    createMatch: builder.mutation<Match, Omit<MatchWithGroupId, "id">>({
      query: ({ groupId, match }) => ({
        url: endpoints.groups.matches.add.replace(":id", groupId),
        method: "POST",
        body: match,
      }),
      invalidatesTags: ["UpcomingMatches"],
    }),
    archivedMatches: builder.query<Match[], GroupId>({
      query: ({ groupId }) => ({
        url: endpoints.groups.matches.archived.replace(":id", groupId),
        method: "GET",
      }),
      providesTags: (result) =>
        result
          ? result.map(({ id }) => ({ type: "ArchivedMatches", id }))
          : ["ArchivedMatches"],
    }),
    upcomingMatches: builder.query<Match[], GroupId>({
      query: ({ groupId }) => ({
        url: endpoints.groups.matches.upcoming.replace(":id", groupId),
        method: "GET",
      }),
      providesTags: (result) =>
        result ? result.map(({ id }) => ({ type: "UpcomingMatches", id })) : [],
    }),
    registerToMatch: builder.mutation<void, MatchId>({
      query: ({ matchId }) => ({
        url: endpoints.matches.register.replace(":matchId", matchId),
        method: "POST",
      }),
      invalidatesTags: ["UpcomingMatches"],
    }),
    leaveMatch: builder.mutation<void, MatchId>({
      query: ({ matchId }) => ({
        url: endpoints.matches.leave.replace(":matchId", matchId),
        method: "DELETE",
      }),
      invalidatesTags: ["UpcomingMatches"],
    }),
    leaveGroup: builder.mutation<void, GroupId>({
      query: ({ groupId }) => ({
        url: endpoints.groups.leave.replace(":id", groupId),
        method: "DELETE",
      }),
      invalidatesTags: ["Groups", "GroupDetails"],
    }),
    groupUsersToInvite: builder.query<User[], GroupId>({
      query: ({ groupId }) => ({
        url: endpoints.groups.users.toInvite.replace(":id", groupId),
        method: "GET",
      }),
      providesTags: (result) =>
        result
          ? result.map(({ id }) => ({
              type: "UsersToInvite",
              id,
            }))
          : ["UsersToInvite"],
    }),
    groupUsers: builder.query<User[], GroupId>({
      query: ({ groupId }) => ({
        url: endpoints.groups.users.current.replace(":id", groupId),
        method: "GET",
      }),
      providesTags: (result) =>
        result
          ? result.map(({ id }) => ({
              type: "Users",
              id,
            }))
          : ["Users"],
    }),
    inviteUsers: builder.mutation<void, GroupId & { userIds: string[] }>({
      query: ({ groupId, userIds }) => ({
        url: endpoints.groups.users.current.replace(":id", groupId),
        method: "POST",
        body: {
          userIds,
        },
      }),
      invalidatesTags: ["UsersToInvite", "Users"],
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
  useGroupUsersQuery,
  useGroupUsersToInviteQuery,
  useInviteUsersMutation,
  useRegisterToMatchMutation,
  useLeaveMatchMutation,
} = groupsApi;
