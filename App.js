import { Provider } from "react-redux";
import Routes from "./src/Routes";
import store from "./store/index";
import { persistor } from "./store/index";
import { PersistGate } from "redux-persist/integration/react";

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Routes />
      </PersistGate>
    </Provider>
  );
}
