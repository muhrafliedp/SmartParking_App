import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Button,
  RefreshControl,
  SafeAreaView,
  ScrollView,
} from "react-native";
import RadioButtonGroup, { RadioButtonItem } from "expo-radio-button";
import moment from "moment";
import AsyncStorage from "@react-native-async-storage/async-storage";

const PaymentDashboardIn = ({ navigation }) => {
  const [currentDate, setCurrentDate] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");
  const [idNumber, setIdNumber] = useState("");
  const [vehicleNumber, setVehicleNumber] = useState("");
  const [enterTime, setEnterTime] = useState("");
  const [leaveTime, setLeaveTime] = useState("");
  const [parkingLot, setParkingLot] = useState("");
  const [feeBill, setFeeBill] = useState("");
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

    const userInfoString = await AsyncStorage.getItem("userInfo");
    if (userInfoString !== null) {
      const userInfo = JSON.parse(userInfoString);
      setIdNumber(userInfo.idNumber);
    }

    try {
      const response1 = await fetch(
        "https://1parkingclub.000webhostapp.com/getData.php?op=getKendaraan&id_number=" +
          idNumber
      );
      const json1 = await response1.json();
      const vehicleNumber = json1.data.result[0].vehicle_number;

      const response2 = await fetch(
        "https://1parkingclub.000webhostapp.com/getData.php?op=getRiwayatParkir&vehicle_number=" +
          vehicleNumber
      );

      const json2 = await response2.json();
      console.log(json2);
      const enterTime = json2.data.result[0].enter_time;
      const leaveTime = json2.data.result[0].leave_time;
      const parkingLot = json2.data.result[0].parking_lot;
      const feeBill = json2.data.result[0].fee_bill;
      setVehicleNumber(vehicleNumber);
      setEnterTime(enterTime);
      setLeaveTime(leaveTime);
      setParkingLot(parkingLot);
      setFeeBill(feeBill);
    } catch (error) {
      console.log(error);
    }

    setRefreshing(false);
  }

  const handleIsVerified = () => {
    // If enter detected, navigate to dashboard page 2 screen
    navigation.navigate("PaymentVerification");
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
            paddingTop: 40,
          }}
        >
          <Text style={{ fontWeight: 900, fontSize: 20 }}>
            Informasi User Parkir
          </Text>
          <Text style={{ fontWeight: 900, fontSize: 17, color: "green" }}>
            {currentDate ? currentDate : "Loading..."}
          </Text>
          <Text style={{ paddingTop: 25, paddingBottom: 5, fontSize: 17 }}>
            Plat Kendaraan
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
              {vehicleNumber ? vehicleNumber : "Loading..."}
            </Text>
          </View>

          <Text style={{ paddingTop: 25, paddingBottom: 5, fontSize: 17 }}>
            Waktu Masuk
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
              {enterTime ? enterTime : "Loading..."}
            </Text>
          </View>

          <Text style={{ paddingTop: 25, paddingBottom: 5, fontSize: 17 }}>
            Lokasi Parkir
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
              {parkingLot ? parkingLot : "Loading..."}
            </Text>
          </View>

          <Text
            style={{
              paddingTop: 25,
              paddingBottom: 15,
              fontSize: 16,
              fontWeight: 900,
            }}
          >
            Tagihan Parkir
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
              {feeBill ? feeBill : "Loading..."}
            </Text>
          </View>

          <Text style={{ paddingTop: 25, paddingBottom: 5, fontSize: 16 }}>
            Pilihan Metode Pembayaran (default)
          </Text>

          <View style={{ marginTop: 20 }}>
            <RadioButtonGroup
              containerStyle={{ marginBottom: 20 }}
              selected={paymentMethod}
              onSelected={(value) => setPaymentMethod(value)}
              radioBackground="#003565"
            >
              <RadioButtonItem
                value="RFID"
                label={
                  <Text
                    style={{ marginBottom: 15, marginLeft: 15, fontSize: 16 }}
                  >
                    RFID
                  </Text>
                }
                style={{ marginBottom: 15 }}
              />
            </RadioButtonGroup>
          </View>

          <View
            style={{
              flexDirection: "row",
              textAlign: "center",
              paddingTop: 30,
            }}
          >
            <Text style={{ fontSize: 17 }}>Tunjukkan</Text>
            <Text style={{ fontSize: 17, color: "#003565", fontWeight: 900 }}>
              {" "}
              bukti bayar{" "}
            </Text>
            <Text style={{ fontSize: 17 }}>pada petugas parkir !</Text>
          </View>
        </View>
      </ScrollView>

      <View
        style={{
          flexDirection: "column",
          paddingHorizontal: "15%",
          paddingTop: 50,
          paddingBottom: 20,
        }}
      >
        <Button title="Bayar" color="green" onPress={handleIsVerified} />
      </View>
    </SafeAreaView>
  );
};

export default PaymentDashboardIn;
