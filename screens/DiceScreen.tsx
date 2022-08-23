import {
  StyleSheet,
  Image,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { Text, View } from "../components/Themed";
import CustomSafeAreaView, {
  currentHeight,
} from "../components/CustomSafeAreaView";
import { useState } from "react";

//@ts-ignore
import Dice1 from "../assets/images/dice1.png";
//@ts-ignore
import Dice2 from "../assets/images/dice2.png";
//@ts-ignore
import Dice3 from "../assets/images/dice3.png";
//@ts-ignore
import Dice4 from "../assets/images/dice4.png";
//@ts-ignore
import Dice5 from "../assets/images/dice5.png";
//@ts-ignore
import Dice6 from "../assets/images/dice6.png";
//@ts-ignore
import bigImage from "../assets/images/big-image.png";

const imageArray = [Dice1, Dice2, Dice3, Dice4, Dice5, Dice6];

export default function DiceScreen() {
  const [uri, setUri] = useState(Dice1);
  const [title, setTitle] = useState("will you escape?");
  const [color , setColor] = useState("#fff");

  const buttonTapped = () => {
    const randomNumber = Math.floor(Math.random() * 6) + 1;
    setUri(imageArray[randomNumber - 1]);
    if (randomNumber === 5 || randomNumber === 6) {
      setTitle("you have escaped!");
      setColor("#3aeb23");
    } else {
      setTitle("you got caught!");
      setColor("#ff0505");
    }
  };

  return (
    <CustomSafeAreaView backgroundColor={"#fad096"}>
      <View style={styles.container}>
        <ImageBackground
          source={bigImage}
          style={styles.bigImage}
          resizeMode="cover"
        >
          <Text style={[styles.title, {color}]}>{title}</Text>
          <TouchableOpacity style={styles.touchable} onPress={buttonTapped}>
            <Image source={uri} style={styles.image} />
          </TouchableOpacity>
          <Text style={styles.explanationText}>Tap to try to escape</Text>
        </ImageBackground>
      </View>
    </CustomSafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#fad096",
  },
  title: {
    fontSize: 60,
    fontFamily: "Quasimodo",
    textAlign: "center",
    marginTop: -(currentHeight as number),
    color: "white",
    textShadowColor: 'rgba(0, 0, 0, 1)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10,
  },
  image: {
    width: 250,
    height: 250,
    marginVertical: 130,
  },
  bigImage: {
    flex: 1,
    justifyContent: "flex-start",
    width: "100%",
  },
  touchable: {
    alignItems: "center",
    justifyContent: "flex-start",
    width: "100%",
  },
  explanationText: {
    fontSize: 60,
    textAlign: "center",
    textShadowColor: 'black',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10,
    color: "white",
    marginVertical: 20,
    fontFamily: "Quasimodo",
  },
});
