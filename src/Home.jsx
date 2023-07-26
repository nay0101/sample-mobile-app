import { ScrollView, StatusBar } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  NavBar,
  CarouselSection,
  Categories,
  NewsLetter,
  Footer,
  Products,
} from "../components";
import main from "../styles/main";

const Home = () => {
  return (
    <SafeAreaView style={main.safeAreaView}>
      <StatusBar />
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
