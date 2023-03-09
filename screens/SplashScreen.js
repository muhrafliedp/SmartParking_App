import React from "react";
import { View, StyleSheet, Text, StatusBar, Image } from "react-native";

const SplashScreen = ({ navigation }) => {
  // setTimeout(() => {
  //   navigation.replace("LoginPage");
  // }, 3000);
  return (
    <View
      style={{
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff",
      }}
    >
      <StatusBar
        barStyle="light-content"
        hidden={false}
        backgroundColor="#465bd8"
      />
      <Image
        source={require("../assets/images/Logo.png")}
        style={{ width: 200, height: 200 }}
      />
      <Text style={{ fontSize: 25, color: "#465bd8" }}>
        Smart Parking System
      </Text>
    </View>
  );
};

export default SplashScreen;

const style = StyleSheet.create({});
