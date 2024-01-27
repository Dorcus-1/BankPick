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
  const [products, setProducts] = useState([
    { id: '1', name: 'Product 1', quantity: 5, price: 10, image: '../assets/images/groceries/apple.png' },
    { id: '2', name: 'Product 2', quantity: 3, price: 20, image: '../assets/images/groceries/banana.png' },
  ]);
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
        <View style={{display:'flex',flexDirection:'row',justifyContent:'space-between',alignItems:'center',width:380, marginTop:20}}>
            <Text style={styles.text}>Exclusive Offer</Text>
            <Text style={{color:Colors.primary}}>See all</Text>
        </View>
        
        <ScrollView
         ref={scrollRef}
         showsHorizontalScrollIndicator={false}
         contentContainerStyle={{
            alignItems: 'center',
            gap: 20,
            paddingHorizontal: 16,
          }}
        >
        <View>
      <FlatList
        data={products}
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
      </View>
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
    color:'#181725',
    // marginRight:200,
    // padding:30
    
  }
});

//make this component available to the app
export default Home;
