//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet,Button,ImageBackground,TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';
import { defaultStyles } from '@/constants/Styles';


// create a component
const Page = () => {
    return (
        <View style={styles.container}>
             <ImageBackground
        source={require('../assets/images/delguy.png')}
        style={defaultStyles.backgroundImage}
      >
        <Text style={defaultStyles.text}>Welcome {'\n'} to our store</Text>
        <Text style={defaultStyles.text2}>Get your groceries as fast as you can</Text>

        <TouchableOpacity style={defaultStyles.btn}>
        <Link href="./register" asChild>
           <Text style={defaultStyles.btnText} >Get started</Text>
        </Link>
        </TouchableOpacity>
     
      </ImageBackground>

        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
       
        
        
    },
});

//make this component available to the app
export default Page;
