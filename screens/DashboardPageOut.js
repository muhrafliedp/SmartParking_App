import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  SafeAreaView,
  ScrollView,
} from "react-native";
import moment from "moment";

const DashboardPageOut = ({ navigation }) => {
  const [currentDate, setCurrentDate] = useState("");
  const [currentParkSlot, setCurrentParkSlot] = useState("");
  const [predictParkSlot, setPredictParkSlot] = useState("");
  const [maxParkSlot, setMaxParkSlot] = useState("");

  const fetchData = async () => {
    var date = moment()
      .utcOffset("+07:00")
      .format("dddd, DD MMMM YYYY | hh:mm:ss A");
    setCurrentDate(date);

    try {
      const response = await fetch(
        "https://newparkingclub.000webhostapp.com/getData.php/?op=getAreaParkir&parking_area=Parkir Timur Seni Rupa"
      );
      const json = await response.json();
      const currentParkSlot = json.data.result[0].current_park_slot;
      const predictParkSlot = json.data.result[0].predict_park_slot;
      const maxParkSlot = json.data.result[0].max_park_slot;
      setCurrentParkSlot(currentParkSlot);
      setPredictParkSlot(predictParkSlot);
      setMaxParkSlot(maxParkSlot);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
    const interval = setInterval(() => {
      fetchData();
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleIsEntered = () => {
    navigation.navigate("User-In");
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.viewTopText}>
          <Text style={{ fontSize: 20 }}>Kamu</Text>
          <Text style={styles.textTopText}> BELUM </Text>
          <Text style={{ fontSize: 20 }}>masuk kawasan parkir</Text>
        </View>

        <View style={styles.viewContent}>
          <Text style={{ fontWeight: 900, fontSize: 20 }}>
            Informasi Parkir
          </Text>
          <Text style={styles.textCurrentDate}>
            {currentDate ? currentDate : "Loading..."}
          </Text>
          <Text style={{ paddingTop: 25, fontSize: 17 }}>
            Kuota parkir saat ini :
          </Text>
          <View style={styles.viewTextBox}>
            <Text style={styles.textBox}>
              {currentParkSlot && maxParkSlot
                ? `${currentParkSlot} / ${maxParkSlot}`
                : "Loading..."}
            </Text>
            {currentParkSlot == 0 ? (
              <Text style={styles.textWarning}>
                Kuota parkir penuh, silakan cari area parkir lainnya!
              </Text>
            ) : null}
          </View>

          <Text style={{ paddingTop: 20, fontSize: 17 }}>
            Prediksi kuota parkir 1 JAM mendatang :
          </Text>
          <View style={styles.viewTextBox}>
            <Text style={styles.textBox}>
              {predictParkSlot && maxParkSlot
                ? `${predictParkSlot} / ${maxParkSlot}`
                : "Loading..."}
            </Text>
          </View>
        </View>
      </ScrollView>
      <View style={styles.viewButton}>
        <Button title="enter" color="green" onPress={handleIsEntered} />
      </View>
    </SafeAreaView>
  );
};

export default DashboardPageOut;

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
  textTopText: { fontSize: 20, color: "red", fontWeight: 900 },
  viewContent: {
    flex: 1,
    flexDirection: "column",
    paddingLeft: 30,
    paddingTop: 40,
  },
  textCurrentDate: { fontWeight: 900, fontSize: 17, color: "red" },
  viewTextBox: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  textBox: {
    borderWidth: 2,
    borderColor: "red",
    borderRadius: 5,
    padding: 10,
    fontSize: 18,
    marginTop: 10,
    marginLeft: -50,
  },
  textWarning: {
    padding: 5,
    fontSize: 16,
    fontWeight: 600,
    marginTop: 5,
    marginLeft: -28,
    color: "red",
  },
  viewButton: {
    flexDirection: "column",
    paddingHorizontal: "15%",
    paddingTop: 50,
    paddingBottom: 20,
  },
});
