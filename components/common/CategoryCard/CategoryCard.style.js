import { Dimensions, StyleSheet } from "react-native";
import { FONT } from "../../../constants";

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  image: {
    width: "100%",
    height: width * 0.7,
  },
  mask: {
    position: "absolute",
    width: "100%",
    height: "100%",
    backgroundColor: "black",
    opacity: 0.25,
  },
  shopText: {
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%",
  },
  title: {
    textTransform: "uppercase",
    fontFamily: FONT.bold,
    fontSize: 30,
    color: "#fff",
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#fff",
    padding: 10,
  },
  buttonText: {
    fontFamily: FONT.light,
  },
});

export default styles;
