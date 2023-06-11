import { Image, TouchableOpacity } from "react-native";
import { View } from "react-native";
import styles from "./ProductCard.style";
import { useNavigation } from "@react-navigation/native";

const ProductCard = ({ image, id }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("Product", { productID: id })}
    >
      <View style={styles.container}>
        <Image source={{ uri: image }} style={styles.image} />
      </View>
    </TouchableOpacity>
  );
};

export default ProductCard;
