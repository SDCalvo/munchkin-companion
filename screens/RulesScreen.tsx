import React from "react";
import { StyleSheet, ScrollView, Image, Dimensions } from "react-native";
import { Text, View } from "../components/Themed";
import CustomSafeAreaView, {
  currentHeight,
} from "../components/CustomSafeAreaView";

const windowWidth = Dimensions.get('window').width;

export default function RulesScreen() {
  return (
    <CustomSafeAreaView backgroundColor={"#fad096"}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.container}>
          <Image
            source={require("../assets/images/rules-header.png")}
            style={styles.image}
          />
          <Image
            source={require("../assets/images/rules-1.png")}
            style={styles.image}
          />
          <Image
            source={require("../assets/images/rules-2.png")}
            style={styles.image}
          />
          <Image
            source={require("../assets/images/rules-3.png")}
            style={styles.image}
          />
          <Image
            source={require("../assets/images/rules-4.png")}
            style={styles.image}
          />
          <Image
            source={require("../assets/images/rules-5.png")}
            style={styles.image}
          />
          <Image
            source={require("../assets/images/rules-6.png")}
            style={styles.image}
          />
          <Image
            source={require("../assets/images/rules-7.png")}
            style={styles.image}
          />
          <Image
            source={require("../assets/images/rules-8.png")}
            style={styles.image}
          />
          <Image
            source={require("../assets/images/rules-9.png")}
            style={styles.image}
          />
          <Image
            source={require("../assets/images/rules-10.png")}
            style={styles.image}
          />
          <Image
            source={require("../assets/images/rules-banner.png")}
            style={styles.image}
          />
          <Image
            source={require("../assets/images/rules-11.png")}
            style={styles.image}
          />
          <Image
            source={require("../assets/images/rules-12.png")}
            style={styles.image}
          />
        </View>
      </ScrollView>
    </CustomSafeAreaView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    backgroundColor: "#fcecd2",
    marginTop: -(currentHeight as number),
  },
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#fcecd2",
  },
  image: {
    flex: 1,
    width: windowWidth,
    resizeMode: "contain",
  },
});
