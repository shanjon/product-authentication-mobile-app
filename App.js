import React from 'react';
import {StyleSheet, View, TouchableOpacity} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import AddProductScreen from './src/screens/add-product-screen';
import HomeScreen from './src/screens/home-screen';
import ListScreen from './src/screens/list-products';
import ProductHistory from './src/screens/ProductHistory';
import ScanProductScreen from './src/screens/scan-product';
import {Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
//import NFCScreen from './src/screens/nfc-screen';

import {withAuthenticator} from 'aws-amplify-react-native';
import { Auth } from 'aws-amplify';
import { LogBox } from 'react-native';
LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs();//Ignore all log notifications

const App: () => React$Node = () => {
  const Stack = createStackNavigator();
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={({navigation}) => ({
              title: 'Home',
              headerStyle: {
                backgroundColor: '#FFFFFF',
              },
              headerLeft: () => (
                <View style={styles.logOutBtn}>
                  <Button 
                    icon={<Icon name="sign-out" size={25} color="#000000" />}
                    onPress={() => {
                      Auth.signOut();
                    }}
                    type="clear"
                  />
                </View>
              ),
              headerRight: () => (
                <TouchableOpacity
                  style={styles.addButton}>
                  <Icon name={'navicon'} size={20} color="#000000" onPress={() => navigation.navigate('ProductHistory')}/>
                </TouchableOpacity>
              ),
            })}
          />
          <Stack.Screen
            name="AddProduct" // directs to screen AddProduct
            buttonStyle={styles.addButton}
            component={AddProductScreen}
            options={{
              title: 'My Products', //Title of page
              headerStyle: {
                backgroundColor: '#FFFFFF',
              },
            }}
          />
          <Stack.Screen
            name="ScanProduct"
            buttonStyle={styles.addButton}
            component={ScanProductScreen}
            options={{
              title: 'Scan Product', //Title of page
              headerStyle: {
                backgroundColor: '#FFFFFF',
              },
            }}c
          />
          <Stack.Screen
            name="ListScreen" // directs to ListScreen
            component={ListScreen}
            options={{
              title: 'Product History', //Title of page
              headerStyle: {
                backgroundColor: '#FFFFFF',
              },
            }}
          />
          <Stack.Screen
            name="ProductHistory" // directs to ListScreen
            component={ProductHistory}
            options={{
              title: 'Product History', //Title of page
              headerStyle: {
                backgroundColor: '#FFFFFF',
              },
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};
const styles = StyleSheet.create({
  addButton: {
    marginRight: 20,
  },
  logOutBtn: {
    marginLeft: 10,
  },
});

export default withAuthenticator(App);