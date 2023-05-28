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

  useEffect(() => {
    // setRefreshing(true);
    const fetchData = async () => {
      const userInfoString = await AsyncStorage.getItem("userInfo");
      if (userInfoString !== null) {
        const userInfo = JSON.parse(userInfoString);
        setVehicleNumber(userInfo.vehicleNumber);
      }
      try {
        const [response1, response2] = await Promise.all([
          fetch(
            "https://1parkingclub.000webhostapp.com/getData.php/?op=getPeta&map_type=OUT&filled_slot=1"
          ),
          fetch(
            "https://1parkingclub.000webhostapp.com/getData.php?op=getStatusParkir&vehicle_number=" +
              vehicleNumber
          ),
        ]);
        const json1 = await response1.json();
        const json2 = await response2.json();
        setGambarMap(json1.gambar_map);
        setFileDesc(json1.file_text);
        const statusKerapian = json2.data.result[0].status_kerapian;
        setStatusKerapian(statusKerapian);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
    // setRefreshing(false);
  }, []);

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
            paddingHorizontal: "10%",
            paddingTop: 20,
          }}
        >
          <Text style={{ fontSize: 20 }}>Kamu</Text>
          <Text style={{ fontSize: 20, color: "#003565", fontWeight: 900 }}>
            {" "}
            {statusKerapian == 0 ? "BELUM" : "SUDAH"}{" "}
          </Text>
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
