//import liraries
import React, { Component } from 'react';
import {  View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import Colors from '@/constants/Colors';


// create a component
const Card= ({ product, onAddPress }) => {


    const { name, quantity, price, image } = product;
    return (
        <View style={styles.container}>
     <Image source={{ uri: image }} style={styles.image} />
      <View style={styles.detailsContainer}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.quantity}>{quantity}</Text>
        <Text style={styles.price}>${price}</Text>
        <TouchableOpacity onPress={onAddPress} style={styles.addButton}>
        <MaterialIcons name="add" size={24} color="white" />
        </TouchableOpacity>
      </View>
        </View>
    );
};

// define your styles

const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      borderWidth: 1,
      borderColor: '#ddd',
      borderRadius: 8,
      overflow: 'hidden',
      margin: 10,
      width: 500,
      height: 200,
    },
    image: {
      width: 100,
      height: 100,
      resizeMode: 'cover',
    },
    detailsContainer: {
      flex: 1,
      padding: 10,
    },
    name: {
      fontSize: 16,
      fontWeight: 'bold',
      marginBottom: 5,
    },
    quantity: {
      fontSize: 14,
      marginBottom: 5,
    },
    price: {
      fontSize: 14,
      marginBottom: 5,
    },
    addButton: {
      backgroundColor: Colors.primary,
      padding: 8,
      borderRadius: 5,
      alignItems: 'center',
    },
  });

//make this component available to the app
export default Card
;
