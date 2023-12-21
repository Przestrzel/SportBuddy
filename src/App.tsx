import "./index.css";
import dayjs from "dayjs";
import RouterProvider from "./providers/RouterProvider";
import StoreProvider from "./providers/StoreProvider";

dayjs.locale("pl");

function App() {
  return (
    <StoreProvider>
      <RouterProvider />
    </StoreProvider>
  );
}

export default App;
