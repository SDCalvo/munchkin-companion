import { useEffect, useRef, useState } from "react";
import {
  StyleSheet,
  FlatList,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import CustomSafeAreaView, {
  currentHeight,
} from "../components/CustomSafeAreaView";
import { Text, View } from "../components/Themed";
import DATA from "../faqData";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const image = require("../assets/images/faq-banner.png");
const size = Image.resolveAssetSource(image);

export default function FAQScreen() {
  const flatListRef = useRef<any>();

  const renderItem = ({ item }: any) => {
    if (item.spacerBottom) {
      return <View style={styles.spacerBottom} />;
    } else if (item.spacerTop) {
      return <View style={styles.spacerTop} />;
    } else if (item.header) {
      return (
        <View style={styles.dividers}>
          <Text style={styles.header}>{item.header}</Text>
        </View>
      );
    } else if (item.subTitle) {
      return (
        <View style={styles.dividers}>
          <Text style={styles.subTitle}>{item.subTitle}</Text>
          <Text style={styles.text}>{item.disclaimer}</Text>
        </View>
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

  const handleItemPress = (index: number) => {
    try {
      flatListRef.current.scrollToIndex({
        animated: true,
        index,
        viewOffset: 60,
      });
    }
    catch (e) {
      console.log(e);
    }
  };

  const Item = ({ item, onPress }: { item: any; onPress: () => void }) => {
    if (item.id) {
      return (
        <TouchableOpacity onPress={onPress}>
          <Text style={styles.itemsCategory}>
            {item.header || item.subTitle}
          </Text>
        </TouchableOpacity>
      );
    } else {
      return null;
    }
  };

  const renderNavItem = ({ item, index }: { item: any; index: number }) => {
    return <Item item={item} onPress={() => handleItemPress(index)} />;
  };

  function FaqFlatList() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
      console.log("mounted", mounted);
      setMounted(true);
    }, []);

    return (
      <View style={styles.subContainer}>
        {mounted ? (
          <FlatList
            ref={flatListRef}
            initialNumToRender={DATA.length}
            data={DATA}
            renderItem={renderItem}
            keyExtractor={(item, index) => index.toString()}
          />
        ) : (
          <View style={styles.loadingContainer}>
            <Text style={styles.title}>Loading...</Text>
          </View>
        )}
      </View>
    );
  }

  return (
    <CustomSafeAreaView backgroundColor={"#fad096"}>
      <View style={styles.categories}>
        <FlatList
          data={DATA}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={renderNavItem}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
      <View style={styles.container}>
        <FaqFlatList />
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
  loadingContainer: {
    flex: 1,
    height: "100%",
    width: "100%",
    alignItems: "center",
    backgroundColor: "black",
    justifyContent: "center",
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
    marginBottom: 10,
    marginHorizontal: 10,
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
  spacerTop: {
    height: 60,
    width: "100%",
    backgroundColor: "#d3aa72",
  },
  spacerBottom: {
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
    marginHorizontal: 10,
    textDecorationLine: "underline",
  },
  text: {
    fontSize: 20,
    fontFamily: "Quasimodo",
    textAlign: "center",
    color: "black",
    marginHorizontal: 10,
  },
  categories: {
    backgroundColor: "#fad096",
    width: "100%",
    height: 53,
    top: 0,
    position: "absolute",
    zIndex: 2,
    paddingHorizontal: 10,
    borderColor: "black",
    borderBottomWidth: 3,
  },
  itemsCategory: {
    padding: 10,
    border: 1,
    borderRadius: 25,
    marginRight: 10,
    marginTop: 3,
    color: "white",
    fontSize: 15,
    fontFamily: "Quasimodo",
    backgroundColor: "black",
  },
  dividers: {
    backgroundColor: "transparent",
    marginBottom: 10,
  },
  button: {
    backgroundColor: "black",
    padding: 10,
    position: "absolute",
    bottom: 0,
  },
});
