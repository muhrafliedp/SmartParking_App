import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  Text,
  StatusBar,
  Image,
  Button,
  RefreshControl,
  SafeAreaView,
  ScrollView,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const ParkDashboardIn = ({ navigation }) => {
  // const [refreshing, setRefreshing] = useState(false);
  const [gambarMap, setGambarMap] = useState("");
  const [fileDesc, setFileDesc] = useState("");
  const [vehicleNumber, setVehicleNumber] = useState("");
  const [statusKerapian, setStatusKerapian] = useState("");

  const fetchDataSaveState = async () => {
    const userInfoString = await AsyncStorage.getItem("userInfo");
    if (userInfoString !== null) {
      const userInfo = JSON.parse(userInfoString);
      setVehicleNumber(userInfo.vehicleNumber);
    }
  };

  const fetchDataMap = async () => {
    try {
      const response = await fetch(
        "https://1parkingclub.000webhostapp.com/getData.php/?op=getPeta&map_type=OUT&filled_slot=1"
      );

      if (response.ok) {
        const json = await response.json();
        setGambarMap(json.gambar_map);
        setFileDesc(json.file_text);
      } else {
        throw new Error("Request failed");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const fetchDataStatusPark = async () => {
    try {
      const response = await fetch(
        "https://1parkingclub.000webhostapp.com/getData.php?op=getStatusParkir&vehicle_number=" +
          vehicleNumber
      );
      if (response.ok) {
        const json = await response.json();
        setStatusKerapian(json.data.result[0].status_kerapian);
      } else {
        throw new Error("Request failed");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchDataSaveState();
    fetchDataMap();
    fetchDataStatusPark();
    const interval = setInterval(fetchDataStatusPark, 3000);
    return () => clearInterval(interval);
  }, [vehicleNumber]);

  const gambarUri = `data:image/png;base64,${gambarMap}`;

  const handleIsExit = () => {
    // If leave detected, navigate to dashboard page screen
    navigation.goBack("Park-Out");
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        flexDirection: "column",
        paddingTop: 30,
      }}
    >
      <ScrollView
      // refreshControl={
      //   <RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />
      // }
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            paddingHorizontal: "10%",
            paddingBottom: 30,
          }}
        >
          <Text style={{ fontSize: 20 }}>Kendaraan kamu</Text>
          <Text style={{ fontSize: 20, color: "green", fontWeight: 900 }}>
            {" "}
            TELAH{" "}
          </Text>
          <Text style={{ fontSize: 20 }}>diparkirkan</Text>
        </View>

        <Image
          source={{ uri: gambarUri }}
          style={{
            width: 360,
            height: 522.2,
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
            paddingHorizontal: 23,
          }}
        >
          {fileDesc ? fileDesc : "Loading..."}
        </Text>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            paddingTop: 20,
          }}
        >
          <Text style={{ fontSize: 20 }}>Kamu</Text>
          {statusKerapian ? (
            statusKerapian == "0" ? (
              <Text style={{ fontSize: 20, color: "red", fontWeight: 900 }}>
                {" "}
                BELUM{" "}
              </Text>
            ) : (
              <Text style={{ fontSize: 20, color: "green", fontWeight: 900 }}>
                {" "}
                SUDAH{" "}
              </Text>
            )
          ) : (
            <Text style={{ fontSize: 20, color: "#003565", fontWeight: 900 }}>
              {" "}
              ...{" "}
            </Text>
          )}
          <Text style={{ fontSize: 20 }}>parkir dengan</Text>
          <Text style={{ fontSize: 20, color: "#003565", fontWeight: 900 }}>
            {" "}
            RAPI
          </Text>
        </View>

        {/* <View
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
        </View> */}
      </ScrollView>
      <View
        style={{
          flexDirection: "column",
          paddingHorizontal: "15%",
          paddingTop: 10,
          paddingBottom: 20,
        }}
      >
        <Button title="tidak parkir" color="red" onPress={handleIsExit} />
      </View>
    </SafeAreaView>
  );
};

export default ParkDashboardIn;

const style = StyleSheet.create({});
