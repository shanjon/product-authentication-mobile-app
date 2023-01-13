
import React from 'react';
import { FlatList, Image, Text, View, Button, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Auth, API,  } from 'aws-amplify';

const ProductListView = () => {
  const products = [
    { id: '1', name: 'BANDOULIÈRE 50', price: 'Claimed June 5, 2020', image: 'https://us.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-keepall-bandouli%C3%A8re-50-taurillon-monogram-trunks-and-travel--M59025_PM2_Front%20view.png?wid=2048&hei=2048' },
    { id: '2', name: 'RUN 55 SNEAKER', price: 'Claimed April 11, 2021', image: 'https://us.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-run-55-sneaker-shoes--AO4U7AMI11_PM2_Front%20view.png?wid=2048&hei=2048' },
    { id: '3', name: 'LV X YK TWIST MM', price: 'Claimed March 7, 2021', image: 'https://us.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-lv-x-yk-twist-mm-epi-leather-handbags--M21696_PM2_Front%20view.png?wid=2048&hei=2048' },
    { id: '4', name: 'S LOCK SLING', price: 'Claimed January 11, 2023', image: 'https://us.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-s-lock-sling-monogram-macassar-canvas-bags--M46245_PM2_Front%20view.png' },
  ];

  const renderProduct = ({ item }) => {
    return (
      <View style={styles.product}>
        <Image style={styles.image} source={{ uri: item.image }} />
        <View style={styles.info}>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.price}>{item.price}</Text>
        </View>
        <TouchableOpacity style={styles.button}>
          <View style={{ flexDirection: 'row' }}>
            <Text style={styles.buttonText}>Details </Text>
            <TouchableOpacity
                  style={styles.addButton}>
                  <Icon name={'chevron-right'} size={15} color="blue" />
                </TouchableOpacity>
          </View>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <FlatList
      data={products}
      renderItem={renderProduct}
      keyExtractor={item => item.id}
    />
  );
};

const styles = {
  product: {
    backgroundColor: '#fff',
    margin: 20,
    alignItems: 'center',
    padding: 30,
    borderRadius: 20
  },
  image: {
    width: '100%',
    aspectRatio: 1,
  },
  info: {
    marginTop: 20,
    alignItems:'center',
    justifyAlign:'center',
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    fontFamily:'Futura',
  },
  price: {
    fontSize: 18,
    color: '#999',
    fontFamily:'Futura',
    marginBottom: 10,
  },
  buttonText: {
    fontSize: 18,
    fontFamily:'Futura',
    color:'blue',
    paddingTop:3,
  },
  addButton: {
    fontSize: 15,
    paddingTop:9,
  }
};

export default ProductListView;