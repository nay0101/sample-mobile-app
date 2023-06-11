import { Text, View, SafeAreaView, StyleSheet, Button } from "react-native";
import { userRequest } from "../request-methods";
import { useState } from "react";
import {
  AddressSheet,
  CardField,
  useConfirmPayment,
} from "@stripe/stripe-react-native";
import main from "../styles/main";
import { Icon } from "@rneui/base";

const Checkout = () => {
  const { confirmPayment, loading } = useConfirmPayment();
  const [addressSheetVisible, setAddressSheetVisible] = useState(false);
  const [billingInfo, setBillingInfo] = useState();

  const fetchPaymentSheetParams = async () => {
    try {
      const response = await userRequest.post(`/checkout/payment-sheet`);
      const { clientSecret } = await response.data;
      return clientSecret;
    } catch (err) {
      console.log(err);
    }
  };

  const handlePayPress = async () => {
    const clientSecret = await fetchPaymentSheetParams();
    const billingDetails = {
      name: billingInfo?.name,
      address: billingInfo?.address?.line1,
      addressCity: billingInfo?.address?.city,
      addressCountry: billingInfo?.address?.country,
      addressPostalCode: billingInfo?.address?.postalCode,
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
      console.log("Success", "Your order is confirmed!", paymentIntent);
    }
  };

  return (
    <SafeAreaView style={main.safeAreaView}>
      <Text>Seco</Text>
      <Text>Your Total is 100</Text>
      <CardField
        postalCodeEnabled={false}
        style={styles.cardField}
        cardStyle={{
          textColor: "#1c1c1c",
        }}
      />
      <View>
        <Icon type="antdesign" name="pluscircle" />
        <Text>Add Address</Text>
      </View>
      <AddressSheet
        visible={addressSheetVisible}
        onSubmit={async (addressDetails) => {
          setBillingInfo(addressDetails);
          setAddressSheetVisible(false);
        }}
        onError={() => setAddressSheetVisible(false)}
      />
      {billingInfo && (
        <View>
          <Text>Address</Text>
        </View>
      )}
      <View></View>
      <Button title="Checkout" disabled={loading} onPress={handlePayPress} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 8,
  },
  cardField: {
    height: 50,
  },
});

export default Checkout;
