import { useDispatch, useSelector } from "react-redux";
import styles from "./NavBar.style";
import { View, Text, TouchableOpacity } from "react-native";
import main from "../../../styles/main";
import { Icon } from "@rneui/base";
import { useNavigation } from "@react-navigation/native";

const NavBar = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.auth.currentUser);
  const totalQantity = useSelector((store) => store.cart.totalQantity);
  const userLogout = () => {
    dispatch(logout());
  };
  return (
    <View style={[main.container, styles.container]}>
      <View style={styles.logo}>
        <Text style={styles.logoText} onPress={() => console.log(totalQantity)}>
          SECO
        </Text>
      </View>
      <View style={styles.menuButtons}>
        <TouchableOpacity>
          <Text>Register</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>Sign In</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Cart")}>
          <Icon type="materialIcon" name="shopping-cart" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default NavBar;
