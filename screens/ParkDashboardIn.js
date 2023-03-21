import React from "react";
import { View, StyleSheet, Text, StatusBar, Image, Button } from "react-native";

const ParkDashboardIn = ({ navigation }) => {
  const handleIsExit = () => {
    // If leave detected, navigate to dashboard page screen
    navigation.goBack("Park-Out");
  };
  return (
    <View
      style={{
        flex: 1,
        flexDirection: "column",
        paddingTop: 30,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          paddingHorizontal: "10%",
          paddingBottom: 30,
        }}
      >
        <Text style={{ fontSize: 20 }}>Kamu</Text>
        <Text style={{ fontSize: 20, color: "green", fontWeight: 900 }}>
          {" "}
          TELAH{" "}
        </Text>
        <Text style={{ fontSize: 20 }}>masuk kawasan parkir</Text>
      </View>

      <Image
        source={require("../assets/images/parkArea_Map.jpg")}
        style={{
          width: 360,
          height: 360,
          marginHorizontal: 23,
        }}
      />
      <Text
        style={{
          fontSize: 18,
          fontWeight: 600,
          color: "black",
          paddingTop: 30,
          paddingLeft: 23,
        }}
      >
        Rekomendasi keluar lokasi parkir:
      </Text>
      <Text
        style={{
          fontSize: 18,
          fontWeight: 400,
          color: "black",
          paddingLeft: 23,
        }}
      >
        ...
      </Text>

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          paddingHorizontal: "10%",
          paddingTop: 93,
        }}
      >
        <Text style={{ fontSize: 20 }}>Kamu</Text>
        <Text style={{ fontSize: 20, color: "green", fontWeight: 900 }}>
          {" "}
          SUDAH{" "}
        </Text>
        <Text style={{ fontSize: 20 }}>parkir dengan</Text>
        <Text style={{ fontSize: 20, color: "#003565", fontWeight: 900 }}>
          {" "}
          RAPI
        </Text>
      </View>

      <View
        style={{
          columnGap: 15,
          flexDirection: "row",
          paddingTop: 20,
          paddingLeft: 23,
        }}
      >
        <Image
          source={require("../assets/images/CCTV_logo.png")}
          style={{ width: 50, height: 50 }}
        />
        <Text
          style={{
            fontSize: 16,
            fontWeight: 600,
            paddingVertical: 13,
            color: "black",
          }}
        >
          Monitoring parkir via CCTV.
        </Text>
      </View>

      <View
        style={{
          flexDirection: "column",
          paddingHorizontal: "15%",
          paddingTop: 8,
          paddingBottom: 20,
        }}
      >
        <Button title="exit" color="red" onPress={handleIsExit} />
      </View>
    </View>
  );
};

export default ParkDashboardIn;

const style = StyleSheet.create({});
