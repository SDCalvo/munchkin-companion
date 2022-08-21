import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  TextInput,
} from "react-native";
import { MonoText } from "./StyledText";
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
};

export default function GameTracker({ color, image }: GameTrackerScreenProps) {
  const [gameState, setGameState] = useState<GameState>({
    name: {
      value: "",
      isEditing: false,
    },
    level: 1,
    mod: 0,
    gender: "male",
  });

  function valueEditTsx(position: string) {
    return (
      <View style={styles.valueEditContainer}>
        <Text style={styles.text}>{position.toLocaleUpperCase()}</Text>
        <View style={styles.valueEditSubContainer}>
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
            <FontAwesome name="minus" size={20} color={"white"} />
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
                  (gameState[position as keyof GameState] as number) - 1,
              })
            }
          >
            <FontAwesome name="plus" size={20} color={"white"} />
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  function nameEditTsx() {
    return (
      <View style={styles.nameEditContainer}>
        <Text style={styles.text}>NAME</Text>
        {gameState.name.isEditing ? (
          <TextInput
            style={styles.nameInput}
            autoFocus={true}
            onChangeText={(text) =>
              setGameState({
                ...gameState,
                name: { value: text, isEditing: true },
              })
            }
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
            <Text style={styles.name}>{gameState.name.value}</Text>
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
          onPress={() =>
            setGameState({
              ...gameState,
              gender: "male"
            })}
          >
            <FontAwesome name="male" size={30} color={"white"} style={{opacity: gameState.gender === "male"? 1 : 0.5}}/>
          </TouchableOpacity>
          <TouchableOpacity
          onPress={() =>
            setGameState({
              ...gameState,
              gender: "female"
            })}
          >
            <FontAwesome name="female" size={30} color={"white"} style={{opacity: gameState.gender === "female"? 1 : 0.5}}/>  
          </TouchableOpacity>

      </View>
      <View style={styles.subContainer}>{nameEditTsx()}</View>
      <View style={styles.subContainer}>{valueEditTsx("level")}</View>
      <View style={styles.subContainer}>{valueEditTsx("mod")}</View>
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
    paddingHorizontal: 10,
    width: "70%",
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
  },
  value: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    fontSize: 20,
    textAlign: "center",
    color: "white",
  },
  subContainer: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    flex: 1,
    borderColor: "white",
    borderWidth: 1,
  },
  title: {
    fontSize: 20,
    color: "white",
    textAlign: "center",
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
    color: "white",
  },
  nameTouchable: {
    width: "100%",
    flex: 1,
  },
  name: {
    alignItems: "center",
    justifyContent: "center",
    fontSize: 20,
    textAlign: "center",
    color: "white",
  },
  text: {
    fontSize: 16,
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  imageSubContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    width: "100%",
    flex: 1,
    paddingVertical: 10,
  },
});
