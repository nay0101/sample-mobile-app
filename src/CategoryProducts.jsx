import { SafeAreaView, ScrollView, Text, View } from "react-native";
import {
  CategoryTitle,
  Footer,
  NavBar,
  NewsLetter,
  Products,
} from "../components";
import main from "../styles/main";

const CategoryProducts = ({ route }) => {
  const { category } = route.params;
  return (
    <SafeAreaView style={main.safeAreaView}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <NavBar />
        <CategoryTitle title={category} />
        <Products category={category} />
        <NewsLetter />
        <Footer />
      </ScrollView>
    </SafeAreaView>
  );
};

export default CategoryProducts;
