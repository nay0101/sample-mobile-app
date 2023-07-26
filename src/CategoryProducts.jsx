import { ScrollView, StatusBar } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { CategoryTitle, Footer, NavBar, Products } from "../components";
import main from "../styles/main";

const CategoryProducts = ({ route }) => {
  const { category } = route.params;
  return (
    <SafeAreaView style={main.safeAreaView}>
      <StatusBar />
      <ScrollView showsVerticalScrollIndicator={false}>
        <NavBar />
        <CategoryTitle title={category} />
        <Products category={category} />
        <Footer />
      </ScrollView>
    </SafeAreaView>
  );
};

export default CategoryProducts;
