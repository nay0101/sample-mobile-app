import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./Home";
import Products from "./Products";
import { useFonts } from "expo-font";

const Stack = createNativeStackNavigator();

const Routes = () => {
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
          component={Products}
          initialParams={{ category: null }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
