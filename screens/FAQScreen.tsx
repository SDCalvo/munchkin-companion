import { StyleSheet, FlatList, Image, Dimensions } from "react-native";
import CustomSafeAreaView, {
  currentHeight,
} from "../components/CustomSafeAreaView";
import { Text, View } from "../components/Themed";
import DATA from "../faqData";

const windowWidth = Dimensions.get("window").width;
const image = require("../assets/images/faq-banner.png");
const size = Image.resolveAssetSource(image);

export default function FAQScreen() {
  const renderItem = ({ item }: any) => {
    if (item.spacer) {
      return <View style={styles.spacer} />;
    } else if (item.header) {
      return <Text style={styles.header}>{item.header}</Text>;
    } else if (item.subTitle) {
      return (
        <>
          <Text style={styles.subTitle}>{item.subTitle}</Text>
          <Text style={styles.text}>{item.disclaimer}</Text>
        </>
      );
    } else {
      return (
        <View style={styles.item}>
          <Text style={styles.question}>{item.question}</Text>
          <Text style={styles.answer}>{item.answer}</Text>
        </View>
      );
    }
  };

  return (
    <CustomSafeAreaView backgroundColor={"#fad096"}>
      <View style={styles.container}>
        <View style={styles.subContainer}>
          <FlatList
            data={DATA}
            renderItem={renderItem}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
      </View>
      <Image source={image} style={styles.image} />
    </CustomSafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#fad096",
    marginTop: -(currentHeight as number),
  },
  subContainer: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#d3aa72",
    margin: 20,
    marginTop: 0,
  },
  title: {
    fontSize: 40,
    fontFamily: "Quasimodo",
    textAlign: "center",
    color: "white",
    textShadowColor: "rgba(0, 0, 0, 1)",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
    marginTop: 10,
  },
  image: {
    flex: 1,
    width: windowWidth,
    resizeMode: "contain",
    position: "absolute",
    bottom: -((size.height / 4 + 8) as number),
  },
  item: {
    flex: 1,
    backgroundColor: "black",
    padding: 10,
    margin: 10,
    borderRadius: 10,
  },
  question: {
    fontSize: 20,
    lineHeight: 25,
    fontFamily: "Quasimodo",
    textAlign: "center",
    color: "white",
  },
  answer: {
    marginTop: 10,
    fontSize: 18,
    textAlign: "left",
    color: "black",
    backgroundColor: "white",
    padding: 10,
    borderRadius: 10,
  },
  spacer: {
    height: 150,
    width: "100%",
    backgroundColor: "#d3aa72",
  },
  header: {
    fontSize: 60,
    fontFamily: "Quasimodo",
    textAlign: "center",
    color: "white",
    textShadowColor: "rgba(0, 0, 0, 1)",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
    marginTop: 10,
    marginHorizontal: 10,
  },
  subTitle: {
    fontSize: 40,
    fontFamily: "Quasimodo",
    textAlign: "center",
    color: "white",
    textShadowColor: "rgba(0, 0, 0, 1)",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
    marginTop: 10,
    marginHorizontal: 10,
  },
  text: {
    fontSize: 20,
    fontFamily: "Quasimodo",
    textAlign: "center",
    color: "black",
    marginHorizontal: 10,
  },
});
