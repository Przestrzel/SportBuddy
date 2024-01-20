import "./index.css";
import dayjs from "dayjs";
import { useEffect } from "react";
import toast from "react-hot-toast";
import RouterProvider from "./providers/RouterProvider";
import { useAppDispatch, useAppSelector } from "./store/store";
import { authSlice, selectToken } from "./store/slices/auth.slice";
import { useUserInfoMutation } from "./store/services/users.services";
import { getAccessToken } from "./utils/accessToken.utils";

dayjs.locale("pl");

function App() {
  const dispatch = useAppDispatch();
  const accessToken = useAppSelector(selectToken);
  const [getData] = useUserInfoMutation();

  useEffect(() => {
    const token = getAccessToken();
    if (token) {
      dispatch(authSlice.actions.setToken(token));
    }
  }, []);

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
  }, [accessToken]);

  return <RouterProvider />;
}

export default App;
