import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  TextInput,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";

type GameTrackerScreenProps = {
  color: string;
  image: any;
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
};

export default function GameTracker({ color, image }: GameTrackerScreenProps) {
  const [gameState, setGameState] = useState<GameState>({
    name: {
      value: "...",
      isEditing: false,
    },
    level: 1,
    mod: 0,
    gender: "male",
    total: 1,
  });

  useEffect(() => {
    const total = gameState.level + gameState.mod;

    setGameState({
      ...gameState,
      total,
    });
  }, [gameState.level, gameState.mod]);

  function valueEditTsx(position: string) {
    return (
      <View style={styles.valueEditContainer}>
        <Text style={[styles.text, { textDecorationLine: "underline" }]}>
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
            }}
          >
            <FontAwesome name="minus" size={20} />
          </TouchableOpacity>
          <Text style={styles.value}>
            {gameState[position as keyof GameState]}
          </Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() =>
              setGameState({
                ...gameState,
                [position]:
                  (gameState[position as keyof GameState] as number) + 1,
              })
            }
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
        <Image source={image} style={styles.image} />
        <TouchableOpacity
          style={styles.button}
          onPress={() =>
            setGameState({
              ...gameState,
              gender: "male",
            })
          }
        >
          <FontAwesome
            name="male"
            size={30}
            style={{ opacity: gameState.gender === "male" ? 1 : 0.5 }}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() =>
            setGameState({
              ...gameState,
              gender: "female",
            })
          }
        >
          <FontAwesome
            name="female"
            size={30}
            style={{ opacity: gameState.gender === "female" ? 1 : 0.5 }}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.subContainer}>{nameEditTsx()}</View>
      <View style={styles.subContainer}>{valueEditTsx("level")}</View>
      <View style={styles.subContainer}>{valueEditTsx("mod")}</View>
      <View style={styles.subContainer}>
        <View style={styles.totalContainer}>
          <Text style={[styles.text, { textDecorationLine: "underline" }]}>
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
  },
  valueEditContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    width: "100%",
    paddingHorizontal: 10,
  },
  valueEditSubContainer: {
    flexDirection: "row",
    paddingHorizontal: 15,
    width: "70%",
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
    fontSize: 20,
    textAlign: "center",
  },
  subContainer: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    flex: 1,
  },
  title: {
    fontSize: 20,
    textAlign: "center",
    textShadowColor: 'rgba(1, 1, 1, 1)',
    textShadowOffset: {width: -1, height: 1},
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
    fontSize: 20,
    textAlign: "center",
    fontFamily: "Quasimodo",
    textShadowColor: 'rgba(1, 1, 1, 1)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 5,
    color: "white",
  },
  nameTouchable: {
    width: "60%",
  },
  name: {
    alignItems: "center",
    justifyContent: "center",
    fontSize: 20,
    textAlign: "center",
  },
  text: {
    fontSize: 20,
    textAlign: "center",
    width: "30%",
    fontFamily: "Quasimodo",
    textShadowColor: 'rgba(1, 1, 1, 1)',
    textShadowOffset: {width: -1, height: 1},
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
  },
  textTotal: {
    fontSize: 20,
    textAlign: "center",
    width: "30%",
    fontFamily: "Quasimodo",
    color: "white",
    backgroundColor: "black",
    borderRadius: 50,
    padding: 5,
    borderWidth: 1,
  },
});
