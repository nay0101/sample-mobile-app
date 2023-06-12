import { useDispatch, useSelector } from "react-redux";
import styles from "./NavBar.style";
import { View, Text, TouchableOpacity } from "react-native";
import main from "../../../styles/main";
import { Icon } from "@rneui/base";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Badge, Divider, Menu } from "react-native-paper";
import { useState } from "react";
import { COLORS, FONT } from "../../../constants";
import { logout } from "../../../store/auth-actions";

const NavBar = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.auth.currentUser);
  const totalQantity = useSelector((store) => store.cart.totalQantity);
  const [visibleMenu, setVisibleMenu] = useState(false);

  const openMenu = () => setVisibleMenu(true);

  const closeMenu = () => setVisibleMenu(false);

  const userLogout = () => {
    dispatch(logout());
    navigation.navigate("Home");
  };

  return (
    <View style={[main.container, styles.container]}>
      <View style={styles.logo}>
        {route.name !== "Home" && (
          <Icon
            type="materialicons"
            name="arrow-back-ios"
            onPress={() =>
              route.name === "Orders"
                ? navigation.navigate("Home")
                : navigation.goBack()
            }
          />
        )}
        <Text
          style={styles.logoText}
          onPress={() => navigation.navigate("Home")}
        >
          SECO
        </Text>
      </View>
      <View style={styles.menuButtons}>
        <TouchableOpacity onPress={() => navigation.navigate("Cart")}>
          <Icon type="materialIcon" name="shopping-cart" />
          {totalQantity > 0 && (
            <Badge style={styles.badge} size={15}>
              {totalQantity}
            </Badge>
          )}
        </TouchableOpacity>
        {user ? (
          <Menu
            visible={visibleMenu}
            onDismiss={closeMenu}
            anchor={
              <Icon type="materialicons" name="person" onPress={openMenu} />
            }
            anchorPosition="bottom"
            contentStyle={styles.menu}
          >
            <Menu.Item
              title={user.username}
              style={styles.menuItem}
              titleStyle={[styles.menuText, styles.username]}
            />
            <Divider />
            <Menu.Item
              title="Orders"
              style={styles.menuItem}
              titleStyle={styles.menuText}
              onPress={() => {
                navigation.navigate("Orders");
                closeMenu();
              }}
            />
            <Divider />
            <Menu.Item
              title="LogOut"
              style={styles.menuItem}
              titleStyle={styles.menuText}
              onPress={() => {
                userLogout();
              }}
            />
          </Menu>
        ) : (
          <Menu
            visible={visibleMenu}
            onDismiss={closeMenu}
            anchor={
              <Icon type="materialicons" name="menu-open" onPress={openMenu} />
            }
            anchorPosition="bottom"
            contentStyle={styles.menu}
          >
            <Menu.Item
              title="SIGN IN"
              style={styles.menuItem}
              titleStyle={styles.menuText}
              onPress={() => {
                navigation.navigate("Login");
                closeMenu();
              }}
            />
            <Divider />
            <Menu.Item
              title="REGISTER"
              style={styles.menuItem}
              titleStyle={styles.menuText}
              onPress={() => {
                navigation.navigate("Register");
                closeMenu();
              }}
            />
          </Menu>
        )}
      </View>
    </View>
  );
};

export default NavBar;
