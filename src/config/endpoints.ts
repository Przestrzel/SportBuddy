export default {
  users: {
    login: "/Users/sign-in",
    me: "/Users/me",
    signUp: "/Users/sign-up",
    matches: "/Users/matches",
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
      register: "/Groups/:id/matches/:matchId/register",
      leave: "/Groups/:id/matches/:matchId/leave",
    },
  },
} as const;
