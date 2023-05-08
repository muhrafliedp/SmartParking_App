import React, { useState } from "react";
import {
  View,
  Text,
  Button,
  RefreshControl,
  SafeAreaView,
  ScrollView,
} from "react-native";
import moment from "moment";

const DashboardPageIn = ({ navigation }) => {
  const [currentDate, setCurrentDate] = useState("");
  const [currentParkSlot, setCurrentParkSlot] = useState("");
  const [predictParkSlot, setPredictParkSlot] = useState("");
  const [vehicleNumber, setVehicleNumber] = useState("");
  const [vehicleLocationStatus, setVehicleLocationStatus] = useState("");
  const [vehicleEnterTime, setVehicleEnterTime] = useState("");
  const [refreshing, setRefreshing] = useState(false);

  const componentDidMount = () => {
    getParkirData();
  };

  async function getParkirData() {
    setRefreshing(true);
    var date = moment()
      .utcOffset("+07:00")
      .format("dddd, DD MMMM YYYY | hh:mm:ss A");

    setCurrentDate(date);

    try {
      const [response1, response2] = await Promise.all([
        fetch(
          "https://1parkingclub.000webhostapp.com/getData.php?op=getAreaParkir&parking_area=Parkir Timur Seni Rupa"
        ),
        fetch(
          "https://1parkingclub.000webhostapp.com/getData.php?op=getKendaraan&id_number=18219035"
        ),
      ]);
      const json1 = await response1.json();
      const json2 = await response2.json();
      const currentParkSlot = json1.data.result[0].current_park_slot;
      const predictParkSlot = json1.data.result[0].predict_park_slot;
      const vehicleNumber = json2.data.result[0].vehicle_number;
      const vehicleLocationStatus =
        json2.data.result[0].vehicle_location_status;
      const vehicleEnterTime = json2.data.result[0].vehicle_enter_time;
      setCurrentParkSlot(currentParkSlot);
      setPredictParkSlot(predictParkSlot);
      setVehicleNumber(vehicleNumber);
      setVehicleLocationStatus(vehicleLocationStatus);
      setVehicleEnterTime(vehicleEnterTime);
    } catch (error) {
      console.log(error);
    }

    setRefreshing(false);
  }

  const handleIsExit = () => {
    // If leave detected, navigate to dashboard page screen
    navigation.goBack("User-Out");
  };

  // useEffect(() => {
  //   var date = moment()
  //     .utcOffset("+07:00")
  //     .format("dddd, DD MMMM YYYY | hh:mm:ss A");

  //   setCurrentDate(date);
  // }, []);

  return (
    <SafeAreaView
      style={{
        flex: 1,
        flexDirection: "column",
        paddingTop: 30,
      }}
    >
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={getParkirData} />
        }
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
              {currentParkSlot ? currentParkSlot : "Loading..."}
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
              {predictParkSlot ? predictParkSlot : "Loading..."}
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

          <Text style={{ paddingTop: 20, fontSize: 17 }}>
            Lokasi Kendaraan di Parkiran :
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
              {vehicleLocationStatus ? vehicleLocationStatus : "Loading..."}
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
            Informasi visual lokasi parkir terdapat pada dashboard parking
            aplikasi.
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
