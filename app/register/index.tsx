//import liraries
import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  ImageBackground,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { Link } from "expo-router";
import { defaultStyles } from "@/constants/Styles";
import Svg, { Circle, Rect } from "react-native-svg";
import Colors from "@/constants/Colors";

// create a component
const Register = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../assets/images/GradientScreen (1).png")}
        style={defaultStyles.backgroundImage}
      >
        <View style={styles.firstView}>
          <Image source={require("assets/images/colorLogo.png")} />
        </View>
        <View style={styles.middleView}>
          <Text style={styles.signText}>Sign up</Text>
          <Text style={styles.suText}>Enter your credential to continue</Text>
          <View style={styles.viewInput}>
            <Text style={styles.text}>Username</Text>
            <TextInput style={defaultStyles.inputField} />
          </View>
          <View style={styles.viewInput}>
            <Text style={styles.text}>Email</Text>
            <TextInput style={defaultStyles.inputField} />
          </View>
          <View style={styles.viewInput}>
            <Text style={styles.text}>Password</Text>
            <TextInput style={defaultStyles.inputField} />
          </View>
        </View>
        <View style={styles.downView}>
          <Text style={styles.suText}>
            By continuing you agree to our
            <Text style={styles.textGreen}> Terms of Service</Text> and
            <Text style={styles.textGreen}> Privacy Policy.</Text>
          </Text>
          <TouchableOpacity style={styles.btn}>
            <Text style={defaultStyles.btnText}>Sign Up</Text>
          </TouchableOpacity>

          <Text style={styles.hasAccount}>
            Already have and account?
            <TouchableOpacity>
               <Link href="../login" asChild>
              <Text style={styles.textGreen}> Sign In</Text>
            </Link>
            </TouchableOpacity>
           
          </Text>
        </View>
      </ImageBackground>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'white'
  },
  text: {
    color: "#7C7C7C",
    fontWeight: "500",
    fontSize: 16,
  },

  viewInput: {
    paddingTop: 25,
  },
  signText: {
    fontSize: 26,
    fontWeight: "600",
  },
  suText: {
    color: "#7C7C7C",
    fontSize: 16,
    paddingTop: 30,
  },
  btn: {
    height: 60,
    width: 380,
    backgroundColor: Colors.primary,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  textGreen: {
    color: Colors.primary,
  },
  hasAccount: {
    paddingTop: 20,
    textAlign: "center",
    display:'flex',
    justifyContent:'center',
    alignItems:'center'
  },
  middleView: {
    paddingTop: 100,
  },
  downView: {
    paddingTop: 0,
  },
  firstView: {
    paddingTop: 20,
  },
});

//make this component available to the app
export default Register;
