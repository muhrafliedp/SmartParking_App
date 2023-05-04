import React, { useEffect, useState } from "react";
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

const SignUpScreen = ({ navigation }) => {
  const [idNumber, setIdNumber] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [civitasType, setCivitasType] = useState("");

  // const [isError, setIsError] = useState("");

  const [showPassword, setShowPassword] = useState(true);

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  // Belum ditambahin validasi idNumber yg sudah ada dari DB (fungsinya bisa samain dari LoginPage)
  const handleSignUp = () => {
    // Authenticate user's credentials here
    // If valid, navigate to main app screen
    if (idNumber.length == 0 || username.length == 0 || password.length == 0) {
      alert("Silakan masukan data dengan lengkap!");
    } else {
      fetch(
        "https://1parkingclub.000webhostapp.com/getData.php?op=createUser",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body:
            "id_number=" +
            idNumber +
            "&username=" +
            username +
            "&password=" +
            password +
            "&civitas_type=" +
            civitasType,
        }
      )
        .then((response) => response.json())
        .then((json) => {
          setIdNumber("");
          setUsername("");
          setPassword("");
          setConfirmPassword("");
          setCivitasType("");
        })
        .then(alert("Pengguna berhasil terdaftarkan, silakan Login!"))
        .catch((error) => {
          alert("Error" + error);
        });
      navigation.navigate("LoginPage");
    }
  };

  // const checkValidation = () => {
  //   setConfirmPassword(confirmPassword);
  //   if (password != confirmPassword) {
  //     setIsError(
  //       "Masukan konfirmasi password harus sama dengan masukan password!"
  //     );
  //   } else {
  //     setIsError("");
  //   }
  // };

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
                setUsername(text);
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
                setConfirmPassword(text);
                // checkValidation();
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
          {/* <View>
            <Text style={{ color: "red" }}>{isError}</Text>
          </View> */}

          <View style={{ marginTop: 20 }}>
            <Text style={{ fontSize: 15, marginBottom: 15 }}>
              Jenis Civitas Kampus:{" "}
            </Text>

            <RadioButtonGroup
              containerStyle={{ marginBottom: 20 }}
              selected={civitasType}
              onSelected={(value) => setCivitasType(value)}
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
                setIdNumber(text);
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
    alignItems: "center",
    backgroundColor: "#ededed",
    borderRadius: 10,
    height: 55,
    paddingLeft: 20,
    marginTop: 15,
  },
});
