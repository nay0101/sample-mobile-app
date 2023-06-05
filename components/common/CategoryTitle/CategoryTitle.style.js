import { StyleSheet } from "react-native";
import { FONT } from "../../../constants";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    padding: 10,
  },
  title: {
    textTransform: "capitalize",
    fontFamily: FONT.bold,
    fontSize: 25,
  },
});

export default styles;
