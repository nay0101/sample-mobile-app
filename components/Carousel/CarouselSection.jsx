import { Text, View, Image, TouchableOpacity } from "react-native";
import Carousel, { PaginationLight } from "react-native-x-carousel";
import styles from "./CarouselSection.style";
import { Icon } from "@rneui/base";

const CarouselSection = () => {
  const CAROUSEL_DATA = [
    {
      url: "https://images.unsplash.com/photo-1523380744952-b7e00e6e2ffa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
    {
      url: "https://images.unsplash.com/photo-1550995694-3f5f4a7e1bd2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
    },
  ];
  const renderItem = (data) => (
    <View key={data.url} style={styles.cardContainer}>
      <View style={styles.cardWrapper}>
        <Image style={styles.card} source={{ uri: data.url }} />
        <View style={styles.label}>
          <View style={styles.mask}></View>
          <Text style={styles.labelText}>SUMMER SALE</Text>
          <Text style={styles.labelDescription}>
            DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS.
          </Text>
          <TouchableOpacity style={styles.labelButton}>
            <Text style={styles.buttonText}>Shop Now</Text>
            <Icon type="antdesign" name="caretright" size={10} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
  return (
    <View>
      <Carousel
        pagination={PaginationLight}
        renderItem={renderItem}
        data={CAROUSEL_DATA}
        loop
      />
    </View>
  );
};

export default CarouselSection;
