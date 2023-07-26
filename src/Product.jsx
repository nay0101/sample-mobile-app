import {
  ScrollView,
  View,
  Image,
  Text,
  Pressable,
  StyleSheet,
  Dimensions,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import SelectDropdown from "react-native-select-dropdown";
import { Footer, NavBar, NewsLetter } from "../components";
import { publicRequest } from "../request-methods";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import main from "../styles/main";
import { Icon } from "@rneui/base";
import { addProduct } from "../store/cart-slice";
import { COLORS, FONT } from "../constants";

const { width } = Dimensions.get("window");

const Product = ({ route, navigation }) => {
  const { productID } = route.params;
  const dispatch = useDispatch();
  const [product, setProduct] = useState({});
  let [quantity, setQuantity] = useState(1);
  let [size, setSize] = useState("");

  const getProduct = async () => {
    try {
      const url = `/products/${productID}`;
      const response = await publicRequest.get(url);
      setProduct(response.data);
      setSize(response.data?.size[0]);
    } catch (error) {
      console.log(error);
    }
  };

  const addToCartHandler = () => {
    dispatch(addProduct({ product, size, quantity }));
    navigation.navigate("Cart");
  };

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <SafeAreaView style={main.safeAreaView}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <NavBar />
        <View style={main.container}>
          {product?.image && (
            <Image
              source={{ uri: product.image }}
              style={styles.productImage}
            />
          )}
          <View style={styles.productInfo}>
            <Text style={styles.productTitle}>{product.title}</Text>
            <Text style={styles.productDescription}>{product.description}</Text>
            <Text style={styles.productPrice}>$ {product.price}</Text>
            <View style={styles.productSizeContainer}>
              <Text style={styles.productSizeLabel}>Size</Text>
              <SelectDropdown
                data={product.size}
                defaultValue={size}
                defaultButtonText={size}
                onSelect={(selectedSize) => {
                  setSize(selectedSize);
                }}
                buttonTextAfterSelection={(selectedSize) => {
                  return selectedSize;
                }}
                rowTextForSelection={(size) => {
                  return size;
                }}
                buttonStyle={styles.productSize}
                buttonTextStyle={styles.productSizeText}
                renderDropdownIcon={() => (
                  <Icon type="materialIcon" name="keyboard-arrow-down" />
                )}
              />
            </View>
            <View style={styles.productQuantityContainer}>
              <Icon
                type="materialIcon"
                name="remove"
                onPress={() => {
                  quantity > 1 && setQuantity((prevState) => prevState - 1);
                }}
              />
              <View style={styles.productQuantityTextContainer}>
                <Text style={styles.productQuantityText}>{quantity}</Text>
              </View>
              <Icon
                type="materialIcon"
                name="add"
                onPress={() => setQuantity((prevState) => prevState + 1)}
              />
            </View>
            <Pressable
              onPress={addToCartHandler}
              style={({ pressed }) => [
                pressed
                  ? styles.addToCartButton_after
                  : styles.addToCartButton_before,
                styles.addToCartButton,
              ]}
            >
              {({ pressed }) => (
                <Text
                  style={[
                    styles.addToCartText,
                    pressed ? styles.addToCartText_after : "",
                  ]}
                >
                  Add to Cart
                </Text>
              )}
            </Pressable>
          </View>
        </View>
        <Footer />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  productImage: {
    width: "100%",
    height: width,
  },
  productInfo: {
    paddingTop: 15,
  },
  productTitle: {
    fontFamily: FONT.regular,
    fontSize: 30,
    marginBottom: 15,
  },
  productDescription: {
    fontFamily: FONT.regular,
    fontSize: 17,
    textAlign: "justify",
    lineHeight: 25,
    marginBottom: 20,
  },
  productPrice: {
    fontFamily: FONT.light,
    fontSize: 25,
    marginBottom: 20,
  },
  productSizeContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: 15,
    marginBottom: 20,
  },
  productSizeLabel: {
    fontFamily: FONT.regular,
    fontSize: 17,
  },
  productSize: {
    width: 80,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: COLORS.gray,
    padding: 10,
    backgroundColor: "#fff",
  },
  productSizeText: {
    fontFamily: FONT.regular,
    fontSize: 17,
  },
  productQuantityContainer: {
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
    marginBottom: 20,
  },
  productQuantityTextContainer: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: COLORS.gray,
  },
  productQuantityText: {
    fontFamily: FONT.regular,
    fontSize: 17,
    paddingVertical: 5,
    paddingHorizontal: 15,
  },
  addToCartButton: {
    borderRadius: 5,
    borderWidth: 1,
    padding: 15,
    alignItems: "center",
  },
  addToCartButton_before: {
    backgroundColor: "#fff",
    borderColor: COLORS.primary,
  },
  addToCartButton_after: {
    backgroundColor: COLORS.primary,
    borderColor: "#fff",
  },
  addToCartText: {
    fontFamily: FONT.regular,
    textTransform: "uppercase",
  },
  addToCartText_after: {
    color: "#fff",
  },
});

export default Product;
