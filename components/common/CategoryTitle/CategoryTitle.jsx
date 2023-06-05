import { Text, View } from "react-native";
import styles from "./CategoryTitle.style";

const CategoryTitle = ({ title }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default CategoryTitle;
