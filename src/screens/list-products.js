import React, { useState } from 'react'
import { View, Text, Button, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import { Auth, API,  } from 'aws-amplify';

const items = [
  { id: 1, name: 'Manufactured', price: '2022-12-10', quantity: 1, image: 'https://cdn.britannica.com/38/4038-004-111388C2/Flag-Thailand.jpg' },
  { id: 2, name: 'Inspected', price: '2022-12-10', quantity: 1, image: 'https://cdn-icons-png.flaticon.com/512/197/197560.png' },
  { id: 3, name: 'Shipped', price: '2022-12-10', quantity: 1, image: 'https://cdn-icons-png.flaticon.com/512/197/197560.png' },
  { id: 4, name: 'Labeled', price: '2022-12-10', quantity: 1, image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/United-states_flag_icon_round.svg/1024px-United-states_flag_icon_round.svg.png' },
  { id: 5, name: 'Stocked', price: '2022-12-10', quantity: 1, image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/United-states_flag_icon_round.svg/1024px-United-states_flag_icon_round.svg.png' },
  { id: 6, name: 'Sold', price: '2022-12-10', quantity: 1, image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/United-states_flag_icon_round.svg/1024px-United-states_flag_icon_round.svg.png' },
]

const ShoppingCart = () => {
  const [cartItems, setCartItems] = useState(items)
  const addItem = item => {
    setCartItems([...cartItems, item])
  }

  const removeItem = item => {
    setCartItems(cartItems.filter(i => i !== item))
  }

  const increaseQuantity = item => {
    const newCartItems = cartItems.map(i => {
      if (i === item) {
        return { ...i, quantity: i.quantity + 1 }
      }
      return i
    })
    setCartItems(newCartItems)
  }

  const decreaseQuantity = item => {
    const newCartItems = cartItems.map(i => {
      if (i === item && i.quantity > 1) {
        return { ...i, quantity: i.quantity - 1 }
      }
      return i
    })
    setCartItems(newCartItems)
  }

  

  return (
    <ScrollView>
    <View style={styles.container}>
      <Text style={styles.tittle}></Text>
      {cartItems.map(item => (
        <View key={item.id} style={styles.itemContainer}>
          <Image source={{ uri: item.image }} style={styles.image} />
          <View style={styles.infoContainer}>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.price}>{item.price}</Text>
          </View>
          <View style={styles.removeButton}>
          <Text style={styles.detailsText}><TouchableOpacity style={styles.button}>
          <Text style={styles.detailsText}>Details</Text>
        </TouchableOpacity></Text>
          </View>
        </View>
      ))}
      <View style={styles.circleButton}>
      <TouchableOpacity style={styles.button}         onPress={() =>
          addItem({
            id: Math.random(),
            name: 'Claimed',
            price: '2023-01-10',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/United-states_flag_icon_round.svg/1024px-United-states_flag_icon_round.svg.png',
            quantity: 1,
          })
        }>
          <Text style={styles.buttonText}>Claim Product</Text>
        </TouchableOpacity>
      </View>
    </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal:10,
    fontFamily:'Horizon',
  },
  tittle:{
    fontSize:24,
    marginBottom:20,
    fontFamily:'Horizon',
    paddingTop:20
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    shadowColor: '#cccccc',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
    backgroundColor: '#fff',
    marginBottom: 10,
    fontFamily:'Horizon',
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
    fontFamily:'Horizon',
  },
  infoContainer: {
    marginLeft: 10,
    flex: 1,
    fontFamily:'Horizon',
    padding:5
  },
  name: {
    fontSize: 18,
    fontFamily:'Horizon',
  },
  price: {
    fontSize: 15,
    color: '#888',
    fontFamily:'Horizon',
    paddingTop:4
  },
  removeButton: {
    alignItems: 'center',
    fontFamily:'Horizon',
  },
  circleButton: {
    alignItems: 'center',
    elevation: 8,
    backgroundColor: "#ff9900",
    borderRadius: 10,
    paddingVertical: 8,
    paddingHorizontal: 10,
    fontFamily:'Horizon',
    marginTop:20
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    fontFamily:'Horizon',
  },
  quantity: {
    marginRight: 10,
    fontFamily:'Horizon',
  },
  detailsText: {
    fontFamily:'Horizon',
    color:'blue',
    fontSize:16,
    paddingTop:16
  },
  buttonText: {
    fontFamily:'Horizon',
    color:'white',
    fontSize:20,
    paddingVertical:6,
    paddingHorizontal:20
  }
})

export default ShoppingCart
