import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  Button,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import * as Font from "expo-font";
import { KeyboardAvoidingView } from "react-native-web";

const LoginScreen = ({ navigation }) => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(true);

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = () => {
    // Authenticate user's credentials here
    // If valid, navigate to main app screen
    navigation.navigate("HomeStack");
  };

  const handleSignUp = () => {
    // Authenticate user's credentials here
    // If valid, navigate to main app screen
    navigation.navigate("SignUpPage");

    // auth
    //   .createUserWithusernameAndPassword(username, password)
    //   .then((userCredentials) => {
    //     const user = userCredentials.user;
    //     console.log(user.username);
    //   })
    //   .catch((error) => alert(error.message));
  };

  return (
    <View style={{ flex: 1, backgroundColor: "#", flexDirection: "column" }}>
      <StatusBar barStyle={"dark-content"} backgroundColor="#fff" />
      <View
        style={{
          flex: 1,
          flexDirection: "column",
          backgroundColor: "#fff",
          paddingVertical: "15%",
          paddingHorizontal: "3%",
        }}
      >
        <View
          style={{
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            source={require("../assets/images/Logo.png")}
            style={{ width: 120, height: 120, marginBottom: 10 }}
          />
          <Text style={{ fontSize: 22, fontWeight: 900, color: "#003565" }}>
            SMART PARKING SYSTEM
          </Text>
          <Text
            style={{
              marginTop: 50,
              fontSize: 25,
              color: "#000000",
            }}
          >
            Masuk
          </Text>
        </View>

        <View
          style={{
            flexDirection: "column",
            paddingTop: 20,
            paddingHorizontal: "15%",
          }}
        >
          <View style={styles.inputBox}>
            <MaterialCommunityIcons
              name="account"
              color={"#818181"}
              size={26}
            />
            <TextInput
              style={styles.input}
              placeholder="Masukan Username"
              placeholderTextColor="#818181"
              onChangeText={(text) => {
                setFormData((prevState) => ({ prevState, username: text }));
              }}
            />
          </View>

          <View style={styles.inputBox}>
            <MaterialCommunityIcons
              name="lock-open"
              color={"#818181"}
              size={26}
            />
            <TextInput
              style={styles.input}
              placeholder="Masukan Password"
              secureTextEntry={showPassword}
              placeholderTextColor="#818181"
              onChangeText={(text) => {
                setFormData((prevState) => ({ prevState, password: text }));
              }}
            />
            <TouchableOpacity
              style={{ marginLeft: -40 }}
              onPress={togglePassword}
            >
              <MaterialCommunityIcons
                name={showPassword ? "eye" : "eye-off"}
                color={"#818181"}
                size={26}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View
        style={{
          flex: 0.2,
          flexDirection: "column",
          backgroundColor: "#ddd",
          paddingHorizontal: "15%",
          paddingTop: 20,
          alignItems: "center",
        }}
      >
        <TouchableOpacity
          onPress={handleLogin}
          style={{
            backgroundColor: "#003565",
            width: "100%",
            padding: 8,
            borderRadius: 10,
            alignItems: "center",
          }}
        >
          <Text style={{ color: "white", fontWeight: 700, fontSize: 16 }}>
            Login
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={handleSignUp}
          style={{
            backgroundColor: "white",
            width: "100%",
            padding: 8,
            borderRadius: 10,
            marginTop: 10,
            borderColor: "#003565",
            borderWidth: 2,
            alignItems: "center",
          }}
        >
          <Text style={{ color: "#003565", fontWeight: 700, fontSize: 16 }}>
            Register
          </Text>
        </TouchableOpacity>
        {/* <Button title="Login" color="#003565" onPress={handleLogin} />
        <Button title="Register" color="grey" onPress={handleRegister} /> */}
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
  inputBox: {
    flexDirection: "row",
    // justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ededed",
    borderRadius: 10,
    height: 60,
    paddingLeft: 20,
    marginBottom: 15,
  },
});
