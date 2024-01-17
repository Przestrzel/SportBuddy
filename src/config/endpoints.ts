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
    matches: {
      history: "/Groups/:id/matches/archived",
      upcoming: "/Groups/:id/matches/upcoming",
      add: "/Groups/:id/matches",
    },
  },
} as const;
