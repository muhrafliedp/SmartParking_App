import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import RadioButtonGroup, { RadioButtonItem } from "expo-radio-button";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const SignUpPage = ({ navigation }) => {
  const [idNumber, setIdNumber] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [civitasType, setCivitasType] = useState("");
  const [vehicleNumber, setVehicleNumber] = useState("");

  const [showPassword, setShowPassword] = useState(true);

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSignUp = () => {
    if (
      idNumber.length == 0 ||
      username.length == 0 ||
      password.length == 0 ||
      vehicleNumber.length == 0
    ) {
      alert("Silakan masukan data dengan lengkap!");
    } else {
      fetch(
        "https://newparkingclub.000webhostapp.com/getData.php?op=createUser",
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
            civitasType +
            "&vehicle_number=" +
            vehicleNumber,
        }
      )
        .then((response) => response.json())
        .then((json) => {
          setIdNumber("");
          setUsername("");
          setPassword("");
          setConfirmPassword("");
          setCivitasType("");
          setVehicleNumber("");
        })
        .then(alert("Pengguna berhasil terdaftarkan, silakan Login!"))
        .catch((error) => {
          alert("Error" + error);
        });
      navigation.navigate("LoginPage");
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle={"dark-content"} backgroundColor="#fff" />
      <View style={styles.viewContent}>
        <View style={styles.viewTitle}>
          <Text style={styles.textTitle}>Register Akun</Text>
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
              testID="usernameInput"
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
              testID="passwordInput"
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
              }}
              testID="confirmPasswordInput"
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
              testID="idNumberInput"
            />
          </View>

          <View style={styles.inputBox}>
            <MaterialCommunityIcons
              name="car-info"
              color={"#818181"}
              size={26}
            />
            <TextInput
              style={styles.input}
              placeholder="Masukan Nomor Kendaraan"
              placeholderTextColor="#818181"
              onChangeText={(text) => {
                setVehicleNumber(text);
              }}
              testID="vehicleNumberInput"
            />
          </View>

          <View style={{ marginTop: 20 }}>
            <Text style={styles.textPreRadio}>Jenis Civitas Kampus: </Text>

            <RadioButtonGroup
              containerStyle={{ marginBottom: 20 }}
              selected={civitasType}
              onSelected={(value) => setCivitasType(value)}
              radioBackground="#003565"
            >
              <RadioButtonItem
                value="Dosen"
                label={<Text style={styles.textRadioItem}>Dosen</Text>}
                style={{ marginBottom: 15 }}
              />
              <RadioButtonItem
                value="Mahasiswa"
                label={<Text style={styles.textRadioItem}>Mahasiswa</Text>}
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
        </View>
      </View>

      <View style={styles.viewButton}>
        <TouchableOpacity
          onPress={handleSignUp}
          style={styles.touchableOpacity}
          testID="registerButton"
        >
          <Text style={styles.textButton}>Register</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SignUpPage;

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
  container: { flex: 1, backgroundColor: "#", flexDirection: "column" },
  viewContent: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#fff",
    paddingVertical: "15%",
    paddingHorizontal: "3%",
  },
  viewTitle: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  textTitle: {
    fontSize: 30,
    color: "#000000",
  },
  viewInputBox: {
    flexDirection: "column",
    paddingTop: 10,
    paddingHorizontal: "15%",
  },
  textPreRadio: { fontSize: 15, marginBottom: 15 },
  textRadioItem: { marginBottom: 15, marginLeft: 15, fontSize: 15 },
  viewButton: {
    flex: 0.1,
    flexDirection: "column",
    backgroundColor: "#ddd",
    paddingHorizontal: "15%",
    paddingTop: 15,
    alignItems: "center",
  },
  touchableOpacity: {
    backgroundColor: "#003565",
    width: "100%",
    padding: 8,
    borderRadius: 10,
    alignItems: "center",
  },
  textButton: { color: "white", fontWeight: 700, fontSize: 16 },
});
