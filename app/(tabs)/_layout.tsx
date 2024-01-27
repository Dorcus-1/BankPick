//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Tabs } from 'expo-router';
import Colors from '@/constants/Colors';
import { Entypo } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';



// create a component
const _layout = () => {
    return (
        <Tabs
        screenOptions={{
            tabBarActiveTintColor:Colors.dark
        }}>
            <Tabs.Screen name="home"
            options={{
                tabBarLabel:"Shop",
                tabBarIcon:({color,size})=>(
                    <Entypo name="shop" size={28} color="#53B175" />
                )
            }}
            />
             <Tabs.Screen name="explore"
            options={{
                tabBarLabel:"Explore",
                tabBarIcon:({color,size})=>(
                    <MaterialIcons name="manage-search" size={28} color="#53B175" />
                )
            }}
            />
            <Tabs.Screen name="cart"
            options={{
                tabBarLabel:"Cart",
                tabBarIcon:({color,size})=>(
                    <MaterialIcons name="shopping-cart" size={28} color="black" />
                )
            }}
            />
            
             <Tabs.Screen name="favorites"
            options={{
                tabBarLabel:"Favorites",
                tabBarIcon:({color,size})=>(
                    <MaterialIcons name="favorite-border" size={24} color="black" />
                )
            }}
                     
            />
             <Tabs.Screen name="account"
            options={{
                tabBarLabel:"Account",
                tabBarIcon:({color,size})=>(
                    <MaterialIcons name="account-circle" size={28} color="black" />
                )
            }}
            />

        </Tabs>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
});

//make this component available to the app
export default _layout;
