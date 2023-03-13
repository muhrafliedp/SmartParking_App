import React, { useState, useEffect } from "react";
import { View, Text, Button } from "react-native";
import moment from "moment";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// const Tab = createBottomTabNavigator();

const DashboardPageIn = ({ navigation }) => {
  const [currentDate, setCurrentDate] = useState("");

  const handleIsExit = () => {
    // If leave detected, navigate to dashboard page screen
    navigation.goBack("DashboardPageOut");
  };

  useEffect(() => {
    var date = moment()
      .utcOffset("+07:00")
      .format("dddd, DD MMMM YYYY | hh:mm:ss A");

    setCurrentDate(date);
  }, []);

  return (
    <View
      style={{
        flex: 1,
        flexDirection: "column",
        paddingTop: 30,
      }}
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
          {currentDate}
        </Text>
        <Text style={{ paddingTop: 25, fontSize: 16 }}>
          Kuota parkir saat ini :
        </Text>
        <Text style={{ paddingTop: 45, fontSize: 16 }}>
          Prediksi kuota parkir 1 JAM mendatang :
        </Text>

        <Text style={{ fontWeight: 900, fontSize: 20, paddingTop: 100 }}>
          Informasi User Parkir
        </Text>
        <Text style={{ fontWeight: 900, fontSize: 17, color: "green" }}>
          {currentDate}
        </Text>
        <Text style={{ paddingTop: 25, fontSize: 16 }}>Plat Kendaraan :</Text>
        <Text style={{ paddingTop: 45, fontSize: 16 }}>Waktu Masuk :</Text>
        <Text style={{ paddingTop: 45, fontSize: 16 }}>Lokasi Parkir :</Text>
      </View>

      <View
        style={{
          flex: 0.1,
          flexDirection: "column",
          paddingHorizontal: "10%",
          alignItems: "center",
        }}
      >
        <Text style={{ textAlign: "center", fontSize: 17 }}>
          Informasi visual lokasi parkir terdapat pada dashboard parking
          aplikasi.
        </Text>
      </View>

      <View
        style={{
          flex: 0.1,
          flexDirection: "column",
          paddingHorizontal: "15%",
          paddingTop: 10,
        }}
      >
        <Button title="exit" color="red" onPress={handleIsExit} />
      </View>

      {/* <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="outside park area" component={DashboardPage} />
          <Tab.Screen name="inside park area" component={DashboardPage2} />
        </Tab.Navigator>
      </NavigationContainer> */}
    </View>
  );
};

export default DashboardPageIn;
