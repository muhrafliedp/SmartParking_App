import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  Button,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  RefreshControl,
  SafeAreaView,
  ScrollView,
} from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import AsyncStorage from "@react-native-async-storage/async-storage";

const AccountDashboard = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [idNumber, setIdNumber] = useState("");
  const [civitasType, setCivitasType] = useState("");
  const [refreshing, setRefreshing] = useState(false);

  const componentDidMount = () => {
    getUserInfo();
  };

  const getUserInfo = async () => {
    setRefreshing(true);
    try {
      const userInfoString = await AsyncStorage.getItem("userInfo");
      if (userInfoString !== null) {
        const userInfo = JSON.parse(userInfoString);
        // Gunakan informasi pengguna di sini
        console.log("Informasi pengguna:", userInfo);
        setUsername(userInfo.username);
        // setPassword(userInfo.password);
        setIdNumber(userInfo.idNumber);
        setCivitasType(userInfo.civitasType);
      }
    } catch (error) {
      console.log(
        "Gagal mengambil informasi pengguna dari AsyncStorage:",
        error
      );
    }
    setRefreshing(false);
  };

  const handleSignOut = () => {
    // Authenticate user's credentials here
    // If valid, navigate to main app screen
    navigation.navigate("LoginPage");
  };

  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: "#", flexDirection: "column" }}
    >
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={getUserInfo} />
        }
      >
        <StatusBar barStyle={"dark-content"} backgroundColor="#fff" />
        <View
          style={{
            backgroundColor: "#fff",
            paddingVertical: "30%",
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
              source={require("../assets/images/account-icon.png")}
              style={{ width: 120, height: 120, marginBottom: 10 }}
            />
            <Text style={{ fontSize: 21, fontWeight: 900, color: "#003565" }}>
              {username.toUpperCase()}
            </Text>
            <Text
              style={{
                marginTop: 50,
                fontWeight: 700,
                fontSize: 23,
                color: "#000000",
              }}
            >
              Data Pengguna
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
              <Text
                style={{
                  marginLeft: 18,
                  fontSize: 18,
                  color: "#818181",
                }}
              >
                {username}
              </Text>
            </View>

            <View style={styles.inputBox}>
              <MaterialCommunityIcons
                name="card-account-details-outline"
                color={"#818181"}
                size={26}
              />
              <Text
                style={{
                  marginLeft: 18,
                  fontSize: 18,
                  color: "#818181",
                }}
              >
                {idNumber}
              </Text>
            </View>

            <View style={styles.inputBox}>
              <MaterialCommunityIcons
                name="badge-account"
                color={"#818181"}
                size={26}
              />
              <Text
                style={{
                  marginLeft: 18,
                  fontSize: 18,
                  color: "#818181",
                }}
              >
                {civitasType}
              </Text>
            </View>
          </View>
        </View>

        <View
          style={{
            flex: 0.1,
            flexDirection: "column",
            paddingHorizontal: "15%",
            paddingTop: 20,
            alignItems: "center",
          }}
        >
          <TouchableOpacity
            onPress={handleSignOut}
            style={{
              backgroundColor: "red",
              width: "100%",
              padding: 8,
              borderRadius: 10,
              alignItems: "center",
            }}
          >
            <Text style={{ color: "white", fontWeight: 700, fontSize: 16 }}>
              Sign Out
            </Text>
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
});
