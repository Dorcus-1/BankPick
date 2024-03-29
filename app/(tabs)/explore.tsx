//import liraries
import React, { Component } from 'react';
import { useRouter } from 'expo-router';

import { View, Text, StyleSheet ,Button} from 'react-native';

// create a component
const Explore = () => {
    const router= useRouter();

    return (
        <View style={styles.container}>
            <Text>Explore</Text>
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
export default Explore;
