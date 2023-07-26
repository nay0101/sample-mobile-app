import { useEffect, useState } from "react";
import { publicRequest } from "../../request-methods";
import { View } from "react-native";
import styles from "./Products.style";
import ProductCard from "../common/ProductCard/ProductCard";
import main from "../../styles/main";

const Products = ({ category }) => {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    try {
      const url = category ? `/products?category=${category}` : "/products";
      const response = await publicRequest.get(url);
      setProducts(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <View style={[main.container, styles.container]}>
      {products.map((product, index) => (
        <ProductCard key={product._id} image={product.image} id={product._id} />
      ))}
    </View>
  );
};

export default Products;
