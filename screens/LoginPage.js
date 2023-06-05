import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import AsyncStorage from "@react-native-async-storage/async-storage";

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [idNumber, setIdNumber] = useState("");
  const [civitasType, setCivitasType] = useState("");
  const [vehicleNumber, setVehicleNumber] = useState("");

  const [showPassword, setShowPassword] = useState(true);

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  const saveUserInfo = async (userInfo) => {
    try {
      await AsyncStorage.setItem("userInfo", JSON.stringify(userInfo));
      console.log("Informasi pengguna disimpan di AsyncStorage.");
    } catch (error) {
      console.log("Gagal menyimpan informasi pengguna di AsyncStorage:", error);
    }
  };

  async function handleLogin() {
    var valid = false;
    if (username == "" || password == "") {
      alert("Masukan username dan password terlebih dahulu!");
    } else {
      const [response1, response2] = await Promise.all([
        fetch(
          "https://newparkingclub.000webhostapp.com/getData.php/?op=getUser&username=" +
            username +
            "&password=" +
            password
        ),
        fetch(
          "https://newparkingclub.000webhostapp.com/getData.php/?op=getDataUser&username=" +
            username +
            "&password=" +
            password
        ),
      ]);
      const json1 = await response1.json();
      const json2 = await response2.json();
      valid = json1.data.result;
      const idNumber = json2.data.result[0].id_number;
      const civitasType = json2.data.result[0].civitas_type;
      const vehicleNumber = json2.data.result[0].vehicle_number;
      setIdNumber(idNumber);
      setCivitasType(civitasType);
      setVehicleNumber(vehicleNumber);

      if (valid) {
        const userInfo = {
          idNumber,
          username,
          password,
          civitasType,
          vehicleNumber,
        };
        saveUserInfo(userInfo);
        alert("Akun pengguna berhasil Login!");
        navigation.navigate("HomeStack");
      } else {
        alert("Username dan Password yang Anda masukkan SALAH!");
      }
    }
  }

  const handleSignUp = () => {
    navigation.navigate("SignUpPage");
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle={"dark-content"} backgroundColor="#fff" />
      <View style={styles.viewContent}>
        <View style={styles.viewTopContent}>
          <Image
            source={require("../assets/images/Logo.png")}
            style={styles.image}
          />
          <Text style={styles.textTitle}>SMART PARKING SYSTEM</Text>
          <Text style={styles.textMasuk}>Masuk</Text>
        </View>

        <View style={styles.viewInputBox}>
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
                setUsername(text);
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
                setPassword(text);
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

      <View style={styles.viewButton}>
        <TouchableOpacity
          onPress={handleLogin}
          style={styles.touchableOpacityLogin}
        >
          <Text style={styles.textButtonLogin}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={handleSignUp}
          style={styles.touchableOpacityRegister}
        >
          <Text style={styles.textButtonRegister}>Register</Text>
        </TouchableOpacity>
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
    alignItems: "center",
    backgroundColor: "#ededed",
    borderRadius: 10,
    height: 60,
    paddingLeft: 20,
    marginBottom: 15,
  },
  container: { flex: 1, backgroundColor: "#", flexDirection: "column" },
  viewContent: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#fff",
    paddingVertical: "20%",
    paddingHorizontal: "3%",
  },
  viewTopContent: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  image: { width: 120, height: 120, marginBottom: 10 },
  textTitle: { fontSize: 22, fontWeight: 900, color: "#003565" },
  textMasuk: {
    marginTop: 50,
    fontSize: 25,
    color: "#000000",
  },
  viewInputBox: {
    flexDirection: "column",
    paddingTop: 20,
    paddingHorizontal: "15%",
  },
  viewButton: {
    flex: 0.2,
    flexDirection: "column",
    backgroundColor: "#ddd",
    paddingHorizontal: "15%",
    paddingTop: 20,
    alignItems: "center",
  },
  touchableOpacityLogin: {
    backgroundColor: "#003565",
    width: "100%",
    padding: 8,
    borderRadius: 10,
    alignItems: "center",
  },
  textButtonLogin: { color: "white", fontWeight: 700, fontSize: 16 },
  touchableOpacityRegister: {
    backgroundColor: "white",
    width: "100%",
    padding: 8,
    borderRadius: 10,
    marginTop: 10,
    borderColor: "#003565",
    borderWidth: 2,
    alignItems: "center",
  },
  textButtonRegister: { color: "#003565", fontWeight: 700, fontSize: 16 },
});
