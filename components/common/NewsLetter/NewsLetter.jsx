import { View, Text, TextInput } from "react-native";
import styles from "./NewsLetter.style";
import { Icon } from "@rneui/base";
import main from "../../../styles/main";

const NewsLetter = () => {
  return (
    <View style={[main.container, styles.container]}>
      <Text style={styles.title}>Newsletter</Text>
      <Text style={styles.description}>
        Get timely updates from your favorite products
      </Text>
      <View style={styles.inputGroup}>
        <TextInput placeholder="Your email" style={styles.emailInput} />
        <Icon
          type="materialicon"
          name="send"
          style={styles.sendButton}
          color="#fff"
        />
      </View>
    </View>
  );
};

export default NewsLetter;
