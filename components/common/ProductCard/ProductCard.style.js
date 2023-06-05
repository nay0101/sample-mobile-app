import { Dimensions, StyleSheet } from "react-native";

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  image: {
    width: width * 0.45,
    height: width * 0.7,
  },
});

export default styles;
