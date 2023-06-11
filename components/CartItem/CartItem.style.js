import { Dimensions, StyleSheet } from "react-native";
import { COLORS, FONT } from "../../constants";

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  itemDetail: {
    flexDirection: "row",
    columnGap: 10,
    maxWidth: width * 0.45,
  },
  image: {
    width: width * 0.3,
    height: width * 0.3,
  },
  title: {
    fontFamily: FONT.regular,
    fontSize: 15,
    marginBottom: 5,
  },
  orderDetail: {
    justifyContent: "center",
    alignItems: "center",
  },
  quantityContainer: {
    borderWidth: 1,
    borderColor: COLORS.gray,
    borderRadius: 10,
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  quantity: {
    fontFamily: FONT.regular,
  },
  price: {
    fontFamily: FONT.regular,
    fontSize: 20,
  },
});

export default styles;
