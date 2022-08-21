import React from "react";
import { StyleSheet } from "react-native";
import GameTracker from "../components/GameTracker";
import { Text, View } from "../components/Themed";
import { RootTabScreenProps } from "../types";
import { SafeAreaView } from "react-native-safe-area-context";

export default function GameScreen({ navigation }: RootTabScreenProps<"Game">) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.subContainer}>
        <GameTracker color={"blue"} image={require("../assets/images/munchkin1.png")} />
        <GameTracker color={"red"} image={require("../assets/images/munchkin2.png")} />
      </View>
      <View style={styles.subContainer}>
        <GameTracker color={"red"} image={require("../assets/images/munchkin3.png")} />
        <GameTracker color={"blue"} image={require("../assets/images/munchkin4.png")} />
      </View>
      <View style={styles.subContainer}>
        <GameTracker color={"blue"} image={require("../assets/images/munchkin5.png")} />
        <GameTracker color={"red"} image={require("../assets/images/munchkin6.png")} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "center",
    width: "100%",
    height: "100%",
  },
  subContainer: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "center",
    width: "100%",
    flexDirection: "row",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
