import { StyleSheet } from "react-native";
import { COLORS, FONT } from "../../../constants";

const styles = StyleSheet.create({
  container: {
    paddingVertical: 40,
    borderTopWidth: 1,
    borderTopColor: COLORS.gray,
  },
  section: {
    marginBottom: 40,
  },
  footerTitle: {
    fontFamily: FONT.bold,
    fontSize: 30,
    marginBottom: 15,
  },
  footerDescription: {
    fontFamily: FONT.light,
    textAlign: "justify",
  },
  otherTitles: {
    fontFamily: FONT.bold,
    fontSize: 25,
    marginBottom: 15,
  },
  linkSection: {
    flexDirection: "row",
    gap: 50,
  },
  links: {
    gap: 7,
  },
  link: {
    fontFamily: FONT.regular,
    fontSize: 15,
  },
  contactItems: {
    gap: 15,
  },
  contactItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  contactText: {
    fontFamily: FONT.regular,
  },
});

export default styles;
