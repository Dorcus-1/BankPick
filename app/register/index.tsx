//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet,Button } from 'react-native';
import { Link } from 'expo-router';

// create a component
const Register = () => {
    return (
        <View style={styles.container}>
        
            {/* <Link href="../login" asChild>
            <Button title= "Login"/>
            </Link> */}
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
    
    },
});

//make this component available to the app
export default Register;
