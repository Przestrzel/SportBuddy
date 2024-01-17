const key = "SportBuddy__AccessToken";

export const getAccessToken = () => localStorage.getItem(key);

export const setAccessToken = (token: string) =>
  localStorage.setItem(key, token);
