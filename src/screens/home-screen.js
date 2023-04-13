import React, {useState} from 'react';
import {FlatList, TextInput, StyleSheet, SafeAreaView, ScrollView, View, Text, Image} from 'react-native';
import {Button} from 'react-native-elements';
import { Auth, API,  } from 'aws-amplify';
import t from 'tcomb-form-native';
const Form = t.form.Form;
const User = t.struct({
  name: t.String,
  price: t.Number,
  description: t.String,
});
const HomeScreen = ({navigation}) => {

const handleSubmit = async () => {
    // Saving product details
  };

const products = [
  { id: '1', name: '', image: '/Users/norashan/proyecto/src/assets/veritrace_homepage.png' },
];

  const renderProduct = ({ item }) => {
    return (
      <View style={styles.info}>
      <Text style={styles.name}>{item.name}</Text>
      <View style={styles.product}>
        <Image style={styles.image} source={{ uri: item.image }} />

        </View>
      </View>
    );
  };

return (
    <>
      <SafeAreaView style={styles.addProductView}>
        <ScrollView>
        <FlatList
      data={products}
      renderItem={renderProduct}
      keyExtractor={item => item.id}
    />
        </ScrollView>
      </SafeAreaView>
      <SafeAreaView style={styles.addProductView}>
        <ScrollView>
        <Button
          title="My Products"
          buttonStyle={{
            backgroundColor: '#ff9900',
            borderWidth: 2,
            borderColor: '#ff9900',
            borderRadius: 10,
            paddingVertical: 12,
            paddingHorizontal: 12,
          }}
          containerStyle={{
            width: 200,
            marginHorizontal: 60,
            marginVertical: 10,
          }}
          titleStyle={{ fontWeight: 'normal' , fontFamily:'Futura', fontSize:20}}
          onPress={() => navigation.navigate('AddProduct')}
        />
        </ScrollView>
      </SafeAreaView>
      <SafeAreaView style={styles.addProductView}>
        <ScrollView>
        <Button
          title="Scan Product"
          buttonStyle={{
            backgroundColor: '#ff9900',
            borderWidth: 2,
            borderColor: '#ff9900',
            borderRadius: 10,
            paddingVertical: 12,
            paddingHorizontal: 12,
            marginBottom: 75
          }}
          containerStyle={{
            width: 200,
            marginHorizontal: 50,
            marginVertical: 10,
          }}
          titleStyle={{ fontWeight: 'normal' , fontFamily:'Futura', fontSize:20}}
          onPress={() => navigation.navigate('ScanProduct')}
        />
        </ScrollView>
          <ScrollView />
      </SafeAreaView>
    </>
  );
};
const styles = StyleSheet.create({
  bottomBox: {
    backgroundColor: "blue",
  },
  addProductView: {
    height: "100%",
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    paddingTop: 15,
    height: 'auto',
    justifyAlign:'center',
    alignItems:'center',
    backgroundColor: '#000010'
  },
  product: {
    margin: 10,
    padding: 20,
    alignItems: 'center',
  },
  image: {
    width: '100%',
    aspectRatio: 1,
    borderRadius: 20
  },
  info: {
    marginTop: 40,
    alignItems:'center',
  },
  name: {
    fontSize: 50,
    marginBottom: 20,
    fontFamily: "Futura",
    color:"white",
    shadowColor: '#888',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 10,
    paddingTop:30,
  },
  price: {
    fontSize: 18,
    color: '#999',
  },
});
export default HomeScreen;