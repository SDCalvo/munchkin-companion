import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

import useCachedResources from "./hooks/useCachedResources";
import useColorScheme from "./hooks/useColorScheme";
import Navigation from "./navigation";

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  const [fontsLoaded] = useFonts({
    'Quasimodo': require('./assets/fonts/Quasimodo-Regular.ttf'),
  });
  if (!isLoadingComplete || !fontsLoaded) {
    return null;
  } else {
    SplashScreen.hideAsync();
    return (
      <SafeAreaProvider>
        <StatusBar />
        <Navigation colorScheme={colorScheme} />
      </SafeAreaProvider>
    );
  }
}
