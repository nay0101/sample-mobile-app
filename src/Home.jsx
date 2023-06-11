import { Text, View, SafeAreaView, ScrollView } from "react-native";
import {
  NavBar,
  CarouselSection,
  Categories,
  NewsLetter,
  Footer,
  Products,
} from "../components";
import { StatusBar } from "expo-status-bar";
import main from "../styles/main";

const Home = () => {
  return (
    <SafeAreaView style={main.safeAreaView}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <NavBar />
        <CarouselSection />
        <Categories />
        <Products />
        <NewsLetter />
        <Footer />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
