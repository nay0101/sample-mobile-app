import { Text, View } from "react-native";
import styles from "./OrderCard.style";

const OrderCard = ({ order }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.orderID}>OrderID: {order._id}</Text>
      <View style={styles.orderTitle}>
        <Text style={styles.status}>Status: {order.status}</Text>
        <Text style={styles.amount}>Amount: $ {order.amount}</Text>
      </View>
      <View style={styles.orderBody}>
        <Text style={styles.itemsTitle}>Items</Text>
        <View style={styles.items}>
          <Text style={[styles.name, styles.itemsHeader]}>Name</Text>
          <Text style={[styles.quantity, styles.itemsHeader]}>Quantity</Text>
        </View>
        {order.products.map((product, index) => (
          <View key={index} style={styles.items}>
            <Text style={styles.name}>
              {product.title} - {product.size}
            </Text>
            <Text style={styles.quantity}>{product.quantity}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

export default OrderCard;
