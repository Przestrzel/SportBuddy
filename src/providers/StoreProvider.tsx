import { Provider } from "react-redux";
import { store } from "../store/store";

interface Props {
  children: React.ReactNode;
}

function StoreProvider({ children }: Props) {
  return <Provider store={store}>{children}</Provider>;
}

export default StoreProvider;
