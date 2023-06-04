import { SafeAreaView, ScrollView, Text, View } from "react-native";
import { Footer, NavBar, NewsLetter } from "../components";

const Products = () => {
  return (
    <SafeAreaView>
      <ScrollView showsVerticalScrollIndicator={false}>
        <NavBar />
        <View>
          <Text>Products</Text>
        </View>
        <NewsLetter />
        <Footer />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Products;
