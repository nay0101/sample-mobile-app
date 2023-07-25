import {
  Dimensions,
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import main from "../styles/main";
import { useState } from "react";
import { COLORS, FONT } from "../constants";
import { useDispatch } from "react-redux";
import { register } from "../store/auth-actions";

const { height, width } = Dimensions.get("window");

const Register = ({ navigation }) => {
  const dispatch = useDispatch();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const formSubmitHandler = () => {
    dispatch(
      register({
        username,
        password,
        email,
      })
    );
    setUsername("");
    setPassword("");
    setFirstName("");
    setLastName("");
    setEmail("");
    navigation.goBack();
  };
  return (
    <SafeAreaView style={main.safeAreaView}>
      <ImageBackground
        source={{
          uri: "https://images.pexels.com/photos/2112648/pexels-photo-2112648.jpeg?auto=compress&cs=tinysrgb&w=600",
        }}
        resizeMode="cover"
        style={styles.container}
      >
        <View style={styles.form}>
          <Text style={styles.title}>Register</Text>
          <TextInput
            name="firstName"
            value={firstName}
            placeholder="First Name"
            onChangeText={(value) => setFirstName(value)}
            style={styles.input}
          />
          <TextInput
            name="lastName"
            value={lastName}
            placeholder="Last Name"
            onChangeText={(value) => setLastName(value)}
            style={styles.input}
          />
          <TextInput
            name="email"
            inputMode="email"
            value={email}
            placeholder="Email"
            onChangeText={(value) => setEmail(value)}
            style={styles.input}
          />
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
          <Text style={styles.privacyPolicy}>
            By Creating an account, I consent to the processing of my personal
            data in accordance with the{" "}
            <Text style={{ fontWeight: "bold" }}>PRIVACY POLICY</Text>.
          </Text>
          <Pressable
            style={({ pressed }) => [
              styles.button,
              pressed ? styles.button_after : "",
            ]}
            disabled={
              !username || !password || !firstName || !lastName || !email
            }
            onPress={formSubmitHandler}
          >
            {({ pressed }) => (
              <Text
                style={[
                  styles.buttonText,
                  pressed ? styles.buttonText_after : "",
                ]}
              >
                Create
              </Text>
            )}
          </Pressable>
          <Text
            style={styles.haveAccount}
            onPress={() => navigation.navigate("Login")}
          >
            Already Have An Account?
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
  privacyPolicy: {
    fontFamily: FONT.regular,
    fontSize: 13,
    textAlign: "justify",
  },
  haveAccount: {
    fontFamily: FONT.regular,
    textDecorationLine: "underline",
  },
});

export default Register;
