//import liraries
import { useRouter } from 'expo-router';
import React, { Component } from 'react';
import { View, Text, StyleSheet,Button } from 'react-native';

// create a component
const Home = () => {

    const router=useRouter();
    return (
        <View style={styles.container}>
            <Text>Home</Text>
            <Button title="Back" onPress={()=>router.back()}/>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
});

//make this component available to the app
export default Home;
