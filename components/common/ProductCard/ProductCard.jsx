import { Image, TouchableOpacity } from "react-native";
import { View } from "react-native";
import styles from "./ProductCard.style";

const ProductCard = ({ image, id }) => {
  return (
    <TouchableOpacity>
      <View style={styles.container}>
        <Image source={{ uri: image }} style={styles.image} />
      </View>
    </TouchableOpacity>
  );
};

export default ProductCard;
