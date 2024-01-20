export default {
  users: {
    login: "/users/sign-in",
    me: "/users/me",
    signUp: "/users",
  },
  groups: {
    index: "/groups",
    details: "/groups/:id",
    leave: "/groups/:id/leave",
    users: {
      toInvite: "/groups/:id/usersToInvite",
      current: "/groups/:id/users",
    },
    matches: {
      archived: "/groups/:id/matches/archived",
      upcoming: "/groups/:id/matches/upcoming",
      add: "/groups/:id/matches",
    },
  },
  matches: {
    index: "/matches",
    register: "/matches/:matchId/register",
    leave: "/matches/:matchId/leave",
  },
} as const;
