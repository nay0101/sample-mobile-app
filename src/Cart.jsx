import {
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  ScrollView,
} from "react-native";
import main from "../styles/main";
import { CartItems, Footer, NavBar } from "../components";
import { useDispatch, useSelector } from "react-redux";
import { COLORS, FONT } from "../constants";
import { removeAllProducts } from "../store/cart-slice";

const Cart = ({ navigation }) => {
  const dispatch = useDispatch();
  const cart = useSelector((store) => store.cart);
  const user = useSelector((store) => store.auth.currentUser);

  const removeProducts = () => {
    dispatch(removeAllProducts());
  };

  return (
    <SafeAreaView style={main.safeAreaView}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <NavBar />
        <View style={main.container}>
          <Text style={styles.title}>Your Bag</Text>
          <View style={styles.topButtonSection}>
            <Pressable
              style={({ pressed }) => [
                styles.button,
                pressed ? styles.button_after : styles.button_before,
              ]}
              onPress={() => navigation.navigate("Home")}
            >
              {({ pressed }) => (
                <Text
                  style={[
                    styles.buttonText,
                    pressed
                      ? styles.buttonText_after
                      : styles.buttonText_before,
                  ]}
                >
                  Continue Shopping
                </Text>
              )}
            </Pressable>
            <Text>Shopping Bag ({cart.totalQantity})</Text>
          </View>
          <View style={styles.cartItems}>
            {cart.products.map((product, index) => (
              <CartItems key={index} item={product} />
            ))}
          </View>
          <View style={styles.orderSummary}>
            <Text style={styles.orderSummaryTitle}>Order Summary</Text>
            <View style={styles.summaryItem}>
              <Text style={styles.summaryItemName}>Subtotal</Text>
              <Text style={styles.summaryItemName}>$ {cart.totalPrice}</Text>
            </View>
            <View style={styles.summaryItem}>
              <Text style={styles.summaryItemName}>Estimated Shipping</Text>
              <Text style={styles.summaryItemName}>$ 00.00</Text>
            </View>
            <View style={styles.summaryItem}>
              <Text style={styles.summaryItemName}>Shipping Discount</Text>
              <Text style={styles.summaryItemName}>-$ 00.00</Text>
            </View>
            <View style={styles.summaryItem}>
              <Text style={[styles.summaryItemName, styles.total]}>Total</Text>
              <Text style={[styles.summaryItemName, styles.total]}>
                $ {cart.totalPrice}
              </Text>
            </View>
          </View>
          <View style={styles.bottomButtonSection}>
            <Pressable
              style={({ pressed }) => [
                styles.button,
                styles.buttonDanger,
                pressed
                  ? styles.buttonDanger_after
                  : styles.buttonDanger_before,
              ]}
              onPress={removeProducts}
            >
              {({ pressed }) => (
                <Text
                  style={[
                    styles.buttonText,
                    pressed
                      ? styles.buttonTextDanger_after
                      : styles.buttonTextDanger_before,
                  ]}
                >
                  Remove All Items
                </Text>
              )}
            </Pressable>
            <Pressable
              style={({ pressed }) => [
                styles.button,
                pressed ? styles.button_after : styles.button_before,
                cart.totalPrice <= 0 || !user ? styles.button_disabled : "",
              ]}
              disabled={cart.totalPrice <= 0 || !user}
              onPress={() => navigation.navigate("Checkout")}
            >
              {({ pressed }) => (
                <Text
                  style={[
                    styles.buttonText,
                    pressed
                      ? styles.buttonText_after
                      : styles.buttonText_before,
                    cart.totalPrice <= 0 || !user
                      ? styles.buttonText_disabled
                      : "",
                  ]}
                >
                  Check Out Now
                </Text>
              )}
            </Pressable>
          </View>
        </View>
        <Footer />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  title: {
    fontFamily: FONT.regular,
    fontSize: 30,
    textTransform: "uppercase",
    alignSelf: "center",
  },
  topButtonSection: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 20,
    marginBottom: 30,
  },
  button: {
    borderWidth: 1,
    borderColor: "#000",
    padding: 10,
  },
  button_before: {
    backgroundColor: "#fff",
  },
  button_after: {
    backgroundColor: "#000",
  },
  button_disabled: {
    backgroundColor: COLORS.gray,
    borderColor: COLORS.gray,
  },
  buttonText: {
    fontFamily: FONT.regular,
    textTransform: "uppercase",
  },
  buttonText_before: {
    color: "#000",
  },
  buttonText_after: {
    color: "#fff",
  },
  cartItems: {
    rowGap: 10,
  },
  orderSummary: {
    marginTop: 20,
    padding: 15,
    borderWidth: 1,
    borderColor: "#000",
    borderRadius: 10,
  },
  orderSummaryTitle: {
    fontFamily: FONT.regular,
    fontSize: 30,
  },
  summaryItem: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  summaryItemName: {
    fontFamily: FONT.light,
    fontSize: 15,
  },
  total: {
    fontWeight: "bold",
    fontSize: 17,
  },
  bottomButtonSection: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 20,
  },
  buttonDanger_before: {
    backgroundColor: "#ef4444",
    borderColor: "#fff",
  },
  buttonDanger_after: {
    backgroundColor: "#fff",
    borderColor: "#ef4444",
  },
  buttonTextDanger_before: {
    color: "#fff",
  },
  buttonTextDanger_after: {
    color: "#ef4444",
  },
  buttonText_disabled: {
    color: "#fff",
  },
});

export default Cart;
