import React, {useState} from 'react';
import NfcManager, { NfcEvents } from 'react-native-nfc-manager';

 const [hasNfc, setHasNFC ] = useState(null);

 useEffect(() => {
    const checkIsSupported = async () => {
      const deviceIsSupported = await NfcManager.isSupported()

      setHasNFC(deviceIsSupported)
      if (deviceIsSupported) {
        await NfcManager.start()
      }
    }

    checkIsSupported()
  }, [])

  useEffect(() => {
    NfcManager.setEventListener(NfcEvents.DiscoverTag, (tag) => {
      console.log('tag found')
    })

    return () => {
      NfcManager.setEventListener(NfcEvents.DiscoverTag, null);
    }
  }, [])


  const readTag = async () => {
    await NfcManager.registerTagEvent();
    if (hasNfc === null) return null;

  if (!hasNfc) {
    return (
      <View style={styles.sectionContainer}>
        <Text>NFC not supported</Text>
      </View>
    )
  }

  return (
    <SafeAreaView style={styles.sectionContainer}>
      <Text>Hello world</Text>
      <TouchableOpacity style={[styles.btn, styles.btnScan]} onPress={readTag}>
        <Text style={{ color: "white" }}>Scan Tag</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.btn, styles.btnCancel]} onPress={cancelReadTag}>
        <Text style={{ color: "white" }}>Cancel Scan</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )};

export default App;