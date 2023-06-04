import React, { useCallback, useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  StatusBar,
  Image,
  Button,
  ScrollView,
  RefreshControl,
  SafeAreaView,
} from "react-native";

const ParkDashboardOut = ({ navigation }) => {
  // const [refreshing, setRefreshing] = useState(false);
  const [gambarMap, setGambarMap] = useState("");
  const [fileDesc, setFileDesc] = useState("");

  useEffect(() => {
    // setRefreshing(true);
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://newparkingclub.000webhostapp.com/getData.php/?op=getPeta&map_type=IN&filled_slot=0"
        );
        const json = await response.json();
        setGambarMap(json.gambar_map);
        setFileDesc(json.file_text);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
    // setRefreshing(false);
  }, []);

  const gambarUri = `data:image/png;base64,${gambarMap}`;

  const handleIsEntered = () => {
    navigation.navigate("Park-In");
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
          <Text style={{ fontSize: 20, color: "red", fontWeight: 900 }}>
            {" "}
            BELUM{" "}
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
          Rekomendasi lokasi parkir oleh sistem:
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
        <Button title="sedang parkir" color="green" onPress={handleIsEntered} />
      </View>
    </SafeAreaView>
  );
};

export default ParkDashboardOut;

const style = StyleSheet.create({});
