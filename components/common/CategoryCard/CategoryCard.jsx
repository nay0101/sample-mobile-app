import { View, Text, Image, TouchableOpacity } from "react-native";
import styles from "./CategoryCard.style";
import { useNavigation } from "@react-navigation/native";

const CategoryCard = ({ name, image }) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Image source={{ uri: image }} style={styles.image} />
      <View style={styles.mask}></View>
      <View style={styles.shopText}>
        <Text style={styles.title}>{name}</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Products", { category: name })}
        >
          <Text style={styles.buttonText}>Shop Now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CategoryCard;
