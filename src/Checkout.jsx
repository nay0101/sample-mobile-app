import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  Pressable,
  StatusBar,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { userRequest } from "../request-methods";
import { useEffect, useState } from "react";
import {
  AddressSheet,
  CardField,
  useConfirmPayment,
} from "@stripe/stripe-react-native";
import main from "../styles/main";
import { Icon } from "@rneui/base";
import { COLORS, FONT } from "../constants";
import { useDispatch, useSelector } from "react-redux";
import { removeAllProducts } from "../store/cart-slice";

const { height } = Dimensions.get("window");

const Checkout = ({ navigation }) => {
  const dispatch = useDispatch();
  const cart = useSelector((store) => store.cart);
  const user = useSelector((store) => store.auth.currentUser);
  const { confirmPayment } = useConfirmPayment();
  const [addressSheetVisible, setAddressSheetVisible] = useState(false);
  const [billingInfo, setBillingInfo] = useState();
  const [cardComplete, setCardComplete] = useState(false);
  const [loading, setLoading] = useState(true);

  const fetchPaymentSheetParams = async () => {
    try {
      const response = await userRequest.post(`/checkout/payment-sheet`);
      const { clientSecret } = await response.data;
      return clientSecret;
    } catch (err) {
      console.log(err);
    }
  };

  const removeProducts = () => {
    dispatch(removeAllProducts());
  };

  const handlePayPress = async () => {
    const clientSecret = await fetchPaymentSheetParams();
    let productArray = [];
    cart.products.forEach((item) => {
      productArray.push({
        productId: item._id,
        quantity: item.quantity,
        title: item.title,
        size: item.size,
      });
    });
    const billingDetails = {
      name: billingInfo.name,
      address: {
        line1: billingInfo.address.line1,
        city: billingInfo.address.city,
        country: billingInfo.address.country,
        postalCode: billingInfo.address.postalCode,
      },
    };
    const { error, paymentIntent } = await confirmPayment(clientSecret, {
      paymentMethodType: "Card",
      paymentMethodData: {
        billingDetails,
      },
    });
    if (error) {
      console.log(`Error code: ${error.code}`, error.message);
    }
    if (paymentIntent) {
      try {
        await userRequest.post("/orders", {
          userId: user.userId,
          products: productArray,
          amount: cart.totalPrice,
          address: paymentIntent.paymentMethod.billingDetails.address.city,
          status: "Done",
        });
        removeProducts();
        navigation.navigate("Orders");
      } catch (err) {
        console.log(err);
      }
    }
  };

  const removeAddress = () => {
    setBillingInfo();
  };

  useEffect(() => {
    setLoading(billingInfo && cardComplete ? false : true);
  }, [billingInfo, cardComplete]);

  return (
    <SafeAreaView style={[main.safeAreaView, styles.container]}>
      <StatusBar />
      <Icon
        type="materialicons"
        name="arrow-back-ios"
        style={styles.close}
        onPress={() => navigation.goBack()}
      />
      <Text style={styles.title}>Seco</Text>
      <Text style={styles.totalPrice}>Your Total is $ {cart.totalPrice}</Text>
      <CardField
        postalCodeEnabled={false}
        style={styles.cardField}
        cardStyle={{
          borderWidth: 1,
          borderColor: COLORS.primary,
          borderRadius: 10,
          textColor: "#1c1c1c",
        }}
        onCardChange={(cardDetail) => setCardComplete(cardDetail.complete)}
      />
      {!billingInfo && (
        <View style={styles.address}>
          <Icon
            type="antdesign"
            name="pluscircle"
            color={COLORS.primary}
            onPress={() => setAddressSheetVisible(true)}
          />
          <Text style={styles.addressText}>Add Shipping Address</Text>
        </View>
      )}
      <AddressSheet
        visible={addressSheetVisible}
        onSubmit={async (addressDetails) => {
          setBillingInfo(addressDetails);
          setAddressSheetVisible(false);
        }}
        onError={() => setAddressSheetVisible(false)}
      />
      {billingInfo && (
        <View style={styles.addressDisplay}>
          <View style={styles.addressDisplayTitleSection}>
            <Text style={styles.addressDisplayTitle}>Shipping Info</Text>
            <Icon
              type="materialicons"
              name="remove"
              color="red"
              onPress={removeAddress}
            />
          </View>
          <Text>
            <Text style={styles.addressInfoName}>Name: </Text>
            <Text style={styles.addressInfo}>{billingInfo.name}</Text>
          </Text>
          <Text>
            <Text style={styles.addressInfoName}>Address: </Text>
            <Text style={styles.addressInfo}>{billingInfo.address.line1}</Text>
          </Text>
          <Text>
            <Text style={styles.addressInfoName}>City: </Text>
            <Text style={styles.addressInfo}>{billingInfo.address.city}</Text>
          </Text>
          <Text>
            <Text style={styles.addressInfoName}>Country: </Text>
            <Text style={styles.addressInfo}>
              {billingInfo.address.country}
            </Text>
          </Text>
          <Text>
            <Text style={styles.addressInfoName}>ZIP Code: </Text>
            <Text style={styles.addressInfo}>
              {billingInfo.address.postalCode}
            </Text>
          </Text>
          <Text>
            <Text style={styles.addressInfoName}>Phone Number: </Text>
            <Text style={styles.addressInfo}>
              {billingInfo.phone ? billingInfo.phone : "-"}
            </Text>
          </Text>
        </View>
      )}
      <Pressable
        disabled={loading}
        onPress={handlePayPress}
        style={({ pressed }) => [
          styles.payButton,
          pressed ? styles.payButton_after : "",
          loading ? styles.payButton_disabled : "",
        ]}
      >
        {({ pressed }) => (
          <Text
            style={[
              styles.payButtonText,
              pressed ? styles.payButtonText_after : "",
            ]}
          >
            Checkout
          </Text>
        )}
      </Pressable>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: height,
    justifyContent: "center",
    paddingHorizontal: 20,
    backgroundColor: "#fff",
  },
  title: {
    fontFamily: FONT.bold,
    fontSize: 30,
    textTransform: "uppercase",
    alignSelf: "center",
    marginBottom: 20,
  },
  totalPrice: {
    fontFamily: FONT.regular,
    fontSize: 15,
    alignSelf: "center",
    marginBottom: 20,
  },
  cardField: {
    height: 50,
  },
  address: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    marginVertical: 20,
  },
  addressText: {
    fontFamily: FONT.regular,
    fontSize: 15,
  },
  payButton: {
    borderWidth: 1,
    borderColor: COLORS.primary,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    width: "100%",
    paddingVertical: 10,
    backgroundColor: COLORS.primary,
  },
  payButton_disabled: {
    backgroundColor: COLORS.gray,
    borderColor: COLORS.gray,
  },
  payButton_after: {
    backgroundColor: "#fff",
    borderColor: COLORS.primary,
  },
  payButtonText: {
    fontFamily: FONT.bold,
    fontSize: 15,
    color: "#fff",
    textTransform: "uppercase",
  },
  payButtonText_after: {
    color: COLORS.primary,
  },
  addressDisplay: {
    marginVertical: 20,
    borderWidth: 1,
    borderColor: COLORS.primary,
    borderRadius: 10,
    padding: 10,
    rowGap: 10,
  },
  addressDisplayTitleSection: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  addressDisplayTitle: {
    fontFamily: FONT.bold,
    fontSize: 20,
  },
  addressInfoName: {
    fontFamily: FONT.bold,
    fontSize: 15,
  },
  addressInfo: {
    fontFamily: FONT.italic,
    fontSize: 15,
  },
  close: {
    alignSelf: "flex-start",
  },
});

export default Checkout;
