import { StyleSheet, Image } from 'react-native';
import * as Linking from 'expo-linking';
import CustomSafeAreaView, {
  currentHeight,
} from "../components/CustomSafeAreaView";
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

export default function DisclaimerScreen() {

  const onPress = async () => {
    const url = 'https://play.google.com/store/apps/details?id=com.sjgames.levelcounter';
    if (await Linking.canOpenURL(url)) {
      await Linking.openURL(url);
    } else {
      console.log(`Don't know how to open url: ${url}`);
    }
  }
  
  return (
    <CustomSafeAreaView backgroundColor={"#d3aa72"}>
      <View style={styles.container}>
        <Text style={styles.title}>disclaimer</Text>
        <Text style={styles.text}>
          I DO NOT OWN MUNCHKIN, nor any of the images shown in this app.
        </Text>
        <Text style={styles.text}>
          Munchkin is designed by Steve Jackson and illustrated by John Kovalic. All rights belong to them.
        </Text>
        <Text style={styles.text}>
          Munchkin is a trademark of Steve Jackson Games.
        </Text>
        <Text style={styles.text}>
          This app is not affiliated with Steve Jackson Games nor is it affiliated with Munchkin. (Even though I am a HUGE fan).
        </Text>
        <Text style={styles.text}>
          Thanks Steve Jackson for creating Munchkin!
        </Text>
        <Text style={styles.text}>
          I hope anyone who uses this app is happy with it and can appreciate how much effort went into making it.
        </Text>
        <Text style={styles.text}>
          If you have any questions, comments, or concerns, please contact me at santiago.d.calvo@gmail.com or in linkedin @santiago-d-calvo.
        </Text>
        <Text style={styles.text}>
          Also don't forget to check out the OFFICIAL Munchkin Level Counter app!
        </Text>
        <Text style={styles.text}>
          <Text style={styles.link} onPress={onPress}>Oficial app!</Text>
        </Text>
        <Image source={require('../assets/images/zombies.png')} style={styles.image} />
      </View>
    </CustomSafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: "black",
    margin: 20,
    paddingHorizontal: 10,
    marginTop: -(currentHeight as number) + 20,
    borderRadius: 20,
  },
  title: {
    fontSize: 40,
    fontFamily: 'Quasimodo',
    textAlign: 'center',
  },
  image: {
    flex: 1,
    resizeMode: "contain",
  },
  text: {
    fontSize: 17,
    textAlign: "center",
    color: "white",
    marginBottom: 5,
  },
  link: {
    color: "white",
    textDecorationLine: "underline",
  },
});