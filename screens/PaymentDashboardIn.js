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
  // const [idNumber, setIdNumber] = useState("");
  const [vehicleNumber, setVehicleNumber] = useState("");
  const [leaveTime, setLeaveTime] = useState("");
  const [enterTime, setEnterTime] = useState("");
  const [parkingLot, setParkingLot] = useState("");
  const [feeBill, setFeeBill] = useState("");
  const [statusPayment, setStatusPayment] = useState("");
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
      .format("dddd, DD MMMM YYYY | hh:mm:ss A");
    setCurrentDate(date);
  };

  const fetchDataKameraMasuk = async () => {
    // setRefreshing(true);
    try {
      const response = await fetch(
        "https://1parkingclub.000webhostapp.com/getData.php?op=getKameraMasuk&vehicle_number=" +
          vehicleNumber
      );
      if (response.ok) {
        const json = await response.json();
        const enterTime = json.data.result[0].enter_time;
        const parkingLot = "Parkir Timur Seni Rupa";
        setEnterTime(enterTime);
        setParkingLot(parkingLot);
      } else {
        throw new Error("Request failed");
      }
    } catch (error) {
      console.log(error);
    }
    // setRefreshing(false);
  };

  const fetchDataKameraKeluar = async () => {
    // setRefreshing(true);
    try {
      const response = await fetch(
        "https://1parkingclub.000webhostapp.com/getData.php?op=getKameraKeluar&vehicle_number=" +
          vehicleNumber
      );
      if (response.ok) {
        const json3 = await response.json();
        const leaveTime = json3.data.result[0].leave_time;
        setLeaveTime(leaveTime);
      } else {
        throw new Error("Request failed");
      }
    } catch (error) {
      console.log(error);
    }
    // setRefreshing(false);
  };

  const fetchDataPembayaran = async () => {
    // setRefreshing(true);
    try {
      const response = await fetch(
        "https://1parkingclub.000webhostapp.com/getData.php?op=getPembayaran&vehicle_number=" +
          vehicleNumber
      );
      if (response.ok) {
        const json2 = await response.json();
        const feeBill = json2.data.result[0].bill;
        const statusPayment = json2.data.result[0].status_payment;
        setFeeBill(feeBill);
        setStatusPayment(statusPayment);
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
    fetchDataKameraMasuk();
    fetchDataKameraKeluar();
    if (leaveTime) {
      fetchDataPembayaran();
    }
    const interval = setInterval(() => {
      fetchTime();
      fetchDataPembayaran();
    }, 1000);
    // setRefreshing(false);
    return () => clearInterval(interval);
  }, [vehicleNumber]);

  const handleIsVerified = () => {
    // setRefreshing(true);
    console.log(
      `${enterTime}, ${leaveTime}, ${vehicleNumber}, ${parkingLot}, ${feeBill}`
    );
    if (
      enterTime.length != 0 ||
      leaveTime.length != 0 ||
      vehicleNumber.length != 0 ||
      parkingLot.length != 0 ||
      feeBill.length != 0
    ) {
      fetch(
        "https://1parkingclub.000webhostapp.com/getData.php?op=createRiwayatParkir",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body:
            "enter_time=" +
            enterTime +
            "&leave_time=" +
            leaveTime +
            "&vehicle_number=" +
            vehicleNumber +
            "&parking_lot=" +
            parkingLot +
            "&fee_bill=" +
            feeBill,
        }
      )
        .then((response) => response.json())
        .then((json) => {
          setEnterTime("");
          setLeaveTime("");
          setVehicleNumber("");
          setParkingLot("");
          setFeeBill("");
        })
        // .then(alert("Data transaksi parkir berhasil ditambahkan!"))
        .catch((error) => {
          alert("Error" + error);
        });
    }
    // Simulasi waktu refresh, di sini Anda dapat menggantinya dengan logika aktual
    setTimeout(() => {
      // Set refreshing kembali menjadi false setelah selesai refresh
      if (statusPayment == "1") {
        navigation.navigate("PaymentVerification");
      }
    }, 7000);
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
      //   <RefreshControl
      //     refreshing={refreshing}
      //     onRefresh={fetchDataPembayaran}
      //   />
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
            {feeBill ? (
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
                {feeBill}
              </Text>
            ) : (
              <Text
                style={{
                  padding: 10,
                  fontSize: 16,
                  fontWeight: 600,
                  marginTop: 10,
                  marginLeft: -28,
                  color: "red",
                }}
              >
                Belum tersedia. Silakan menuju gerbang parkir!
              </Text>
            )}
          </View>

          <Text style={{ paddingTop: 25, paddingBottom: 5, fontSize: 16 }}>
            Pilihan Metode Pembayaran
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
              paddingHorizontal: "8%",
            }}
          >
            <Text style={{ fontSize: 17 }}>Silakan Tap</Text>
            <Text style={{ fontSize: 17, color: "#003565", fontWeight: 900 }}>
              {" "}
              Kartu Pembayaran{" "}
            </Text>
            <Text style={{ fontSize: 17 }}>Anda !</Text>
          </View>
        </View>
      </ScrollView>

      <View
        style={{
          flexDirection: "column",
          paddingHorizontal: "15%",
          paddingTop: 30,
          paddingBottom: 20,
        }}
      >
        <Button
          title="Bayar"
          color="green"
          // refreshing={refreshing}
          onPress={handleIsVerified}
          // disabled={refreshing}
        />
      </View>
    </SafeAreaView>
  );
};

export default PaymentDashboardIn;
