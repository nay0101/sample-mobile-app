import { useDispatch, useSelector } from "react-redux";
import styles from "./NavBar.style";
import { View, Text, TouchableOpacity } from "react-native";

const NavBar = () => {
  const dispatch = useDispatch();
  const user = useSelector((store) => store.auth.currentUser);
  const totalQantity = useSelector((store) => store.cart.totalQantity);
  const userLogout = () => {
    dispatch(logout());
  };
  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <Text style={styles.logoText}>SECO</Text>
      </View>
      <View style={styles.menuButtons}>
        <TouchableOpacity>
          <Text>Register</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>Sign In</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>Cart</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default NavBar;
