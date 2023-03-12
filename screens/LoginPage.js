import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  StatusBar,
} from "react-native";
import * as Font from "expo-font";

const LoginScreen = ({ navigation }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleLogin = () => {
    // Authenticate user's credentials here
    // If valid, navigate to main app screen
    navigation.navigate("DashboardPage");
  };

  return (
    <View style={{ flex: 1, backgroundColor: "#", flexDirection: "column" }}>
      <StatusBar barStyle={"dark-content"} backgroundColor="#fff" />
      <View
        style={{
          flex: 1,
          flexDirection: "column",
          backgroundColor: "#fff",
          paddingVertical: "50%",
          paddingHorizontal: "3%",
        }}
      >
        <View
          style={{
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontSize: 30,
              color: "#000000",
            }}
          >
            Masuk
          </Text>
        </View>

        <View
          style={{
            flexDirection: "column",
            paddingTop: 50,
            paddingHorizontal: "15%",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#ededed",
              borderRadius: 10,
              height: 60,
              paddingLeft: 20,
            }}
          >
            <TextInput
              style={styles.input}
              placeholder="Masukan Username"
              placeholderTextColor="#818181"
              onChangeText={(text) => {
                setFormData((prevState) => ({ prevState, email: text }));
              }}
            />
          </View>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#ededed",
              borderRadius: 10,
              height: 60,
              paddingLeft: 20,
              marginTop: 20,
            }}
          >
            <TextInput
              style={styles.input}
              placeholder="Masukan Password"
              secureTextEntry={true}
              placeholderTextColor="#818181"
              onChangeText={(text) => {
                setFormData((prevState) => ({ prevState, password: text }));
              }}
            />
          </View>
        </View>
      </View>
      <View
        style={{
          flex: 1,
          flexDirection: "column",
          backgroundColor: "#ddd",
          paddingHorizontal: "15%",
          paddingTop: 50,
        }}
      >
        <Button title="Login" color="#003565" onPress={handleLogin} />
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  input: {
    position: "relative",
    height: "100%",
    width: "90%",
    paddingLeft: 20,
  },
});
