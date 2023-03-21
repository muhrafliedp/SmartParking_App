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
    email: "",
    password: "",
  });

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
    //   .createUserWithEmailAndPassword(email, password)
    //   .then((userCredentials) => {
    //     const user = userCredentials.user;
    //     console.log(user.email);
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
          paddingVertical: "25%",
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
            style={{ width: 120, height: 120, marginBottom: 20 }}
          />
          <Text
            style={{
              fontSize: 30,
              color: "#000000",
            }}
          >
            Halaman Login
          </Text>
        </View>

        <View
          style={{
            flexDirection: "column",
            paddingTop: 50,
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
                setFormData((prevState) => ({ prevState, email: text }));
              }}
            />
          </View>

          <View style={styles.inputBox}>
            <MaterialCommunityIcons name="lock" color={"#818181"} size={26} />
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
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ededed",
    borderRadius: 10,
    height: 60,
    paddingLeft: 20,
    marginBottom: 15,
  },
});
