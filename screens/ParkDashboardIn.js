import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  Button,
  SafeAreaView,
  ScrollView,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const ParkDashboardIn = ({ navigation }) => {
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
        "https://newparkingclub.000webhostapp.com/getData.php/?op=getPeta&map_type=OUT&filled_slot=1"
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
        "https://newparkingclub.000webhostapp.com/getData.php?op=getStatusParkir&vehicle_number=" +
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
    const interval = setInterval(fetchDataStatusPark, 1000);
    return () => clearInterval(interval);
  }, [vehicleNumber]);

  const gambarUri = `data:image/png;base64,${gambarMap}`;

  const handleIsExit = () => {
    navigation.goBack("Park-Out");
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.viewTopText}>
          <Text style={{ fontSize: 20 }}>Kendaraan kamu</Text>
          <Text style={styles.textTopText}> TELAH </Text>
          <Text style={{ fontSize: 20 }}>diparkirkan</Text>
        </View>

        <Image source={{ uri: gambarUri }} style={styles.mapImage} />
        <Text style={styles.textPreDesc}>
          Rekomendasi keluar lokasi parkir:
        </Text>
        <Text style={styles.textMapDesc}>
          {fileDesc ? fileDesc : "Loading..."}
        </Text>

        <View style={styles.viewBottomText}>
          <Text style={{ fontSize: 20 }}>Kamu</Text>
          {statusKerapian ? (
            statusKerapian == "0" ? (
              <Text style={styles.textNotNeat}> BELUM </Text>
            ) : (
              <Text style={styles.textNeat}> SUDAH </Text>
            )
          ) : (
            <Text style={styles.textLoadNeat}> ... </Text>
          )}
          <Text style={{ fontSize: 20 }}>parkir dengan</Text>
          <Text style={styles.textLoadNeat}> RAPI</Text>
        </View>
      </ScrollView>

      <View style={styles.viewButton}>
        <Button title="tidak parkir" color="red" onPress={handleIsExit} />
      </View>
    </SafeAreaView>
  );
};

export default ParkDashboardIn;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    paddingTop: 30,
  },
  viewTopText: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: "10%",
    paddingBottom: 30,
  },
  textTopText: { fontSize: 20, color: "green", fontWeight: 900 },
  mapImage: {
    width: 360,
    height: 522.2,
    marginHorizontal: 23,
  },
  textPreDesc: {
    fontSize: 18,
    fontWeight: 600,
    color: "black",
    paddingTop: 30,
    paddingLeft: 23,
  },
  textMapDesc: {
    fontSize: 18,
    fontWeight: 400,
    color: "black",
    paddingHorizontal: 23,
  },
  viewBottomText: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 20,
  },
  textNotNeat: { fontSize: 20, color: "red", fontWeight: 900 },
  textNeat: { fontSize: 20, color: "green", fontWeight: 900 },
  textLoadNeat: { fontSize: 20, color: "#003565", fontWeight: 900 },
  viewButton: {
    flexDirection: "column",
    paddingHorizontal: "15%",
    paddingTop: 10,
    paddingBottom: 20,
  },
});
