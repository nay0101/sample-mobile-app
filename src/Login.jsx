import {
  Dimensions,
  ImageBackground,
  Pressable,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import main from "../styles/main";
import { useState } from "react";
import { COLORS, FONT } from "../constants";
import { login } from "../store/auth-actions";
import { useDispatch } from "react-redux";
import { SafeAreaView } from "react-native-safe-area-context";

const { height, width } = Dimensions.get("window");

const Login = ({ navigation }) => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const formSubmitHandler = async () => {
    dispatch(
      login({
        username,
        password,
      })
    ).then(() => {
      setUsername("");
      setPassword("");
      navigation.goBack();
    });
  };
  return (
    <SafeAreaView style={main.safeAreaView}>
      <StatusBar />
      <ImageBackground
        source={{
          uri: "https://images.pexels.com/photos/2112648/pexels-photo-2112648.jpeg?auto=compress&cs=tinysrgb&w=600",
        }}
        resizeMode="cover"
        style={styles.container}
      >
        <View style={styles.form}>
          <Text style={styles.title}>Log in</Text>
          <TextInput
            name="username"
            value={username}
            placeholder="Username"
            onChangeText={(value) => setUsername(value)}
            style={styles.input}
          />
          <TextInput
            name="password"
            secureTextEntry={true}
            value={password}
            placeholder="Password"
            onChangeText={(value) => setPassword(value)}
            style={styles.input}
          />
          <Pressable
            style={({ pressed }) => [
              styles.button,
              pressed ? styles.button_after : "",
            ]}
            disabled={!username || !password}
            onPress={formSubmitHandler}
          >
            {({ pressed }) => (
              <Text
                style={[
                  styles.buttonText,
                  pressed ? styles.buttonText_after : "",
                ]}
              >
                Login
              </Text>
            )}
          </Pressable>
          <Text
            style={styles.createNew}
            onPress={() => navigation.navigate("Register")}
          >
            Create A New Account
          </Text>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: height,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontFamily: FONT.bold,
    fontSize: 20,
    textTransform: "uppercase",
  },
  form: {
    paddingVertical: 30,
    paddingHorizontal: 20,
    backgroundColor: "#fff",
    width: width * 0.7,
    gap: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: COLORS.gray,
    borderRadius: 5,
    padding: 7,
  },
  button: {
    backgroundColor: COLORS.primary,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  button_after: {
    backgroundColor: "#fff",
  },
  buttonText: {
    fontFamily: FONT.regular,
    color: "#fff",
  },
  buttonText_after: {
    color: COLORS.primary,
  },
  createNew: {
    fontFamily: FONT.regular,
    textDecorationLine: "underline",
  },
});

export default Login;
