import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  SafeAreaView,
  ScrollView,
} from "react-native";
import RadioButtonGroup, { RadioButtonItem } from "expo-radio-button";
import moment from "moment";
import AsyncStorage from "@react-native-async-storage/async-storage";

const PaymentDashboardIn = ({ navigation }) => {
  const [currentDate, setCurrentDate] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");
  const [vehicleNumber, setVehicleNumber] = useState("");
  const [leaveTime, setLeaveTime] = useState("");
  const [enterTime, setEnterTime] = useState("");
  const [parkingLot, setParkingLot] = useState("");
  const [feeBill, setFeeBill] = useState("");
  const [statusPayment, setStatusPayment] = useState("");

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
    try {
      const response = await fetch(
        "https://newparkingclub.000webhostapp.com/getData.php?op=getKameraMasuk&vehicle_number=" +
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
  };

  const fetchDataKameraKeluar = async () => {
    try {
      const response = await fetch(
        "https://newparkingclub.000webhostapp.com/getData.php?op=getKameraKeluar&vehicle_number=" +
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
  };

  const fetchDataPembayaran = async () => {
    try {
      const response = await fetch(
        "https://newparkingclub.000webhostapp.com/getData.php?op=getPembayaran&vehicle_number=" +
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
  };

  useEffect(() => {
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
    return () => clearInterval(interval);
  }, [vehicleNumber]);

  const handleIsVerified = () => {
    console.log(
      `${enterTime}, ${leaveTime}, ${vehicleNumber}, ${parkingLot}, ${feeBill}`
    );
    if (statusPayment == 0) {
      alert("Kartu RFID tidak valid, silakan periksa kembali!");
    } else {
      if (
        enterTime.length != 0 ||
        leaveTime.length != 0 ||
        vehicleNumber.length != 0 ||
        parkingLot.length != 0 ||
        feeBill.length != 0
      ) {
        fetch(
          "https://newparkingclub.000webhostapp.com/getData.php?op=createRiwayatParkir",
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
          .catch((error) => {
            alert("Error" + error);
          });
      }
      navigation.navigate("PaymentVerification");
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.viewTopText}>
          <Text style={{ fontSize: 20 }}>Kamu</Text>
          <Text style={styles.textTopText}> TELAH </Text>
          <Text style={{ fontSize: 20 }}>sampai gerbang parkir</Text>
        </View>

        <View style={styles.viewContent}>
          <Text style={{ fontWeight: 900, fontSize: 20 }}>
            Informasi User Parkir
          </Text>
          <Text style={styles.textCurrentDate}>
            {currentDate ? currentDate : "Loading..."}
          </Text>
          <Text style={styles.textSubtitle}>Plat Kendaraan</Text>
          <View style={styles.viewTextBox}>
            <Text style={styles.textBox}>
              {vehicleNumber ? vehicleNumber : "Loading..."}
            </Text>
          </View>

          <Text style={styles.textSubtitle}>Waktu Masuk</Text>
          <View style={styles.viewTextBox}>
            <Text style={styles.textBox}>
              {enterTime ? enterTime : "Loading..."}
            </Text>
          </View>

          <Text style={styles.textSubtitle}>Lokasi Parkir</Text>
          <View style={styles.viewTextBox}>
            <Text style={styles.textBox}>
              {parkingLot ? parkingLot : "Loading..."}
            </Text>
          </View>

          <Text style={styles.textSubtitleBold}>Tagihan Parkir</Text>
          <View style={styles.viewTextBox}>
            {feeBill ? (
              <Text style={styles.textBox}>{feeBill}</Text>
            ) : (
              <Text style={styles.textWarning}>
                Belum tersedia. Silakan menuju gerbang parkir!
              </Text>
            )}
          </View>

          <Text style={styles.textSubtitle}>Pilihan Metode Pembayaran</Text>

          <View style={{ marginTop: 20 }}>
            <RadioButtonGroup
              containerStyle={{ marginBottom: 20 }}
              selected={paymentMethod}
              onSelected={(value) => setPaymentMethod(value)}
              radioBackground="#003565"
            >
              <RadioButtonItem
                value="RFID"
                label={<Text style={styles.radioButtonItem}>RFID</Text>}
                style={{ marginBottom: 15 }}
              />
            </RadioButtonGroup>
          </View>

          <View style={styles.viewBottomText}>
            <Text style={{ fontSize: 17 }}>Silakan Tap</Text>
            <Text style={styles.textBottomText}> Kartu Pembayaran </Text>
            <Text style={{ fontSize: 17 }}>Anda !</Text>
          </View>
        </View>
      </ScrollView>

      <View style={styles.viewButton}>
        <Button title="Bayar" color="green" onPress={handleIsVerified} />
      </View>
    </SafeAreaView>
  );
};

export default PaymentDashboardIn;

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
  },
  textTopText: { fontSize: 20, color: "green", fontWeight: 900 },
  viewContent: {
    flex: 1,
    flexDirection: "column",
    paddingLeft: 30,
    paddingTop: 40,
  },
  textCurrentDate: { fontWeight: 900, fontSize: 17, color: "green" },
  textSubtitle: { paddingTop: 25, paddingBottom: 5, fontSize: 17 },
  viewTextBox: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  textBox: {
    borderWidth: 2,
    borderColor: "green",
    borderRadius: 5,
    padding: 10,
    fontSize: 18,
    marginTop: 10,
    marginLeft: -50,
  },
  textSubtitleBold: {
    paddingTop: 25,
    paddingBottom: 15,
    fontSize: 16,
    fontWeight: 900,
  },
  textWarning: {
    padding: 10,
    fontSize: 16,
    fontWeight: 600,
    marginTop: 10,
    marginLeft: -28,
    color: "red",
  },
  radioButtonItem: { marginBottom: 15, marginLeft: 15, fontSize: 16 },
  viewBottomText: {
    flexDirection: "row",
    textAlign: "center",
    paddingHorizontal: "8%",
  },
  textBottomText: { fontSize: 17, color: "#003565", fontWeight: 900 },
  viewButton: {
    flexDirection: "column",
    paddingHorizontal: "15%",
    paddingTop: 30,
    paddingBottom: 20,
  },
});
