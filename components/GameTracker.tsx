import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TouchableHighlight,
  Image,
  TextInput,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  withTiming,
  withSequence,
} from "react-native-reanimated";

const maleImages = [
  require("../assets/images/munchkin-m1.png"),
  require("../assets/images/munchkin-m2.png"),
  require("../assets/images/munchkin-m3.png"),
  require("../assets/images/munchkin-m4.png"),
  require("../assets/images/munchkin-m5.png"),
];

const femaleImages = [
  require("../assets/images/munchkin-f1.png"),
  require("../assets/images/munchkin-f2.png"),
  require("../assets/images/munchkin-f3.png"),
  require("../assets/images/munchkin-f4.png"),
  require("../assets/images/munchkin-f5.png"),
];

type GameTrackerScreenProps = {
  color: string;
};

type GameState = {
  name: {
    value: string;
    isEditing: boolean;
  };
  level: number;
  mod: number;
  gender: string;
  total: number;
  color: string;
  image: string;
};

const colorsArray = ["#fff600", "#ffc302", "#ff8f00", "#ff5b00", "#ff0505"];

export default function GameTracker({ color }: GameTrackerScreenProps) {
  function getRandomInt(max: number): number {
    return Math.floor(Math.random() * max);
  }
  const initImageIndex = getRandomInt(maleImages.length);
  const [gameState, setGameState] = useState<GameState>({
    name: {
      value: "...",
      isEditing: false,
    },
    level: 1,
    mod: 0,
    gender: "male",
    total: 1,
    color: colorsArray[0],
    image: maleImages[initImageIndex],
  });
  const [lastImageIndex, setLastImageIndex] = useState(initImageIndex);
  const scaleValue = useSharedValue(1);
  const bounceAnim = useAnimatedStyle(() => ({
    transform: [
      { scale: withSpring(scaleValue.value, { damping: 15, mass: 0.5 }) },
    ],
  }));

  useEffect(() => {
    const total = gameState.level + gameState.mod;
    const colorIndex = Math.max(Math.floor(gameState.level / 2) - 1, 0);
    const color = colorsArray[colorIndex];
    setGameState({
      ...gameState,
      total,
      color,
    });
  }, [gameState.level, gameState.mod]);

  function valueEditTsx(position: string) {
    return (
      <View style={styles.valueEditContainer}>
        <Text
          style={[
            styles.text,
            { textDecorationLine: "underline", textAlign: "left" },
          ]}
        >
          {position}
        </Text>
        <View style={styles.valueEditSubContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              const min = position === "level" ? 1 : 0;
              let value =
                (gameState[position as keyof GameState] as number) - 1;
              if (value < min) {
                value = min;
              }
              setGameState({
                ...gameState,
                [position as keyof GameState]: value,
              });
              if (position === "level" && value > 1) {
                scaleValue.value = withSequence(
                  withTiming(0.8, { duration: 100 }),
                  withTiming(1, { duration: 100 })
                );
              }
            }}
          >
            <FontAwesome name="minus" size={20} />
          </TouchableOpacity>
          <Text
            style={[
              styles.value,
              { color: position === "level" ? gameState.color : "white" },
            ]}
          >
            {gameState[position as keyof GameState]}
          </Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              const value =
                (gameState[position as keyof GameState] as number) + 1;
              setGameState({
                ...gameState,
                [position]: position === "mod" ? value : Math.min(value, 10),
              });
              if (position === "level" && value < 10) {
                scaleValue.value = withSequence(
                  withTiming(1.2, { duration: 100 }),
                  withTiming(1, { duration: 100 })
                );
              }
            }}
          >
            <FontAwesome name="plus" size={20} />
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  function nameEditTsx() {
    return (
      <View style={styles.nameEditContainer}>
        <Text style={[styles.text, { textDecorationLine: "underline" }]}>
          name
        </Text>
        {gameState.name.isEditing ? (
          <TextInput
            style={[styles.nameInput, { width: "60%" }]}
            autoFocus={true}
            onChangeText={(text) =>
              setGameState({
                ...gameState,
                name: { value: text, isEditing: true },
              })
            }
            onBlur={() => {
              let value = gameState.name.value;
              if (value === "") {
                value = "...";
              }
              setGameState({
                ...gameState,
                name: { value, isEditing: false },
              });
            }}
            value={gameState.name.value}
          />
        ) : (
          <TouchableOpacity
            style={styles.nameTouchable}
            onPress={() =>
              setGameState({
                ...gameState,
                name: { value: gameState.name.value, isEditing: true },
              })
            }
          >
            <Text
              style={[styles.text, { width: "100%", fontWeight: "normal" }]}
            >
              {gameState.name.value}
            </Text>
          </TouchableOpacity>
        )}
      </View>
    );
  }

  return (
    <View style={[styles.container, { backgroundColor: color }]}>
      <View style={styles.imageSubContainer}>
        <TouchableHighlight
          onPress={() => {
            let newIndex = lastImageIndex + 1;
            if (newIndex >= maleImages.length) {
              newIndex = 0;
            }
            setLastImageIndex(newIndex);
            setGameState({
              ...gameState,
              image:
                gameState.gender === "male"
                  ? maleImages[newIndex]
                  : femaleImages[newIndex]
            });
          }}
        >
          <Animated.Image
            source={gameState.image}
            style={[styles.image, bounceAnim]}
          />
        </TouchableHighlight>
        <TouchableOpacity
          style={[styles.button, { paddingHorizontal: 0 }]}
          onPress={() =>
            setGameState({
              ...gameState,
              gender: "male",
              image: maleImages[getRandomInt(maleImages.length)],
            })
          }
        >
          <FontAwesome
            name="male"
            size={30}
            style={[
              {
                opacity: gameState.gender === "male" ? 1 : 0.5,
                paddingHorizontal: 15,
              },
              styles.icon,
            ]}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, { paddingHorizontal: 0 }]}
          onPress={() =>
            setGameState({
              ...gameState,
              gender: "female",
              image: femaleImages[getRandomInt(femaleImages.length)],
            })
          }
        >
          <FontAwesome
            name="female"
            size={30}
            style={[
              {
                opacity: gameState.gender === "female" ? 1 : 0.5,
                paddingHorizontal: 13,
              },
              styles.icon,
            ]}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.subContainer}>{nameEditTsx()}</View>
      <View style={styles.subContainer}>{valueEditTsx("level")}</View>
      <View style={styles.subContainer}>{valueEditTsx("mod")}</View>
      <View style={styles.subContainer}>
        <View style={styles.totalContainer}>
          <Text
            style={[
              styles.text,
              { textDecorationLine: "underline", textAlign: "left" },
            ]}
          >
            total
          </Text>
          <Text
            style={[styles.textTotal, { width: "60%", fontWeight: "normal" }]}
          >
            {gameState.total}
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%",
    paddingBottom: 5,
  },
  valueEditContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    width: "100%",
    paddingLeft: 10,
  },
  valueEditSubContainer: {
    flexDirection: "row",
    flex: 1,
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 10,
  },
  value: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    fontSize: 18,
    textAlign: "center",
    backgroundColor: "black",
    borderRadius: 50,
    padding: 5,
    fontFamily: "Quasimodo",
  },
  subContainer: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    flex: 1,
  },
  title: {
    fontSize: 18,
    textAlign: "center",
    textShadowColor: "rgba(1, 1, 1, 1)",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 5,
    color: "white",
  },
  image: {
    height: 70,
    width: 70,
    borderRadius: 5,
    borderColor: "black",
    borderWidth: 5,
  },
  nameEditContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    width: "100%",
  },
  nameInput: {
    fontSize: 18,
    textAlign: "center",
    fontFamily: "Quasimodo",
    textShadowColor: "rgba(1, 1, 1, 1)",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 5,
    color: "white",
  },
  nameTouchable: {
    width: "60%",
  },
  name: {
    alignItems: "center",
    justifyContent: "center",
    fontSize: 18,
    textAlign: "center",
  },
  text: {
    fontSize: 18,
    textAlign: "center",
    width: "30%",
    fontFamily: "Quasimodo",
    textShadowColor: "rgba(1, 1, 1, 1)",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 5,
    color: "white",
  },
  imageSubContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    width: "100%",
    flex: 1,
    paddingVertical: 20,
  },
  totalContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    width: "100%",
    paddingLeft: 5,
  },
  textTotal: {
    fontSize: 18,
    textAlign: "center",
    width: "30%",
    fontFamily: "Quasimodo",
    color: "white",
    backgroundColor: "black",
    borderRadius: 50,
    padding: 5,
    borderWidth: 1,
  },
  icon: {
    color: "white",
    backgroundColor: "black",
    borderRadius: 50,
    paddingVertical: 10,
  },
});
