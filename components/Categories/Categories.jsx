import { View } from "react-native";
import CategoryCard from "../common/CategoryCard/CategoryCard";
import styles from "./Categories.style";
import main from "../../styles/main";

const Categories = () => {
  return (
    <View style={[main.container, styles.container]}>
      <CategoryCard
        image="https://images.unsplash.com/photo-1542060748-10c28b62716f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
        name="clothes"
      />
      <CategoryCard
        image="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
        name="shoes"
      />
      <CategoryCard
        image="https://images.unsplash.com/photo-1598325628310-704e43d7410a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjgwfHxlbGVjdHJvbmljc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
        name="electronics"
      />
      <CategoryCard
        image="https://images.unsplash.com/photo-1540574163026-643ea20ade25?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
        name="furniture"
      />
      <CategoryCard
        image="https://images.unsplash.com/photo-1597696929736-6d13bed8e6a8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
        name="others"
      />
    </View>
  );
};

export default Categories;
