//import liraries
import React, { Component } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import Colors from "@/constants/Colors";
import { useNavigation } from '@react-navigation/native';


// create a component
const Card = ({ product, onAddPress }) => {
  const { name, quantity, price, image } = product;

  const navigation = useNavigation();

  const handleCardPress = () => {
    // Navigate to the detail page, passing the product as a parameter
    navigation.navigate('details/[id]', { product });
  };

  return (
    <TouchableOpacity onPress={handleCardPress}>
    <View style={styles.container}>
      <View style={styles.image} >
        <Image source={product.image} />
      </View>
      <View style={styles.detailsContainer}>
        <View>
          <Text style={styles.name}>{name}</Text>
        <Text style={styles.quantity}>{quantity}</Text>
        </View>
        <View style={styles.priceContainer}>
          <Text style={styles.price}>${price}</Text>
          <TouchableOpacity onPress={onAddPress} style={styles.addButton}>
            <MaterialIcons name="add" size={24} color="white" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
    </TouchableOpacity>
  );
};

// define your styles

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 20,
    overflow: "hidden",
    margin: 10,
    width:173,
    height:249,
    alignItems:'center',
    justifyContent:'space-evenly'
   
  },
  image: {
    alignItems:'center',
    justifyContent:'center',
    marginTop:10,
    width: 100,
    height: 100,
    resizeMode: "cover",
   
  },
  detailsContainer: {
    flex: 1,
    alignItems:'center',
    justifyContent:'center',
    width:'100%'
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
    
  },
  quantity: {
    fontSize: 14,
    paddingRight:60,
    paddingTop:5
   
  },
  price: {
    fontSize: 18,
    fontWeight:'700'
   
  },
  priceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingTop: 20,
    width:'100%'
  },
  addButton: {
    backgroundColor: Colors.primary,
    padding: 10,
    borderRadius: 17,
    alignItems: "center",
    width:50
  },
});

//make this component available to the app
export default Card;
