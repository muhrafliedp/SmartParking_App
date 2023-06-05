import React from "react";
import { View, StyleSheet, Text, StatusBar, Image } from "react-native";

const SplashScreen = ({ navigation }) => {
  console.log("splashScreen rendered");
  setTimeout(() => {
    navigation.replace("LoginPage");
  }, 3000);
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="light-content"
        hidden={false}
        backgroundColor="#465bd8"
      />
      <Image
        source={require("../assets/images/Logo.png")}
        style={styles.image}
      />
      <Text style={styles.textTitle}>SMART PARKING SYSTEM</Text>
      <Text style={styles.textSubtitle}>~ by 1% Club ~</Text>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 2,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  image: { width: 200, height: 200 },
  textTitle: { fontSize: 22, fontWeight: 900, color: "#003565" },
  textSubtitle: { fontSize: 18, fontWeight: 300, color: "black" },
});
