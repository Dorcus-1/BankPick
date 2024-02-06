//import liraries
import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  TouchableOpacity,
} from "react-native";
import { useRoute } from "@react-navigation/native";
import { Stack, useRouter, useNavigation } from "expo-router";
// import { BlurView } from "@react-native-community/blur";
import { Ionicons } from "@expo/vector-icons";
import { defaultStyles } from "@/constants/Styles";
import { useLayoutEffect } from "react";
import Colors from "@/constants/Colors";
import { BlurView } from "expo-blur";
import { LinearGradient } from "expo-linear-gradient";

// create a component
const ProductDetail = () => {
  const route = useRoute();
  const navigation = useNavigation();

  // const router = useRouter();
  // router.push('/(tabs)/home')
  const { product } = route.params;
  return (
    <View style={styles.container}>
      <View>
        <Stack.Screen
          options={{
            header: () => (
              <View style={styles.blur}>
                <View style={defaultStyles.view}>
                  <TouchableOpacity
                    style={styles.roundButton}
                    onPress={() => navigation.goBack()}
                  >
                    <Ionicons name="chevron-back" size={24} color={"#000"} />
                  </TouchableOpacity>
                  <Ionicons name="download-outline" size={24} color="black" />
                </View>
                <ImageBackground source={product.image} style={styles.blurImg}>
                  <BlurView intensity={100} style={styles.blurCont}>
                    <LinearGradient
                      colors={["rgba(255, 255, 255, 0)", "#F2F3F2"]}
                      style={StyleSheet.absoluteFill}
                    />
                  </BlurView>
                  <Image source={product.image} style={styles.image}></Image>
                </ImageBackground>
              </View>
            ),
          }}
        />
      </View>
    </View>
  );
};

// define your styles

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  blur: {
    height: 372,
    width: "100%",
    backgroundColor: "#F2F3F2",
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  blurContaine: {
    height: 172,
    width: 295,
    backgroundColor: "pink",
  },
  roundButton: {
    width: 40,
    height: 40,
    borderRadius: 50,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    color: Colors.primary,
  },
  blurImg: {
    height: 162,
    width: 255,
    backgroundColor: "#F2F3F2",
    alignItems: "center",
    justifyContent: "center",
  },
  blurCont: {
    position: "absolute",
    width: 299,
    height: 250,
    top: -50,
  },
  linearGradient: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  image:{
   
  
  }
});

//make this component available to the app
export default ProductDetail;
