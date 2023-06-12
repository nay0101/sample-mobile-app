import { Provider } from "react-redux";
import Routes from "./src/Routes";
import store from "./store/index";
import { persistor } from "./store/index";
import { PersistGate } from "redux-persist/integration/react";
import { STRIPE_KEY } from "@env";
import { StripeProvider } from "@stripe/stripe-react-native";
import { PaperProvider } from "react-native-paper";

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <StripeProvider publishableKey={STRIPE_KEY}>
          <PaperProvider>
            <Routes />
          </PaperProvider>
        </StripeProvider>
      </PersistGate>
    </Provider>
  );
}
