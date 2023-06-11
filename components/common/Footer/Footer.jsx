import { View, Text, TouchableOpacity } from "react-native";
import styles from "./Footer.style";
import { Icon } from "@rneui/base";
import main from "../../../styles/main";

const Footer = () => {
  return (
    <View style={[main.container, styles.container]}>
      <View style={styles.section}>
        <Text style={styles.footerTitle}>SECO</Text>
        <Text style={styles.footerDescription}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione
          recusandae nobis sunt aliquid tempore vitae sapiente ea voluptatibus
          ab repellat asperiores eius cum laboriosam facilis eos, maiores
          deleniti nemo consequuntur assumenda sed consectetur culpa voluptatum
          quisquam quibusdam? Saepe, soluta quibusdam.
        </Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.otherTitles}>Useful Links</Text>
        <View style={styles.linkSection}>
          <View style={styles.links}>
            <TouchableOpacity>
              <Text style={styles.link}>Home</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.link}>Man Fashion</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.link}>Accessiores</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.link}>Order Tracking</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.links}>
            <TouchableOpacity>
              <Text style={styles.link}>Cart</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.link}>My Account</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.link}>Wishlist</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.link}>Terms</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View>
        <Text style={styles.otherTitles}>Contact</Text>
        <View style={styles.contactItems}>
          <View style={styles.contactItem}>
            <Icon type="materialicon" name="location-on" />
            <Text style={styles.contactText}>Cairo, Egypt</Text>
          </View>
          <View style={styles.contactItem}>
            <Icon type="materialicon" name="local-phone" />
            <Text style={styles.contactText}>+201154251620</Text>
          </View>
          <View style={styles.contactItem}>
            <Icon type="materialicon" name="mail-outline" />
            <Text style={styles.contactText}>contact@hein.com</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Footer;
