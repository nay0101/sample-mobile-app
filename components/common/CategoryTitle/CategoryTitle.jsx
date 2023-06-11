import { Text, View } from "react-native";
import styles from "./CategoryTitle.style";
import main from "../../../styles/main";

const CategoryTitle = ({ title }) => {
  return (
    <View style={[main.container, styles.container]}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default CategoryTitle;
