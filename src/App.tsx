import "./index.css";
import dayjs from "dayjs";
import { useEffect } from "react";
import toast from "react-hot-toast";
import RouterProvider from "./providers/RouterProvider";
import StoreProvider from "./providers/StoreProvider";
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
          toast.success(`Welcome ${res.firstName} ${res.lastName}!`);
        });
    }
  }, [accessToken]);

  return (
    <StoreProvider>
      <RouterProvider />
    </StoreProvider>
  );
}

export default App;
