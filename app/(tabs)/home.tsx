//import liraries
import ExploreHeader from "@/components/headerComponent";
import { Stack, useRouter } from "expo-router";
import React, { Component } from "react";
import { useRef, useState } from 'react';
import { View, Text, StyleSheet, Button, ScrollView,Image,FlatList } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import Card from "@/components/shopCard";
import Colors from "@/constants/Colors";


// create a component
const Home = () => {
  const router = useRouter();
  const [exclusiveProducts, setExclusiveProducts] = useState([
    { id: '1', name: 'Red Apples', quantity: "7pc,priceg", price: 10, image: require('assets/images/groceries/apple.png') },
    { id: '2', name: 'Organic bananas', quantity: "7pc,priceg", price: 20, image: require('assets/images/groceries/banana.png') },
    { id: '3', name: 'Pell pepper red', quantity: "7pc,priceg", price: 10, image: require('assets/images/groceries/pepper.png') },

  ]);

  const [bestSellingProducts, setBestSellingProducts] = useState([
    { id: '1', name: 'Pell pepper red', quantity: "7pc,priceg", price: 10, image: require('assets/images/groceries/pepper.png') },
    { id: '2', name: 'Ginger', quantity: "250gm,priceg", price: 20, image: require('assets/images/groceries/ginger.png') },
    { id: '3', name: 'Pell pepper red', quantity: "7pc,priceg", price: 10, image: require('assets/images/groceries/pepper.png') },

   ]);

   const groceries = [
    { id: '1', text: 'Pulse' },
    { id: '2', text: 'Rice' },
   
  ];

  const handleAddPress = () => {
    // Handle adding the product to the cart or perform other actions
    console.log(`Product with ID added`);
  };

  const scrollRef = useRef<ScrollView>(null);
  return (
    <ScrollView>
        <View style={styles.main}>
        <View style={styles.container}>
        <Stack.Screen
          options={{
            header: () => <ExploreHeader />,
          }}
        />
      </View>
      
      <View style={styles.banner}>
     <Image 
      source={require("assets/images/banner.png")}
     />
      </View>
      <View >
        <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',width:380, marginTop:20}}>
            <Text style={styles.text}>Exclusive Offer</Text>
            <Text style={{color:Colors.primary}}>See all</Text>
        </View>
    
      <FlatList 
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          flexDirection: 'row',
         justifyContent:'space-around',
         paddingLeft:17
        
        
        }}
        data={exclusiveProducts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Card
            product={item}
            onAddPress={handleAddPress}
          />
        )}
      />
    </View>
        
    </View> 
    <View >
        <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',width:380, marginTop:20}}>
            <Text style={styles.text}>Best Selling</Text>
            <Text style={{color:Colors.primary}}>See all</Text>
        </View>
    
      <FlatList 
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          flexDirection: 'row',
         justifyContent:'space-around',
         paddingLeft:17
        
        
        }}
        data={bestSellingProducts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Card
            product={item}
            onAddPress={handleAddPress}
          />
        )}
      />
    </View>
    
    <View >
        <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',width:380, marginTop:20}}>
            <Text style={styles.text}>Groceries</Text>
            <Text style={{color:Colors.primary}}>See all</Text>
        </View>
        <ScrollView horizontal style={styles.container2} showsHorizontalScrollIndicator={false}>
      {/* First horizontally scrolling section */}
      <View style={styles.section1}>
      <Image 
      source={require("assets/images/groceries/pulse.png")}
     />
     <Text style={styles.sectionText}>Pulse</Text>
      </View>

      {/* Second horizontally scrolling section */}
      <View style={styles.section2}>
      <Image 
      source={require("assets/images/groceries/rice.png")}
     />
     <Text style={styles.sectionText}>Rice</Text>
      </View>
    </ScrollView>
      <FlatList 
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          flexDirection: 'row',
         justifyContent:'space-around',
         paddingLeft:17
        
        
        }}
        data={bestSellingProducts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Card
            product={item}
            onAddPress={handleAddPress}
          />
        )}
      />
    </View>
    </ScrollView>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",

  },
  container2: {
    flex: 1,
    flexDirection: 'row',
  },
  main:{
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    
   
  },
  banner:{
    marginTop:30,

  },
  text:{
    fontSize:24,
    fontWeight:'500',
    paddingLeft:30
    
  },
  flatlist:{
    flexDirection:'row',
    backgroundColor:'pink'
  },
  section1:{
      backgroundColor:'rgba(248, 164, 76, 0.15)',
      flexDirection:'row',
      justifyContent:'space-evenly',
      alignItems:'center',
      width:248,
      height:105,
      borderRadius:20,
      marginLeft:30
      
  },
  section2:{
    backgroundColor:'rgba(83, 177, 117, 0.15)',
    flexDirection:'row',
    justifyContent:'space-evenly',
    alignItems:'center',
    width:248,
    height:105,
    borderRadius:20,
    marginLeft:30
    
},
  sectionText:{
    fontSize:20,
    color:'#3E423F',
    fontWeight:'500'
  }
});

//make this component available to the app
export default Home;
