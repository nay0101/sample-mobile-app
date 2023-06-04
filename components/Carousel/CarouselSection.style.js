import { Dimensions } from "react-native";
import { StyleSheet } from "react-native";
import { FONT } from "../../constants";

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  cardContainer: {
    alignItems: "center",
    justifyContent: "center",
    width,
  },
  cardWrapper: {
    overflow: "hidden",
  },
  card: {
    width: width,
    height: width * 0.6,
  },
  label: {
    position: "absolute",
    width,
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  labelText: {
    fontSize: 30,
    fontFamily: FONT.bold,
    color: "#fff",
    paddingLeft: 5,
    paddingRight: 5,
    paddingTop: 2,
    paddingBottom: 7,
  },
  labelDescription: {
    fontFamily: FONT.light,
    fontSize: 10,
    color: "#fff",
    paddingLeft: 5,
    paddingRight: 5,
    paddingTop: 2,
    paddingBottom: 2,
  },
  labelButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    padding: 10,
    marginTop: 25,
  },
  buttonText: {
    fontFamily: FONT.light,
    marginRight: 5,
  },
  mask: {
    width: "100%",
    height: "100%",
    position: "absolute",
    backgroundColor: "black",
    opacity: 0.1,
  },
});

export default styles;
