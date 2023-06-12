import { Platform, StyleSheet, NativeModules } from "react-native";

const { StatusBarManager } = NativeModules;

const main = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBarManager.HEIGHT : 0,
  },
  container: {
    width: "100%",
    padding: 15,
    backgroundColor: "#fff",
  },
});

export default main;
