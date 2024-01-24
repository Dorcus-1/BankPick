//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet,Button } from 'react-native';
import { Link } from 'expo-router';

// create a component
const Page2 = () => {
    return (
        <View style={styles.container}>
            <Text>Page2 hh</Text>
            <Link href= "./onboarding3" asChild>
                <Button title="Next"/>
            </Link>
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
export default Page2;
