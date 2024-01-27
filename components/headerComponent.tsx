//import liraries
import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import Colors from "@/constants/Colors";

// create a component
const ExploreHeader = () => {
  return (
    <SafeAreaView>
      <View
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "row",
        }}
      >
        <Image
          source={require("../assets/images/colorLogo.png")}
          style={styles.logo}
        />
      </View>
      <View style={styles.header}>
        <MaterialIcons name="location-on" size={24} color="#4C4F4D" />
        <Text style={{ fontSize: 18, fontWeight: "500", color: "#4C4F4D" }}>
          Kigali, Rwanda
        </Text>
      </View>
      <View style={styles.searchContainer}>
        <TouchableOpacity style={styles.searchButton}>
          <Ionicons name="search" size={24} color="#181725" />
        </TouchableOpacity>
        <TextInput
          style={styles.searchInput}
          placeholder="Search..."
          value=""
        />
      </View>

      
    </SafeAreaView>
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
  logo: {
    width: 30, // Set the width as needed
    height: 30, // Set the height as needed
    resizeMode: "contain",
    marginTop: 30,
  },
  header: {
    marginTop: 10,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  searchContainer: {
    display:'flex',
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#ecf0f1", // Background color of the search bar container
    padding: 8,
    borderRadius: 5,
    width: 380,
    marginLeft:20,
    marginTop:10,
  },
  searchInput: {
    flex: 1,
    paddingLeft: 8,
    fontSize: 16,
  },
  searchButton: {
    padding: 8,
    borderRadius: 5,
    marginLeft: 8,
  },
});

//make this component available to the app
export default ExploreHeader;
