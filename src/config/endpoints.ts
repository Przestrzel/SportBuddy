export default {
  users: {
    login: "/Users/sign-in",
    me: "/Users/me",
    signUp: "/Users/sign-up",
  },
  groups: {
    index: "/Groups",
    details: "/Groups/:id",
    leave: "/Groups/:id/leave",
    users: {
      toInvite: "/Groups/:id/usersToInvite",
      current: "/Groups/:id/users",
    },
    matches: {
      history: "/Groups/:id/matches/archived",
      upcoming: "/Groups/:id/matches/upcoming",
      add: "/Groups/:id/matches",
    },
  },
  matches: {
    index: "/Matches/matches",
    register: "/Matches/:matchId/register",
    leave: "/Matches/:matchId/leave",
  },
} as const;
