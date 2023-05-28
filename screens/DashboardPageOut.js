import React, { useState, useEffect, useCallback } from "react";
import {
  View,
  Text,
  Button,
  RefreshControl,
  SafeAreaView,
  ScrollView,
} from "react-native";
import moment from "moment";

const DashboardPageOut = ({ navigation }) => {
  const [currentDate, setCurrentDate] = useState("");
  const [currentParkSlot, setCurrentParkSlot] = useState("");
  const [predictParkSlot, setPredictParkSlot] = useState("");
  const [maxParkSlot, setMaxParkSlot] = useState("");
  const [refreshing, setRefreshing] = useState(false);

  const fetchData = async () => {
    // setRefreshing(true);
    var date = moment()
      .utcOffset("+07:00")
      .format("dddd, DD MMMM YYYY | hh:mm:ss A");

    setCurrentDate(date);

    try {
      const response = await fetch(
        "https://1parkingclub.000webhostapp.com/getData.php/?op=getAreaParkir&parking_area=Parkir Timur Seni Rupa"
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

    // setRefreshing(false);
  };

  useEffect(() => {
    setRefreshing(true);
    fetchData();
    setRefreshing(false);
  }, []);

  const handleIsEntered = () => {
    // If enter detected, navigate to dashboard page 2 screen
    navigation.navigate("User-In");
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
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={fetchData} />
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
          <Text style={{ fontSize: 20, color: "red", fontWeight: 900 }}>
            {" "}
            BELUM{" "}
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
            Informasi Parkir
          </Text>
          <Text style={{ fontWeight: 900, fontSize: 17, color: "red" }}>
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
                borderColor: "red",
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
                borderColor: "red",
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
        <Button title="enter" color="green" onPress={handleIsEntered} />
      </View>
    </SafeAreaView>
  );
};

export default DashboardPageOut;
