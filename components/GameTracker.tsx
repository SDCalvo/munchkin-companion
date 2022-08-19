import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { MonoText } from "./StyledText";

type GameTrackerScreenProps = {
  color: string;
}

export default function GameTracker({ color }: GameTrackerScreenProps) {
  return (
    <View style={[styles.container, { backgroundColor: color }]}>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: "100%",
    height: "100%",
  },
});
