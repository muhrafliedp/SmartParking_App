import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Button,
  RefreshControl,
  SafeAreaView,
  ScrollView,
} from "react-native";
import moment from "moment";
import AsyncStorage from "@react-native-async-storage/async-storage";

const DashboardPageIn = ({ navigation }) => {
  const [currentDate, setCurrentDate] = useState("");
  const [currentParkSlot, setCurrentParkSlot] = useState("");
  const [predictParkSlot, setPredictParkSlot] = useState("");
  const [maxParkSlot, setMaxParkSlot] = useState("");
  const [vehicleNumber, setVehicleNumber] = useState("");
  const [vehicleEnterTime, setVehicleEnterTime] = useState("");
  const [refreshing, setRefreshing] = useState(false);

  const fetchSaveState = async () => {
    const userInfoString = await AsyncStorage.getItem("userInfo");
    if (userInfoString !== null) {
      const userInfo = JSON.parse(userInfoString);
      setVehicleNumber(userInfo.vehicleNumber);
    }
  };

  const fetchTime = async () => {
    var date = moment()
      .utcOffset("+07:00")
      // .subtract({ hours: 21, minutes: 50 })
      .format("dddd, DD MMMM YYYY | hh:mm:ss A");
    setCurrentDate(date);
  };

  const fetchDataKameraMasuk = async () => {
    // setRefreshing(true);
    try {
      const response = await fetch(
        "https://newparkingclub.000webhostapp.com/getData.php?op=getKameraMasuk&vehicle_number=" +
          vehicleNumber
      );
      if (response.ok) {
        const json = await response.json();
        const vehicleEnterTime = json.data.result[0].enter_time;
        setVehicleEnterTime(vehicleEnterTime);
      } else {
        throw new Error("Request failed");
      }
    } catch (error) {
      console.log(error);
    }
    // setRefreshing(false);
  };

  const fetchDataAreaParkir = async () => {
    // setRefreshing(true);
    try {
      const response1 = await fetch(
        "https://newparkingclub.000webhostapp.com/getData.php?op=getAreaParkir&parking_area=Parkir Timur Seni Rupa"
      );
      if (response1.ok) {
        const json1 = await response1.json();
        const currentParkSlot = json1.data.result[0].current_park_slot;
        const predictParkSlot = json1.data.result[0].predict_park_slot;
        const maxParkSlot = json1.data.result[0].max_park_slot;
        setCurrentParkSlot(currentParkSlot);
        setPredictParkSlot(predictParkSlot);
        setMaxParkSlot(maxParkSlot);
      } else {
        throw new Error("Request failed");
      }
    } catch (error) {
      console.log(error);
    }
    // setRefreshing(false);
  };

  useEffect(() => {
    // setRefreshing(true);
    fetchTime();
    fetchSaveState();
    fetchDataAreaParkir();
    fetchDataKameraMasuk();
    const interval = setInterval(() => {
      fetchTime();
      fetchDataAreaParkir();
    }, 1000);
    // setRefreshing(false);
    return () => clearInterval(interval);
  }, [vehicleNumber]);

  const handleIsExit = () => {
    // If leave detected, navigate to dashboard page screen
    navigation.goBack("User-Out");
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
      //   <RefreshControl refreshing={refreshing} onRefresh={fetchData} />
      // }
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            paddingHorizontal: "10%",
          }}
        >
          <Text style={{ fontSize: 20 }}>Kamu</Text>
          <Text style={{ fontSize: 20, color: "green", fontWeight: 900 }}>
            {" "}
            TELAH{" "}
          </Text>
          <Text style={{ fontSize: 20 }}>masuk kawasan parkir</Text>
        </View>

        <View
          style={{
            flex: 1,
            flexDirection: "column",
            paddingLeft: 30,
          }}
        >
          <Text style={{ fontWeight: 900, fontSize: 20, paddingTop: 40 }}>
            Informasi Parkir
          </Text>
          <Text style={{ fontWeight: 900, fontSize: 17, color: "green" }}>
            {currentDate ? currentDate : "Loading..."}
          </Text>
          <Text style={{ paddingTop: 25, fontSize: 17 }}>
            Kuota parkir saat ini :
          </Text>
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                borderWidth: 2,
                borderColor: "green",
                borderRadius: 5,
                padding: 10,
                fontSize: 18,
                marginTop: 10,
                marginLeft: -50,
              }}
            >
              {currentParkSlot && maxParkSlot
                ? `${currentParkSlot} / ${maxParkSlot}`
                : "Loading..."}
            </Text>
          </View>

          <Text style={{ paddingTop: 20, fontSize: 17 }}>
            Prediksi kuota parkir 1 JAM mendatang :
          </Text>
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                borderWidth: 2,
                borderColor: "green",
                borderRadius: 5,
                padding: 10,
                fontSize: 18,
                marginTop: 10,
                marginLeft: -50,
              }}
            >
              {predictParkSlot && maxParkSlot
                ? `${predictParkSlot} / ${maxParkSlot}`
                : "Loading..."}
            </Text>
          </View>

          <Text style={{ fontWeight: 900, fontSize: 20, paddingTop: 30 }}>
            Informasi User Parkir
          </Text>
          <Text style={{ fontWeight: 900, fontSize: 17, color: "green" }}>
            {currentDate ? currentDate : "Loading..."}
          </Text>

          <Text style={{ paddingTop: 25, fontSize: 17 }}>Plat Kendaraan :</Text>
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                borderWidth: 2,
                borderColor: "green",
                borderRadius: 5,
                padding: 10,
                fontSize: 18,
                marginTop: 10,
                marginLeft: -50,
              }}
            >
              {vehicleNumber ? vehicleNumber : "Loading..."}
            </Text>
          </View>

          <Text style={{ paddingTop: 20, fontSize: 17 }}>Waktu Masuk :</Text>
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                borderWidth: 2,
                borderColor: "green",
                borderRadius: 5,
                padding: 10,
                fontSize: 18,
                marginTop: 10,
                marginLeft: -50,
              }}
            >
              {vehicleEnterTime ? vehicleEnterTime : "Loading..."}
            </Text>
          </View>
        </View>

        <View
          style={{
            flex: 0.1,
            flexDirection: "column",
            paddingHorizontal: "10%",
            alignItems: "center",
          }}
        >
          <Text style={{ textAlign: "center", paddingTop: 20, fontSize: 17 }}>
            Informasi visual rekomendasi lokasi parkir terdapat pada dashboard
            parking aplikasi.
          </Text>
        </View>
      </ScrollView>

      <View
        style={{
          flexDirection: "column",
          paddingHorizontal: "15%",
          paddingTop: 10,
          paddingBottom: 20,
        }}
      >
        <Button title="exit" color="red" onPress={handleIsExit} />
      </View>
    </SafeAreaView>
  );
};

export default DashboardPageIn;
