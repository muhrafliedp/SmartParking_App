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

const AccountDashboard = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSignOut = () => {
    // Authenticate user's credentials here
    // If valid, navigate to main app screen
    navigation.navigate("LoginPage");
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
            source={require("../assets/images/account-icon.png")}
            style={{ width: 120, height: 120, marginBottom: 10 }}
          />
          <Text style={{ fontSize: 21, fontWeight: 900, color: "#003565" }}>
            RAFLIE
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
              Raflie
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
              18219035
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
              Mahasiswa
            </Text>
          </View>
        </View>
      </View>

      <View
        style={{
          flex: 0.1,
          flexDirection: "column",
          backgroundColor: "#ddd",
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
    </View>
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
