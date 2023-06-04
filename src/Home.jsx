import { Text, View, SafeAreaView, ScrollView } from "react-native";
import {
  NavBar,
  CarouselSection,
  Categories,
  NewsLetter,
  Footer,
} from "../components";
import { StatusBar } from "expo-status-bar";

const Home = () => {
  return (
    <SafeAreaView>
      <ScrollView showsVerticalScrollIndicator={false}>
        <NavBar />
        <CarouselSection />
        <Categories />
        <NewsLetter />
        <Footer />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
