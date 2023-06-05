import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import AsyncStorage from "@react-native-async-storage/async-storage";

const AccountDashboard = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [idNumber, setIdNumber] = useState("");
  const [civitasType, setCivitasType] = useState("");
  const [vehicleNumber, setVehicleNumber] = useState("");

  const fetchData = async () => {
    try {
      const userInfoString = await AsyncStorage.getItem("userInfo");
      if (userInfoString !== null) {
        const userInfo = JSON.parse(userInfoString);
        console.log("Informasi pengguna:", userInfo);
        setUsername(userInfo.username);
        setIdNumber(userInfo.idNumber);
        setCivitasType(userInfo.civitasType);
        setVehicleNumber(userInfo.vehicleNumber);
      }
    } catch (error) {
      console.log(
        "Gagal mengambil informasi pengguna dari AsyncStorage:",
        error
      );
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSignOut = () => {
    navigation.navigate("LoginPage");
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <StatusBar barStyle={"dark-content"} backgroundColor="#fff" />
        <View style={styles.view}>
          <View style={styles.viewImage}>
            <Image
              source={require("../assets/images/account-icon.png")}
              style={styles.image}
            />
            <Text style={styles.textUsername}>{username.toUpperCase()}</Text>
            <Text style={styles.textDataPengguna}>Data Pengguna</Text>
          </View>

          <View style={styles.viewInputBox}>
            <View style={styles.inputBox}>
              <MaterialCommunityIcons
                name="account"
                color={"#818181"}
                size={26}
              />
              <Text style={styles.textInputBox}>{username}</Text>
            </View>

            <View style={styles.inputBox}>
              <MaterialCommunityIcons
                name="card-account-details-outline"
                color={"#818181"}
                size={26}
              />
              <Text style={styles.textInputBox}>{idNumber}</Text>
            </View>

            <View style={styles.inputBox}>
              <MaterialCommunityIcons
                name="badge-account"
                color={"#818181"}
                size={26}
              />
              <Text style={styles.textInputBox}>{civitasType}</Text>
            </View>

            <View style={styles.inputBox}>
              <MaterialCommunityIcons
                name="car-info"
                color={"#818181"}
                size={26}
              />
              <Text style={styles.textInputBox}>{vehicleNumber}</Text>
            </View>
          </View>
        </View>

        <View style={styles.viewButton}>
          <TouchableOpacity
            onPress={handleSignOut}
            style={styles.touchableOpacity}
          >
            <Text style={styles.textButton}>Sign Out</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AccountDashboard;

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
  view: {
    backgroundColor: "#fff",
    paddingVertical: "20%",
    paddingHorizontal: "3%",
  },
  viewImage: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  image: { width: 120, height: 120, marginBottom: 10 },
  textUsername: { fontSize: 21, fontWeight: 900, color: "#003565" },
  textDataPengguna: {
    marginTop: 30,
    fontWeight: 700,
    fontSize: 23,
    color: "#000000",
  },
  viewInputBox: {
    flexDirection: "column",
    paddingTop: 20,
    paddingHorizontal: "15%",
  },
  textInputBox: {
    marginLeft: 18,
    fontSize: 18,
    color: "#818181",
  },
  viewButton: {
    flexDirection: "column",
    paddingHorizontal: "15%",
    paddingTop: 20,
    alignItems: "center",
  },
  touchableOpacity: {
    backgroundColor: "red",
    width: "100%",
    padding: 8,
    borderRadius: 10,
    alignItems: "center",
  },
  textButton: { color: "white", fontWeight: 700, fontSize: 16 },
});
