import { StyleSheet } from "react-native";
import { COLORS, FONT } from "../../../constants";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 15,
    borderBottomWidth: 0.5,
    borderBottomColor: "grey",
  },
  logo: {
    flexDirection: "row",
    alignItems: "center",
  },
  logoText: {
    fontFamily: FONT.bold,
    fontSize: 20,
  },
  menuButtons: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  badge: {
    position: "absolute",
    top: -5,
    right: -5,
    backgroundColor: COLORS.primary,
  },
  menu: {
    backgroundColor: "#fff",
  },
  menuItem: {
    backgroundColor: "#fff",
  },
  menuText: {
    fontFamily: FONT.regular,
    color: "#000",
    textTransform: "uppercase",
  },
  username: {
    color: COLORS.primary,
  },
});

export default styles;
