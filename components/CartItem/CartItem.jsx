import { Image, Text, View } from "react-native";
import styles from "./CartItem.style";

const CartItems = ({ item }) => {
  return (
    <View style={styles.container}>
      <View style={styles.itemDetail}>
        <Image source={{ uri: item.image }} style={styles.image} />

        <View>
          <Text style={styles.title}>
            <Text style={{ fontWeight: "bold" }}>Product: </Text>
            {item.title}
          </Text>
          <Text style={styles.size}>
            <Text style={{ fontWeight: "bold" }}>Size: </Text>
            {item.size}
          </Text>
        </View>
      </View>
      <View style={styles.orderDetail}>
        <View style={styles.quantityContainer}>
          <Text style={styles.quantity}>{item.quantity}</Text>
        </View>
        <Text style={styles.price}>$ {item.price}</Text>
      </View>
    </View>
  );
};

export default CartItems;
