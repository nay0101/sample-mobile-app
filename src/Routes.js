import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./Home";
import CategoryProducts from "./CategoryProducts";
import { useFonts } from "expo-font";
import Product from "./Product";
import Checkout from "./Checkout";
import Cart from "./Cart";
import Orders from "./Orders";
import Login from "./Login";
import Register from "./Register";
import { useSelector } from "react-redux";

const Stack = createNativeStackNavigator();

const Routes = () => {
  const user = useSelector((store) => store.auth.currentUser);
  const [fontsLoaded] = useFonts({
    UrbanistBold: require("../assets/fonts/Urbanist-Bold.ttf"),
    UrbanistItalic: require("../assets/fonts/Urbanist-Italic.ttf"),
    UrbanistLight: require("../assets/fonts/Urbanist-Light.ttf"),
    UrbanistRegular: require("../assets/fonts/Urbanist-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen
          name="Products"
          component={CategoryProducts}
          initialParams={{ category: null }}
        />
        <Stack.Screen
          name="Product"
          component={Product}
          initialParams={{ productID: null }}
        />
        <Stack.Screen name="Cart" component={Cart} />
        <Stack.Screen name="Checkout" component={Checkout} />
        <Stack.Screen name="Orders" component={Orders} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
