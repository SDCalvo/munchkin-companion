import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "react-native";

export const currentHeight = StatusBar.currentHeight; 

export default function CustomSafeAreaView(props: any) {
  return (
    <SafeAreaView style={{ flex: 1, marginTop: currentHeight, backgroundColor: props.backgroundColor }}>
      {props.children}
    </SafeAreaView>
  );
}