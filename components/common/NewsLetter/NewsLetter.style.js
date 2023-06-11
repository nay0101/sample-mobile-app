import { StyleSheet } from "react-native";
import { COLORS, FONT } from "../../../constants";

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    paddingVertical: 50,
    backgroundColor: "#FDF5F6",
  },
  title: {
    fontFamily: FONT.bold,
    fontSize: 40,
    marginBottom: 20,
  },
  description: {
    fontFamily: FONT.regular,
    fontSize: 14,
    marginBottom: 30,
  },
  inputGroup: {
    flexDirection: "row",
    alignItems: "center",
    height: 40,
  },
  emailInput: {
    paddingHorizontal: 10,
    borderStyle: "solid",
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    backgroundColor: "#fff",
    width: 180,
    height: "100%",
  },
  sendButton: {
    backgroundColor: COLORS.primary,
    paddingHorizontal: 25,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default styles;
