import React from "react";
import { View, StyleSheet, Text, StatusBar, Image } from "react-native";

const SplashScreen = ({ navigation }) => {
  // setTimeout(() => {
  //   navigation.replace("LoginPage");
  // }, 3000);
  return (
    <View
      style={{
        flex: 2,
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
      <Text style={{ fontSize: 22, fontWeight: 900, color: "#003565" }}>
        SMART PARKING SYSTEM
      </Text>
      <Text style={{ fontSize: 18, fontWeight: 300, color: "black" }}>
        ~ by 1% Club ~
      </Text>
    </View>
  );
};

export default SplashScreen;

const style = StyleSheet.create({});
