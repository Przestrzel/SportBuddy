import "./index.css";
import dayjs from "dayjs";
import { useEffect } from "react";
import toast from "react-hot-toast";
import RouterProvider from "./providers/RouterProvider";
import { useAppDispatch, useAppSelector } from "./store/store";
import { authSlice, selectToken, selectUser } from "./store/slices/auth.slice";
import { useUserInfoMutation, usersApi } from "./store/services/users.services";
import { getAccessToken } from "./utils/accessToken.utils";
import { matchesApi } from "./store/services/matches.services";
import { groupsApi } from "./store/services/groups.services";
import { authApi } from "./store/services/auth.services";

dayjs.locale("pl");

function App() {
  const dispatch = useAppDispatch();
  const accessToken = useAppSelector(selectToken);
  const user = useAppSelector(selectUser);
  const [getData] = useUserInfoMutation();

  useEffect(() => {
    const token = getAccessToken();
    if (token) {
      dispatch(authSlice.actions.setToken(token));
    }
  }, []);

  const resetCache = () => {
    dispatch(usersApi.util.resetApiState());
    dispatch(matchesApi.util.resetApiState());
    dispatch(groupsApi.util.resetApiState());
    dispatch(authApi.util.resetApiState());
  };

  useEffect(() => {
    if (user) {
      resetCache();
    }
  }, [user]);

  useEffect(() => {
    if (accessToken) {
      getData({ accessToken })
        .unwrap()
        .then((res) => {
          dispatch(authSlice.actions.login(res));
          // TODO: Could be a problem with refresh cause probably shouldn't show welcome message.
          toast.success(`Welcome ${res.username}!`);
        });
    }
    resetCache();
  }, [accessToken]);

  return <RouterProvider />;
}

export default App;
