import React from "react";
import { View, StyleSheet, Text, StatusBar, Image } from "react-native";

const ParkDashboardOut = () => {
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
        <Text style={{ fontSize: 20, color: "red", fontWeight: 900 }}>
          {" "}
          BELUM{" "}
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
        Rekomendasi lokasi parkir terdekat:
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
          columnGap: 15,
          flexDirection: "row",
          paddingTop: 180,
          paddingLeft: 23,
        }}
      >
        <Image
          source={require("../assets/images/CCTV_logo.png")}
          style={{ width: 75, height: 75 }}
        />
        <Text
          style={{
            fontSize: 16,
            fontWeight: 600,
            paddingVertical: 23,
            color: "black",
          }}
        >
          Monitoring parkir via CCTV.
        </Text>
      </View>
    </View>
  );
};

export default ParkDashboardOut;

const style = StyleSheet.create({});
