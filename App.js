import { Provider } from "react-redux";
import Routes from "./src/Routes";
import store from "./store/index";
import { persistor } from "./store/index";
import { PersistGate } from "redux-persist/integration/react";
import { StripeProvider } from "@stripe/stripe-react-native";
import { PaperProvider } from "react-native-paper";

export default function App() {
  const STRIPE_KEY =
    process.env.STRIPE_KEY ||
    "pk_test_51NDUYXFBmrvMKHaef1ER7GgfijUTKcDNTGeM33y0ae516O3WGwGlXTwWXN1beZlEi3hOp4AwFxxy6EgayfiSX6Zh00NmkCynSK";
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
