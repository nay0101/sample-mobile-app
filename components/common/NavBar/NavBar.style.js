import { StyleSheet } from "react-native";
import { FONT } from "../../../constants";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderBottomWidth: 0.5,
    borderBottomColor: "grey",
  },
  logoText: {
    fontFamily: FONT.bold,
    fontSize: 20,
  },
  menuButtons: {
    flexDirection: "row",
    gap: 10,
  },
});

export default styles;
