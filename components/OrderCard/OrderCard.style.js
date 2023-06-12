import { StyleSheet } from "react-native";
import { COLORS, FONT } from "../../constants";

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: COLORS.primary,
    borderRadius: 5,
  },
  orderID: {
    fontFamily: FONT.bold,
    fontSize: 17,
    color: "#fff",
    backgroundColor: COLORS.primary,
    padding: 10,
  },
  orderTitle: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.primary,
  },
  orderBody: {
    padding: 10,
    gap: 5,
  },
  itemsTitle: {
    fontFamily: FONT.bold,
    fontSize: 17,
    marginBottom: 5,
  },
  status: {
    fontFamily: FONT.regular,
  },
  amount: {
    fontFamily: FONT.regular,
  },
  items: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  itemsHeader: {
    fontStyle: "italic",
    textDecorationLine: "underline",
  },
  name: {
    fontFamily: FONT.regular,
  },
  quantity: {
    fontFamily: FONT.regular,
  },
});

export default styles;
