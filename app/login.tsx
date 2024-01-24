//import liraries
import { Link } from 'expo-router';
import React, { Component } from 'react';
import { View, Text, StyleSheet,Button } from 'react-native';

// create a component
const L = () => {
    return (
        <View style={styles.container}>
            <Text>Login
            </Text>
            <Link href= "./home" asChild>
                <Button title="Go to tabs"/>
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
        backgroundColor: '#2c3e50',
    },
});

//make this component available to the app
export default L;
