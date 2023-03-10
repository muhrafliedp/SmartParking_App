import React, { useState, useEffect } from "react";
import { View, Text, Button } from "react-native";
import moment from "moment";
// import { NavigationContainer } from "@react-navigation/native";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import DashboardPage2 from "./DashboardPage2";

// const Tab = createBottomTabNavigator();

const DashboardPageOut = ({ navigation }) => {
  const [currentDate, setCurrentDate] = useState("");

  const handleIsEntered = () => {
    // If enter detected, navigate to dashboard page 2 screen
    navigation.navigate("DashboardPageIn");
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
        <Text style={{ fontWeight: 900, fontSize: 20 }}>Informasi Parkir</Text>
        <Text style={{ fontWeight: 900, fontSize: 17, color: "red" }}>
          {currentDate}
        </Text>
        <Text style={{ paddingTop: 25, fontSize: 16 }}>
          Kuota parkir saat ini :
        </Text>
        <Text style={{ paddingTop: 45, fontSize: 16 }}>
          Prediksi kuota parkir 1 JAM mendatang :
        </Text>
      </View>

      <View
        style={{
          flex: 0.1,
          flexDirection: "column",
          paddingHorizontal: "15%",
          paddingTop: 50,
        }}
      >
        <Button title="enter" color="green" onPress={handleIsEntered} />
      </View>
    </View>

    // <NavigationContainer>
    //   <Tab.Navigator>
    //     <Tab.Screen name="outside park area" component={DashboardPage} />
    //     <Tab.Screen name="inside park area" component={DashboardPage2} />
    //   </Tab.Navigator>
    // </NavigationContainer>
  );
};

export default DashboardPageOut;
