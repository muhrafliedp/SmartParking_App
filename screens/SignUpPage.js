import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import RadioButtonGroup, { RadioButtonItem } from "expo-radio-button";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import * as Font from "expo-font";
import { KeyboardAvoidingView } from "react-native-web";

const SignUpScreen = ({ navigation }) => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    confirmPassword: "",
    civitas_type: "",
    id_number: "",
  });
  const [current, setCurrent] = useState("test");
  const [isError, setIsError] = useState("");

  const [showPassword, setShowPassword] = useState(true);

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSignUp = () => {
    // Authenticate user's credentials here
    // If valid, navigate to main app screen
    navigation.navigate("LoginPage");
  };

  // auth
  //   .createUserWithusernameAndPassword(username, password)
  //   .then((userCredentials) => {
  //     const user = userCredentials.user;
  //     console.log(user.username);
  //   })
  //   .catch((error) => alert(error.message));

  const checkValidation = (e) => {
    setFormData(confirmPassword);
    if (password != confirmPassword) {
      setIsError(
        "Masukan konfirmasi password harus sama dengan masukan password!"
      );
    } else {
      setIsError("");
    }
  };

  return (
    <View style={{ flex: 1, backgroundColor: "#", flexDirection: "column" }}>
      <StatusBar barStyle={"dark-content"} backgroundColor="#fff" />
      <View
        style={{
          flex: 1,
          flexDirection: "column",
          backgroundColor: "#fff",
          paddingVertical: "10%",
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
          <Text
            style={{
              fontSize: 30,
              color: "#000000",
            }}
          >
            Register Akun
          </Text>
        </View>

        <View
          style={{
            flexDirection: "column",
            paddingTop: 10,
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
            <MaterialCommunityIcons name="lock" color={"#818181"} size={26} />
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

          <View style={styles.inputBox}>
            <MaterialCommunityIcons
              name="lock-check"
              color={"#818181"}
              size={26}
            />
            <TextInput
              style={styles.input}
              placeholder="Konfirmasi Password"
              secureTextEntry={showPassword}
              placeholderTextColor="#818181"
              onChangeText={(text) => {
                setFormData((prevState) => ({
                  prevState,
                  confirmPassword: text,
                }));
                (e) => checkValidation(e);
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

          <View style={{ marginTop: 20 }}>
            <Text style={{ fontSize: 15, marginBottom: 15 }}>
              Jenis Civitas Kampus:{" "}
            </Text>
            <RadioButtonGroup
              containerStyle={{ marginBottom: 20 }}
              selected={current}
              onSelected={(value) => setCurrent(value)}
              radioBackground="#003565"
            >
              <RadioButtonItem
                value="Dosen"
                label={
                  <Text
                    style={{ marginBottom: 15, marginLeft: 15, fontSize: 15 }}
                  >
                    Dosen
                  </Text>
                }
                style={{ marginBottom: 15 }}
              />
              <RadioButtonItem
                value="Mahasiswa"
                label={
                  <Text
                    style={{ marginBottom: 15, marginLeft: 15, fontSize: 15 }}
                  >
                    Mahasiswa
                  </Text>
                }
                style={{ marginBottom: 15 }}
              />
              <RadioButtonItem
                value="Lainnya"
                label={
                  <Text style={{ marginLeft: 15, fontSize: 15 }}>Lainnya</Text>
                }
              />
            </RadioButtonGroup>
          </View>

          <View style={styles.inputBox}>
            <MaterialCommunityIcons
              name="card-account-details-outline"
              color={"#818181"}
              size={26}
            />
            <TextInput
              style={styles.input}
              placeholder="Masukan NIP/NIM Anda"
              placeholderTextColor="#818181"
              onChangeText={(text) => {
                setFormData((prevState) => ({ prevState, id_number: text }));
              }}
            />
          </View>
        </View>
      </View>
      <View
        style={{
          flex: 0.1,
          flexDirection: "column",
          backgroundColor: "#ddd",
          paddingHorizontal: "15%",
          paddingTop: 15,
          alignItems: "center",
        }}
      >
        <TouchableOpacity
          onPress={handleSignUp}
          style={{
            backgroundColor: "#003565",
            width: "100%",
            padding: 8,
            borderRadius: 10,
            alignItems: "center",
          }}
        >
          <Text style={{ color: "white", fontWeight: 700, fontSize: 16 }}>
            Register
          </Text>
        </TouchableOpacity>

        {/* <TouchableOpacity
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
        </TouchableOpacity> */}
        {/* <Button title="Login" color="#003565" onPress={handleLogin} />
        <Button title="Register" color="grey" onPress={handleRegister} /> */}
      </View>
    </View>
  );
};

export default SignUpScreen;

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
    height: 55,
    paddingLeft: 20,
    marginTop: 15,
  },
});
