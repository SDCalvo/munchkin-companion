import { StyleSheet, Image } from 'react-native';
import { Text, View } from '../components/Themed';
import CustomSafeAreaView, {currentHeight} from '../components/CustomSafeAreaView';
import { useState } from 'react';

//@ts-ignore
import Dice1 from '../assets/images/dice1.png';
//@ts-ignore
import Dice2 from '../assets/images/dice2.png';
//@ts-ignore
import Dice3 from '../assets/images/dice3.png';
//@ts-ignore
import Dice4 from '../assets/images/dice4.png';
//@ts-ignore
import Dice5 from '../assets/images/dice5.png';
//@ts-ignore
import Dice6 from '../assets/images/dice6.png';

export default function DiceScreen() {
  const [uri,setUri] = useState(Dice1);

  const buttonTapped = ()=>{
    let randomNumber = Math.floor(Math.random() * 6) + 1

    switch(randomNumber){
      case 1: setUri(Dice1);
        break;
      case 2: setUri(Dice2);
        break;
      case 3: setUri(Dice3);
        break;
      case 4: setUri(Dice4);
        break;
      case 5: setUri(Dice5);
        break;
      case 6: setUri(Dice6);
       break;
      default: setUri(Dice1);
    }
  }

  return (
    <CustomSafeAreaView backgroundColor={"#fad096"}>
      <View style={styles.container}>
        <Image source={uri} style={styles.image}/>
      </View>
    </CustomSafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#fad096',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  image: {
    width: 250,
    height: 250,
  },
});