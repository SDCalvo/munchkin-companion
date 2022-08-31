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
        <GameTracker color={"#fad096"} />
        <GameTracker color={"#d3aa72"} />
      </View>
      <View style={styles.subContainer}>
        <GameTracker color={"#d3aa72"} />
        <GameTracker color={"#fad096"} />
      </View>
      <View style={styles.subContainer}>
        <GameTracker color={"#fad096"} />
        <GameTracker color={"#d3aa72"} />
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
