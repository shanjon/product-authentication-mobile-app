import React from 'react';
import {
  TouchableOpacity,
  View,
  Image,
  Text,
  TextInput,
  StyleSheet,
  Platform,
  SafeAreaView,
} from 'react-native';
import NfcManager, {NfcEvents} from 'react-native-nfc-manager';
import AndroidPrompt from './AndroidPrompt';
import ProductHistory from './ProductHistory';
import { Auth, API,  } from 'aws-amplify';

function Game(props) {
  const [start, setStart] = React.useState(null);
  const [duration, setDuration] = React.useState(0);
  const androidPromptRef = React.useRef();

  React.useEffect(() => {
    let count = 1;
    NfcManager.setEventListener(NfcEvents.DiscoverTag, (tag) => {
      console.warn(JSON.stringify(tag));
      count--;

      if (Platform.OS === 'android') {
        androidPromptRef.current.setHintText(`${count}...`);
      } else {
        NfcManager.setAlertMessageIOS(`${count}...`);
      }

      if (count <= 0) {
        NfcManager.unregisterTagEvent().catch(() => 0);
        setDuration(new Date().getTime() - start.getTime());

        if (Platform.OS === 'android') {
          androidPromptRef.current.setVisible(false);
        }
      }
    });

    return () => {
      NfcManager.setEventListener(NfcEvents.DiscoverTag, null);
    };
  }, [start]);

  async function scanTag() {
    await NfcManager.registerTagEvent();
    if (Platform.OS === 'android') {
      androidPromptRef.current.setVisible(true);
    }
    setStart(new Date());
    setDuration(0);
  }

  return (
    <View style={styles.container}>
        {(duration > 0 && (
          <ProductHistory />
        )) || <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          source={{uri: 'https://st4.depositphotos.com/22526794/25690/v/600/depositphotos_256902164-stock-illustration-radio-line-icon.jpg'}}
        />
      <Text style={styles.title}>Ready to Scan</Text>
      <Text style={styles.description}>
        Hold your device near the product
      </Text>
      <TouchableOpacity style={styles.button} onPress={scanTag}>
          <Text style={styles.buttonText}>Scan</Text>
        </TouchableOpacity>
      </View>}
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    marginTop:20,
    fontFamily:'Futura'
  },
  logoContainer: {
    overflow: 'hidden',
    marginBottom:20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 100,
    height: 100,
    borderRadius:50,
  },
  description: {
    marginBottom: 20,
    textAlign: 'center',
    fontFamily:'Futura'
  },
  card: {
    width: '80%',
    height: 50,
    backgroundColor: '#fff',
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    shadowColor: '#888',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
  },
  input: {
    flex: 1,
    fontSize: 18,
    fontFamily:'Futura'
  },
  button: {
    backgroundColor: '#ff9900',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontFamily:'Futura'
  },
});

export default Game;