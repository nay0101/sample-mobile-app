import { ScrollView, StyleSheet, Text, View, StatusBar } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import main from "../styles/main";
import { Footer, NavBar, OrderCard } from "../components";
import { useSelector } from "react-redux";
import { useState } from "react";
import { userRequest } from "../request-methods";
import { useEffect } from "react";
import { FONT } from "../constants";

const Orders = () => {
  const user = useSelector((store) => store.auth.currentUser);
  const [orders, setOrders] = useState([]);

  const getOrders = async () => {
    try {
      const order = (await userRequest.get(`/orders/${user.userId}`)).data;
      setOrders(order);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getOrders();
  }, []);

  return (
    <SafeAreaView style={main.safeAreaView}>
      <StatusBar />
      <ScrollView showsVerticalScrollIndicator={false}>
        <NavBar />
        <View style={main.container}>
          <Text style={styles.title}>ORDERS</Text>
          <View style={styles.orders}>
            {orders.length > 0 &&
              orders.map((order, index) => (
                <OrderCard key={index} order={order} />
              ))}
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
    alignSelf: "center",
    textTransform: "uppercase",
    marginBottom: 20,
  },
  orders: {
    gap: 10,
  },
});

export default Orders;
